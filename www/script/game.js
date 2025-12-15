kaplay({
    width: 800,
    height: 600,
    background: [255, 255, 255],
});

setLayers([
    "bg",
    "game",
    "ui"
], "game");

loadSprite("MainText", "sprites/Text-NaturesPeak.png");
loadSprite("background", "sprites/Background-MainMenu.png");
loadSprite("playText", "sprites/Text-Play.png");
loadSprite("HTPText", "sprites/Text-HTP.png");
loadSprite("CreditsText", "sprites/Text-Credits.png");
loadSprite("MountainSnow", "sprites/Mountain-Snowcapped.png");
loadSprite("MountainPlain", "sprites/Mountain-Plain.png");
loadSprite("MountainFuji", "sprites/Mountain-Fiji.png");
loadSprite("Man1", "sprites/ManClimbing1.png");
loadSprite("Woman1", "sprites/WomanClimbing1.png");
loadSprite("ContinueText", "sprites/Text-Continue.png");
loadSprite("gamebackground", "sprites/Gamebackground.png");
loadSprite("greenhold", "sprites/GreenHold.png");
loadSprite("redhold", "sprites/RedHold.png");
loadSprite("yellowhold", "sprites/YellowHold.png");
loadSprite("stam_full", "sprites/Energy.png");
loadSprite("stam_empty", "sprites/zzz.png");
loadSprite("nationalpark", "sprites/NationalPark.png");
loadSprite("Volcano", "sprites/Mountain-Volcano.png");
loadSprite("cloud", "sprites/Cloud.png");
loadSprite("Signpost", "sprites/Signpost.png");
loadSprite("CompletedText", "sprites/Text-Completed.png");
loadSprite("flag", "sprites/Flag.png");
loadMusic("MenuMusic", "audio/MenuMusic.mp3");
loadMusic("Ambience", "audio/Ambience.mp3");
loadSound("NewArea", "audio/NewArea.mp3");


const EDUCATIONAL_SPRITES = [
    {
        sprite: "eagle",
        path: "sprites/Bird-Eagle.png",
        facts: [
            "Eagles can spot prey from over 2 miles away with their incredible eyesight!",
            "Bald eagles can fly at speeds up to 100 mph when diving!"
        ]
    },
    {
        sprite: "Badger",
        path: "sprites/Badger.png",
        facts: [
            "Badgers can dig tunnels up to 10 feet long!",
            "Badgers are excellent swimmers and can swim at speeds up to 10 mph!"
        ]
    },
    {
        sprite: "BlackBird",
        path: "sprites/BlackBird.png",
        facts: [
            "Blackbirds are very good singers and use songs to mark their territory.",
            "Blackbirds eat worms, insects, and berries."
        ]
    },
    {
        sprite: "Pine",
        path: "sprites/Tree-Pine.png",
        facts: [
            "Pine trees can live for hundreds of years, with some species living over 1,000 years!",
            "Pine trees produce cones that contain their seeds."
        ]
    },
        {
        sprite: "Bee",
        path: "sprites/Bee.png",
        facts: [
            "Blackbirds are very good singers and use songs to mark their territory.",
            "Blackbirds eat worms, insects, and berries."
        ]
    },
        {
        sprite: "Hedgehog",
        path: "sprites/Hedgehog.png",
        facts: [
            "Hedgehogs are excellent climbers and can climb trees!",
            "Hedgehogs are nocturnal and prefer to forage at night."
        ]
    },
        {
        sprite: "Owl",
        path: "sprites/Owl.png",
        facts: [
            "Owls are excellent nocturnal hunters with exceptional hearing.",
            "Owls can rotate their heads up to 270 degrees."
        ]
    },
        {
        sprite: "Parrot",
        path: "sprites/Parrot.png",
        facts: [
            "Parrots are excellent mimics and can learn to speak!",
            "Parrots are very social and often live in flocks."
        ]
    },
        {
        sprite: "Raccoon",
        path: "sprites/Racoon.png",
        facts: [
            "Raccoons have dexterous front paws that allow them to open containers and doors.",
            "Raccoons are nocturnal and have excellent night vision."
        ]
    },
        {
        sprite: "Rat",
        path: "sprites/Rat.png",
        facts: [
            "Rats are highly intelligent and can learn complex tasks.",
            "Rats are excellent swimmers and can hold their breath for up to three minutes."
        ]
    },
        {
        sprite: "Clover",
        path: "sprites/Clover.png",
        facts: [
            "Clover plants are known for their trifoliate leaves, which are said to bring good luck.",
            "Clover plants are often used in agriculture and can improve soil quality."
        ]
    },
        {
        sprite: "Hibiscus",
        path: "sprites/Hibiscus.png",
        facts: [
            "Hibiscus flowers are known for their large, showy blooms.",
            "Hibiscus plants are often used in landscaping and can thrive in various climates."
        ]
    },
        {
        sprite: "Hyacinth",
        path: "sprites/Hyacinth.png",
        facts: [
            "Hyacinth flowers are known for their fragrant, bell-shaped blooms.",
            "Hyacinth plants are often used in gardens and can bloom in various colors."
        ]
    },
        {
        sprite: "Nest",
        path: "sprites/Nest.png",
        facts: [
            "Nests are built by birds to provide a safe place for their eggs and young.",
            "Nests are often made from twigs, leaves, and other natural materials."
        ]
    },
        {
        sprite: "Sunflower",
        path: "sprites/Sunflower.png",
        facts: [
            "Sunflowers are known for their large, bright yellow blooms.",
            "Sunflowers are often used in gardens and can grow up to 12 feet tall."
        ]
    },
        {
        sprite: "Deciduous",
        path: "sprites/Tree-Deciduous.png",
        facts: [
            "Deciduous trees shed their leaves seasonally.",
            "Deciduous trees are often used in landscaping and can provide shade."
        ]
    },
        {
        sprite: "Leafless",
        path: "sprites/Tree-NoLeaves.png",
        facts: [
            "Leafless trees are often found in winter landscapes.",
            "Leafless trees can be used for firewood and construction."
        ]
    },
        {
        sprite: "Tulip",
        path: "sprites/Tulip.png",
        facts: [
            "Tulips are known for their cup-shaped blooms.",
            "Tulips are often used in gardens and can bloom in various colors."
        ]
    },
        {
        sprite: "BlackBird",
        path: "sprites/BlackBird.png",
        facts: [
            "Blackbirds are very good singers and use songs to mark their territory.",
            "Blackbirds eat worms, insects, and berries."
        ]
    },
];

EDUCATIONAL_SPRITES.forEach(item => {
    loadSprite(item.sprite, item.path);
});

let moves = 0;
let stamina = 12;
let startTime = Date.now();
let menuMusic = null;
let ambienceMusic = null;

let playerData = {
    character: null,
    height: 0,
    maxHeight: 100,
    currentMap: null,
    checkpoint: 0,
    hasUsedCheckpoint: false,
};

const MAP_SECTIONS = {
    nationalpark: [
        { height: 0, name: "Forest Entrance" },
        { height: 75, name: "Woodland Trail" },
        { height: 150, name: "Eagle's Lookout" },
    ],
    mountainplain: [
        { height: 0, name: "Sunny Meadows" },
        { height: 150, name: "Rocky Path" },
        { height: 300, name: "Windy Ridge" },
        { height: 450, name: "Hill Top" },
    ],
    mountaincloud: [
        { height: 0, name: "Misty Valley" },
        { height: 250, name: "Cloud Layer" },
        { height: 500, name: "Foggy Heights" },
        { height: 750, name: "Sky Garden" },
    ],
    mountainsnow: [
        { height: 0, name: "Pine Forest" },
        { height: 200, name: "Snowy Slopes" },
        { height: 400, name: "Ice Fields" },
        { height: 600, name: "Frozen Peak" },
    ],
    fuji: [
        { height: 0, name: "Base Camp" },
        { height: 300, name: "Cherry Blossom Path" },
        { height: 600, name: "Snow Line" },
        { height: 900, name: "Sacred Summit" },
        { height: 1100, name: "Heaven's Gateway" },
    ],
    volcano: [
        { height: 0, name: "Lava Fields" },
        { height: 250, name: "Ash Trail" },
        { height: 500, name: "Steaming Vents" },
        { height: 750, name: "Crater's Edge" },
        { height: 950, name: "Fire Summit" },
    ],
};

const MAP_SPRITES = {
    nationalpark: "nationalpark",
    mountainplain: "MountainPlain",
    mountaincloud: "MountainPlain",
    mountainsnow: "MountainSnow",
    fuji: "MountainFuji",
    volcano: "Volcano",
};

let currentSection = null;
let shownSections = [];


const HEIGHT_PER_HOLD = {
    greenhold: 4,
    yellowhold: 8,
    redhold: 12,
};

scene("menu", () => {

    if (!menuMusic || !menuMusic.paused) {
        menuMusic = play("MenuMusic", {
            volume: 0.05, 
            loop: true,
        });
    }
    
    add([
        sprite("background"),
        pos(400, 300),
        anchor("center"),
        scale(0.4),
        layer("bg"),
    ]);
    
    add([
        sprite("MountainSnow"),
        pos(200, 11),
        scale(0.9),
        layer("bg"),
    ]);

    add([
        sprite("MountainPlain"),
        pos(450, 11),
        scale(0.9),
        layer("bg"),
    ]);

    add([
        sprite("MountainFuji"),
        pos(400, 64),
        anchor("center"),
        scale(0.9),
        layer("bg"),
    ]);

    add([
        rect(400, 80, { radius: 30 }),
        pos(400, 155),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    
    add([
        sprite("MainText"),
        pos(400, 150),
        anchor("center"),
        scale(0.19),
    ]);

    const playButton = add([
        rect(200, 60, { radius: 30 }),
        pos(400, 250),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    add([
        sprite("playText"),
        pos(400, 250),
        anchor("center"),
        scale(0.08),
    ]);

    playButton.onClick(() => {
        go("Character Select");
    });

    const htpButton = add([
        rect(200, 60, { radius: 30 }),
        pos(400, 350),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    add([
        sprite("HTPText"),
        pos(400, 350),
        anchor("center"),
        scale(0.08),
    ]);

    htpButton.onClick(() => {
        go("howtoplay");
    });

    const creditsButton = add([
        rect(200, 60, { radius: 30 }),
        pos(400, 450),
        anchor("center"),
        color(255, 255, 255),
        area(),
    ]);
    add([
        sprite("CreditsText"),
        pos(400, 450),
        anchor("center"),
        scale(0.08),
    ]);

    creditsButton.onClick(() => {
        go("Credits");
    });
});

scene("map select", () => {
    
    if (!menuMusic || menuMusic.paused) {
        menuMusic = play("MenuMusic", {
            volume: 0.5, 
            loop: true,
        });
    }
    
    add([
        text("Map Select"),
        pos(100, 100),
        anchor("center"),
    ]);

    add([
        text("Beginner"),
        pos(150, 150),
        anchor("center"),
        color(10, 255, 10),
    ]);

    add([
        text("Intermediate"),
        pos(150, 300),
        anchor("center"),
        color(255, 255, 10),
    ]); 

    add([
        text("Advanced"),
        pos(150, 450),
        anchor("center"),
        color(255, 10, 10),

    ]);


    const nationalPark = add([
        sprite("nationalpark"),
        pos(400, 150),
        anchor("center"),
        scale(0.5),
        area(),
    ]);

    const MountainPlain = add([
        sprite("MountainPlain"),
        pos(600, 150),
        anchor("center"),
        scale(0.5),
        area(),
    ]);

    const MountainCloud = add([
        sprite("MountainPlain"),
        pos(400, 300),
        anchor("center"),
        scale(0.5),
        area(),
    ]);

    add([
        sprite("cloud"),
        pos(387, 295),
        anchor("center"),
        scale(0.2),
    ]);

    add([
        sprite("cloud"),
        pos(410, 290),
        anchor("center"),
        scale(0.2),
    ]);

    const MountainSnow = add([
        sprite("MountainSnow"),
        pos(600, 300),
        anchor("center"),
        scale(0.5),
        area(),
    ]);

    const Fuji = add([
        sprite("MountainFuji"),
        pos(400, 450),
        anchor("center"),
        scale(0.5),
        area(),
    ]);

    const Volcano = add([
        sprite("Volcano"),
        pos(600, 450),
        anchor("center"),
        scale(0.5),
        area(),
    ]);


    nationalPark.onClick(() => {
        playerData.maxHeight = 200;
        playerData.currentMap = "nationalpark";
        if (menuMusic) {
            menuMusic.paused = true;
        }
        go("game");
    });

    MountainPlain.onClick(() => {
        playerData.maxHeight = 550;
        playerData.currentMap = "mountainplain";
        if (menuMusic) {
            menuMusic.paused = true;
        }
        go("game");
    });

    MountainSnow.onClick(() => {
        playerData.maxHeight = 700;
        playerData.currentMap = "mountainsnow";
        if (menuMusic) {
            menuMusic.paused = true;
        }
        go("game");
    });

    MountainCloud.onClick(() => {
        playerData.maxHeight = 900;
        playerData.currentMap = "mountaincloud";
        if (menuMusic) {
            menuMusic.paused = true;
        }
        go("game");
    });

    Fuji.onClick(() => {
        playerData.maxHeight = 1200;
        playerData.currentMap = "fuji";
        if (menuMusic) {
            menuMusic.paused = true;
        }
        go("game");
    });

    Volcano.onClick(() => {
        playerData.maxHeight = 1000;
        playerData.currentMap = "volcano";
        if (menuMusic) {
            menuMusic.paused = true;
        }
        go("game");
    });

    onKeyPress("escape", () => {
        go("menu");
    });
});

scene("Character Select", () => {
    
    if (!menuMusic || menuMusic.paused) {
        menuMusic = play("MenuMusic", {
            volume: 0.5, 
            loop: true,
        });
    }
    
    const WomanPlayer = add([
        sprite("Woman1"),
        pos(500, 150),
        scale(0.8),
        area(),
    ]);

    const ManPlayer = add([
        sprite("Man1"),
        pos(200, 150),
        scale(0.8),
        area(),
    ]);

    ManPlayer.onClick(() => {
        playerData.character = "Man1";
        stamina = 12;
        playerData.height = 0;
        spawnedHolds.length = 0;
        go("map select");
    });

    WomanPlayer.onClick(() => {
        playerData.character = "Woman1";
        stamina = 12;
        playerData.height = 0;
        spawnedHolds.length = 0;
        go("map select");
    });

    onKeyPress("escape", () => {
        go("menu");
    });
});

const screenWidth = 800;
const screenHeight = 600;

const easyZone = { xMin: 0, xMax: screenWidth, yMin: 400, yMax: 600 };
const mediumZone = { xMin: 0, xMax: screenWidth, yMin: 200, yMax: 400 };
const hardZone = { xMin: 0, xMax: screenWidth, yMin: 0, yMax: 200 };

function randomPosIn(zone) {
    return vec2(rand(zone.xMin, zone.xMax), rand(zone.yMin, zone.yMax));
}

const spawnedHolds = [];

function overlaps(posA, posB, radius = 40) {
    return posA.dist(posB) < radius * 2;
}

function randomNonOverlappingPos(zone, maxAttempts = 20) {
    for (let i = 0; i < maxAttempts; i++) {
        const p = randomPosIn(zone);
        let badSpot = false;

        for (const hold of spawnedHolds) {
            if (overlaps(p, hold.pos)) {
                badSpot = true;
                break;
            }
        }
        if (!badSpot) return p;
    }
    return randomPosIn(zone);
}

const MAX_STAMINA = 12;
let staminaSlots = [];

function createStaminaUI() {
    staminaSlots = [];

    for (let i = 0; i < MAX_STAMINA; i++) {
        const slot = add([
            sprite("stam_full"),
            pos(width() - 20 - i * 24, height() - 20),
            scale(0.1),
            anchor("botright"),
            fixed(),
            layer("ui"),
        ]);
        staminaSlots.push(slot);
    }
    updateStaminaUI(stamina);
}

function updateStaminaUI(staminaValue) {
    for (let i = 0; i < MAX_STAMINA; i++) {
        if (staminaSlots[i]) {
            staminaSlots[i].sprite =
                i < staminaValue ? "stam_full" : "stam_empty";
        }
    }
}


let heightBar;
let heightMarker;
let heightPlayerSprite;
let heightText;
let signposts = [];

function createHeightBar() {
    const barHeight = height() - 100;

    heightBar = add([
        rect(6, barHeight),
        pos(30, 50),
        color(255, 255, 255),
        opacity(0.5),
        fixed(),
        layer("ui"),
    ]);

    heightMarker = add([
        rect(30, 3),
        pos(30, height() - 50),
        color(255, 255, 255),
        fixed(),
        layer("ui"),
    ]);

    heightPlayerSprite = add([
        sprite(playerData.character),
        pos(65, height() - 50),
        scale(0.2),
        anchor("left"),
        fixed(),
        layer("ui"),
    ]);

    heightText = add([
        text(`${playerData.maxHeight - playerData.height} metres left`),
        pos(20, height() - 20),
        scale(0.5),
        fixed(),
        layer("ui"),
    ]);

    createSignposts();
    updateHeightUI();
}

function createSignposts() {
    if (!playerData.currentMap || !MAP_SECTIONS[playerData.currentMap]) return;
    
    signposts = [];
    const sections = MAP_SECTIONS[playerData.currentMap];
    const top = 50;
    const bottom = height() - 50;
    
    sections.forEach(section => {
        const progress = section.height / playerData.maxHeight;
        const y = lerp(bottom, top, progress);
        
        const signpost = add([
            sprite("Signpost"),
            pos(20, y),
            scale(0.4),
            anchor("center"),
            fixed(),
            layer("ui"),
        ]);
        
        signposts.push(signpost);
    });
}

function updateHeightUI() {
    const top = 50;
    const bottom = height() - 50;
    const progress = playerData.height / playerData.maxHeight;
    const y = lerp(bottom, top, progress);

    heightMarker.pos.y = y;
    heightPlayerSprite.pos.y = y;
    heightText.text = `${Math.max(0, Math.round(playerData.maxHeight - playerData.height))} metres left`;
    
    checkAndShowSection();
}

function checkAndShowSection() {
    if (!playerData.currentMap || !MAP_SECTIONS[playerData.currentMap]) return;
    
    const sections = MAP_SECTIONS[playerData.currentMap];
    
    for (const section of sections) {
        if (playerData.height >= section.height && !shownSections.includes(section.name)) {
            shownSections.push(section.name);
            playerData.checkpoint = section.height;
            showSectionName(section.name);
            break;
        }
    }
}

function showSectionName(name) {
    play("NewArea", { volume: 0.3 });
    
    const sectionText = add([
        text(name, { size: 36 }),
        pos(400, 300),
        anchor("center"),
        color(255, 255, 255),
        opacity(0),
        layer("ui"),
        fixed(),
    ]);
    
    tween(sectionText.opacity, 1, 1.5, (val) => sectionText.opacity = val, easings.easeInOutQuad);
    tween(sectionText.pos.y, 250, 1.5, (val) => sectionText.pos.y = val, easings.easeOutQuad);
    
    wait(3, () => {
        tween(sectionText.opacity, 0, 1, (val) => sectionText.opacity = val, easings.easeInOutQuad);
        wait(1, () => destroy(sectionText));
    });
}

function spawnHoldsInZone(zone, spriteName) {
    const amount = randi(1, 3);

    for (let i = 0; i < amount; i++) {
        const p = randomNonOverlappingPos(zone);

        const hold = add([
            sprite(spriteName),
            pos(p),
            scale(0.25),
            rotate(45),
            anchor("center"),
            area(),
            layer("game"),
            "hold",
        ]);

        spawnedHolds.push(hold);
        
        hold.onClick(() => {
            console.log("Individual hold clicked!");
            handleHoldClick(hold);
        });
    }
}

function spawnEducationalSprite() {
    if (EDUCATIONAL_SPRITES.length === 0) return;
    
    const randomItem = choose(EDUCATIONAL_SPRITES);
    const randomFact = choose(randomItem.facts);
    
    const zone = { xMin: 100, xMax: 700, yMin: 100, yMax: 500 };
    const p = randomNonOverlappingPos(zone);
    
    const eduSprite = add([
        sprite(randomItem.sprite),
        pos(p),
        scale(0.3),
        anchor("center"),
        area(),
        layer("game"),
        "educational",
    ]);
    
    spawnedHolds.push(eduSprite);
    
    eduSprite.onClick(() => {
        if (isAnimating) return;
        
        stamina = Math.min(stamina + 4, MAX_STAMINA);
        updateStaminaUI(stamina);
        
        const staminaText = add([
            text("+4 Stamina", { size: 24 }),
            pos(eduSprite.pos),
            anchor("center"),
            color(0, 255, 0),
            layer("ui"),
            opacity(1),
        ]);
        
        const factBox = add([
            rect(600, 100, { radius: 10 }),
            pos(400, 500),
            anchor("center"),
            color(255, 255, 255),
            layer("ui"),
            opacity(0.95),
        ]);
        
        const factText = add([
            text(randomFact, { size: 18, width: 580 }),
            pos(400, 500),
            anchor("center"),
            color(0, 0, 0),
            layer("ui"),
        ]);
        
        wait(0.5, () => {
            tween(staminaText.opacity, 0, 1, (val) => staminaText.opacity = val, easings.linear);
            tween(staminaText.pos.y, staminaText.pos.y - 50, 1, (val) => staminaText.pos.y = val, easings.easeOutQuad);
        });
        
        wait(3, () => {
            destroy(staminaText);
            destroy(factBox);
            destroy(factText);
            destroy(eduSprite);
        });
    });
}

let isAnimating = false;
let backgrounds = [];
let currentBgIndex = 0;
let animationState = null;

function handleHoldClick(hold) {
    console.log("handleHoldClick called! isAnimating:", isAnimating);
    if (isAnimating) return;

    isAnimating = true;
    moves++;
    console.log("Starting animation, moves:", moves);

    const spriteName = hold.sprite;
    const diff =
        spriteName === "greenhold" ? 1 :
        spriteName === "yellowhold" ? 2 : 3;

    stamina -= diff;
    updateStaminaUI(stamina);

    const heightGain = HEIGHT_PER_HOLD[spriteName];

    if (stamina <= 0) {
        if (playerData.hasUsedCheckpoint) {
            go("lose");
        } else {
            playerData.hasUsedCheckpoint = true;
            playerData.height = playerData.checkpoint;
            stamina = 12;
            updateStaminaUI(stamina);
            updateHeightUI();
            isAnimating = false;
            
            spawnedHolds.length = 0;
            get("hold").forEach(h => destroy(h));
            get("educational").forEach(e => destroy(e));
            
            spawnHoldsInZone(easyZone, "greenhold");
            spawnHoldsInZone(mediumZone, "yellowhold");
            spawnHoldsInZone(hardZone, "redhold");
            
            if (Math.random() < 0.5) {
                spawnEducationalSprite();
            }
            
            const checkpointText = add([
                text("You ran out of Stamina! Returned to Checkpoint!", { size: 25 }),
                pos(400, 300),
                anchor("center"),
                color(255, 200, 0),
                opacity(1),
                layer("ui"),
                fixed(),
            ]);
            
            wait(2, () => {
                tween(checkpointText.opacity, 0, 1, (val) => checkpointText.opacity = val, easings.easeInOutQuad);
                wait(1, () => destroy(checkpointText));
            });
        }
        return;
    }

    get("hold").forEach(h => {
        if (h !== hold) {
            destroy(h);
        }
    });
    
    get("educational").forEach(e => {
        destroy(e);
    });

    animationState = {
        startTime: time(),
        duration: 1.5,
        scrollDistance: 600,
        bg1StartY: backgrounds[0].pos.y,
        bg2StartY: backgrounds[1].pos.y,
        holdStartY: hold.pos.y,
        hold: hold,
        startHeight: playerData.height,
        endHeight: playerData.height + heightGain
    };
    console.log("Animation state set:", animationState);
}

scene("game", () => {
    spawnedHolds.length = 0;
    shownSections = [];
    isAnimating = false;
    backgrounds = [];
    animationState = null;
    playerData.hasUsedCheckpoint = false;

    if (!ambienceMusic || ambienceMusic.paused) {
        ambienceMusic = play("Ambience", {
            volume: 0.05,
            loop: true,
        });
    }

    const bg1 = add([
        sprite("gamebackground"),
        pos(400, 300),
        anchor("center"),
        scale(0.8),
        layer("bg"),
        "background",
    ]);
    backgrounds.push(bg1);

    const bg2 = add([
        sprite("gamebackground"),
        pos(400, -300),
        anchor("center"),
        scale(0.8),
        layer("bg"),
        "background",
    ]);
    backgrounds.push(bg2);

    createStaminaUI();
    createHeightBar();

    spawnHoldsInZone(easyZone, "greenhold");
    spawnHoldsInZone(mediumZone, "yellowhold");
    spawnHoldsInZone(hardZone, "redhold");
    
    if (Math.random() < 0.5) {
        spawnEducationalSprite();
    }

    onUpdate(() => {
        if (!animationState) return;

        const elapsed = time() - animationState.startTime;
        const progress = Math.min(elapsed / animationState.duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        console.log("Animating... progress:", progress, "bg1Y:", backgrounds[0].pos.y);

        backgrounds[0].pos.y = animationState.bg1StartY + animationState.scrollDistance * eased;
        backgrounds[1].pos.y = animationState.bg2StartY + animationState.scrollDistance * eased;
        
        if (animationState.hold.exists()) {
            animationState.hold.pos.y = animationState.holdStartY + animationState.scrollDistance * eased;
        }

        playerData.height = lerp(animationState.startHeight, animationState.endHeight, eased);
        updateHeightUI();

        if (progress >= 1) {
            console.log("Animation complete! Resetting...");
            if (animationState.hold.exists()) {
                destroy(animationState.hold);
            }

            backgrounds[0].pos.y = 300;
            backgrounds[1].pos.y = -300;

            spawnedHolds.length = 0;

            spawnHoldsInZone(easyZone, "greenhold");
            spawnHoldsInZone(mediumZone, "yellowhold");
            spawnHoldsInZone(hardZone, "redhold");
            
            if (Math.random() < 0.5) {
                spawnEducationalSprite();
            }

            animationState = null;
            isAnimating = false;
            console.log("Ready for next animation");
            
            if (playerData.height >= playerData.maxHeight) {
                go("completed");
            }
        }
    });
});

scene("completed", () => {
    const skyBlue = rgb(135, 206, 235);
    
    add([
        rect(width(), height()),
        pos(0, 0),
        color(skyBlue),
        z(-100),
    ]);
    
    const mountainSprite = MAP_SPRITES[playerData.currentMap] || "MountainPlain";
    
    const mountain = add([
        sprite(mountainSprite),
        pos(400, 700),
        anchor("center"),
        scale(1.7),
        z(0),
    ]);
    
    tween(mountain.pos.y, 350, 2, (val) => mountain.pos.y = val, easings.easeOutQuad);
    
    wait(2, () => {
        const flag = add([
            sprite("flag"),
            pos(400, 200),
            anchor("center"),
            scale(0.3),
            opacity(0),
        ]);
        
        tween(flag.opacity, 1, 1, (val) => flag.opacity = val, easings.easeInOutQuad);
        
        const completedText = add([
            text("Level Complete!", { size: 48 }),
            pos(400, 100),
            anchor("center"),
            color(255, 255, 255),
            opacity(0),
        ]);
        
        tween(completedText.opacity, 1, 1, (val) => completedText.opacity = val, easings.easeInOutQuad);
        
        wait(1.5, () => {
            const continueButton = add([
                rect(250, 70, { radius: 35 }),
                pos(400, 500),
                anchor("center"),
                color(255, 255, 255),
                area(),
                opacity(0),
            ]);
            
            const buttonText = add([
                text("Back to Map Select", { size: 24 }),
                pos(400, 500),
                anchor("center"),
                color(0, 0, 0),
                opacity(0),
            ]);
            
            tween(continueButton.opacity, 1, 0.5, (val) => continueButton.opacity = val, easings.easeInOutQuad);
            tween(buttonText.opacity, 1, 0.5, (val) => buttonText.opacity = val, easings.easeInOutQuad);
            
            continueButton.onClick(() => {
                go("map select");
            });
        });
    });
});

scene("lose", () => {
    add([
        text("You ran out of stamina and had to go back to the base of the mountain.", { size: 19 }),
        pos(400, 200),
        anchor("center"),
        color(0, 0, 0),
    ]);

    const buttonText = add([
        text("Back to Map Select", { size: 24 }),
        pos(400, 500),
        anchor("center"),
        color(250, 250, 250),
    ]);

    const continueButton = add([
        rect(250, 70, { radius: 35 }),
        pos(400, 500),
        anchor("center"),
        color(50, 50, 50),
        area(),
    ]);

    continueButton.onClick(() => {
        go("map select");
    });
});

scene("howtoplay", () => {
            

    add([
        text("How to Play", { size: 40 }),
        pos(400, 150),
        color(0, 0, 0),
        anchor("center"),
        layer("ui"),
        opacity(1),
    ]);


    add([
        text("Click Holds to climb, Green holds drain 1 stamina, Yellow drains 2, and red drains 3", { size: 15 }),
        color(0, 0, 0),
        pos(400, 250),
        anchor("center"),
    ]);

    add([
        text("Be careful not to run out of stamina!", { size: 15 }),
        color(0, 0, 0), 
        pos(400, 300),
        anchor("center"),
    ]);

    add([
        text("Click on animals and plants you find along the way to learn more about them, and to gain stamina back.", { size: 13 }),
        color(0, 0, 0),
        pos(400, 350),
        anchor("center"),
    ]);

    add([
        text("Manage your stamina, and learn about nature on the way to the peak of the mountain!", { size: 15 }),
        color(0, 0, 0),
        pos(400, 400),
        anchor("center"),
    ]);

    add([
        text("Get Climbing!" , { size: 30 }),
        color(0, 0, 0),
        pos(400, 500),
        anchor("center"),
    ]);

    add([
        text("Press ESC to go back to the menu", { size: 15 }),
        color(0, 0, 0),
        pos(400, 540),
        anchor("center"),
    ]);
    
    onKeyPress("escape", () => go("menu"));
});

scene("Credits", () => {
            

    add([
        text("Credits", { size: 40 }),
        pos(400, 150),
        color(0, 0, 0),
        anchor("center"),
        layer("ui"),
        opacity(1),
    ]);


    add([
        text("Game developed by Toby Thomson", { size: 25 }),
        color(0, 0, 0),
        pos(400, 250),
        anchor("center"),
    ]);

    add([
        text("Sprites are comprised of emojis found at Hexmos.com", { size: 25 }),
        color(0, 0, 0), 
        pos(400, 300),
        anchor("center"),
    ]);

    add([
        text("Sound effects from Pixabay.com", { size: 25 }),
        color(0, 0, 0),
        pos(400, 350),
        anchor("center"),
    ]);

    add([
        text("Backgrounds generated with ChatGPT-4", { size: 25 }),
        color(0, 0, 0),
        pos(400, 400),
        anchor("center"),
    ]);

    add([
        text("Thank you for playing!" , { size: 30 }),
        color(0, 0, 0),
        pos(400, 500),
        anchor("center"),
    ]);

    onKeyPress("escape", () => go("menu"));
});

go("menu");