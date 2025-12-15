from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
from functools import partial
import threading
import time
import webbrowser
from pathlib import Path
import python.backup as backup
import os
import re
import hashlib
import atexit

PORT = 8000
DIRECTORY = "www"

# Extend the base request handler class so that we can tell the browser
# not to cache any content
# This ensure that the game should always run the most up-to-date game
class HTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

# Starts the webserver at the static root
def start_server(static_root):
    handler = partial(HTTPRequestHandler, directory=static_root)
    with TCPServer(("", PORT), handler) as httpd:
        print(f"Serving directory {static_root} at http://localhost:{PORT}")
        httpd.serve_forever()

# Hashes a file using SHA256
def hash_file(path):
    hash = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash.update(chunk)
    return hash.hexdigest()

# Defines the scheduled backup task:
# 1. Creates a backup of the source code;
# 2. Hashes the backup + the previous backup;
# 3. If they're equal, deletes the most recent
# 4. If there are more than 20 backups total, deletes the oldest backups.
def do_backup(code_root):
    MAX_BACKUPS = 20
    
    def on_add(arch, f):
        print(f"Backing up {f} to {Path(arch).name}")
    
    backup.main(
        root=code_root,
        out=str(code_root / "backups/{iso_t}.zip"),
        on_add=on_add
    )
    
    regex = re.compile(r"^\d\d\d\d-\d\d-\d\d-\d\d-\d\d-\d\d.zip$")
    files = [ f for f in os.listdir(code_root/"backups") if regex.match(f)]
    files.sort()
    
    if len(files) > 2:
        last_bk_hash = hash_file(code_root / "backups" / files[-2])
        curr_bk_hash = hash_file(code_root / "backups" / files[-1])
        
        if last_bk_hash == curr_bk_hash:
            print("No changes detected, deleting last backup")
            os.remove(code_root / "backups" / files[-1])
            del files[-1]
    
    if len(files) > MAX_BACKUPS:
        
        for to_delete in files[:-MAX_BACKUPS]:
            os.remove(code_root / "backups" / to_delete)

# Runs the backup task periodically
def backup_server(code_root):
    MINS = 60
    HOURS = 60 * MINS
    TIMEOUT = 1 * HOURS # How long between backups (approx.)?
    POLL_TIMEOUT = 20    # How long should the thread wait before waking to check timeout?
    
    print("Backup server running...")
    
    next_backup = time.monotonic()
    
    while(True):
        now = time.monotonic()
        if now >= next_backup:
            next_backup = now + TIMEOUT
            do_backup(code_root)
        else:
            time.sleep(POLL_TIMEOUT)

def main():
    # Find the location of the static content and code
    static_root = (Path(__file__).parent / DIRECTORY).resolve()
    code_root = static_root.parent
    
    atexit.register(lambda: do_backup(code_root))
    
    # We have two tasks to run;
    # * The webserver that runs the game
    # * The periodic backup task
    server = threading.Thread(target=lambda: start_server(static_root), daemon=False)
    backups = threading.Thread(target=lambda: backup_server(code_root), daemon=True)
    
    # Start servers in separate threads
    backups.start()
    server.start()
    

    # Wait a moment and open the browser
    time.sleep(1)  # Adjust if needed
    webbrowser.open(f"http://localhost:{PORT}")

if __name__ =="__main__":
    main()