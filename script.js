let bulletSpeedMultiplier = 1.0;
let magicMulti = 1.0
let resilienceMulti = 1.0
let ignoreNextPress = { Q: false, E: false };
let fireCooldown = 0;
let projectiles = [];
let p = [];
let e = [];
let minion = [];
let timeStopped = false;
let timeStopTimer = 0;
let timeStopTextFragments = [];
let timeStopTextAnimation = 0;
let timeStopEffectFrame = 0;
let timeStopEffectParticles = 0;
let summonTimer = 0
let berserkerActive = false;
let berserkerTimer = 0;
let bindingInfo = "";
let pulses = [];
let minions = [];
const activeLightningLines = [];
let tooltip = [];
let activeBlackHoles = [];
let activeMeteors = [];
let minigunHoldTimer = 0;
let minigunCurrentFireRate = 20;
let voidActive = false;
let voidTimer = 0;
let voidCooldown = 0;
let secondWind = false;
let terrashockEruptions = [];
let swordAttackTimer = 0;
let swordCharge = 0;
let swordCharging = false;
let swordChargeMax = 60;
let swordSwinging = false;
let swordSwingTimer = 0;
let swordSwingAngle = 0;
let swordSwingCharge = 0;
let spearAttackTimer = 0;
let spearCharge = 0;
let spearCharging = false;
let spearChargeMax = 60;
let spearStabbing = false;
let spearStabTimer = 0;
let spearStabAngle = 0;
let spearStabCharge = 0;
let katanaAttackTimer = 0;
let katanaCharging = false;
let katanaCharge = 0;
let katanaChargeMax = 70;
let katanaDashing = false;
let katanaDashTimer = 0;
let katanaDashDir = {x: 0, y: 0};
let katanaSwinging = false;
let katanaSwingTimer = 0;
let katanaSwingAngle = 0;
let katanaSwingCharge = 0;
let katanaDashTimerStart = 0;
let bulkUpgradeAmount = 1;
let originalControlMap = { w: 'w', a: 'a', s: 's', d: 'd' };
let currentControlMap = { w: 'w', a: 'a', s: 's', d: 'd' };
let bitflipActive = false;
let bitflipFlashTimer = 0;
let garbageFlashTimer = 0;
let timeLockFlashTimer = 0;
let timeLockFlashText = "";
let playerSlowTimer = 0;
let playerStunTimer = 0;
let epochTimeStop = false;
let epochTimeStopTimer = 60;
let moduloFlashTimer = 0;
let moduloFlashNum = 0;
let enemyCounter = 1;
let gold = 0;
let weaponLevels = {};
let selectedPauseWeapon = null;
let weaponDamageMultipliers = {};
let escMenuVisible = false;
let fromEsc = false;

let player = {
  x: 300,
  y: 300,
  w: 40,
  h: 40,
  color: 'cyan',
  speed: 40,
  damage: 5,
  isDashing: false,
  dashCooldown: 0,
  dashTime: 0,
  dashDir: { x: 0, y: 0 },
  dashTrail: [],
  angle: 0,
  shieldRegenTimer: 0,
  maxShield: 0,
  shield: 0
};
const skins = [
  {
    name: "Default",
    type: "default",
    fill: "cyan",
    locked: false,
    price: 0
  },
  {
    name: "Ruby",
    type: "normal",
    fill: "#e22",
    shadow: "#f33",
    locked: true,
    price: 500
  },
  {
    name: "Lime",
    type: "normal",
    fill: "#7aff00",
    shadow: "#bfff00",
    locked: true,
    price: 500
  },
  {
    name: "Gold",
    type: "normal",
    fill: "#ffd700",
    shadow: "#ffa700",
    locked: true,
    price: 750
  },
  {
    name: "Midnight",
    type: "normal",
    fill: "#222255",
    shadow: "#00ffff",
    locked: true,
    price: 750
  },
  {
    name: "Bubblegum",
    type: "normal",
    fill: "#ff8ad1",
    shadow: "#ff4dbe",
    locked: true,
    price: 1000
  },
  {
    name: "Specter",
    type: "special",
    locked: true,
    price: 2000
  }
];

    let currentSkin = "Default"; 
    let instinctActive = false;
    let overchargeActive = false;
    let bullets = [];
    let enemies = [];
    let enemyBullets = [];
    let baseHP = 100;
    let baseDamage = 5
    let hp = 100, maxHP = 100, score = 0, level = 1, wave = 0, upgradePoints = 0, skillPoints = 0;
    let nextLevelScore = 500;
    let nextUpgradeScore = 100;
    let upgradePointsObtained = 0;
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let keys = {};
    let mouseX = 0, mouseY = 0;
    let popupX = 0, popupY = 0;
    let waveTimer = 0;
    let particles = [];
    let mouseDown = false;
    let fireRateMultiplier = 1.0;
    let luck = 1.0;
    let pause = true;
    let unlockedSkills = [];
    let hoveredSkill = null;
    let hoveredSkillType = null;
    let hoveredSkillCost = null;
    let hoveredSkillDesc = null;
    let laserBeam = {
      active: false,
      duration: 10, 
      timer: 0
    };
    const boundSkills = {
      Q: null,
      E: null
    };
    const skillCooldowns = {
        "Fireball": 0,
        "Pulse": 0,
        "Blink": 0,
        "Chain Lightning": 0,
        "Ice Shards": 0,
        "Summon Minion": 0,
        "Tanklet Minion": 0,
        "Boss Minion": 0,
        "Time Stop": 0,
        "Black Hole": 0,
        "Meteor": 0
    };

    let droppedItems = [];
    let statUpgrades = {
      speed: 0,
      damage: 0,
      maxHP: 0,
      reload: 0,
      luck: 0,
      intellect: 0  
};
let skillBonuses = {
  damage: 0,
  fireRate: 0,
  maxHP: 0,
  intellect: 0  
};
      
      const upgradeCaps = {
     speed: 10,
     damage: 300,
     maxHP: 50,
     reload: 30,
     luck: 50,
     intellect: 300     
};

        
const dropChances = {
  shotgun: 0.01,
  burst: 0.01,      
  auto: 0.01,        
  laser: 0.0005,     
  missile: 0.0025,   
  boomerang: 0.0005,
  plasma: 0.00125,  
  minigun: 0.0025,
  sword: 0.00375,  
  spear: 0.00375,  
  katana: 0.001,  
  potion: 0.025,
  up: 0.01,
  score: 0.01
};

const dropColors = {
  pistol: "#88e0ff",
  shotgun: "#ffbd74",
  burst: "#b0ff88",
  auto: "#ffe288",
  laser: "#f68cff",
  missile: "#ff8888",
  boomerang: "#b4aaff",
  plasma: "#9cfff4",
  minigun: "#ff8c1a",
  sword: "#b8ffd1",
  spear: "#f3dcb8",
  potion: "#70ff70",
  up: "#ffe066",
  score: "#5ad1ff",
  katana: "#f8e16c",  
  default: "#cccccc"
};

const enemyTypes = {
  default: {
    unlockWave: 1,
    spawnRate: wave => 5 + wave / 3,
    create: () => ({ 
        maxhp: Math.round(3 + (wave * wave) / (0.22 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(3 + (wave * wave) / (0.22 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 1, 
        type: 'default', 
        moving: true })
  },
  zoomie: {
    unlockWave: 5,
    spawnRate: wave => wave >= 5 ? Math.floor(wave / 2) : 0,
    create: () => ({ 
        maxhp: Math.round(2 + (wave * wave) / (0.28 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(2 + (wave * wave) / (0.28 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 2.2, 
        type: 'zoomie', 
        moving: true })
  },
  slime: {
    unlockWave: 21,
    spawnRate: wave => wave >= 21 ? Math.floor(wave / 4) : 0,
    create: () => ({ 
        maxhp: Math.round(3 + (wave * wave) / (0.20 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(3 + (wave * wave) / (0.20 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 1, 
        type: 'slime', 
        moving: true, 
        splits: true })
  },
  slimeling: {
    unlockWave: 0,
    spawnRate: () => 0,
    create: () => ({ 
        maxhp: Math.round(0.5 + (wave * wave) / (0.50 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(0.5 + (wave * wave) / (0.50 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 1.35, 
        type: 'slimeling', 
        moving: true })
  },
  leaper: {
  unlockWave: 17,
  spawnRate: wave => wave >= 17 ? Math.floor(wave / 5) : 0,
  create: () => ({ 
      maxhp: Math.round(3 + (wave * wave) / (0.19 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
      hp: Math.round(3 + (wave * wave) / (0.19 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
      speed: 1, 
      type: 'leaper', 
      moving: true, 
    leapCooldown: 120,
    leaping: false,
    leapTimer: 0,
    leapScale: 1
  })
},  
  tanklet: {
    unlockWave: 9,
    spawnRate: wave => wave >= 9 ? Math.floor(wave / 4) : 0,
    create: () => ({ 
        maxhp: Math.round(10 + (wave * 1.8) + (wave * wave) / (0.07 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(10 + (wave * 1.8) + (wave * wave) / (0.07 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 0.5, w: 50, h: 50, 
        type: 'tanklet', 
        moving: true })
  },
  spitter: {
    unlockWave: 12,
    spawnRate: wave => wave >= 12 ? Math.floor(wave / 4) : 0,
    create: () => ({ 
        maxhp: Math.round(3 + (wave * wave) / (0.24 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(3 + (wave * wave) / (0.24 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 1, 
        fireCooldown: Math.min(1, 60 - wave / 2), 
        type: 'spitter', 
        moving: false })
  },
  boomling: {
    unlockWave: 14,
    spawnRate: wave => wave >= 14 ? Math.floor(wave / 5) : 0,
    create: () => ({ 
        maxhp: Math.round(1 + (wave * wave) / (0.29 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        hp: Math.round(1 + (wave * wave) / (0.29 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
        speed: 1.5, 
        type: 'boomling', 
        moving: true })
  },
  medic: {
  unlockWave: 25,
  spawnRate: wave => 1,
  create: () => ({ 
      maxhp: Math.round(5 + (wave * wave) / (0.10 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
      hp: Math.round(5 + (wave * wave) / (0.10 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
      speed: 5, 
      type: 'medic', 
      moving: true, 
      healCooldown: 60, 
      healRadius: 120, 
      healValue: Math.round(5 + (wave * wave) / (0.3 * 5 / Math.max(0.5, 2.5 - wave * 0.01))), 
  })
}
      };

function applyStats() {
  if (currentWeapon && weaponLevels[currentWeapon] > 5)
    weaponLevels[currentWeapon] = 5;

  let level = weaponLevels[currentWeapon] || 1;
  let multi = getWeaponDamageMultiplier(level);
  player.damage = (baseDamage + statUpgrades.damage * 2) * (skillBonuses.damage + 1) * multi;

  fireRateMultiplier = Math.max(0.05, 1.0 - (statUpgrades.reload * 0.02 + skillBonuses.fireRate));
  maxHP = (baseHP + statUpgrades.maxHP * 10) * (skillBonuses.maxHP + 1);
  magicMulti = 1 + (statUpgrades.intellect * 0.1) * (1 + skillBonuses.intellect);
  player.speed = 40 + (statUpgrades.speed * 2);
  console.log(`maxhp = ${maxHP}`)
  updateHUD();
    console.log(`${player.damage}`)
}

      function createParticle(x, y, color) {
  for (let i = 0; i < 15; i++) {
    particles.push({
      x, y,
      dx: Math.random() * 4 - 2,
      dy: Math.random() * 4 - 2,
      life: 30,
      color
    });
  }
}

function handleEnemyDeath(enemy, enemiesArr, index) {
  if (enemy.type === 'slime') {
    for (let s = 0; s < 2; s++) {
      const offset = (s === 0 ? -1 : 1) * 15;
      enemiesArr.push({
        ...enemyTypes.slimeling.create(),
        x: enemy.x + offset,
        y: enemy.y + offset,
        w: 15,
        h: 15,
        dx: 0,
        dy: 0
      });
    }
  }
  createParticle(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, enemy.boss ? 'purple' : 'red');
if (enemy.boss) {
  score += bossScoreReward(enemy.name);
  gold += wave * 10  
} else {
  score += 10;
  gold += 1 + wave  
}
  itemDrop(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2);
  if (unlockedSkills.includes("Life Steal")) hp = Math.min(maxHP, hp + 2);
  updateHUD();
  if (enemy.boss && unlockedSkills.includes("Berserker Mode")) {
    berserkerActive = true;
    berserkerTimer = 600;
    skillBonuses.damage += 5;
    applyStats();
  }
    if (enemy.boss && enemy.name === "Unix Epoch") {
  restoreControls();
}
  enemiesArr.splice(index, 1);
}

function takeEnemyDamage(enemy, amount) {
  if (!enemy || typeof enemy.hp !== "number") return false;

  enemy.hp -= amount;


  if (enemy.boss && enemy.name === "Blinkblade" && !enemy.justTeleported && enemy.teleportCooldown <= 0) {
    if (Math.random() <= 0.5) {
      enemy.x = Math.random() * (canvas.width - enemy.w);
      enemy.y = Math.random() * (canvas.height - enemy.h);
      enemy.dashing = false;
      enemy.dashCooldown = 32 + Math.floor(Math.random() * 32);
      enemy.teleportCooldown = 10;
      enemy.justTeleported = true; 
      createParticle(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, 'purple');
    }
  }

  if (enemy.hp <= 0) {
    const idx = enemies.indexOf(enemy);
    if (idx !== -1) handleEnemyDeath(enemy, enemies, idx);
    return true;
  }
  enemy.justTeleported = false;
  return false;
}
function bossScoreReward(bossName) {
  switch (bossName) {
    case "Tank":
      return 1000;
    case "Speedmaster":
      return 1250;
    case "Blob King":
      return 1500;
    case "Terrashock":
      return 2000;
    case "GUNGEAR":
      return 4000;
    case "Masquerade":
      return 5000;
    case "Necron":
      return 7500;
    case "Blinkblade":
      return 10000;
    case "Crucible":
      return 25000;
    default:
      return 1000; 
  }
}
function spawnEnemy() {
  if (wave % 10 === 0) {
    switch (wave) {
      case 10: spawnBoss("Tank"); break;
      case 20: spawnBoss("Speedmaster"); break;
      case 30: spawnBoss("Blob King"); break;
      case 40: spawnBoss("Terrashock"); break;
      case 50: spawnBoss("GUNGEAR"); break;
      case 60: spawnBoss("Masquerade"); break;
      case 70: spawnBoss("Necron"); break; 
      case 80: spawnBoss("Blinkblade"); break;
      case 90: spawnBoss("Crucible"); break;   
      case 100: spawnBoss("Unix Epoch"); break;      
    }
    return;
      }

  for (let type in enemyTypes) {
    const config = enemyTypes[type];
    if (wave >= config.unlockWave) {
      const count = config.spawnRate(wave);
      for (let i = 0; i < count; i++) {
        const baseEnemy = config.create();
        const enemyW = baseEnemy.w || 30;
        const enemyH = baseEnemy.h || 30;
        const x = Math.random() * (canvas.width - enemyW);
        const y = Math.random() * (canvas.height - enemyH);
        enemies.push({
          id: enemyCounter++,
          x: x,
          y: y,
          w: enemyW,
          h: enemyH,
          dx: 0,
          dy: 0,
          ...baseEnemy
        });
      }
    }
  }
}
function spawnBoss(type, extraProps = {}) {
  let boss = null;

  if (type === "Tank") {
    boss = createEnemy("Tank", {
      id: enemyCounter++,  
      maxhp: 5000,
      hp: 5000,
      speed: 0.3,
      w: 80,
      h: 80,
      boss: true,
      name: "Tank",
      type: 'boss',  
      moving: true
    });
  }
  else if (type === "Speedmaster") {
    boss = createEnemy("Speedmaster", {
      id: enemyCounter++,  
      maxhp: 10000,
      hp: 10000,
      speed: 2.5,
      w: 40,
      h: 40,
      boss: true,
      name: "Speedmaster",
      type: 'boss',  
      moving: true
    });
  }
  else if (type === "Blob King") {
    boss = createEnemy("Blob King", {
      id: enemyCounter++,  
      maxhp: 25000,
      hp: 25000,
      speed: 0.2,
      w: 60,
      h: 60,
      boss: true,
      name: "Blob King",
      moving: true,
      blob: true,
      spawnCooldown: 60
    });
  }
  else if (type === "Terrashock") {
    boss = createEnemy("Terrashock", {
      id: enemyCounter++,  
      maxhp: 50000,
      hp: 50000,
      speed: 0.6,
      w: 70,
      h: 70,
      boss: true,
      name: "Terrashock",
      moving: false,
      terrashockTimer: 0,
      targetNextPlayer: true  
    });
  }
  else if (type === "GUNGEAR") {
    boss = createEnemy("GUNGEAR", {
      id: enemyCounter++,  
      maxhp: 100000,
      hp: 100000,
      speed: 0.9,
      w: 70,
      h: 70,
      boss: true,
      name: "GUNGEAR",
      type: 'boss',  
      moving: false,
      gungearTimer: 0 
    });
  }
  else if (type === "Masquerade") {
    boss = createEnemy("Masquerade", {
      id: enemyCounter++,  
      maxhp: 500000,
      hp: 500000,
      speed: 1.5,
      w: 50,
      h: 50,
      boss: true,
      name: "Masquerade",
      moving: true,
      masqueradeTimer: 0,
      clones: []
    });
  }
   else if (type === "Necron") {
  boss = createEnemy("Necron", {
    id: enemyCounter++,  
    maxhp: 850000,
    hp: 850000,
    speed: 0.1,
    w: 80,
    h: 80,
    boss: true,
    name: "Necron",
    moving: true,
    necronSummonTimer: 0,
    necronBossSummoned: false
  });
} 
  else if (type === "Blinkblade") {
  boss = createEnemy("Blinkblade", {
    id: enemyCounter++,  
    maxhp: 1200000,
    hp: 1200000,
    speed: 0.9,
    w: 60,
    h: 60,
    boss: true,
    name: "Blinkblade",
    type: 'boss',
    moving: true,
    dashCooldown: 60,
    dashTimer: 0,
    dashing: false,
    dashDir: {x: 0, y: 0},
    dashLength: 0,
    dashHit: false,
    teleportCooldown: 0,
    warningActive: false,
    warningTimer: 0,
    warningStartPos: null,
    warningTargetPos: null,  
  });
}

else if (type === "Crucible") {
  boss = createEnemy("Crucible", {
    id: enemyCounter++,  
    maxhp: 2000000,
    hp: 2000000,
    speed: 0.15,
    w: 120,
    h: 120,
    boss: true,
    name: "Crucible",
    type: "boss",
    square: true,
    moving: true,
    crucibleStopRadius: 300,
    crucibleStopped: false,
    crucibleStopTimer: 0,
    crucibleShockwaveCooldown: 420,
    crucibleShockwaveActive: false,
    crucibleShockwaveTimer: 0,
    cruciblePullActive: false,
    cruciblePullTimer: 0,
    cruciblePullLine: null,
    crucibleTurretTimer: 0,
    crucibleTurretSide: 0,
    crucibleTurretCooldown: 36, 
    crucibleShockwaveRadius: 0,  
  });
}
    else if (type === "Unix Epoch") {
  boss = createEnemy("Unix Epoch", {
    id: enemyCounter++,  
    maxhp: 5000000,
    hp: 5000000,
    speed: 0.3,
    w: 120,
    h: 120,
    boss: true,
    name: "Unix Epoch",
    type: "boss",
    phase: 1,
    timeLockCooldown: 900, 
    timeLockActive: false,
    timeLockTimer: 0,
    moduloCooldown: 1200, 
    moduloActive: false,
    moduloNum: 0,
    moduloTimer: 0,
    binaryFireTimer: 0,
    binarySlow: false,
    bitflipCooldown: 600, 
    bitflipActive: false,
    bitflipTimer: 0,
    bitflipRemap: {},
    garbageCooldown: 0,
    garbageActive: false,
    garbageWindup: 0,
    segfaultCooldown: 900,
    segfaultActive: false,
    segfaultTimer: 0,
    segfaultTrail: [],
    phase3Active: false,
    phase3Timer: 0,
    phase3Heal: 0
  });
}
    
  if (boss) {
      Object.assign(boss, extraProps);
    enemies.push(boss);
    showBossHUD(boss);
  }
}


function spawnEnemyAt(x, y, type) {
  if (typeof type === "string" && enemyTypes[type.toLowerCase()]) {
    const baseEnemy = enemyTypes[type.toLowerCase()].create();
    const enemyW = baseEnemy.w || 30;
    const enemyH = baseEnemy.h || 30;
    enemies.push({
      id: enemyCounter++,
      x: x,
      y: y,
      w: enemyW,
      h: enemyH,
      dx: 0,
      dy: 0,
      ...baseEnemy
    });
    return;
  }
  if (type === "Blob") {
    enemies.push(createEnemy("Blob", {
      id: enemyCounter++,
      x: x,
      y: y,
      w: 25,
      h: 25,
      maxhp: 20,
      hp: 20,    
      speed: 1.1,
      type: 'blob',
      moving: true
    }));
  }
  if (type === "Slimeling") {
    enemies.push(createEnemy("Slimeling", {
      id: enemyCounter++,
      x: x,
      y: y,
      w: 15,
      h: 15,
      maxhp: 10,  
      hp: 10,
      speed: 1.1,
      type: 'slime',
      moving: true
    }));
  }
  if (!type || typeof type !== "string") {
    console.error("spawnEnemyAt: type is missing or not a string!", type);
  } else if (!enemyTypes[type.toLowerCase()]) {
    console.error("spawnEnemyAt: unknown enemy type:", type);
  }
}
function eruptGroundAt(x, y) {
  if (Math.hypot(player.x - x, player.y - y) < 60) {
    takePlayerDamage(30);
    createParticle(x, y, 'brown');
  }
}

function queueTerrashockEruption(x, y) {
  terrashockEruptions.push({
    x, y,
    radius: 150, 
    timer: 30, 
    erupting: false
  });
}
function gungearBuckshot(boss, target) {
  const centerAngle = Math.atan2(target.y + target.h / 2 - (boss.y + boss.h / 2), target.x + target.w / 2 - (boss.x + boss.w / 2));
  const spread = Math.PI / 8;
  const numPellets = 5;
  for (let i = 0; i < numPellets; i++) {
    const pelletAngle = centerAngle + (i - (numPellets - 1) / 2) * (spread / ((numPellets - 1) / 2));
    fireEnemyBullet(
      boss.x + boss.w / 2,
      boss.y + boss.h / 2,
      pelletAngle,
      6,
      9,
      'orange',
      20  
    );
  }
}

function gungearMidFire(boss, target) {
  const angle = Math.atan2(target.y - boss.y, target.x - boss.x);
  fireEnemyBullet(
    boss.x + boss.w / 2,
    boss.y + boss.h / 2,
    angle,
    7,
    7,
    'darkorange',
    40  
  );
}

function gungearSnipe(boss, target) {
  const angle = Math.atan2(target.y - boss.y, target.x - boss.x);
  fireEnemyBullet(
    boss.x + boss.w / 2,
    boss.y + boss.h / 2,
    angle,
    16,
    12, 
    'red',
    80
  );
}

function fireEnemyBullet(x, y, angle, speed, size, color, damage, extraProps = {}) {
  if (angle === null) {
    angle = Math.atan2(player.y + player.h / 2 - y, player.x + player.w / 2 - x);
  }
  enemyBullets.push({
    x,
    y,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
    w: size,
    h: size,
    color,
    damage: damage,
    ...extraProps
  });
}

function spawnMasqueradeClones(boss) {
  if (boss.clones) {
    for (const c of boss.clones) {
      const idx = enemies.indexOf(c);
      if (idx !== -1) enemies.splice(idx, 1);
    }
    boss.clones = [];
  }
  boss.clones = [];
  for (let i = 0; i < 5; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * 80;
    const x = boss.x + Math.cos(angle) * dist;
    const y = boss.y + Math.sin(angle) * dist;
    const clone = createEnemy("Masquerade Clone", {
      maxhp: 1,
      hp: 1,
      speed: 1.5,
      w: 50,
      h: 50,
      type: 'ghost',
      name: "Masquerade Clone",
      moving: true,
    });
    clone.x = x;
    clone.y = y;
    enemies.push(clone);
    boss.clones.push(clone);
  }
}

function swapWithClone(boss) {
  if (!boss.clones || boss.clones.length === 0) return;
  const idx = Math.floor(Math.random() * boss.clones.length);
  const clone = boss.clones[idx];
  const tempX = boss.x, tempY = boss.y;
  boss.x = clone.x; boss.y = clone.y;
  clone.x = tempX; clone.y = tempY;
  createParticle(boss.x, boss.y, 'white');
  createParticle(clone.x, clone.y, 'white');
}

function createEnemy(type, overrides = {}) {
  const base = enemyTypes[type] || {};
  return {
    id: enemyCounter++,
    x: 100,
    y: 100,
    dx: 0,
    dy: 0,
    ...base,
    ...overrides
  };
}



    
function showBossHUD(boss) {
  const bossHUD = document.getElementById("bossHUD");
  bossHUD.style.display = "flex";
  document.getElementById("bossName").textContent = boss.name || "Boss";
}

function updateBossHUD(boss) {
  const hpBar = document.getElementById("bossHealthBar");
  const hpText = document.getElementById("bossHPText");

  const hp = Math.max(0, boss.hp);
  const max = boss.maxhp || hp;

  const percent = Math.max(0, Math.min(100, (hp / max) * 100));
  hpBar.style.width = `${percent}%`;
  hpText.textContent = `${Math.floor(hp)} / ${Math.floor(max)}`;
}

const rarityTiers = [
  { label: "Common",    color: "#bfbfbf" },
  { label: "Uncommon",  color: "#4cff4c" },
  { label: "Rare",      color: "#4ccfff" },
  { label: "Epic",      color: "#cf6cff" },
  { label: "Legendary", color: "#ffd700" }
];

const weaponsData = {
  pistol: {
    name: "Pistol",
    fireRate: 20,
    type: "single",
    special: "None",
    rarity: "Common"
  },
  shotgun: {
    name: "Shotgun",
    fireRate: 40,
    type: "spread",
    special: "Shoots 5 pellets instead of 3",
    rarity: "Uncommon"
  },
  burst: {
    name: "Burst",
    fireRate: 30,
    type: "burst3",
    special: "Fires 5-burst instead of 3",
    rarity: "Uncommon"
  },  
    auto: {
    name: "Auto",
    fireRate: 12,
    type: "auto",
    special: "Fire rate greatly increased",
    rarity: "Uncommon"
  },
  laser: {
    name: "Laser",
    fireRate: 100,
    type: "laser",
    special: "Double laser width",
    rarity: "Legendary"
  },
  missile: {
    name: "Missile",
    fireRate: 60,
    type: "missile",
    special: "Explodes in a larger radius",
    rarity: "Rare"
  },
  boomerang: {
    name: "Boomerang",
    fireRate: 60,
    type: "boomerang",
    special: "Returns twice, not just once",
    rarity: "Legendary"
  },
  plasma: {
    name: "Plasma",
    fireRate: 80,
    type: "plasma",
    special: "Larger AoE and slows enemies",
    rarity: "Epic"
  },
  minigun: {
    name: "Minigun",
    fireRate: 20,
    type: "minigun",
    special: "Ramp up speed is doubled",
    rarity: "Epic"
  },
  sword: {
    name: "Sword",
    fireRate: 30,
    type: "melee",
    special: "Double arc size",
    rarity: "Rare"
  },
  spear: {
    name: "Spear",
    fireRate: 38,
    type: "melee",
    special: "Double range",
    rarity: "Rare"
  },
  katana: {
    name: "Katana",
    fireRate: 28,
    type: "melee",
    special: "Charges and dashes twice as fast",
    rarity: "Legendary"
  }
};
    function getWeaponDamageMultiplier(level) {
  if (level >= 5) return 3.0;
  if (level === 4) return 2.0;
  if (level === 3) return 1.5;
  if (level === 2) return 1.25;
  return 1.0;
}
    let inventory = [], currentWeapon = null;
    let showInventory = false, menuVisible = false;

    function drawInventory() {
  const invEl = document.getElementById("inventory");
  const list = document.getElementById("weaponList");
  list.innerHTML = "";

  const weaponsPerRow = 4;
  for (let i = 0; i < inventory.length; i += weaponsPerRow) {
    const rowDiv = document.createElement("div");
    rowDiv.className = "weapon-row";
    for (let j = i; j < i + weaponsPerRow && j < inventory.length; j++) {
      const w = inventory[j];
      const div = document.createElement("div");
      div.className = "weapon-icon" + (w === currentWeapon ? " active" : "");
      div.textContent = weaponsData[w]?.name || w;
      div.onclick = () => {
        if (currentWeapon === 'minigun' && w !== 'minigun') {
          minigunHoldTimer = 0;
          minigunCurrentFireRate = weaponsData.minigun.fireRate;
        }
        currentWeapon = w;
        applyStats();
        drawInventory();
      };
      rowDiv.appendChild(div);
    }
    list.appendChild(rowDiv);
  }
}

    function toggleInventory() {
      showInventory = !showInventory;
      document.getElementById("inventory").style.display = showInventory ? "block" : "none";
      drawInventory();
    }
      
function itemDrop(x, y) {
  const keys = Object.keys(dropChances);
  const alreadyDropped = droppedItems.map(i => i.item);
const filtered = keys.filter(k => {
  if (k === "potion" || k === "up" || k === "score") return true;
  return !inventory.includes(k) && !alreadyDropped.includes(k);
});

  const shuffled = filtered.sort(() => Math.random() - 0.5);
  console.log("Checking drop order:", shuffled);
  for (let item of shuffled) {
    if (Math.random() < dropChances[item] * luck) {
      droppedItems.push({
        x,
        y,
        w: 60,
        h: 30,
        item,
        timer: 600
      });
      console.log(`Dropped: ${item}`);
      break;
    }
  }
}






canvas.addEventListener('mousedown', e => {
  mouseDown = true;
  if (currentWeapon === 'sword') {
    swordCharging = true;
    swordCharge = 0;
  } else if (currentWeapon === 'spear') {
    spearCharging = true;
    spearCharge = 0;
  } else if (currentWeapon === 'katana') {
  katanaCharging = true;
  katanaCharge = 0;
}   else {
    shootAt(mouseX, mouseY);
  }

});

canvas.addEventListener('mouseup', e => {
  if (currentWeapon === 'sword' && swordCharging) {
    swordCharging = false;
    swordAttack(mouseX, mouseY, swordCharge);
    swordCharge = 0;
  }
  if (currentWeapon === 'spear' && spearCharging) {
    spearCharging = false;
    spearAttack(mouseX, mouseY, spearCharge);
    spearCharge = 0;
  }
    if (currentWeapon === 'katana' && katanaCharging) {
  katanaCharging = false;
  katanaAttack(mouseX, mouseY, katanaCharge);
  katanaCharge = 0;
}
  mouseDown = false;
});

canvas.addEventListener("mousemove", e => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

document.addEventListener("mousemove", e => {
  popupX = e.pageX;
  popupY = e.pageY;
});


function shootAt(x, y) {
  if (!currentWeapon) return;
  const weapon = weaponsData[currentWeapon];
  let angle = Math.atan2(y - (player.y + player.h / 2), x - (player.x + player.w / 2));

  if (weapon.type === 'laser') {
    startLaserBeam()
  } else {
    if (fireCooldown > 0) return;
    fireCooldown = Math.floor(weapon.fireRate * fireRateMultiplier);

    if (weapon.type === 'single') createBullet(angle);
    else if (weapon.type === 'auto') {
        fireCooldown = weapon.fireRate
        createBullet(angle)
        }
    else if (weapon.type === 'spread') for (let i = -1; i <= 1; i++) createBullet(angle + i * 0.2);
    else if (weapon.type === 'burst3') for (let i = 0; i < 3; i++) setTimeout(() => createBullet(angle), i * 100);
    else if (weapon.type === 'missile') createMissile(angle);
    else if (weapon.type === 'boomerang') createBoomerang(x, y);
      else if (weapon.type === 'plasma') createPlasmaBullet(angle);
        else if (weapon.type === 'minigun') {
  const minFireRate = 5;
  fireCooldown = Math.floor(minigunCurrentFireRate);
  createBullet(angle);
  if (minigunHoldTimer < 180) minigunHoldTimer++;
  minigunCurrentFireRate = Math.max(minFireRate, weapon.fireRate - Math.floor(minigunHoldTimer / 2));
}

  }
}



function createBullet(angle) {
  const bullet = {
    x: player.x + player.w / 2,
    y: player.y + player.h / 2,
    w: 10,
    h: 10,
    dx: Math.cos(angle) * 6 * bulletSpeedMultiplier,
    dy: Math.sin(angle) * 6 * bulletSpeedMultiplier,
    color: 'yellow'
  };
if (unlockedSkills.includes("Piercing Bullets")) {
  bullet.hitEnemies = [];
    bullet.enemyCooldowns = {};
}
  if (unlockedSkills.includes("Ricochet")) {
    bullet.bounces = 0;      
    bullet.maxBounces = 3;   
  }

  bullets.push(bullet);
}
      
function startLaserBeam() {
  if (laserBeam.active) return;

  laserBeam.active = true;
  laserBeam.timer = laserBeam.duration;
}


      
    function createMissile(angle) {
      bullets.push({
        x: player.x + player.w / 2,
        y: player.y + player.h / 2,
        w: 20,
        h: 20,
        dx: Math.cos(angle) * 4 * bulletSpeedMultiplier,
        dy: Math.sin(angle) * 4 * bulletSpeedMultiplier,
        color: 'orange',
        explosive: true
      });
    }


      function createBoomerang(targetX, targetY) {
  const angle = Math.atan2(
    targetY - (player.y + player.h / 2),
    targetX - (player.x + player.w / 2)
  );

  const speed = 6 * bulletSpeedMultiplier;
  const distance = 300;

  const peakX = player.x + player.w / 2 + Math.cos(angle) * distance;
  const peakY = player.y + player.h / 2 + Math.sin(angle) * distance;

  bullets.push({
    x: player.x + player.w / 2,
    y: player.y + player.h / 2,
    peakX,
    peakY,
    state: "out",
    speed,
    dx: 0,
    dy: 0,
    w: 20,
    h: 20,
    color: "white",
    boomerang: true,
    rotation: 0  
  });
}
function createPlasmaBullet(angle) {
  bullets.push({
    x: player.x + player.w / 2,
    y: player.y + player.h / 2,
    w: 36,
    h: 36,
    dx: Math.cos(angle) * 3 * bulletSpeedMultiplier,
    dy: Math.sin(angle) * 3 * bulletSpeedMultiplier,
    color: "cyan",
    plasma: true,
    trail: [],
    aoeRadius: 90
  });
}
function isInLaserBeam(enemy) {
  const beamLength = 1500;
  const beamWidth = 20;

  const startX = player.x + player.w / 2;
  const startY = player.y + player.h / 2;
  const endX = startX + Math.cos(player.angle) * beamLength;
  const endY = startY + Math.sin(player.angle) * beamLength;


  return lineIntersectsRect(startX, startY, endX, endY, enemy);
}


function lineIntersectsRect(x1, y1, x2, y2, rect) {
  const lines = [
    [rect.x, rect.y, rect.x + rect.w, rect.y],
    [rect.x + rect.w, rect.y, rect.x + rect.w, rect.y + rect.h],
    [rect.x + rect.w, rect.y + rect.h, rect.x, rect.y + rect.h],
    [rect.x, rect.y + rect.h, rect.x, rect.y]
  ];
  for (let [x3, y3, x4, y4] of lines) {
    if (linesIntersect(x1, y1, x2, y2, x3, y3, x4, y4)) return true;
  }
  return false;
}

function linesIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  const det = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
  if (det === 0) return false;
  const u = ((x3 - x1) * (y4 - y3) - (y3 - y1) * (x4 - x3)) / det;
  const v = ((x3 - x1) * (y2 - y1) - (y3 - y1) * (x2 - x1)) / det;
  return u >= 0 && u <= 1 && v >= 0 && v <= 1;
}

      function updateEnemyBullets() {
          if (timeStopped) return;
  for (let i = enemyBullets.length - 1; i >= 0; i--) {
    const b = enemyBullets[i];
    b.x += b.dx;
    b.y += b.dy;


    ctx.fillStyle = b.color;
    ctx.beginPath();
    ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
    ctx.fill();

    if (
      b.x < player.x + player.w &&
      b.x + b.w > player.x &&
      b.y < player.y + player.h &&
      b.y + b.h > player.y
    ) {
        if (unlockedSkills.includes("Deflector") && Math.random() < 0.10) {
    b.dx *= -1;
    b.dy *= -1;
    b.color = "cyan";
    continue; 
  }
        if (voidActive === true) {
            console.log("void used")
            continue;
            }
        
      if (b.unixBinary !== undefined) {
        applyUnixEpochBulletEffect(b);
      }
      takePlayerDamage(b.damage);

      enemyBullets.splice(i, 1);
      updateHUD();


    if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) {
      enemyBullets.splice(i, 1);
    }
  }
}

          }

      function boomExplosion(x, y) {
  for (let i = 0; i < 100; i++) {
    particles.push({
      x,
      y,
      dx: Math.random() * 8 - 4,
      dy: Math.random() * 8 - 4,
      life: 40,
      color: 'red'
    });
  } 

  enemies.forEach((enemy, i) => {
    const dx = (enemy.x + enemy.w / 2) - x;
    const dy = (enemy.y + enemy.h / 2) - y;
    const dist = Math.hypot(dx, dy);
    if (dist < 100 && enemy.type !== "boomling") {
      enemy.hp -= 5;
    }
  });
}

      
    function updateHUD() {
      document.getElementById("playerBarText").textContent = `${Math.floor(hp)}/${Math.floor(maxHP)}`;
      document.getElementById('score').textContent = score;
      document.getElementById('points').textContent = upgradePoints;
      document.getElementById('level').textContent = level;
      document.getElementById('wave').textContent = wave;
        updatePlayerHealthHUD()
    }

function updatePlayerHealthHUD() {
  const healthPercent = Math.max(0, Math.min(1, hp / maxHP));
  const shieldPercent = (unlockedSkills.includes("Shield Generator") && player.maxShield > 0)
    ? Math.max(0, Math.min(1, player.shield / player.maxShield))
    : 0;

  const healthBar = document.getElementById("playerHealthBar");
  const shieldBar = document.getElementById("playerShieldBar");
  const barText = document.getElementById("playerBarText");

  healthBar.style.width = (healthPercent * 100) + "%";
  shieldBar.style.width = (shieldPercent * 100) + "%";
  shieldBar.style.display = shieldPercent > 0 ? "block" : "none";

barText.textContent = `HP: ${Math.max(Math.round(hp), 1)}/${Math.floor(maxHP)}`;
}

function drawPlayer() {
  ctx.save();

  if (instinctActive) {
    ctx.save();
    const pulseRadius = 65 + 12 * Math.sin(Date.now() / 135);
    ctx.globalAlpha = 0.32 + 0.18 * Math.sin(Date.now() / 140);
    ctx.beginPath();
    ctx.arc(player.x + player.w / 2, player.y + player.h / 2, pulseRadius, 0, Math.PI * 2);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 7;
    ctx.shadowColor = "red";
    ctx.shadowBlur = 24;
    ctx.stroke();
    ctx.restore();
  }
  if (overchargeActive) {
    ctx.save();
    const pulseRadius = 80 + 8 * Math.sin(Date.now() / 110);
    ctx.globalAlpha = 0.26 + 0.14 * Math.sin(Date.now() / 70);
    ctx.beginPath();
    ctx.arc(player.x + player.w / 2, player.y + player.h / 2, pulseRadius, 0, Math.PI * 2);
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 9;
    ctx.shadowColor = "#ffd700";
    ctx.shadowBlur = 32;
    ctx.stroke();
    ctx.restore();

    if (Math.random() < 0.7) {
      particles.push({
        x: player.x + player.w / 2 + (Math.random() - 0.5) * 22,
        y: player.y + player.h / 2 + (Math.random() - 0.5) * 22,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        life: 24 + Math.random() * 9,
        color: "#ffd700"
      });
    }
  }

        
          if (voidActive) {
    ctx.save();
    ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
    ctx.beginPath();
    ctx.arc(0, 0, 40, 0, Math.PI * 2);
    ctx.lineWidth = 7;
    ctx.strokeStyle = "purple";
    ctx.shadowColor = "magenta";
    ctx.shadowBlur = 18;
    ctx.globalAlpha = 0.78 + 0.18 * Math.sin(Date.now()/150);
    ctx.stroke();
    ctx.restore();
  }
        
player.dashTrail.forEach(trail => {
  ctx.fillStyle = `rgba(0,255,255,${trail.life / 20})`;
  ctx.beginPath();
  ctx.arc(trail.x + player.w / 2, trail.y + player.h / 2, 20 * (trail.life / 20), 0, Math.PI * 2);
  ctx.fill();
});
        
  ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
  let angle = Math.atan2(mouseY - (player.y + player.h / 2), mouseX - (player.x + player.w / 2));
  ctx.rotate(angle);
  player.angle = angle;


if (currentWeapon === 'sword') {
  ctx.save();
  const minRange = 80;
  const maxRange = 220;
  const range = minRange + ((maxRange - minRange) * (swordSwingCharge / swordChargeMax));
  const arc = Math.PI / 3;
  let baseAngle = swordSwinging ? swordSwingAngle : player.angle;
  let swingProgress = swordSwinging ? (1 - swordSwingTimer / (11 + Math.floor(swordSwingCharge / 8))) : 0;
  let swingAngle = baseAngle + arc / 2 - arc * swingProgress;



  ctx.rotate(swingAngle - player.angle);
  ctx.translate(26, 0);
  ctx.rotate(Math.PI / 16);
  ctx.beginPath();
  ctx.moveTo(0, -5);
  ctx.lineTo(38, 0);
  ctx.lineTo(0, 5);
  ctx.closePath();
  ctx.fillStyle = "cyan";
  ctx.strokeStyle = "cyan";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(-3, -11);
  ctx.lineTo(-3, 11);
  ctx.lineTo(3, 11);
  ctx.lineTo(3, -11);
  ctx.closePath();
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-7, -8);
  ctx.lineTo(7, -8);
  ctx.lineTo(7, 8);
  ctx.lineTo(-7, 8);
  ctx.closePath();
  ctx.fillStyle = "darkgrey";
  ctx.fill();
  ctx.restore();
}

if (currentWeapon === 'spear') {
  ctx.save();

  const baseShaftLengthFront = 100;
  const shaftLengthBehind = 100;
  const shaftWidth = 7;

  const baseTipAnim = 60;
  const maxExtraReach = 100;
  let extraReach = (spearStabCharge / spearChargeMax) * maxExtraReach;
  let tipAnim = 0;
  if (spearStabbing) {
    let progress = (1 - spearStabTimer / (12 + Math.floor(spearStabCharge / 6)));
    tipAnim = Math.sin(Math.PI * progress) * (baseTipAnim + extraReach);
  }

  let shaftFront = baseShaftLengthFront + tipAnim;
  let shaftBack = Math.max(0, shaftLengthBehind - tipAnim);

  const gripForward = -18;
  const gripRight = 14;
  const gripX = Math.cos(Math.PI / 2) * gripRight + Math.cos(0) * gripForward;
  const gripY = Math.sin(Math.PI / 2) * gripRight + Math.sin(0) * gripForward;
  ctx.translate(gripX, gripY);

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(-shaftBack, -shaftWidth / 2);
  ctx.lineTo(shaftFront, -shaftWidth / 2);
  ctx.lineTo(shaftFront, shaftWidth / 2);
  ctx.lineTo(-shaftBack, shaftWidth / 2);
  ctx.closePath();
  ctx.fillStyle = "darkgrey";
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.translate(0, 0);
  ctx.beginPath();
  ctx.ellipse(0, 0, 7, 8, 0, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.globalAlpha = 0.85;
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.translate(shaftFront, 0);
  ctx.beginPath();
  ctx.moveTo(10, 0);
  ctx.lineTo(-20, -10);
  ctx.lineTo(-20, 10);
  ctx.closePath();
  ctx.fillStyle = spearStabbing && spearStabCharge > spearChargeMax * 0.7 ? "white" : "cyan";
  ctx.strokeStyle = "cyan";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  ctx.restore(); 
  ctx.restore();
}
if (currentWeapon === 'katana') {
  ctx.save();
  let swingArc, swingRange, baseAngle, swingProgress, swingAngle;

  let minRange = 130, maxRange = 200;
  let rangeFrac = (katanaCharging || katanaSwinging) ? katanaCharge / katanaChargeMax : 0;
  if (katanaDashing && katanaDashTimerStart > 0) rangeFrac = 1 - katanaDashTimer / katanaDashTimerStart;
  rangeFrac = Math.max(0, Math.min(rangeFrac, 1));
  swingRange = minRange + (maxRange - minRange) * rangeFrac;

  if (katanaSwinging) {
    swingArc = Math.PI / 2 + (katanaSwingCharge / katanaChargeMax) * Math.PI / 7;
    baseAngle = katanaSwingAngle;
    swingProgress = 1 - katanaSwingTimer / (11 + Math.floor(katanaSwingCharge / 8));
    swingAngle = baseAngle + swingArc / 2 - swingArc * swingProgress;
  } else if (katanaDashing && katanaDashTimerStart > 0) {
    swingArc = Math.PI / 1.3;
    swingRange = 130;
    baseAngle = player.angle;
    swingProgress = 1 - katanaDashTimer / katanaDashTimerStart;
    swingAngle = baseAngle + swingArc / 2 - swingArc * swingProgress;
  } else {
    swingArc = Math.PI / 2 + (katanaCharge / katanaChargeMax) * Math.PI / 7;
    baseAngle = player.angle;
    swingProgress = 0;
    swingAngle = baseAngle + swingArc / 2;
  }

  if (katanaCharging || katanaSwinging || katanaDashing) {
    ctx.save();
    ctx.globalAlpha = 0.32 + 0.15 * Math.sin(Date.now()/120);
    ctx.beginPath();
    ctx.arc(0, 0, swingRange, -swingArc/2, swingArc/2);
    ctx.lineWidth = 14 + katanaCharge / 8;
    ctx.strokeStyle = katanaCharging ? "cyan" : "blue";
    ctx.stroke();
    ctx.restore();
  }

  ctx.rotate(swingAngle - player.angle);
  ctx.translate(56, 0);
  ctx.rotate(Math.PI / 32);

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, -4, 56, 8);
  ctx.fillStyle = katanaDashing || (katanaCharging && katanaCharge > katanaChargeMax * 0.7) ? "white" : "cyan";
  ctx.shadowColor = "cyan";
  ctx.shadowBlur = 12;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.beginPath();
  ctx.moveTo(56, -4);
  ctx.lineTo(72, 4);
  ctx.lineTo(56, 4);
  ctx.closePath();
  ctx.fillStyle = "cyan";
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.rect(-20, -4, 20, 8);
  ctx.fillStyle = "darkgrey";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(0, -7.5, 8, 15);
  ctx.fillStyle = "darkgrey";
  ctx.fill();


  ctx.restore();
}
const skin = skins.find(s => s.name === currentSkin) || skins[0];

if (skin.type === "special" && skin.name === "Specter") {
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 22, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.shadowColor = "purple";
  ctx.shadowBlur = 32;
  ctx.globalAlpha = 0.98 + 0.02 * Math.sin(Date.now()/270);
  ctx.fill();
  ctx.restore();
} else if (skin.type === "normal") {
  ctx.fillStyle = skin.fill;
  ctx.shadowColor = skin.shadow;
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(-20, 15);
  ctx.lineTo(-10, 0);
  ctx.lineTo(-20, -15);
  ctx.closePath();
  ctx.fill();
} else if (skin.type === "default") {
  ctx.fillStyle = skin.fill;
  ctx.beginPath();
  ctx.moveTo(20, 0);
  ctx.lineTo(-20, 15);
  ctx.lineTo(-10, 0);
  ctx.lineTo(-20, -15);
  ctx.closePath();
  ctx.fill();
        }

  ctx.restore(); 
}

    function drawEnemy(enemy) { 
      ctx.save();
      ctx.translate(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2);
        if (enemy.type === 'leaper') {
  ctx.scale(enemy.leapScale || 1, enemy.leapScale || 1);
}

if (enemy.boss && enemy.name === "Blinkblade" && enemy.warningActive && enemy.warningStartPos && enemy.warningTargetPos) {
  ctx.save();
  ctx.globalAlpha = 0.7 + 0.3 * Math.sin(Date.now() / 60); 
  ctx.strokeStyle = "red";
  ctx.lineWidth = 7;
  ctx.setLineDash([30, 16]);
  ctx.beginPath();
  ctx.moveTo(enemy.warningStartPos.x - (enemy.x + enemy.w / 2), enemy.warningStartPos.y - (enemy.y + enemy.h / 2));
  ctx.lineTo(enemy.warningTargetPos.x - (enemy.x + enemy.w / 2), enemy.warningTargetPos.y - (enemy.y + enemy.h / 2));
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}
if (enemy.boss && enemy.name === "Crucible") {

  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.shadowColor = "darkred";
  ctx.shadowBlur = 24;
  ctx.arc(0, 0, enemy.w / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#700";
  ctx.stroke();
  ctx.restore();

  for (let side = 0; side < 2; side++) {
    const turretAngle = side === 0 ? Math.PI / 2 : -Math.PI / 2;
    const tx = Math.cos(turretAngle) * (enemy.w / 2 + 18);
    const ty = Math.sin(turretAngle) * (enemy.h / 2 + 18);
    ctx.save();
    ctx.beginPath();
    ctx.arc(tx, ty, 15, 0, Math.PI * 2);
    ctx.fillStyle = (enemy.crucibleTurretSide === side) ? "orange" : "darkorange";
    ctx.fill();
    ctx.restore();
  }

if (enemy.crucibleShockwaveActive) {
  ctx.save();
  const r = enemy.crucibleShockwaveRadius || 0;
  const alpha = 1 - r / 1200;
  if (alpha > 0) {
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 18;
    ctx.stroke();
  }
  ctx.restore();
}


  if (enemy.cruciblePullActive && enemy.cruciblePullLine) {
    ctx.save();
    ctx.globalAlpha = 0.8;
    ctx.strokeStyle = "purple";
    ctx.lineWidth = 11;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const toX = enemy.cruciblePullLine.to.x - (enemy.x + enemy.w / 2);
    const toY = enemy.cruciblePullLine.to.y - (enemy.y + enemy.h / 2);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    ctx.restore();
  }
      ctx.restore();
  return;
}
        if (enemy.type === 'medic') {
ctx.save();
ctx.globalAlpha = 0.1;
ctx.beginPath();
ctx.arc(0, 0, enemy.healRadius, 0, Math.PI*2);
ctx.fillStyle = "#50ff50";
ctx.fill();
ctx.restore();
}
        if (enemy.boss && enemy.name === "Unix Epoch") {
  const healthFrac = Math.max(0, enemy.hp / enemy.maxhp);
  ctx.save();
  ctx.shadowColor = "#00fff6";
  ctx.shadowBlur = 32 + 32 * (1 - healthFrac);
  ctx.globalAlpha = 0.55 + 0.35 * Math.sin(Date.now() / 250);
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2);
  ctx.fillStyle = "#222";
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.lineWidth = 7 + 7 * (1 - healthFrac);
  ctx.strokeStyle = "#00ffff";
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 20 + 24 * (1 - healthFrac);
  ctx.beginPath();
  ctx.arc(0, 0, 62, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  let t = Date.now() / (200 + 1300 * healthFrac);
  let phase = enemy.phase || 1;
  ctx.save();
  ctx.rotate(t);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -55);
  ctx.strokeStyle = "#00ffae";
  ctx.lineWidth = 7;
  ctx.globalAlpha = 0.75;
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 15;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.rotate(t * 1.5 + Math.PI / 2);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -40);
  ctx.strokeStyle = "#ff00e6";
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.65;
  ctx.shadowColor = "#f0f";
  ctx.shadowBlur = 6;
  ctx.stroke();
  ctx.restore();

  ctx.save();
  ctx.font = "bold 18px monospace";
  ctx.fillStyle = "#00fff6";
  ctx.globalAlpha = 0.13 + 0.13 * Math.sin(Date.now() / 100);
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 * i) / 12 + t * 0.4;
    const r = 70 + 8 * Math.sin(t + i);
    ctx.save();
    ctx.rotate(angle);
    ctx.fillText(Math.random() > 0.5 ? "0" : "1", r, 0);
    ctx.restore();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.09 + 0.06 * Math.sin(Date.now() / 70);
  ctx.strokeStyle = "#fff";
  for (let i = 0; i < 16; i++) {
    ctx.save();
    ctx.rotate((Math.PI * 2 * i) / 16 + t * 0.2);
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(90 + Math.sin(t + i) * 10, 0);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();

  ctx.save();
  ctx.font = "bold 28px Orbitron, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  let shake = healthFrac < 0.15 ? Math.random() * 7 : 0;
  ctx.fillStyle = "#fff";
  ctx.globalAlpha = 0.88;
  ctx.shadowColor = "#00fff6";
  ctx.shadowBlur = 24;
  ctx.fillText("1970", shake, shake);
  ctx.restore();

  drawUnixSegfaultTrail(enemy);

  if (enemy.phase === 3) {
    ctx.save();
    ctx.strokeStyle = "#ff0055";
    ctx.globalAlpha = 0.22 + 0.16 * Math.sin(Date.now() / 90);
    for (let i = 0; i < 7; i++) {
      ctx.beginPath();
      let y = -45 + i * 15 + Math.sin(Date.now() / (80 + 40 * i)) * 6;
      ctx.moveTo(-42, y);
      ctx.lineTo(42, y + Math.random() * 9);
      ctx.stroke();
    }
    ctx.restore();
  }

  ctx.restore();
  return;
}

    ctx.beginPath();       
if (enemy.name === 'Blob King') {
  ctx.fillStyle = `hsl(${enemy.hp * (120 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.name === 'Necron') {
  ctx.fillStyle = `hsl(${enemy.hp * (280 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'blob') {
  ctx.fillStyle = `hsl(${enemy.hp * (100 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.name === 'Masquerade') {
  ctx.fillStyle = `hsl(0, 0%, ${enemy.hp * (100 / enemy.maxhp)}%)`;
} else if (enemy.name === 'Masquerade Clone') {
  ctx.fillStyle = `hsl(0, 0%, ${enemy.hp * (100 / enemy.maxhp)}%)`;
} else if (enemy.name === 'Terrashock') {
  ctx.fillStyle = `hsl(0, 100%, ${Math.min(50, 10 + ((enemy.maxhp - enemy.hp) * 40 / enemy.maxhp))}%)`;
} else if (enemy.type === 'default') {
  ctx.fillStyle = `hsl(${enemy.hp * (90 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'zoomie') {
  ctx.fillStyle = `hsl(${enemy.hp * (70 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'tanklet') {
  ctx.fillStyle = `hsl(${enemy.hp * (110 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'spitter') {
  ctx.fillStyle = `hsl(${enemy.hp * (180 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'boomling') {
  ctx.fillStyle = `hsl(${enemy.hp * (350 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'slime') {
  ctx.fillStyle = `hsl(${enemy.hp * (90 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'slimeling') {
  ctx.fillStyle = `hsl(${enemy.hp * (80 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'leaper') {
  ctx.fillStyle = `hsl(${enemy.hp * (90 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'medic') {
  ctx.fillStyle = `hsl(${enemy.hp * (90 / enemy.maxhp)}, 100%, 50%)`;
} else if (enemy.type === 'boss' && enemy.name !== "Crucible") {
  ctx.fillStyle = `hsl(${enemy.hp * (280 / enemy.maxhp)}, 100%, 50%)`;  
}

      ctx.arc(0, 0, enemy.w / 2 + 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = 'black';    
      ctx.arc(-5, -5, 3, 0, Math.PI * 2);
      ctx.arc(5, -5, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-5, 5);
      ctx.quadraticCurveTo(0, 10, 5, 5);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

    }

function upgrade(type) {
  if (upgradePoints <= 0) return;

  let cap = upgradeCaps[type];
  let current = statUpgrades[type];
  let remaining = cap - current;
  let toSpend = 1;

  if (bulkUpgradeAmount === "MAX") {
    toSpend = Math.min(upgradePoints, remaining);
  } else {
    toSpend = Math.min(bulkUpgradeAmount, upgradePoints, remaining);
  }

  if (toSpend <= 0) return;

  for (let i = 0; i < toSpend; i++) {
    upgradeEffects[type]();
    statUpgrades[type]++;
    upgradePoints--;
    if (statUpgrades[type] >= cap) break;
    if (upgradePoints <= 0) break;
  }
updateHUD();
updateUpgradeButtons();
applyStats();
}
    const upgradeEffects = {
  speed: () => applyStats(),
  damage: () => applyStats(),
  maxHP: () => { hp += 10 * (skillBonuses.maxHP + 1)
                applyStats();
  },
  reload: () => applyStats(),
  luck: () => luck = Math.max(1.0, luck + 0.05),
  intellect: () => applyStats(),
    };

      function updateUpgradeButtons() {
  const menu = document.getElementById("upgradeMenu");
  const types = ['speed', 'damage', 'maxHP', 'reload', 'luck', 'intellect'];
  types.forEach(type => {
    const btn = menu.querySelector(`button[onclick="upgrade('${type}')"]`);
    const count = statUpgrades[type];
btn.innerText = `${capitalize(type)} (${type === 'reload'
  ? '+2%'
  : type === 'maxHP'
    ? '+10'
    : type === 'luck'
      ? '+5%'
      : type === 'intellect'
        ? '+10% Magic'
        : '+1'}) [${count}/${upgradeCaps[type]}]`;
    btn.disabled = (count >= upgradeCaps[type]);
    btn.style.opacity = btn.disabled ? 0.5 : 1;
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}



    function drawParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 30;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        p.life--;
        if (p.life <= 0) particles.splice(i, 1);
      }
    }

function updatePlayer() {
  handleUnixEpochStatusEffects();
  const dashText = document.getElementById("dashText");
if (unlockedSkills.includes("Shield Generator") && player.shield < player.maxShield) {
  if (player.shieldRegenTimer > 0) {
    player.shieldRegenTimer--;
  } else {
    player.shield = Math.min(player.maxShield, player.shield + 2);
    updateHUD();
  }
}
    if (unlockedSkills.includes("Void")) {
        if (voidTimer > 0 && voidActive === true) {
            voidTimer--;
            }
        else if (voidTimer === 0 && voidActive === true) {
            voidActive = false;
            voidCooldown = 1500;
            }
        else if (voidCooldown > 0) {
            voidCooldown -= 1;
            }
        else if (voidCooldown === 0) {
            voidActive = true;
            voidTimer = 180;
            }
}
  if (player.dashCooldown > 0) {
    player.dashCooldown--;
    dashText.textContent = `CD: ${(player.dashCooldown / 60).toFixed(1)}s`;
    dashText.style.color = "gray";
  } else {
    dashText.textContent = "Dash Ready!";
    dashText.style.color = "var(--accent)";
  }
for (let skill in skillCooldowns) {
  if (skillCooldowns[skill] > 0) {
    skillCooldowns[skill]--;
  }
}

    if (player.isDashing) {
  player.x += player.dashDir.x * 14;
  player.y += player.dashDir.y * 14;
  player.dashTime--;

  player.dashTrail.push({ x: player.x, y: player.y, life: 20 });

  if (player.dashTime <= 0) {
    player.isDashing = false;
      }    
        }
    
     if (playerStunTimer === 0 && !epochTimeStop) {
        if (keys[currentControlMap.w]) player.y -= player.speed / 10;
        if (keys[currentControlMap.s]) player.y += player.speed / 10;
        if (keys[currentControlMap.a]) player.x -= player.speed / 10;
        if (keys[currentControlMap.d]) player.x += player.speed / 10;
    }

  if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  if (player.x + player.w > canvas.width) player.x = canvas.width - player.w;
  if (player.y + player.h > canvas.height) player.y = canvas.height - player.h;
for (let i = droppedItems.length - 1; i >= 0; i--) {
  const item = droppedItems[i];
  if (
    player.x < item.x + item.w &&
    player.x + player.w > item.x &&
    player.y < item.y + item.h &&
    player.y + player.h > item.y
  ) {
    if (item.item === 'potion') {
      const healAmount = 50;
      hp = Math.min(maxHP, hp + healAmount);
      createParticle(item.x, item.y, 'green');
      updateHUD();
      checkInstinctTrigger();
      checkOverchargeTrigger();
    } else if (item.item === 'up') {
      upgradePoints += 2;
      createParticle(item.x, item.y, 'gold');
      updateHUD();
    } else if (item.item === 'score') {
      score += 100;
      createParticle(item.x, item.y, 'cyan');
      updateHUD();
    } else {
      addWeaponToInventory(item.item);
      drawInventory();
      if (currentWeapon === 'minigun') {
        minigunHoldTimer = 0;
        minigunCurrentFireRate = weaponsData.minigun.fireRate;
      }
    }
    droppedItems.splice(i, 1);
  }
}

for (let i = player.dashTrail.length - 1; i >= 0; i--) {
  player.dashTrail[i].life--;
  if (player.dashTrail[i].life <= 0) player.dashTrail.splice(i, 1);
}
    
if (berserkerActive) {
  berserkerTimer--;
    
  if (berserkerTimer <= 0) {
    berserkerActive = false;
    skillBonuses.damage -= 5;
    applyStats();
  }
}
    if (currentWeapon !== 'minigun') {
        minigunHoldTimer = 0;
        minigunCurrentFireRate = 20;
        }
    }
  window.addEventListener('keyup', d => {
    keys[d.key] = false;
      });

function updateEnemies() {
  if (timeStopped) return;

  for (let i = enemies.length - 1; i >= 0; i--) {
    let enemy = enemies[i];
    if (enemy.trappedByBlackHole) continue;

    enemy.stunned ??= 0;
    if (enemy.stunned > 0) {
      enemy.stunned--;
      continue; 
    }


    enemy.x += enemy.dx * 2;
    enemy.y += enemy.dy * 2;
    if (enemy.x < 0 || enemy.x + enemy.w > canvas.width) enemy.dx *= -1;
    if (enemy.y < 0 || enemy.y + enemy.h > canvas.height) enemy.dy *= -1;

    if (enemy.type === 'spitter') {
      enemy.fireCooldown--;
      if (enemy.fireCooldown <= 0) {
        fireEnemyBullet(
    enemy.x + enemy.w / 2,
    enemy.y + enemy.h / 2,
    null,
    3,
    8, 
    'red',
    20
  );
        enemy.fireCooldown = 90;
      }
    }
if (enemy.type === 'leaper') {
  enemy.leapCooldown--;
  if (enemy.leapCooldown <= 0 && !enemy.leaping) {
    enemy.leaping = true;
    enemy.leapTimer = 30;
    let angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
    enemy.leapDX = Math.cos(angle) * 14;
    enemy.leapDY = Math.sin(angle) * 14;
  }

  if (enemy.leaping) {
    let t = 1 - enemy.leapTimer / 30;
    if (t < 0.5) {
      enemy.leapScale = 1 + t * 1.2;
    } else {
      enemy.leapScale = 1.6 - (t - 0.5) * 1.2;
    }
    enemy.x += enemy.leapDX * 0.18;
    enemy.y += enemy.leapDY * 0.18;
    enemy.leapTimer--;
    if (enemy.leapTimer <= 0) {
      enemy.leaping = false;
      enemy.leapCooldown = 120;
      enemy.leapScale = 1;
    }
  } else {
    enemy.leapScale = 1;
  }
}

    if (enemy.boss && enemy.name === "Blob King") {
      if (enemy.spawnCooldown <= 0) {
        spawnEnemyAt(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, "Blob");
        enemy.spawnCooldown = 60;
        console.log("Blob King cooldown:", enemy.spawnCooldown);
      } else {
        enemy.spawnCooldown--;
      }
    }

if (enemy.type === 'medic') {
  enemy.healCooldown--;
  if (enemy.healCooldown <= 0) {
    let target = null;
    let mostMissingHP = 0;
    for (const other of enemies) {
      if (other === enemy || other.type === "medic" || other.hp >= other.maxhp) continue;
      const dx = (other.x + other.w/2) - (enemy.x + enemy.w/2);
      const dy = (other.y + other.h/2) - (enemy.y + enemy.h/2);
      const dist = Math.hypot(dx, dy);
      if (dist < enemy.healRadius) {
        const missing = other.maxhp - other.hp;
        if (missing > mostMissingHP) {
          mostMissingHP = missing;
          target = other;
        }
      }
    }
    if (target) {
      target.hp = Math.min(target.maxhp, target.hp + enemy.healValue);
      createParticle(target.x + target.w/2, target.y + target.h/2, 'lime');
    }
    enemy.healCooldown = 60;
  }

  let moveTarget = null;
  let mostMissingHP = 0;
  for (const other of enemies) {
    if (other === enemy || other.type === "medic" || other.hp >= other.maxhp) continue;
    const dx = (other.x + other.w/2) - (enemy.x + enemy.w/2);
    const dy = (other.y + other.h/2) - (enemy.y + enemy.h/2);
    const dist = Math.hypot(dx, dy);
    if (dist < 1000) {
      const missing = other.maxhp - other.hp;
      if (missing > mostMissingHP) {
        mostMissingHP = missing;
        moveTarget = other;
      }
    }
  }
  if (moveTarget) {
    let angle = Math.atan2(
      (moveTarget.y + moveTarget.h/2) - (enemy.y + enemy.h/2),
      (moveTarget.x + moveTarget.w/2) - (enemy.x + enemy.w/2)
    );
    enemy.dx = Math.cos(angle) * enemy.speed;
    enemy.dy = Math.sin(angle) * enemy.speed;
  } else {
    enemy.dx = 0;
    enemy.dy = 0;
  }
} else if (enemy.moving && enemy.name !== "Crucible") {
  let angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
  enemy.dx = Math.cos(angle) * enemy.speed;
  enemy.dy = Math.sin(angle) * enemy.speed;
} else {

  enemy.dx = 0;
  enemy.dy = 0;
}
if (enemy.boss && enemy.name === "Terrashock") {
  enemy.terrashockTimer = (enemy.terrashockTimer || 0) + 1;
  if (enemy.terrashockTimer % 60 === 0) {
    let x, y;
    if (enemy.targetNextPlayer) {
      x = player.x + player.w / 2;
      y = player.y + player.h / 2;
    } else {
      x = Math.random() * canvas.width;
      y = Math.random() * canvas.height;
    }
    queueTerrashockEruption(x, y);
    enemy.targetNextPlayer = !enemy.targetNextPlayer;
  }
}

if (enemy.boss && enemy.name === "GUNGEAR") {
  const dx = player.x - enemy.x;
  const dy = player.y - enemy.y;
  const dist = Math.hypot(dx, dy);
  const normX = dx / dist;
  const normY = dy / dist;
  const now = Date.now() / 500;
  const strafeDir = Math.sin(now) > 0 ? 1 : -1;
  const perpX = -normY * strafeDir;
  const perpY = normX * strafeDir;

  const approachSpeed = 0.7;
  const strafeSpeed = 2.2; 

  enemy.dx = normX * approachSpeed + perpX * strafeSpeed;
  enemy.dy = normY * approachSpeed + perpY * strafeSpeed;

  enemy.x += enemy.dx;
  enemy.y += enemy.dy;
enemy.x = Math.max(0, Math.min(canvas.width - enemy.w, enemy.x));
enemy.y = Math.max(0, Math.min(canvas.height - enemy.h, enemy.y));
  enemy.gungearTimer = (enemy.gungearTimer || 0) + 1;
  const playerDist = Math.hypot((player.x - enemy.x), (player.y - enemy.y));
  if (playerDist < 400 && enemy.gungearTimer % 24 === 0) {
    gungearBuckshot(enemy, player);
  } else if (playerDist < 500 && enemy.gungearTimer % 10 === 0) {
    gungearMidFire(enemy, player);
  } else if (playerDist >= 500 && enemy.gungearTimer % 30 === 0) {
    gungearSnipe(enemy, player);
  }
}

    if (enemy.boss && enemy.name === "Masquerade") {
      enemy.masqueradeTimer = (enemy.masqueradeTimer || 0) + 1;
      if (enemy.masqueradeTimer % 120 === 0) {
        spawnMasqueradeClones(enemy);
      }
      if (enemy.masqueradeTimer % 180 === 0 && enemy.clones && enemy.clones.length) {
        swapWithClone(enemy);
      }
    }

      if (enemy.boss && enemy.name === "Necron") {
  enemy.necronSummonTimer = (enemy.necronSummonTimer || 0) + 1;
  if (enemy.necronSummonTimer % 30 === 0) {
    const possibleTypes = Object.keys(enemyTypes).filter(
      t => !["Blob King", "Terrashock", "GUNGEAR", "Masquerade", "Necron"].includes(t.toLowerCase())
    );
    const randType = possibleTypes[Math.floor(Math.random() * possibleTypes.length)];
    const spawnX = enemy.x + enemy.w / 2 + (Math.random() - 0.5) * 200;
    const spawnY = enemy.y + enemy.h / 2 + (Math.random() - 0.5) * 200;
    spawnEnemyAt(spawnX, spawnY, randType.charAt(0).toUpperCase() + randType.slice(1));
  }
  if (!enemy.necronBossSummoned && enemy.hp <= enemy.maxhp * 0.25) {
    const bossPool = ["Blob King", "Terrashock", "GUNGEAR", "Masquerade"];
    const pick = bossPool[Math.floor(Math.random() * bossPool.length)];
    spawnBoss(pick);
    enemy.necronBossSummoned = true;
  }
}
      if (enemy.boss && enemy.name === "Blinkblade") {
          if (enemy.teleportCooldown > 0) enemy.teleportCooldown--;
if (!enemy.dashing && !enemy.warningActive && enemy.dashCooldown <= 0) {
  enemy.warningActive = true;
  enemy.warningTimer = 30;
  let ex = enemy.x + enemy.w / 2;
  let ey = enemy.y + enemy.h / 2;
  let px = player.x + player.w / 2;
  let py = player.y + player.h / 2;
  let angle = Math.atan2(py - ey, px - ex);
  enemy.dashDir = { x: Math.cos(angle), y: Math.sin(angle) };
  enemy.warningStartPos = { x: ex, y: ey };
  enemy.warningTargetPos = {
    x: ex + enemy.dashDir.x * 700,
    y: ey + enemy.dashDir.y * 700
  };
}

if (enemy.warningActive) {
  enemy.warningTimer--;
  if (enemy.warningTimer <= 0) {
    enemy.warningActive = false;
    enemy.dashLength = 0;
    enemy.dashing = true;
    enemy.dashHit = false;
    enemy.dashTimer = 0;
    enemy.dashSpeed = 24;
  }
}

  if (enemy.dashing) {
    enemy.x += enemy.dashDir.x * enemy.dashSpeed;
    enemy.y += enemy.dashDir.y * enemy.dashSpeed;
    enemy.dashLength += enemy.dashSpeed;
    enemy.dashTimer++;
    if (enemy.dashLength > 700 || enemy.dashTimer > 36 ||
        enemy.x < 0 || enemy.y < 0 ||
        enemy.x + enemy.w > canvas.width || enemy.y + enemy.h > canvas.height) {
      enemy.dashing = false;
      enemy.dashCooldown = 48 + Math.floor(Math.random() * 32);
    }

    if (!enemy.dashHit &&
      player.x + player.w > enemy.x &&
      player.x < enemy.x + enemy.w &&
      player.y + player.h > enemy.y &&
      player.y < enemy.y + enemy.h) {
      takePlayerDamage(120);
      enemy.dashHit = true;
      createParticle(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, "purple");
    }

  } else {
    enemy.dashCooldown--;
    let px = player.x + player.w / 2;
    let py = player.y + player.h / 2;
    let ex = enemy.x + enemy.w / 2;
    let ey = enemy.y + enemy.h / 2;
    let angle = Math.atan2(py - ey, px - ex);
    enemy.dx = Math.cos(angle) * enemy.speed;
    enemy.dy = Math.sin(angle) * enemy.speed;
    enemy.x += enemy.dx * 2;
    enemy.y += enemy.dy * 2;
  }
}
      if (enemy.boss && enemy.name === "Crucible") {
  let px = player.x + player.w / 2;
  let py = player.y + player.h / 2;
  let ex = enemy.x + enemy.w / 2;
  let ey = enemy.y + enemy.h / 2;
  let dist = Math.hypot(px - ex, py - ey);

  if (dist <= enemy.crucibleStopRadius) {
    if (!enemy.crucibleStopped) {
      enemy.crucibleStopped = true;
      enemy.crucibleStopTimer = 0;
      enemy.cruciblePullTimer = 120;
    }
    enemy.dx = 0;
    enemy.dy = 0;
  } else {
    if (enemy.crucibleStopped) {
      enemy.crucibleStopped = false;
      enemy.cruciblePullTimer = 120;
    }
    let angle = Math.atan2(py - ey, px - ex);
    enemy.dx = Math.cos(angle) * enemy.speed;
    enemy.dy = Math.sin(angle) * enemy.speed;
    enemy.x += enemy.dx * 2;
    enemy.y += enemy.dy * 2;
  }

  if (!enemy.crucibleStopped) {
    enemy.crucibleShockwaveCooldown--;
    if (enemy.crucibleShockwaveCooldown <= 0) {
      enemy.crucibleShockwaveActive = true;
      enemy.crucibleShockwaveTimer = 24;
      enemy.crucibleShockwaveCooldown = 420;

      bullets = [];
      let angle = Math.atan2(py - ey, px - ex);
      player.x += Math.cos(angle) * 50;
      player.y += Math.sin(angle) * 50;
      createParticle(px, py, "red");
      createParticle(ex, ey, "red");
    }
  } else {
    enemy.crucibleShockwaveCooldown = 420;
  }
  if (enemy.crucibleShockwaveActive) {
    enemy.crucibleShockwaveTimer--;
    if (enemy.crucibleShockwaveTimer <= 0) {
      enemy.crucibleShockwaveActive = false;
    }
  }
if (enemy.name === "Crucible") {
  if (enemy.crucibleShockwaveActive) {
    if (enemy.crucibleShockwaveRadius == null) enemy.crucibleShockwaveRadius = 0;
    enemy.crucibleShockwaveRadius += 30;

    if (enemy.crucibleShockwaveRadius > 1200) {
      enemy.crucibleShockwaveRadius = 0;
      enemy.crucibleShockwaveHitPlayer = false;
    }
  } else {
    enemy.crucibleShockwaveRadius = 0;
    enemy.crucibleShockwaveHitPlayer = false;
  }
}



  if (enemy.crucibleStopped && !enemy.crucibleShockwaveActive) {
    enemy.cruciblePullTimer--;
    if (enemy.cruciblePullTimer <= 0 && !enemy.cruciblePullActive) {
      enemy.cruciblePullActive = true;
      enemy.cruciblePullLine = {
        from: { x: ex, y: ey },
        to: { x: px, y: py },
        timer: 36,
      };
    }
  } else {
    enemy.cruciblePullTimer = 120;
    enemy.cruciblePullActive = false;
    enemy.cruciblePullLine = null;
  }
  if (enemy.cruciblePullActive && enemy.cruciblePullLine) {
    let line = enemy.cruciblePullLine;
    let pullAngle = Math.atan2(ey - (player.y + player.h / 2), ex - (player.x + player.w / 2));
    player.x += Math.cos(pullAngle) * 16;
    player.y += Math.sin(pullAngle) * 16;
    if (Math.hypot(ex - (player.x + player.w / 2), ey - (player.y + player.h / 2)) < 20) {
      player.x = ex - player.w / 2;
      player.y = ey - player.h / 2;
    }
    line.timer--;
    if (line.timer <= 0) {
      enemy.cruciblePullActive = false;
      enemy.cruciblePullLine = null;
      enemy.cruciblePullTimer = 120;
    }
  }

  enemy.crucibleTurretTimer--;
  if (enemy.crucibleTurretTimer <= 0) {
    enemy.crucibleTurretTimer = enemy.crucibleTurretCooldown;
    enemy.crucibleTurretSide = 1 - enemy.crucibleTurretSide;
    let sideAngle = enemy.crucibleTurretSide === 0 ? Math.PI / 2 : -Math.PI / 2;
    let x = ex + Math.cos(sideAngle) * (enemy.w / 2 + 20);
    let y = ey + Math.sin(sideAngle) * (enemy.h / 2 + 20);
    let angleToPlayer = Math.atan2(py - y, px - x);
    fireEnemyBullet(x, y, angleToPlayer, 7, 18, "orange", 40);
    createParticle(x, y, "orange");
  }
}
      if (enemy.boss && enemy.name === "Unix Epoch") {
  updateUnixEpoch(enemy);
}
      
    if (
      player.x < enemy.x + enemy.w &&
      player.x + player.w > enemy.x &&
      player.y < enemy.y + enemy.h &&
      player.y + player.h > enemy.y
    ) {
      if (enemy.type === 'boomling') {
        boomExplosion(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2);
        enemies.splice(i, 1);
        continue;
      }
      if (unlockedSkills.includes("Dash Mastery") && player.isDashing) {
        continue;
      }
        if (voidActive === true) {
            console.log("void used")
            continue;
            }
        
        takePlayerDamage(enemy.boss ? 20 : 0.5);


      updateHUD();
      checkInstinctTrigger();
      checkOverchargeTrigger();


    }
  }
    for (let i = terrashockEruptions.length - 1; i >= 0; i--) {
  const eruption = terrashockEruptions[i];
  eruption.timer--;
  if (eruption.timer === 0 && !eruption.erupting) {
    eruption.erupting = true;

    const dx = (player.x + player.w / 2) - eruption.x;
    const dy = (player.y + player.h / 2) - eruption.y;
    if (Math.hypot(dx, dy) < eruption.radius) {
      takePlayerDamage(40);
      createParticle(eruption.x, eruption.y, 'red');
    }

    for (let j = 0; j < 80; j++) {
      particles.push({
        x: eruption.x,
        y: eruption.y,
        dx: Math.cos((j/80)*2*Math.PI) * (4 + Math.random()*3),
        dy: Math.sin((j/80)*2*Math.PI) * (4 + Math.random()*3),
        life: 40 + Math.random()*12,
        color: 'orange'
      });
    }
  }

  if (eruption.timer < -15) {
    terrashockEruptions.splice(i, 1);
  }
}
}

function updateUnixEpoch(boss) {
    if (!boss.segfaultActive && !boss.phase3Active) {
  let angle = Math.atan2(player.y - boss.y, player.x - boss.x);
  boss.dx = Math.cos(angle) * boss.speed;
  boss.dy = Math.sin(angle) * boss.speed;
} else {
  boss.dx = 0;
  boss.dy = 0;
}
  if (boss.phase === 1 && boss.hp <= boss.maxhp * 0.5) {
    boss.phase = 2;
    boss.bitflipCooldown = 600;
    boss.garbageCooldown = 900;
    boss.segfaultCooldown = 900;
    createParticle(boss.x, boss.y, "lime");
  }
if (boss.phase < 3 && boss.hp <= boss.maxhp * 0.1) {
  boss.phase = 3;
  boss.phase3Active = true;
  boss.phase3Timer = 300;
  boss.phase3Heal = boss.maxhp * 0.25 - boss.hp;
  createParticle(boss.x, boss.y, "white");
  if (!boss.phase3SpawnedBoss) {
    const bossPool = ["Blob King", "Terrashock", "GUNGEAR", "Masquerade", "Necron", "Blinkblade", "Crucible"];
    const pick = bossPool[Math.floor(Math.random() * bossPool.length)];
    spawnBoss(pick, { fromNecron: true });
    boss.phase3SpawnedBoss = true;
  }
}
if (boss.phase3Active) {
  boss.hp += boss.phase3Heal / 300;
  if (boss.hp > boss.maxhp * 0.25) boss.hp = boss.maxhp * 0.25;
  if (--boss.phase3Timer <= 0) {
    boss.phase3Active = false;
  }
  return;
}

  boss.timeLockCooldown--;
  if (boss.timeLockCooldown <= 0 && !boss.timeLockActive) {
    boss.timeLockActive = true;
    boss.timeLockTimer = 180; 
    boss.timeLockCooldown = boss.phase === 3 ? 600 : 900;

  timeLockFlashTimer = 70;
  timeLockFlashText = boss.phase >= 2 ? "DOUBLE TIME LOCK" : "TIME LOCK";
}
  if (boss.timeLockActive) {
    player.speed *= 0.25 ;
    bulletSpeedMultiplier = 0.5;
    if (boss.phase >= 2) player.dashCooldown *= 3;
    boss.timeLockTimer--;
    if (boss.timeLockTimer <= 0) {
        player.speed = 40 + (statUpgrades.speed * 2);
      boss.timeLockActive = false;
      if (unlockedSkills.includes("Velocity")) {
        bulletSpeedMultiplier = 1.5   
      }
        else {
            bulletSpeedMultiplier = 1
            }
    }
  }

  boss.binaryFireTimer--;
  if (boss.binaryFireTimer <= 0 && !boss.timeLockActive && !boss.garbageActive) {
    fireUnixBinaryShot(boss, player);
    boss.binaryFireTimer = 40;
  }

  boss.moduloCooldown--;
if (boss.moduloCooldown <= 0 && !boss.moduloActive && !boss.garbageActive) {
  boss.moduloActive = true;
  boss.moduloNum = Math.floor(Math.random() * 5) + 3;
  boss.moduloTimer = 0;
  boss.moduloCooldown = 1200;

  moduloFlashTimer = 70;
  moduloFlashNum = boss.moduloNum;
}
  if (boss.moduloActive) {
    if (boss.moduloNum > 0 && boss.moduloTimer % 12 === 0) {
      fireUnixModuloShot(boss, player, boss.moduloNum);
      boss.moduloNum--;
    }
    boss.moduloTimer++;
    if (boss.moduloNum <= 0) boss.moduloActive = false;
  }

  if (boss.phase >= 2) {
    boss.bitflipCooldown--;
    if (boss.bitflipCooldown <= 0 && !boss.bitflipActive && !boss.garbageActive) {
      boss.bitflipActive = true;
      boss.bitflipTimer = 300;
      boss.bitflipRemap = scrambleControls();
      showErrorMessage();
      boss.bitflipCooldown = 600;
    }
    if (boss.bitflipActive) {
      remapControls(boss.bitflipRemap);
      boss.bitflipTimer--;
      if (boss.bitflipTimer <= 0) {
        restoreControls();
        boss.bitflipActive = false;
      }
    }
  }

  if (boss.phase >= 2) {
    boss.garbageCooldown--;
    if (boss.garbageCooldown <= 0 && !boss.garbageActive) {
      boss.garbageActive = true;
      boss.garbageWindup = 120;
      showGarbageMessage();
    }
    if (boss.garbageActive) {
      if (boss.garbageWindup > 0) {
        boss.garbageWindup--;
      } else {
        bullets.length = 0; projectiles.length = 0;
        boss.hp = Math.min(boss.maxhp, boss.hp + boss.maxhp * 0.1);
        boss.garbageActive = false;
        boss.garbageCooldown = 1800;
      }
    }
  }

  if (boss.phase >= 2) {
    boss.segfaultCooldown--;
    if (boss.segfaultCooldown <= 0 && !boss.segfaultActive && !boss.garbageActive) {
      boss.segfaultActive = true;
      boss.segfaultTimer = 60;
      boss.segfaultStart = { x: boss.x, y: boss.y };
      boss.segfaultEnd = {
        x: Math.random() * (canvas.width - boss.w),
        y: Math.random() * (canvas.height - boss.h)
      };
      boss.segfaultTrail = [];
      boss.segfaultCooldown = 900;
    }
    if (boss.segfaultActive) {
      const t = 1 - boss.segfaultTimer / 60;
      boss.x = boss.segfaultStart.x + (boss.segfaultEnd.x - boss.segfaultStart.x) * t;
      boss.y = boss.segfaultStart.y + (boss.segfaultEnd.y - boss.segfaultStart.y) * t;
      boss.segfaultTrail.push({ x: boss.x + boss.w / 2, y: boss.y + boss.h / 2, timer: 20 });
      if (boss.segfaultTimer % 10 === 0) {
        fireUnixBinaryExplosion(boss.x + boss.w / 2, boss.y + boss.h / 2);
      }
      boss.segfaultTimer--;
      if (boss.segfaultTimer <= 0) boss.segfaultActive = false;
    }
  }
    }
function fireUnixBinaryShot(boss, player, customAngle) {
  const angle = customAngle !== undefined
    ? customAngle
    : Math.atan2(player.y + player.h / 2 - (boss.y + boss.h / 2), player.x + player.w / 2 - (boss.x + boss.w / 2));
  const type = Math.random() < 0.5 ? 0 : 1;
  fireEnemyBullet(
    boss.x + boss.w / 2, boss.y + boss.h / 2,
    angle, 7, 16, type === 0 ? "#00ffff" : "#ff00ff", 30,
    { unixBinary: type }
  );
}

function fireUnixModuloShot(boss, player, count) {
  const baseAngle = Math.atan2(player.y + player.h / 2 - (boss.y + boss.h / 2), player.x + player.w / 2 - (boss.x + boss.w / 2));
  for (let i = 0; i < count; i++) {
    const spread = (i - (count - 1) / 2) * (Math.PI / (count + 1));
    fireUnixBinaryShot(boss, player, baseAngle + spread);
  }
}

function fireUnixBinaryExplosion(x, y) {
  for (let b = 0; b < 12; b++) {
    fireEnemyBullet(x, y, b * Math.PI / 6, 6, 14, "#00ff99", 25, {
      unixBinary: Math.random() < 0.5 ? 0 : 1
    });
  }
}

function scrambleControls() {
  const keysArr = ['w', 'a', 's', 'd'];
  const perm = keysArr.slice().sort(() => Math.random() - 0.5);
  const mapping = {};
  for (let i = 0; i < 4; i++) mapping[keysArr[i]] = perm[i];
  bitflipActive = true;
  return mapping;
}

function remapControls(map) {
  currentControlMap = { ...map };
}
function restoreControls() {
  currentControlMap = { ...originalControlMap };
  bitflipActive = false;
}
function showGarbageMessage() {
  garbageFlashTimer = 120;
}
function showErrorMessage() {
  bitflipFlashTimer = 90;
}
function drawUnixEpochOverlays() {
  if (bitflipFlashTimer > 0) {
    ctx.save();
    ctx.font = "bold 54px monospace";
    ctx.fillStyle = "#ff00ff";
    ctx.globalAlpha = 0.8 * (bitflipFlashTimer / 90);
    ctx.textAlign = "center";
    ctx.shadowColor = "#ff00ff";
    ctx.shadowBlur = 16;
    ctx.fillText(">> unexpected control shift @ 0xFF2A", canvas.width / 2, canvas.height / 3);
    ctx.restore();
    bitflipFlashTimer--;
  }
  if (garbageFlashTimer > 0) {
    ctx.save();
    ctx.font = "bold 70px Orbitron, monospace";
    ctx.fillStyle = "#00ffff";
    ctx.globalAlpha = 0.7 * (garbageFlashTimer / 120);
    ctx.textAlign = "center";
    ctx.shadowColor = "#00ffff";
    ctx.shadowBlur = 32;
    ctx.fillText("COLLECTING...", canvas.width / 2, canvas.height / 2.2);
    ctx.restore();
    garbageFlashTimer--;
  }
    if (timeLockFlashTimer > 0) {
  ctx.save();
  ctx.font = "bold 90px Orbitron, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = 0.7 * (timeLockFlashTimer / 70);
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 30;
  ctx.fillStyle = "#00fff6";
  ctx.fillText(timeLockFlashText, canvas.width / 2, canvas.height / 2);
  ctx.restore();
  timeLockFlashTimer--;
}
    if (moduloFlashTimer > 0) {
  ctx.save();
  ctx.font = "bold 90px Orbitron, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.globalAlpha = 0.7 * (moduloFlashTimer / 70);
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 30;
  ctx.fillStyle = "#00fff6";
  ctx.fillText("MODULO " + moduloFlashNum, canvas.width / 2, canvas.height / 2);
  ctx.restore();
  moduloFlashTimer--;
}
}
function handleUnixEpochStatusEffects() {
  const timeLockActive = enemies.some(e => e.name === "Unix Epoch" && e.timeLockActive);

  if (playerStunTimer > 0) {
    playerStunTimer--;
  }
  if (playerSlowTimer > 0) {
    playerSlowTimer--;
    player.speed = 20;
  } else if (!bitflipActive && !timeLockActive) {
    player.speed = 40 + (statUpgrades.speed * 2);
  } else if (timeLockActive) {
    player.speed = Math.max(10, (40 + (statUpgrades.speed * 2)) * 0.25);
  }
}
function applyUnixEpochBulletEffect(bullet) {
  if (bullet.unixBinary === 0) {
    playerSlowTimer = 180;
  } else if (bullet.unixBinary === 1) {
    playerStunTimer = 60;
  }
}

function drawUnixSegfaultTrail(enemy) {
  if (enemy.segfaultTrail) {
    for (const t of enemy.segfaultTrail) {
      ctx.save();
      ctx.globalAlpha = t.timer / 20;
      ctx.beginPath();
      ctx.arc(t.x, t.y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = "#00ff99";
      ctx.shadowColor = "#00ff99";
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.restore();
      t.timer = Math.max(0, t.timer - 1);
    }
    enemy.segfaultTrail = enemy.segfaultTrail.filter(t => t.timer > 0);
  }
}

function takePlayerDamage(amount) {
  if (unlockedSkills.includes("Shield Generator") && player.shield > 0) {
    player.shield -= amount;
    if (player.shield < 0) {
      hp += player.shield;
      player.shield = 0;
    }
    player.shieldRegenTimer = 300;
    updateHUD();
    return;
  }
  hp -= amount * resilienceMulti;
  updateHUD();
    
          if (hp <= 0) {
          if (unlockedSkills.includes("Second Wind") && secondWind === true) {
  hp = Math.floor(maxHP * 0.25);
  secondWind = false;
  updateHUD();
createParticle(player.x, player.y, "green")
createParticle(player.x, player.y, "gold")
  return;
}
        saveGame();
        pause = true;
        document.getElementById("deathScreen").style.display = "flex";
        minions.length = 0;
        for (const key in skillCooldowns) {
          skillCooldowns[key] = 0;
        }
      }
}

function addWeaponToInventory(weaponName) {
  if (!inventory.includes(weaponName)) {
    inventory.push(weaponName);
    weaponLevels[weaponName] = weaponLevels[weaponName] || 1;
    currentWeapon = weaponName;
    applyStats();
    drawInventory();
  }
}

function updateSkillProjectiles() {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    if (p.type !== "Fireball") continue;

    p.x += p.dx;
    p.y += p.dy;

    p.trail.push({ x: p.x, y: p.y, radius: p.radius });
    if (p.trail.length > 15) p.trail.shift();

    for (let j = 0; j < p.trail.length; j++) {
      p.trail[j].radius *= 0.95;
      if (p.trail[j].radius < 0.5) p.trail.splice(j, 1);
    }

    for (let j = 0; j < enemies.length; j++) {
      const e = enemies[j];
      const dx = (e.x + e.w / 2) - p.x;
      const dy = (e.y + e.h / 2) - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < p.radius + e.w / 2) {
        if (p.explosive) {
          const radius = 200;
          const explosionDamage = (250) * magicMulti;

          for (let k = enemies.length - 1; k >= 0; k--) {
            const other = enemies[k];
            const ex = (other.x + other.w / 2) - p.x;
            const ey = (other.y + other.h / 2) - p.y;
            const edist = Math.hypot(ex, ey);

            if (edist < radius) {
takeEnemyDamage(other, explosionDamage);
            }
          }

          for (let pz = 0; pz < 60; pz++) {
            particles.push({
              x: p.x,
              y: p.y,
              dx: Math.random() * 6 - 3,
              dy: Math.random() * 6 - 3,
              radius: Math.random() * 4 + 2,
              life: 50,
              color: "rgba(255, 50, 0, 0.6)"
            });
          }

          projectiles.splice(i, 1);
          break;
        }
      }
    }

    p.lifetime--;
    if (p.lifetime <= 0) {
      projectiles.splice(i, 1);
    }
  }
    updatePulses();
    for (let i = projectiles.length - 1; i >= 0; i--) {
  const p = projectiles[i];
  if (p.shape === "diamond") {
    p.x += p.dx;
    p.y += p.dy;

    enemies.forEach((e, j) => {
      if (
        p.x < e.x + e.w &&
        p.x + p.size > e.x &&
        p.y < e.y + e.h &&
        p.y + p.size > e.y
      ) {
takeEnemyDamage(e, (100) * magicMulti);

        projectiles.splice(i, 1);
      }
    });
  }
}
updateBlackHoles();
    updateMeteors();

}

function updatePulses() {
  for (let i = pulses.length - 1; i >= 0; i--) {
    const pulse = pulses[i];
    pulse.radius += 6;
    pulse.alpha -= 0.02;

    enemies.forEach(e => {
      const dx = (e.x + e.w / 2) - pulse.x;
      const dy = (e.y + e.h / 2) - pulse.y;
      const dist = Math.hypot(dx, dy);

      if (dist < pulse.radius && !e.stunned) {
        e.stunned = 240;
        const pushForce = 8;
        const angle = Math.atan2(dy, dx);
        e.x += Math.cos(angle) * pushForce;
        e.y += Math.sin(angle) * pushForce;
      }
    });

    if (pulse.radius > pulse.maxRadius || pulse.alpha <= 0) {
      pulses.splice(i, 1);
    }
  }
}
function updateBlackHoles() {
  for (let i = activeBlackHoles.length - 1; i >= 0; i--) {
    let bh = activeBlackHoles[i];
    bh.life--;
    bh.swirlAngle += 0.2;

    for (let e of enemies) {
      if (!e.trappedByBlackHole) {
        const dx = bh.x - (e.x + e.w / 2);
        const dy = bh.y - (e.y + e.h / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < 300 && dist > bh.radius - e.w / 2) {
          const angle = Math.atan2(dy, dx);
          const pullStrength = 2.5 * (1 - dist / 300);
          e.x += Math.cos(angle) * pullStrength;
          e.y += Math.sin(angle) * pullStrength;
        }
        if (dist <= bh.radius - e.w / 2) {
          e.trappedByBlackHole = {
            blackHole: bh,
            orbitAngle: Math.random() * Math.PI * 2,
            orbitRadius: Math.random() * (bh.radius * 0.4)
          };
        }
      } else if (e.trappedByBlackHole && e.trappedByBlackHole.blackHole === bh) {
        e.trappedByBlackHole.orbitAngle += 0.09;
        let r = bh.radius * 0.5 + e.trappedByBlackHole.orbitRadius;
        e.x = bh.x + Math.cos(e.trappedByBlackHole.orbitAngle) * r - e.w / 2;
        e.y = bh.y + Math.sin(e.trappedByBlackHole.orbitAngle) * r - e.h / 2;
      }
    }
    if (bh.life % 60 === 0) {
      createParticle(bh.x, bh.y, "purple");
    }

    if (bh.life <= 0) {
      for (let e of enemies) {
        if (e.trappedByBlackHole && e.trappedByBlackHole.blackHole === bh) {
          e.trappedByBlackHole = null;
        }
      }
      activeBlackHoles.splice(i, 1);
    }
  }
}
function drawBlackHoles() {
  for (let bh of activeBlackHoles) {
    ctx.save();
    ctx.translate(bh.x, bh.y);
    for (let i = 0; i < 10; i++) {
      ctx.save();
      ctx.rotate(bh.swirlAngle + i * (Math.PI * 2) / 10);
      ctx.globalAlpha = 0.7 - i * 0.06;
      ctx.beginPath();
      ctx.arc(30 + Math.sin(bh.swirlAngle + i) * 12, 0, 14 - i, 0, Math.PI * 2);
      ctx.strokeStyle = `hsl(${270 + i * 15}, 100%, 60%)`;
      ctx.lineWidth = 5 - i * 0.4;
      ctx.shadowColor = "purple";
      ctx.shadowBlur = 16 - i;
      ctx.stroke();
      ctx.restore();
    }
    ctx.restore();
  }
}
function updateMeteors() {
  for (let i = activeMeteors.length - 1; i >= 0; i--) {
    let m = activeMeteors[i];
    if (!m.hit) {
      m.showCircle--;
      if (m.showCircle <= 0) {
        m.hit = true;
        m.timer = 0;
        for (let p = 0; p < 60; p++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 8 + Math.random() * 6;
          particles.push({
            x: m.x,
            y: m.y,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            life: 50 + Math.random() * 30,
            color: `rgba(${180+Math.random()*75},${40+Math.random()*80},0,${0.7+Math.random()*0.3})`
          });
        }
        for (let p = 0; p < 30; p++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 3 + Math.random() * 2;
          particles.push({
            x: m.x,
            y: m.y,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            life: 60 + Math.random() * 20,
            color: "orange"
          });
        }
for (let ej = enemies.length - 1; ej >= 0; ej--) {
    meteorRadius = 300
  const e = enemies[ej];
  const dx = e.x + e.w / 2 - m.x;
  const dy = e.y + e.h / 2 - m.y;
  const dist = Math.hypot(dx, dy);
  if (dist < meteorRadius) {
takeEnemyDamage(e, 50000 * magicMulti);
  }
        }
      }
    } else if (m.hit) {
      m.timer++;
      if (m.timer > 45) {
        activeMeteors.splice(i, 1);
      }
    }
  }
}
function rectCircleCollides(ex, ey, ew, eh, cx, cy, radius) {
  const closestX = Math.max(ex, Math.min(cx, ex + ew));
  const closestY = Math.max(ey, Math.min(cy, ey + eh));
  const dx = closestX - cx;
  const dy = closestY - cy;
  return (dx * dx + dy * dy) <= radius * radius;
}
function drawMeteors() {
  for (const m of activeMeteors) {
    if (!m.hit) {
      ctx.save();
      ctx.globalAlpha = 0.38 + 0.12 * Math.sin(m.showCircle * 0.13);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(200,0,0,0.35)";
      ctx.shadowColor = "red";
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = "rgba(255,60,40,0.77)";
      ctx.stroke();
      ctx.restore();
    } else {

      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - m.timer / 45);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.radius + m.timer * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,120,0,${0.6 - m.timer/90})`;
      ctx.shadowColor = "orange";
      ctx.shadowBlur = 35;
      ctx.fill();
      ctx.restore();

      if (m.timer < 15) {
        ctx.save();
        ctx.globalAlpha = 0.9 - m.timer / 20;
        ctx.beginPath();
        ctx.ellipse(m.x, m.y - (120 - m.timer * 8), 26, 38, 0, 0, Math.PI * 2);
        ctx.fillStyle = "brown";
        ctx.shadowColor = "orange";
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(m.x, m.y - (120 - m.timer * 8), 14, 0, Math.PI * 2);
        ctx.fillStyle = "darkred";
        ctx.fill();
        ctx.restore();
      }
    }
  }
}
function drawSkillProjectiles() {
  for (const p of projectiles) {
    if (p.type === "Fireball") {
      for (let t of p.trail) {
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 50, 0, 0.3)";
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
    }

    if (p.shape === "diamond") {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(Math.atan2(p.dy, p.dx));
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size, 0);
      ctx.lineTo(0, p.size);
      ctx.lineTo(-p.size, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  drawPulses();

  for (let i = activeLightningLines.length - 1; i >= 0; i--) {
    const chain = activeLightningLines[i];
    const points = chain.points;

    for (let j = 0; j < points.length - 1; j++) {
      const a = points[j];
      const b = points[j + 1];
      drawLightningLine(a.x, a.y, b.x, b.y, "cyan");
    }

    chain.duration--;
    if (chain.duration <= 0) {
      activeLightningLines.splice(i, 1);
    }
  }
    drawBlackHoles();
    drawMeteors();
}


function drawPulses() {
  for (const p of pulses) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(0, 200, 255, ${p.alpha})`;
    ctx.lineWidth = 4;
    ctx.stroke();
  }
}

function createLightningEffect(from, to) {
  createParticle(to.x, to.y, "rgba(255,255,0,0.8)", 6);
  createParticle(to.x, to.y, "rgba(255,255,255,0.8)", 4);
}

function drawLightningLine(x1, y1, x2, y2, color = "cyan") {
  ctx.save();

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.shadowColor = color;
  ctx.shadowBlur = 15;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  ctx.restore();
}
function drawTimeStopTextFragments() {
  if (timeStopTextAnimation <= 0) return;
  for (let frag of timeStopTextFragments) {
    ctx.save();
    ctx.globalAlpha = frag.alpha * (frag.life / 30);
    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "#00f6ff";
    ctx.shadowColor = "#0ff";
    ctx.shadowBlur = 16;
    ctx.translate(frag.x, frag.y);
    ctx.rotate(frag.dx * 0.05);
    ctx.fillText(frag.char, 0, 0);
    ctx.restore();

    frag.x += frag.dx;
    frag.y += frag.dy;
    frag.life--;
    frag.alpha -= 0.03;
  }
  timeStopTextFragments = timeStopTextFragments.filter(frag => frag.life > 0 && frag.alpha > 0);
  timeStopTextAnimation--;

  ctx.save();
  ctx.font = "bold 70px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#0ff";
  ctx.shadowBlur = 40;
  ctx.globalAlpha = 0.85 + 0.15 * Math.sin(timeStopEffectFrame * 0.1);
  ctx.fillStyle = "#fff";
  ctx.fillText("TIME STOPPED!", canvas.width / 2, canvas.height / 2);
  ctx.restore();

  for (let i = 0; i < timeStopEffectParticles.length; i++) {
    const p = timeStopEffectParticles[i];
    ctx.save();
    ctx.globalAlpha = p.life / 40;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    p.radius *= 0.98;

    if (p.life <= 0) {
      timeStopEffectParticles.splice(i, 1);
      i--;
    }
  }

  timeStopEffectFrame++;
}

function updateMinions() {
  minions.forEach((minion, index) => {
    if (!minion.target || enemies.indexOf(minion.target) === -1) {
      minion.target = getClosestEnemy(minion.x, minion.y);
    }

    if (minion.target) {
      const dx = minion.target.x + minion.target.w / 2 - minion.x;
      const dy = minion.target.y + minion.target.h / 2 - minion.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 2) {
        const angle = Math.atan2(dy, dx);
        minion.x += Math.cos(angle) * minion.speed;
        minion.y += Math.sin(angle) * minion.speed;
      }

      if (
        minion.x < minion.target.x + minion.target.w &&
        minion.x + minion.w > minion.target.x &&
        minion.y < minion.target.y + minion.target.h &&
        minion.y + minion.h > minion.target.y
      ) {
        let exchangeDmg = 10;
          exchangeDmg = 10 * magicMulti
        minion.hp -= exchangeDmg;
takeEnemyDamage(minion.target, exchangeDmg);
        minion.cooldown = 30;
      }
    }

    if (minion.hp <= 0) {
      if (minion.type === "boss") {
    createParticle(minion.x, minion.y, 'gold');
      minions.splice(index, 1);
      return;
          }
        else {
    createParticle(minion.x, minion.y, 'cyan');
      minions.splice(index, 1);
      return;
    }
        }

    if (minion.type === "boss") {
      if (minion.summonTimer > 0) {
        minion.summonTimer--;
      }
      if (minion.summonTimer === 0 || minion.summonTimer === undefined) {
        if (minion.summonTimer === undefined) minion.summonTimer = 600;
        else {
          const summoned = {
            x: minion.x + minion.w / 2,
            y: minion.y + minion.h / 2,
            w: 30,
            h: 30,
            hp: 100 * magicMulti,
            speed: 2.5,
            color: "cyan",
            target: null,
            cooldown: 0,
            type: "minion"
          };
          minions.push(summoned);
          minion.summonTimer = 600;
        }
      }
    }
  });
}

function drawMinions() {
  for (const minion of minions) {
    ctx.save();

    const centerX = minion.x + minion.w / 2;
    const centerY = minion.y + minion.h / 2;
    const radius = minion.w / 2;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = minion.color;
    ctx.shadowColor = minion.color;
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.translate(centerX, centerY);

    if (minion.type === "tanklet") {
      ctx.fillStyle = "white";
      ctx.fillRect(-8, -8, 16, 16);
    } if (minion.type === "boss") {
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
    const innerAngle = angle + Math.PI / 5;
    const outerX = Math.cos(angle) * 12;
    const outerY = Math.sin(angle) * 12;
    const innerX = Math.cos(innerAngle) * 5;
    const innerY = Math.sin(innerAngle) * 5;
    if (i === 0) ctx.moveTo(outerX, outerY);
    else ctx.lineTo(outerX, outerY);
    ctx.lineTo(innerX, innerY);
  }
  ctx.closePath();
  ctx.fill();
}
    else {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(-12, 9);
      ctx.lineTo(-6, 0);
      ctx.lineTo(-12, -9);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }
}




function renderLaserBeam() {
  if (!laserBeam.active) return;

  ctx.save();
  ctx.strokeStyle = "cyan";
  ctx.lineWidth = 20;
  ctx.shadowColor = "cyan";
  ctx.shadowBlur = 15;

  const beamLength = 1500;
  const centerX = player.x + player.w / 2;
  const centerY = player.y + player.h / 2;

  const endX = centerX + Math.cos(player.angle) * beamLength;
  const endY = centerY + Math.sin(player.angle) * beamLength;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}
function updateBullets() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
  if (bullet.enemyCooldowns) {
    for (const id in bullet.enemyCooldowns) {
      if (bullet.enemyCooldowns[id] > 0) bullet.enemyCooldowns[id]--;
    }
  }
    if (bullet.plasma) {
      bullet.x += bullet.dx;
      bullet.y += bullet.dy;
      bullet.trail.push({ x: bullet.x, y: bullet.y, radius: bullet.w / 2, alpha: 0.7 });
      if (bullet.trail.length > 18) bullet.trail.shift();
      for (let t of bullet.trail) t.radius *= 0.96;
      if (
        bullet.x < 0 || bullet.x > canvas.width ||
        bullet.y < 0 || bullet.y > canvas.height
      ) {
        explodePlasma(bullet.x, bullet.y, bullet.aoeRadius, i);
        continue;
      }

      let exploded = false;
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        const dx = (e.x + e.w / 2) - bullet.x;
        const dy = (e.y + e.h / 2) - bullet.y;
        const dist = Math.hypot(dx, dy);
        if (dist < bullet.w / 2 + e.w / 2) {
          explodePlasma(bullet.x, bullet.y, bullet.aoeRadius, i);
          exploded = true;
          break;
        }
      }
      if (exploded) continue;

      ctx.save();
      for (let t of bullet.trail) {
        ctx.globalAlpha = t.alpha * (t.radius / (bullet.w / 2));
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120,60,255,0.21)";
        ctx.shadowColor = "cyan";
        ctx.shadowBlur = 12;
        ctx.fill();
      }
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.w / 2, 0, Math.PI * 2);
      ctx.fillStyle = bullet.color;
      ctx.shadowColor = "cyan";
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.restore();

      continue;
    }

if (bullet.boomerang) {
  let targetX, targetY;

  if (bullet.state === "out") {
    targetX = bullet.peakX;
    targetY = bullet.peakY;
    const dist = Math.hypot(targetX - bullet.x, targetY - bullet.y);
    if (dist < 10) bullet.state = "return";
  } else if (bullet.state === "return") {
    targetX = player.x + player.w / 2;
    targetY = player.y + player.h / 2;
    const dist = Math.hypot(targetX - bullet.x, targetY - bullet.y);
    if (dist < 20) {
      bullets.splice(i, 1);
      continue;
    }
  }

  const angleToTarget = Math.atan2(targetY - bullet.y, targetX - bullet.x);
  bullet.dx = Math.cos(angleToTarget) * bullet.speed;
  bullet.dy = Math.sin(angleToTarget) * bullet.speed;

  bullet.x += bullet.dx;
  bullet.y += bullet.dy;

  for (let j = enemies.length - 1; j >= 0; j--) {
    const enemy = enemies[j];
    if (
      bullet.x < enemy.x + enemy.w &&
      bullet.x + bullet.w > enemy.x &&
      bullet.y < enemy.y + enemy.h &&
      bullet.y + bullet.h > enemy.y
    ) {
      let crit = 1;
      if (
        unlockedSkills.includes("Critical Aim") &&
        Math.random() < 0.10
      ) {
        crit = 2;
        createParticle(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, 'gold');
      }
      takeEnemyDamage(enemy, player.damage * crit);
      if (enemy.type === 'boomling') {
        boomExplosion(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2);
      }
    }
  }
bullet.rotation += 0.35;
    
  ctx.save();
  ctx.translate(bullet.x, bullet.y);
  ctx.rotate(bullet.rotation);
  ctx.fillStyle = "#b4aaff";
  ctx.beginPath();
  ctx.moveTo(0, -18);
  ctx.lineTo(12, 9);
  ctx.lineTo(-12, 9);
  ctx.closePath();
  ctx.shadowColor = "#a0aaff";
  ctx.shadowBlur = 14;
  ctx.fill();
  ctx.restore();
  continue;
}
    if (bullet.explosive) {
      bullet.x += bullet.dx;
      bullet.y += bullet.dy;

      if (
        bullet.x < 0 || bullet.x > canvas.width ||
        bullet.y < 0 || bullet.y > canvas.height
      ) {
        explodeMissile(bullet.x, bullet.y, i);
        continue;
      }
      let exploded = false;
      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        if (
          bullet.x < e.x + e.w &&
          bullet.x + bullet.w > e.x &&
          bullet.y < e.y + e.h &&
          bullet.y + bullet.h > e.y
        ) {
          explodeMissile(bullet.x, bullet.y, i);
          exploded = true;
          break;
        }
      }
      if (exploded) continue;

      ctx.save();
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.w / 2, 0, Math.PI * 2);
      ctx.fillStyle = bullet.color;
      ctx.shadowColor = "orange";
      ctx.shadowBlur = 24;
      ctx.fill();
      ctx.restore();
      continue;
    }

    bullet.x += bullet.dx;
    bullet.y += bullet.dy;

    if (
      unlockedSkills.includes("Ricochet") &&
      !bullet.laser && !bullet.boomerang && !bullet.plasma && !bullet.explosive
    ) {
      let bounced = false;
      if (bullet.x < 0) {
        bullet.x = 0;
        bullet.dx *= -1;
        bounced = true;
      }
      if (bullet.x + bullet.w > canvas.width) {
        bullet.x = canvas.width - bullet.w;
        bullet.dx *= -1;
        bounced = true;
      }
      if (bullet.y < 0) {
        bullet.y = 0;
        bullet.dy *= -1;
        bounced = true;
      }
      if (bullet.y + bullet.h > canvas.height) {
        bullet.y = canvas.height - bullet.h;
        bullet.dy *= -1;
        bounced = true;
      }
      if (bounced && bullet.maxBounces !== undefined) {
        bullet.bounces++;
        if (bullet.bounces > bullet.maxBounces) {
          bullets.splice(i, 1);
          continue;
        }
      }
    } else {
      if (
        bullet.x < 0 || bullet.x > canvas.width ||
        bullet.y < 0 || bullet.y > canvas.height
      ) {
        bullets.splice(i, 1);
        continue;
      }
    }
    ctx.fillStyle = bullet.color || 'yellow';
    ctx.beginPath();
    ctx.arc(bullet.x, bullet.y, bullet.w / 2, 0, Math.PI * 2);
    ctx.fill();
    for (let j = enemies.length - 1; j >= 0; j--) {
  const enemy = enemies[j];
  if (
    bullet.x < enemy.x + enemy.w &&
    bullet.x + bullet.w > enemy.x &&
    bullet.y < enemy.y + enemy.h &&
    bullet.y + bullet.h > enemy.y
  ) {
    let canHit = true;
    if (unlockedSkills.includes("Piercing Bullets") && bullet.enemyCooldowns) {
      if (bullet.enemyCooldowns[enemy.id] > 0) canHit = false;
      else bullet.enemyCooldowns[enemy.id] = 180;
    }
             if (canHit) {

    let dmg = bullet.laser ? player.damage * 0.2 : player.damage * 2;
    let crit = 1;
    if (
      unlockedSkills.includes("Critical Aim") &&
      !bullet.laser && !bullet.boomerang && !bullet.plasma &&
      Math.random() < 0.10
    ) {
      crit = 2;
      createParticle(enemy.x + enemy.w / 2, enemy.y + enemy.h / 2, 'gold');
    }
    takeEnemyDamage(enemy, dmg * crit);

    if (
      !bullet.laser &&
      !bullet.boomerang &&
      !unlockedSkills.includes("Piercing Bullets")
    ) {
      bullets.splice(i, 1);
    }
    break; 
  }
}
      }
    }

    canvas.addEventListener('mouseup', e => {
  mouseDown = false;
  if (currentWeapon === 'minigun') {
    minigunHoldTimer = 0;
    minigunCurrentFireRate = weaponsData.minigun.fireRate;
  }
});
    }
function explodeMissile(x, y, bulletIndex) {
  const radius = 200;
  const explosionDamage = 10 + player.damage * 2;

  for (let ej = enemies.length - 1; ej >= 0; ej--) {
    const e = enemies[ej];
    const dx = e.x + e.w / 2 - x;
    const dy = e.y + e.h / 2 - y;
    const dist = Math.hypot(dx, dy);
    if (dist < radius) {
takeEnemyDamage(e, explosionDamage);
    }
  }
  for (let p = 0; p < 100; p++) {
    particles.push({
      x: x,
      y: y,
      dx: Math.random() * 10 - 5,
      dy: Math.random() * 10 - 5,
      life: 50,
      color: 'orange'
    });
  }
  bullets.splice(bulletIndex, 1);
}

function explodePlasma(x, y, aoeRadius, bulletIndex) {
  for (let k = enemies.length - 1; k >= 0; k--) {
    const e = enemies[k];
    const dx = (e.x + e.w / 2) - x;
    const dy = (e.y + e.h / 2) - y;
    const dist = Math.hypot(dx, dy);
    if (dist < aoeRadius + e.w / 2) {
takeEnemyDamage(e, 20 + player.damage * 3);
    }
  }
  for (let pz = 0; pz < 60; pz++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 3;
    particles.push({
      x: x,
      y: y,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      radius: Math.random() * 5 + 2,
      life: 45 + Math.random() * 18,
      color: "rgba(120,60,255,0.5)"
    });
  }
  bullets.splice(bulletIndex, 1);
}
function swordAttack(x, y, charge = 0) {
  if (swordAttackTimer > 0) return;
  swordAttackTimer = weaponsData.sword.fireRate;

  swordSwinging = true;
  swordSwingTimer = 11 + Math.floor(charge / 8);
  swordSwingAngle = Math.atan2(y - (player.y + player.h / 2), x - (player.x + player.w / 2));
  swordSwingCharge = charge;

  const minRange = 80;
  const maxRange = 220;
  const range = minRange + ((maxRange - minRange) * (charge / swordChargeMax));
  const arc = Math.PI / 3; 
  const damage = (10 + player.damage * 5) * (1 + charge / (swordChargeMax * 1.1));

  let arcStart = swordSwingAngle - arc/2;
  let arcEnd = swordSwingAngle + arc/2;

  for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    const ex = e.x + e.w / 2;
    const ey = e.y + e.h / 2;
    const dx = ex - (player.x + player.w / 2);
    const dy = ey - (player.y + player.h / 2);
    const dist = Math.hypot(dx, dy);
    if (dist <= range + Math.max(e.w, e.h) / 2) {
      const enemyAngle = Math.atan2(dy, dx);
      let da = enemyAngle - swordSwingAngle;
      while (da < -Math.PI) da += Math.PI * 2;
      while (da > Math.PI) da -= Math.PI * 2;
      if (Math.abs(da) < arc / 2) {
        takeEnemyDamage(e, damage);
      }
    }
  }

  let bigBurst = charge > swordChargeMax * 0.7;
  let particleCount = bigBurst ? 64 : 24 + Math.floor(charge / 2);
  for (let i = 0; i < particleCount; i++) {
    const pa = swordSwingAngle + (Math.random() - 0.5) * arc;
    particles.push({
      x: player.x + player.w / 2 + Math.cos(pa) * range * (0.7 + Math.random() * 0.3),
      y: player.y + player.h / 2 + Math.sin(pa) * range * (0.7 + Math.random() * 0.3),
      dx: Math.cos(pa) * (2 + Math.random() * 3),
      dy: Math.sin(pa) * (2 + Math.random() * 3),
      life: 18 + Math.random() * 12,
      color: bigBurst ? "white" : "cyan"
    });
  }
}

function spearAttack(x, y, charge = 0) {
  if (spearAttackTimer > 0) return;
  spearAttackTimer = weaponsData.spear.fireRate;

  spearStabbing = true;
  spearStabTimer = 12 + Math.floor(charge / 6);
  spearStabAngle = player.angle; 
  spearStabCharge = charge;

  const gripForward = -18;
  const gripRight = 14;
  const px = player.x + player.w / 2
    + Math.cos(player.angle) * gripForward
    + Math.cos(player.angle + Math.PI / 2) * gripRight;
  const py = player.y + player.h / 2
    + Math.sin(player.angle) * gripForward
    + Math.sin(player.angle + Math.PI / 2) * gripRight;

  const baseTipAnim = 60;
  const maxExtraReach = 150;
  let extraReachHit = (charge / spearChargeMax) * maxExtraReach;
  const shaftLengthFront = 200;
  const shaftLengthBehind = 30;
  const tipLen = 30;

  const maxLen = shaftLengthFront + baseTipAnim + extraReachHit + tipLen;
  const minLen = -shaftLengthBehind;
  const width = 26 + charge / 2;
  const damage = (12 + player.damage * 5) * (1 + charge / (spearChargeMax * 1.08));

  if (charge > spearChargeMax * 0.7) {
    for (let i = 0; i < 26; i++) {
      const r = shaftLengthFront + Math.random() * (maxLen - shaftLengthFront - tipLen);
      const pa = player.angle + (Math.random() - 0.5) * 0.06;
      particles.push({
        x: px + Math.cos(pa) * r,
        y: py + Math.sin(pa) * r,
        dx: Math.cos(pa) * (2 + Math.random() * 2),
        dy: Math.sin(pa) * (2 + Math.random() * 2),
        life: 16 + Math.random() * 10,
        color: "cyan"
      });
    }
  }

  for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    const ex = e.x + e.w / 2;
    const ey = e.y + e.h / 2;

    const dx = Math.cos(player.angle);
    const dy = Math.sin(player.angle);
    const vx = ex - px;
    const vy = ey - py;
    const proj = vx * dx + vy * dy;
    const perp = Math.abs(-dy * vx + dx * vy);

    if (proj > minLen && proj < maxLen && perp < width / 2) {
takeEnemyDamage(e, damage);
    }
  }
}
function katanaAttack(x, y, charge = 0) {
  if (katanaAttackTimer > 0 || katanaDashing || katanaSwinging) return;
  if (charge > katanaChargeMax * 0.6) {

    const angle = Math.atan2(y - (player.y + player.h/2), x - (player.x + player.h/2));
    katanaDashing = true;
    katanaDashTimer = 5 + Math.floor(charge / 10);
katanaDashTimerStart = katanaDashTimer; 
    katanaDashDir = { x: Math.cos(angle), y: Math.sin(angle) };
    katanaAttackTimer = weaponsData.katana.fireRate;
  } else {

    katanaAttackTimer = weaponsData.katana.fireRate;
    katanaSwinging = true;
    katanaSwingTimer = 11 + Math.floor(charge / 8);
    katanaSwingAngle = Math.atan2(y - (player.y + player.h/2), x - (player.x + player.w/2));
    katanaSwingCharge = charge;

    const angle = katanaSwingAngle;
    const range = 130 + charge * 1.4;
    const arc = Math.PI / 2 + (charge / katanaChargeMax) * Math.PI / 7;
    const damage = (14 + player.damage * 6) * (1 + charge / (katanaChargeMax * 1.2));
    for (let i = 0; i < enemies.length; i++) {
      const e = enemies[i];
      const ex = e.x + e.w / 2;
      const ey = e.y + e.h / 2;
      const dx = ex - (player.x + player.w / 2);
      const dy = ey - (player.y + player.h / 2);
      const dist = Math.hypot(dx, dy);
      if (dist <= range) {
        const enemyAngle = Math.atan2(dy, dx);
        let da = Math.abs(angle - enemyAngle);
        if (da > Math.PI) da = 2 * Math.PI - da;
        if (da < arc / 2) {
          takeEnemyDamage(e, damage);
        }
      }
    }
  }
}
function drawRoundedRect(ctx, x, y, w, h, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      enemies.forEach(drawEnemy);
      updateBullets();
      updateAbilityUI();  
      drawSkillProjectiles();  
      updateSkillProjectiles();  
      updateMinions();
      drawMinions();  
      updateEnemyBullets();      
      drawParticles();
      renderLaserBeam();  
      drawBerserkerStatus();      
      drawTimeStopTextFragments();
      checkInstinctTrigger();
      checkOverchargeTrigger();  
      drawUnixEpochOverlays();  
        
droppedItems.forEach(item => {
  if (item.item === 'potion' || item.item === 'up' || item.item === 'score') {
    const fillColor = dropColors[item.item] || dropColors.default;
    ctx.save();
    const r = Math.min(item.w, item.h) / 2;
    const cx = item.x + item.w / 2;
    const cy = item.y + item.h / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.shadowColor = "#111";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#222";
    ctx.stroke();
    ctx.fillStyle = "#222";
    ctx.font = item.item === "score" ? "bold 13px Orbitron,Arial" : "bold 17px Orbitron,Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    let label = item.item === 'potion' ? "HP" : item.item === 'up' ? "UP" : "SC";
    ctx.fillText(label, cx, cy + 1);
    ctx.restore();
  } else {
    let fillColor = dropColors[item.item] || dropColors.default;
    drawRoundedRect(ctx, item.x, item.y, item.w, item.h, 12);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#222";
    ctx.stroke();
    ctx.fillStyle = "#222";
    ctx.font = "bold 13px Orbitron, Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      weaponsData[item.item]?.name || item.item,
      item.x + item.w / 2,
      item.y + item.h / 2 + 2
    );
  }
});
for (const eruption of terrashockEruptions) {
  if (!eruption.erupting) {
    ctx.save();
    ctx.globalAlpha = 0.35 + 0.15 * Math.sin(eruption.timer / 5);
    ctx.beginPath();
    ctx.arc(eruption.x, eruption.y, eruption.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(200,0,0,0.5)";
    ctx.shadowColor = "red";
    ctx.shadowBlur = 30;
    ctx.fill();
    ctx.lineWidth = 6;
    ctx.strokeStyle = "rgba(255, 60, 40, 0.9)";
    ctx.stroke();
    ctx.restore();
  }
}
if (currentWeapon === 'sword' && (swordCharging || swordAttackTimer > 0)) {
  ctx.save();
  ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
  const angle = Math.atan2(mouseY - (player.y + player.h / 2), mouseX - (player.x + player.w / 2));
  ctx.rotate(angle);
  let arc = Math.PI / 3 + (swordCharge / swordChargeMax) * Math.PI / 6;
  let range = 80 + swordCharge * 1.2;
  ctx.globalAlpha = 0.32 + 0.15 * Math.sin(Date.now() / 120);
  ctx.beginPath();
  ctx.arc(0, 0, range, -arc / 2, arc / 2);
  ctx.lineWidth = 18 + swordCharge / 6;
  ctx.strokeStyle = swordCharging ? "blue" : "cyan";
  ctx.stroke();
  ctx.restore();
}
if (currentWeapon === 'spear' && (spearCharging || spearAttackTimer > 0)) {
  ctx.save();
  ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
  const angle = Math.atan2(mouseY - (player.y + player.h / 2), mouseX - (player.x + player.w / 2));
  ctx.rotate(angle);
  let range = 120 + spearCharge * 1.5;
  ctx.globalAlpha = 0.32 + 0.15 * Math.sin(Date.now() / 120);
  ctx.beginPath();
  ctx.moveTo(26, -10);
  ctx.lineTo(range, -7);
  ctx.lineTo(range, 7);
  ctx.lineTo(26, 10);
  ctx.closePath();
  ctx.fillStyle = spearCharging ? "blue" : "cyan";
  ctx.fill();
  ctx.restore();
}

    }
function getClosestEnemy(x, y, excluded = []) {
  let closest = null;
  let minDist = Infinity;

  for (const enemy of enemies) {
    if (excluded.includes(enemy) || enemy.dead) continue;

    const dx = enemy.x - x;
    const dy = enemy.y - y;
    const dist = dx * dx + dy * dy;

    if (dist < minDist) {
      minDist = dist;
      closest = enemy;
    }
  }

  return closest;
}

function updateAbilityUI() {
  const q = boundSkills.Q;
  const e = boundSkills.E;

  const qText = document.getElementById("qText");
  const eText = document.getElementById("eText");


  if (q) {
    if (skillCooldowns[q] > 0) {
      qText.textContent = `CD: ${(skillCooldowns[q] / 60).toFixed(1)}s`;
      qText.style.color = "gray";
      qText.style.fontWeight = "normal";
    } else {
      qText.textContent = q;
      qText.style.color = "cyan";
      qText.style.fontWeight = "bold";
    }
  } else {
    qText.textContent = "empty";
    qText.style.color = "white";
    qText.style.fontWeight = "normal";
  }

  if (e) {
    if (skillCooldowns[e] > 0) {
      eText.textContent = `CD: ${(skillCooldowns[e] / 60).toFixed(1)}s`;
      eText.style.color = "gray";
      eText.style.fontWeight = "normal";
    } else {
      eText.textContent = e;
      eText.style.color = "cyan";
      eText.style.fontWeight = "bold";
    }
  } else {
    eText.textContent = "empty";
    eText.style.color = "white";
    eText.style.fontWeight = "normal";
  }
}

function bindSkillToSlot(slotKey, skill) {
  if (!skill) return;
    const skillName = skill
  if (skill.type === "passive") {
    console.log(`❌ Can't bind passive skill "${skillName}" to active slot ${slotKey}`);
    return;
  }
    if (unlockedSkills.includes("skill.name")) {
    return;
        }

  for (const k in boundSkills) {
    if (boundSkills[k] === skillName) {
      boundSkills[k] = null;
    }
  }

  boundSkills[slotKey] = skillName;
  ignoreNextPress[slotKey] = true;
  updateAbilityUI();
  showBindingPopup(slotKey);
  console.log(`✅ Bound ${skillName} to ${slotKey}`);
}


function gameLoop() {
    if (timeStopped) {
  timeStopTimer--;
  if (timeStopTimer <= 0) {
    timeStopped = false;
  }
}
    if (currentWeapon === 'sword' && swordCharging) {
  swordCharge = Math.min(swordCharge + 1, swordChargeMax);
}
    if (swordAttackTimer > 0) swordAttackTimer--;
    if (swordSwinging) {
  swordSwingTimer--;
  if (swordSwingTimer <= 0) {
    swordSwinging = false;
    swordSwingCharge = 0;
  }
}
    if (currentWeapon === 'spear' && spearCharging) {
  spearCharge = Math.min(spearCharge + 1, spearChargeMax);
}
if (spearAttackTimer > 0) spearAttackTimer--;
if (spearStabbing) {
  spearStabTimer--;
  if (spearStabTimer <= 0) {
    spearStabbing = false;
    spearStabCharge = 0;
  }
}
    if (currentWeapon === 'katana' && katanaCharging) {
  katanaCharge = Math.min(katanaCharge + 1, katanaChargeMax);
}
if (katanaAttackTimer > 0) katanaAttackTimer--;
if (katanaDashing) {

  player.x += katanaDashDir.x * 22;
  player.y += katanaDashDir.y * 22;
  katanaDashTimer--;
  for (let i = 0; i < 2; i++) {
    particles.push({
      x: player.x + player.w/2 + (Math.random()-0.5)*14,
      y: player.y + player.h/2 + (Math.random()-0.5)*14,
      dx: (Math.random()-0.5)*1.5,
      dy: (Math.random()-0.5)*1.5,
      life: 16 + Math.random()*8,
      color: "cyan"
    });
  }
     for (let i = 0; i < enemies.length; i++) {
    const e = enemies[i];
    if (
      player.x + player.w > e.x &&
      player.x < e.x + e.w &&
      player.y + player.h > e.y &&
      player.y < e.y + e.h
    ) {
      takeEnemyDamage(e, player.damage * 10);
    }
  }
  if (katanaDashTimer <= 0) katanaDashing = false;
}
    let katanaDashSwingProgress = 0;
if (katanaDashing && katanaDashTimerStart) {
  katanaDashSwingProgress = 1 - katanaDashTimer / katanaDashTimerStart;
}
    if (katanaSwinging) {
  katanaSwingTimer--;
  if (katanaSwingTimer <= 0) katanaSwinging = false;
}
    player.angle = Math.atan2(mouseY - (player.y + player.h / 2), mouseX - (player.x + player.w / 2));
  if (pause) {
    animationFrameId = requestAnimationFrame(gameLoop);
    document.getElementById("abilityHUD").style.display = "none"; 
    return;
  }

  document.getElementById("abilityHUD").style.display = "flex";

  if (mouseDown && currentWeapon === 'laser') {
    startLaserBeam()
  }
    if (mouseDown && currentWeapon === 'minigun') {
  shootAt(mouseX, mouseY);
}
    if (mouseDown && currentWeapon === 'auto') {
  shootAt(mouseX, mouseY);
}
  fireCooldown--;
  updatePlayer(); 
  updateEnemies();
    
    if (score >= nextLevelScore) {
  level++;
  skillPoints++;      
  nextLevelScore += 500 + (level * 50);
  updateHUD();
}
        if (score >= nextUpgradeScore) {
    upgradePoints++;
  nextUpgradeScore += 100 + (upgradePointsObtained * 2);
  upgradePointsObtained++;          
  updateHUD();
}


if (enemies.length === 0 && waveTimer <= 0) {
  wave++;
  saveGame();

  if (wave > 100) {
    pause = true;
    document.getElementById("winScreen").style.display = "flex";
    return;
  }
  upgradePoints += 2;
  updateHUD();
  spawnEnemy();
  waveTimer = 60;
} else {
  waveTimer--;
}
    
if (laserBeam.active) {
  laserBeam.timer--;
  if (laserBeam.timer <= 0) {
    laserBeam.active = false;
  }
}
    
    if (laserBeam.active) {
  enemies.forEach((e, i) => {
    if (isInLaserBeam(e)) {
takeEnemyDamage(e, player.damage * 0.3);
    }
  });
}

let activeBoss = enemies.find(e => e.boss && !e.fromNecron);
if (!activeBoss) activeBoss = enemies.find(e => e.boss);

if (activeBoss) {
  showBossHUD(activeBoss);
  updateBossHUD(activeBoss);
} else {
  document.getElementById("bossHUD").style.display = "none";
}
for (const enemy of enemies) {
  if (enemy.boss && enemy.name === "Crucible" && enemy.crucibleShockwaveActive) {
    const r = enemy.crucibleShockwaveRadius || 0;
    const cx = enemy.x + enemy.w / 2;
    const cy = enemy.y + enemy.h / 2;

    const dx = player.x + player.w / 2 - cx;
    const dy = player.y + player.h / 2 - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < r && !enemy.crucibleShockwaveHitPlayer) {
      const angle = Math.atan2(dy, dx);
      const force = 20;
      player.vx += Math.cos(angle) * force;
      player.vy += Math.sin(angle) * force;
      enemy.crucibleShockwaveHitPlayer = true;
    }

    for (const p of projectiles) {
      if (p.source === "player" && p.type !== "laser" && p.type !== "melee") {
        const pdist = Math.hypot(p.x - cx, p.y - cy);
        if (pdist < r) {
          p.dead = true;
        }
      }
    }
  }
}

  draw();
  animationFrameId = requestAnimationFrame(gameLoop);
}

    updateHUD();
    updateUpgradeButtons();

window.onload = () => {
          document.getElementById("abilityHUD").style.display = "none";
  document.getElementById("startBtn").addEventListener("click", () => {
    if (fromEsc === false) {
    pause = false;
    document.getElementById("startScreen").style.display = "none";
    gameLoop();
      document.getElementById("abilityHUD").style.display = "flex";
        }
        if (fromEsc === true) {
    pause = false;
    document.getElementById("startScreen").style.display = "none";
      document.getElementById("abilityHUD").style.display = "flex";
    fromEsc = false
        }
  });

  document.getElementById("howBtn").addEventListener("click", () => {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("howToPlay").style.display = "flex";
  });
    
document.getElementById("socialBtn").addEventListener("click", () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("social").style.display = "flex";
});
document.getElementById("resetSaveBtn").onclick = resetSave;
    document.querySelector("#social #closeHow").addEventListener("click", () => {
  document.getElementById("social").style.display = "none";
  document.getElementById("startScreen").style.display = "flex";
});
  document.getElementById("closeHow").addEventListener("click", () => {
    document.getElementById("howToPlay").style.display = "none";
    document.getElementById("startScreen").style.display = "flex";
  });
  document.getElementById("resumeBtn").onclick = closeEscMenu;
  document.getElementById("returnTitleBtn").onclick = function() {
    closeEscMenu();
    pause = true;
    fromEsc = true;
    document.getElementById("startScreen").style.display = "flex";
    document.getElementById("abilityHUD").style.display = "none";
    document.getElementById("pauseMenu").style.display = "none";
    document.getElementById("hud").style.display = "block";
  };
document.getElementById("resetSkillPointsBtn").onclick = function() {
    resetSkillPoints();
};
document.getElementById("skinsBtn").onclick = function() {
  closeEscMenu();
  openSkinsMenu();
};
document.addEventListener("keydown", e => {
  if (!hoveredSkill) return;
if (!unlockedSkills.includes(hoveredSkill)) return;
    if (hoveredSkillType !== "active") return;

  const key = e.key.toLowerCase();
  if (key === "q" || key === "e") {
    bindSkillToSlot(key.toUpperCase(), hoveredSkill);
    keys["q"] = false;
    keys["e"] = false;
  }
});
    
    document.addEventListener("keydown", e => {
  if (pause) return; 
  const key = e.key.toLowerCase();

  if (key === "q" || key === "e") {
    const slot = key.toUpperCase();
    const skill = boundSkills[slot];

    if (skill && skillCooldowns[skill] <= 0) {
      activateSkill(skill);
    }
  }
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.onclick = () => showTab(btn.dataset.tab);
});
document.getElementById('closePauseMenu').onclick = closePauseMenu;
    document.getElementById('bulkUpgradeBtn').onclick = function() {
  if (bulkUpgradeAmount === 1) {
    bulkUpgradeAmount = 10;
  } else if (bulkUpgradeAmount === 10) {
    bulkUpgradeAmount = "MAX";
  } else {
    bulkUpgradeAmount = 1;
  }
  this.textContent = "Amount: " + bulkUpgradeAmount;
};
};


window.addEventListener('keydown', e => {
  keys[e.key] = true;



  if (e.key === 'u' && !document.getElementById('pauseMenu').style.display.match(/flex/)) {
    openPauseMenu();
  } else if (e.key === 'u' && document.getElementById('pauseMenu').style.display.match(/flex/)) {
    closePauseMenu();
  }

  if (e.key === 'f') {
    toggleInventory();
              
  }
    if (e.key === ' ') {
  if (!player.isDashing && player.dashCooldown <= 0) {
    let dx = 0, dy = 0;
    if (keys['w']) dy -= 1;
    if (keys['s']) dy += 1;
    if (keys['a']) dx -= 1;
    if (keys['d']) dx += 1;

    const mag = Math.hypot(dx, dy);
    if (mag > 0) {
      player.dashDir.x = dx / mag;
      player.dashDir.y = dy / mag;
    } else {
      const angle = Math.atan2(mouseY - (player.y + player.h / 2), mouseX - (player.x + player.w / 2));
      player.dashDir.x = Math.cos(angle);
      player.dashDir.y = Math.sin(angle);
    }

    player.isDashing = true;
    player.dashTime = 10;
    player.dashCooldown = 30;

    player.dashTrail.push({ x: player.x, y: player.y, life: 20 });
  }
}   
    
    });
function openEscMenu() {
  escMenuVisible = true;
  pause = true;
  document.getElementById('escMenu').style.display = 'flex';
}

function closeEscMenu() {
  escMenuVisible = false;
  pause = false;
  document.getElementById('escMenu').style.display = 'none';
}

window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    if (!escMenuVisible && !pauseMenuOpen() && !titleScreenOpen() && !skinsMenuVisible) {
      openEscMenu();
    } else if (escMenuVisible) {
      closeEscMenu();
    } else if (skinsMenuVisible) {
      closeSkinsMenu();
    }
  }
});

function pauseMenuOpen() {
  return document.getElementById('pauseMenu').style.display === 'flex';
}
function titleScreenOpen() {
  return document.getElementById('startScreen').style.display !== 'none';
}

let skinsMenuVisible = false;
function openSkinsMenu() {
  skinsMenuVisible = true;
  pause = true;
  renderSkinsMenu();
  document.getElementById('skinsMenu').style.display = 'flex';
}
function closeSkinsMenu() {
  skinsMenuVisible = false;
  pause = false;
  document.getElementById('skinsMenu').style.display = 'none';
}

function renderSkinsMenu() {
let goldCounter = document.getElementById("skinsGoldCounter");
if (!goldCounter) {
  goldCounter = document.createElement("div");
  goldCounter.id = "skinsGoldCounter";
  goldCounter.style.position = "absolute";
  goldCounter.style.top = "28px";
  goldCounter.style.right = "48px";
  goldCounter.style.fontSize = "20px";
  goldCounter.style.color = "white";
  goldCounter.style.fontFamily = "Orbitron, sans-serif";
  goldCounter.style.zIndex = "5";
  document.getElementById("skinsMenuContent").appendChild(goldCounter);
}
goldCounter.innerHTML = `Gold: <span style="color:gold">${gold}</span>`;
  const container = document.getElementById("skinsList");
  container.innerHTML = "";

  skins.forEach(skin => {
    const skinBox = document.createElement("div");
    skinBox.className = "skin-box";
    skinBox.style.display = "flex";
    skinBox.style.flexDirection = "column";
    skinBox.style.alignItems = "center";
    skinBox.style.justifyContent = "center";
    skinBox.style.margin = "12px";
    skinBox.style.padding = "10px";
    skinBox.style.background = "#111";
    skinBox.style.border = "2px solid cyan";
    skinBox.style.borderRadius = "12px";
    skinBox.style.width = "120px";
    skinBox.style.cursor = "pointer";

    const previewBox = document.createElement("div");
    previewBox.className = "skin-preview";
    previewBox.style.width = "80px";
    previewBox.style.height = "80px";
    previewBox.style.display = "flex";
    previewBox.style.alignItems = "center";
    previewBox.style.justifyContent = "center";
    previewBox.style.marginBottom = "8px";

    const previewCanvas = document.createElement("canvas");
    previewCanvas.width = 80;
    previewCanvas.height = 80;
    previewCanvas.style.position = "static";
    previewCanvas.style.width = "80px";
    previewCanvas.style.height = "80px";

    previewBox.appendChild(previewCanvas);
    skinBox.appendChild(previewBox);

    const pctx = previewCanvas.getContext("2d");
    pctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);

    if (skin.type === "default" || skin.type === "normal") {
      pctx.fillStyle = skin.fill || "cyan";
      pctx.beginPath();
      pctx.arc(40, 40, 25, 0, Math.PI * 2);
      pctx.fill();
      if (skin.shadow) {
        pctx.strokeStyle = skin.shadow;
        pctx.lineWidth = 4;
        pctx.stroke();
      }
    } else if (skin.type === "special") {
      pctx.beginPath();
      pctx.arc(40, 40, 25, 0, Math.PI * 2);
      pctx.fillStyle = "#fff";
      pctx.fill();
      pctx.lineWidth = 5;
      pctx.strokeStyle = "purple";
      pctx.shadowColor = "purple";
      pctx.shadowBlur = 10;
      pctx.stroke();
    }

    const nameLabel = document.createElement("div");
    nameLabel.textContent = skin.name;
    nameLabel.style.color = "cyan";
    nameLabel.style.fontSize = "14px";
    nameLabel.style.fontWeight = "bold";
    nameLabel.style.marginBottom = "6px";
    skinBox.appendChild(nameLabel);

    const priceLabel = document.createElement("div");
    if (!skin.locked) {
      priceLabel.textContent = "Unlocked";
      priceLabel.style.color = "#0f0";
    } else {
      priceLabel.textContent = skin.price + " Gold";
      priceLabel.style.color = "#ff0";
    }
    priceLabel.style.fontSize = "12px";
    skinBox.appendChild(priceLabel);

skinBox.onclick = () => {
  if (skin.locked) {
    if (gold >= skin.price) {
      gold -= skin.price;
      skin.locked = false;
      saveGame();
      renderSkinsMenu();
    } else {
      alert("Not enough gold!");
    }
  } else {
    currentSkin = skin.name;
    saveGame();
    renderSkinsMenu();
  }

};


    if (currentSkin === skin.name) {
      skinBox.style.boxShadow = "0 0 20px cyan, 0 0 40px magenta";
    }

    container.appendChild(skinBox);
  });

}


function openPauseMenu() {
  pause = true;
  document.getElementById('pauseMenu').style.display = 'flex';
  showTab('upgrades');
  updateHUD();
  updateUpgradeButtons();
}
function closePauseMenu() {
  pause = false;
  document.getElementById('pauseMenu').style.display = 'none';
}

function showTab(tab) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  document.querySelectorAll('.tab-content').forEach(tabEl => {
    if (tabEl.id === 'tab-' + tab) {
      if(tabEl.id === 'tab-inventory') {
        tabEl.style.display = 'flex';
      } else {
        tabEl.style.display = 'block';
      }
    } else {
      tabEl.style.display = 'none';
    }
  });
  if (tab === 'skills') renderSkillTree();
  if (tab === 'upgrades') document.getElementById('upgradeMenu').style.display = 'flex';
  if (tab === 'inventory') drawPauseWeaponList();
}

function startMedicine() {
  medicineCooldown = 60;

  const medicineLoop = () => {
    if (!unlockedSkills.includes("Medicine")) return;
    if (pause) return requestAnimationFrame(medicineLoop);

    if (medicineCooldown <= 0) {
      if (hp < maxHP) {
        hp = Math.min(maxHP, hp + 2);
        updateHUD();
        checkOverchargeTrigger();
        checkInstinctTrigger(); 
      }
      medicineCooldown = 60;
    } else {
      medicineCooldown--;
    }

    requestAnimationFrame(medicineLoop);
  };

  requestAnimationFrame(medicineLoop);
}

function canUnlockTier(branchName, tierNumber) {
  if (tierNumber === 1) return true;

  const prevTier = skillTree[branchName].find(t => t.tier === tierNumber - 1);
  if (!prevTier) return false;

  return prevTier.skills.some(skill => unlockedSkills.includes(skill.name));
}

const skillTree = {
  offense: [
    {
      tier: 1,
      skills: [{
        name: "Power",
        desc: "+10% damage.",
        cost: 1,
        type: "passive",
        effect: () => { skillBonuses.damage += 0.1;
    applyStats(); }
      }]
    },
    {
      tier: 2,
      skills: [{
        name: "Trigger Happy",
        desc: "+15% fire rate.",
        cost: 1,
        type: "passive",
        effect: () => {  skillBonuses.fireRate += 0.15;
  applyStats();
}
      }]
    },
    {
      tier: 3,
      skills: [{
        name: "Velocity",
        desc: "+50% bullet speed.",
        cost: 1,
        type: "passive",
        effect: () => { bulletSpeedMultiplier *= 1.5; }
      }]
    },

    { tier: 4, 
     skills: [{ 
         name: "Critical Aim", 
         desc: "+10% chance to deal double damage.", 
         cost: 2, 
         type: "passive",
         effect: () => {} },
      { name: "Berserker Mode", desc: "+50 dmg for 10s after killing a boss.", cost: 2, effect: () => {} }
    ]},
    { tier: 5, skills: [
      { name: "Piercing Bullets", desc: "All bullets pierce.", cost: 2, type: "passive", effect: () => {} },
      { name: "Ricochet", desc: "Bullets bounce off walls.", cost: 2, type: "passive", effect: () => {} }
    ]},
    { tier: 6, skills: [
      { name: "Instinct", desc: "Double dmg under 20% HP.", cost: 2, type: "passive", effect: () => {checkInstinctTrigger();} },
      { name: "Overcharge", desc: "Double dmg at full HP.", cost: 2, type: "passive", effect: () => {checkOverchargeTrigger();} }
    ]},
    { tier: 7, skills: [
      { name: "Yin Enlightenment", type: "passive", desc: "Triple upgrade limits for Damage & Reload Speed upgrades.", cost: 5,         effect: () => {
          upgradeCaps.damage *= 3;
          upgradeCaps.reload *= 3;
          updateUpgradeButtons();
          }
            }
    ]}
  ],
        
  defense: [
    { tier: 1, 
     skills: [{
       name: "Endurance",
  desc: "+10% Max HP.",
  cost: 1,
  type: "passive",   
  effect: () => {
  skillBonuses.maxHP += 0.1
  applyStats();
}

     }]
},
    { tier: 2, skills: [{ name: "Resilience", desc: "-10% Damage Taken.", cost: 1, type: "passive", effect: () => {
        resilienceMulti = 0.9
    } }] },
    { tier: 3, skills: [{ name: "Medicine", desc: "Heal 2 hp/sec.", cost: 1, type: "passive", effect: () => {
        startMedicine();
    } }] },
    { tier: 4, skills: [
      { name: "Dash Mastery", desc: "Immunity while dashing.", cost: 2, type: "passive", effect: () => {} },
      { name: "Deflector", desc: "10% chance to reflect shots.", cost: 2, type: "passive", effect: () => {} }
    ]},
    { tier: 5, skills: [
      { name: "Shield Generator", desc: "Shield that regens after 5s.", cost: 2, type: "passive", effect: () => {
player.shield = 250;
player.maxShield = 250;
player.shieldRegenTimer = 0;
          updateHUD();
      } },
      { name: "Life Steal", desc: "Heal 2 HP every kill.", cost: 2, type: "passive", effect: () => {} }
    ]},
    { tier: 6, skills: [
      { name: "Second Wind", desc: "1 revive per run at 25% HP.", cost: 3, type: "passive", effect: () => {
          secondWind = true
      } },
      { name: "Void", desc: "3s invulnrability every 15s.", cost: 2, type: "passive", effect: () => {
          voidCooldown = 900
      } }
    ]},
    { tier: 7, skills: [
      { name: "Yang Enlightenment", desc: "Triple upgrade limits for Max HP & Speed upgrades.", cost: 5, type: "passive", effect: () => {
          upgradeCaps.maxHP *= 3;
          upgradeCaps.speed *= 3;
          updateUpgradeButtons(); 
          }
            }
    ]}
  ],
     
  sorcery: [
    { tier: 1, skills: [{ name: "Fireball", desc: "Launch a fire orb.", cost: 1, type: "active", effect: () => {} }] },
    { tier: 2, skills: [{ name: "Pulse", desc: "Deals AoE knockback & stuns enemies.", cost: 1, type: "active", effect: () => {} }] },
    { tier: 3, skills: [{ name: "Blink", desc: "Teleport to your cursor position.", cost: 1, type: "active", effect: () => {} }] },
    { tier: 4, skills: [
      { name: "Magic Hand", desc: "+10% ability damage.", cost: 2, type: "passive", effect: () => {
          skillBonuses.intellect += 0.1
      } },
      { name: "Chain Lightning", desc: "Shoot lighning that chains up to 5 enemies.", cost: 2, type: "active", effect: () => {} }
    ]},
    { tier: 5, skills: [
      { name: "Summon Minion", desc: "Summon a minion so fight by your side.", cost: 3, type: "active", effect: () => {} },
      { name: "Ice Shards", desc: "Large spread of fast ice shards that slow enemies.", type: "active", cost: 2, effect: () => {} }
    ]},
    { tier: 6, skills: [
      { name: "Tanklet Minion", desc: "Summons a tankier mintion to fight with you.", cost: 3, type: "active", effect: () => {} },
      { name: "Time Stop", desc: "ZA WARUDO for 3 seconds.", cost: 2, type: "active", effect: () => {} }
    ]},
    { tier: 7, skills: [
      { name: "Boss Minion", desc: "Summons boss enemy to fight by your side.", cost: 4, type: "active", effect: () => {} },
      { name: "Black Hole", desc: "Create a black hole to spaghettify enemies (No not really, just sucks them in).", cost: 3, type: "active", effect: () => {} },
      { name: "Meteor", desc: "Summon a giant meteor upon your enemies.", cost: 4, type: "active", effect: () => {} }
    ]}
  ]
};

function openSkillTree() {
  pause = true;
  document.getElementById("skillTree").style.display = "flex";
  document.getElementById("skillPointsDisplay").textContent = skillPoints;
      renderSkillTree();
}

function closeSkillTree() {
  pause = false;
  document.getElementById("skillTree").style.display = "none";
}

function renderSkillTree() {
  const container = document.getElementById("skillBranches");
    document.getElementById("skillPointsDisplay").textContent = skillPoints;
    document.getElementById("scoreLevelDisplay").textContent = nextLevelScore;
  container.innerHTML = "";

  for (const branchName in skillTree) {
    const branch = skillTree[branchName];

    const branchDiv = document.createElement("div");
    branchDiv.className = "branch";
    branchDiv.innerHTML = `<h3>${capitalize(branchName)}</h3>`;

    branch.forEach(tier => {
        const tierDiv = document.createElement("div");
        tierDiv.className = "tier";
        
        const labelDiv = document.createElement("div");
        labelDiv.className = "tier-label";
        labelDiv.textContent = `Tier ${tier.tier}`;
        tierDiv.appendChild(labelDiv);
        
        const skillsRow = document.createElement("div");
        skillsRow.className = "tier-skills";
        tierDiv.appendChild(skillsRow);
        
        tier.skills.forEach(skill => {
          const skillBtn = document.createElement("button");
          skillBtn.classList.add("skill-button");
          skillBtn.textContent = skill.name;
        const lockedByTier = !canUnlockTier(branchName, tier.tier);
        const alreadyUnlocked = unlockedSkills.includes(skill.name);
        const canAfford = skillPoints >= (skill.cost ?? 1);

        if (lockedByTier) {
          skillBtn.classList.add("locked-tier");
          skillBtn.disabled = true;
          skillBtn.title = "Unlock a skill from the previous tier first!";
        } else if (alreadyUnlocked) {
          skillBtn.disabled = true;
          skillBtn.classList.add("unlocked");
        } else if (!canAfford) {
          skillBtn.disabled = true;
          skillBtn.title = "Not enough skill points.";
        } else {
          skillBtn.onclick = () => {
            skill.effect?.();
            unlockedSkills.push(skill.name);
            skillPoints -= (skill.cost ?? 1);
            updateHUD();
            renderSkillTree(); 
              document.getElementById("skillPointsDisplay").textContent = skillPoints;
          };
        }
skillsRow.appendChild(skillBtn);
        
        skillBtn.addEventListener("mouseenter", e => {
          const tooltip = document.getElementById("skillTooltip");
          tooltip.style.display = "block";
positionTooltip(e);
    
          let bindingInfo = "";
    
          if (skill.type === "active") {
              bindingInfo = `<br><span style="color: yellow;">(Press Q or E to bind)</span>`;
          }
          if (skill.type === "passive") {
              bindingInfo = ``;
          }
          tooltip.innerHTML = `
            <strong>${skill.name}</strong><br>
            <em>${skill.desc}</em><br>
            <span>Cost: ${skill.cost} SP</span>
            ${bindingInfo}
          `;

        });

        skillBtn.addEventListener("mousemove", e => {
    const tooltip = document.getElementById("skillTooltip");
          tooltip.style.display = "block";
        positionTooltip(e);
    
          if (skill.type === "active") {
              bindingInfo = `<br><span style="color: yellow;">(Press Q or E to bind)</span>`;
          }
          if (skill.type === "passive") {
              bindingInfo = ``;
          }
          tooltip.innerHTML = `
            <strong>${skill.name}</strong><br>
            <em>${skill.desc}</em><br>
            <span>Cost: ${skill.cost} SP</span>
            ${bindingInfo}
          `;

        });
        skillBtn.addEventListener("mouseleave", () => {
          document.getElementById("skillTooltip").style.display = "none";
        });

          skillBtn.onmouseenter = () => {
          hoveredSkill = skill.name;
            hoveredSkillDesc = skill.desc
              hoveredSkillCost = skill.cost
            hoveredSkillType = skill.type;
          console.log(`${skill.name} hovered`);
        };
        
        skillBtn.onmouseleave = () => {
          hoveredSkill = null;
            hoveredSkillType = null;
            hoveredSkillDesc = null;
              hoveredSkillCost = null;
        };
      });
    
      branchDiv.appendChild(tierDiv);
    });

    container.appendChild(branchDiv);
  }

}

function resetSkillPoints() {
  let spentPoints = 0;
  for (const branchName in skillTree) {
    for (const tier of skillTree[branchName]) {
      for (const skill of tier.skills) {
        if (unlockedSkills.includes(skill.name)) {
          spentPoints += skill.cost ?? 1;
        }
      }
    }
  }
  skillPoints += spentPoints;
  unlockedSkills = [];
  reapplyPassiveSkillEffects();
  updateHUD();
  renderSkillTree();
}
function reapplyPassiveSkillEffects() {
  skillBonuses = { damage: 0, fireRate: 0, maxHP: 0, intellect: 0 };
  resilienceMulti = 1.0;
  voidActive = false;
  voidCooldown = 0;
  secondWind = false;
  player.maxShield = 0;
  player.shield = 0;
  player.shieldRegenTimer = 0;

  upgradeCaps.speed = 10;
  upgradeCaps.damage = 300;
  upgradeCaps.maxHP = 50;
  upgradeCaps.reload = 30;
  upgradeCaps.luck = 50;
  upgradeCaps.intellect = 300;

  for (const branchName in skillTree) {
    for (const tier of skillTree[branchName]) {
      for (const skill of tier.skills) {
        if (
          skill.type === "passive" &&
          unlockedSkills.includes(skill.name) &&
          typeof skill.effect === "function"
        ) {
          skill.effect();
        }
      }
    }
  }
  if (unlockedSkills.includes("Medicine")) startMedicine();
}

function positionTooltip(e) {
  const tooltip = document.getElementById("skillTooltip");
  const offsetX = 15, offsetY = 15;
  const mouseX = e.pageX, mouseY = e.pageY;

  tooltip.style.left = (mouseX + offsetX) + "px";
  tooltip.style.top = (mouseY + offsetY) + "px";
  tooltip.style.maxWidth = "220px"; 

  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  if (tooltipRect.bottom > viewportHeight) {

    tooltip.style.top = (mouseY - tooltipRect.height - offsetY) + "px";
  } else {

    tooltip.style.top = (mouseY + offsetY) + "px";
  }

  if (tooltipRect.right > viewportWidth) {
    tooltip.style.left = (viewportWidth - tooltipRect.width - 10) + "px";
  }
}
function showBindingPopup(slotKey) {
  const popup = document.getElementById("bindingPopup");
  popup.textContent = `Bound to ${slotKey}`;
  popup.style.left = `${popupX + 15}px`;
  popup.style.top = `${popupY + 15}px`;
  popup.style.opacity = 1;

  setTimeout(() => {
    popup.style.opacity = 0;
  }, 1000);
}

function activateSkill(name) {
  console.log(`Activating ${name}`);

  if (name === "Fireball") {
    shootFireball();
  }
    if (name === "Pulse") {
      shootPulse();
}
    if (name === "Blink") {
  activateBlink();
}
    if (name === "Chain Lightning") {
      activateChainLightning();
    }
    if (name === "Ice Shards") { 
    activateIceShards();
        }
    if (name === "Summon Minion") {
  summonMinion("minion");
}
    if (name === "Tanklet Minion") {
  summonMinion("tanklet");
}
    if (name === "Time Stop") {
  timeStopped = true;
  timeStopTimer = 360;
activateTimeStop();
}
    if (name === "Boss Minion") {
  summonMinion("boss");
}
    if (name === "Black Hole") {
  activateBlackHole();
}
    if (name === "Meteor") {
  activateMeteor();
}

  skillCooldowns[name] = getSkillCooldown(name);
}

function getSkillCooldown(name) {
  switch (name) {
    case "Fireball": return 300;
    case "Pulse": return 420;
    case "Blink": return 180;
    case "Chain Lightning": return 480
    case "Ice Shards": return 300
    case "Summon Minion": return 1200
    case "Tanklet Minion": return 1800    
    case "Boss Minion": return 3600
    case "Time Stop": return 1800
    case "Black Hole": return 1800
    case "Meteor": return 7200
    default: return 0;
  }
}

function shootFireball() {
  const Fireball = {
    x: player.x + player.w / 2,
    y: player.y + player.h / 2,
    dx: Math.cos(player.angle) * 5,
    dy: Math.sin(player.angle) * 5,
    radius: 12,
    trail: [],
    type: "Fireball",
    color: "red",
    explosive: true,
    lifetime: 300
  };

  projectiles.push(Fireball);
}

function shootPulse() {
  pulses.push({
    x: player.x + player.w / 2,
    y: player.y + player.h / 2,
    radius: 0,
    maxRadius: 300,
    alpha: 1
  });
}

function activateBlink() {
createParticle(player.x, player.y, `rgba(0,255,255)`)
createParticle(mouseX, mouseY, `rgba(0,255,255)`)
  player.x = mouseX;
  player.y = mouseY;
}

function activateChainLightning() {
  const maxChains = 5;
  const hitEnemies = [];
  const lightningPoints = [];

  let current = getClosestEnemy(player.x, player.y, hitEnemies);
  if (!current) return;

  lightningPoints.push({ x: player.x, y: player.y }); 

  for (let i = 0; i < maxChains; i++) {
    hitEnemies.push(current);
    lightningPoints.push({ x: current.x, y: current.y });

takeEnemyDamage(current, (250) * (magicMulti));

      createLightningEffect(hitEnemies[i - 1] || player, current);
    current = getClosestEnemy(current.x, current.y, hitEnemies);
    if (!current) break;
  }

  activeLightningLines.push({
    points: lightningPoints,
    duration: 10 
  });

}

function activateIceShards() {
  const waves = [
    { count: 5, delay: 0 },
    { count: 4, delay: 100 },
    { count: 3, delay: 200 }
  ];

  waves.forEach(wave => {
    setTimeout(() => {
      const angleSpread = Math.PI / 6; 
      const baseAngle = Math.atan2(mouseY - player.y, mouseX - player.x);

      for (let i = 0; i < wave.count; i++) {
        const offset = (i - (wave.count - 1) / 2) / ((wave.count - 1) / 2) * angleSpread;
        const angle = baseAngle + offset;

        const speed = 6;
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;

        projectiles.push({
          x: player.x,
          y: player.y,
          dx,
          dy,
          size: 10,
          color: "cyan",
          shape: "diamond",
          pierce: 0,
          damage: player.damage * (skillBonuses.abilityDamage ?? 1),
          owner: "player"
        });
      }
    }, wave.delay);
  });
}
function activateTimeStop() {
    timeStopTextAnimation = 30;
    timeStopTextFragments = [];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const chars = "TIME STOPPED!".split("");
    for (let i = 0; i < chars.length; i++) {
      const angle = (Math.PI * 2 * i) / chars.length + Math.random() * 0.2;
      const speed = 10 + Math.random() * 5;
      timeStopTextFragments.push({
        char: chars[i],
        x: centerX,
        y: centerY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        life: 30,
        alpha: 1
      });
    }
    for (let i = 0; i < 60; i++) {
      const angle = (2 * Math.PI * i) / 60;
      particles.push({
        x: player.x + player.w / 2,
        y: player.y + player.h / 2,
        dx: Math.cos(angle) * (6 + Math.random() * 3),
        dy: Math.sin(angle) * (6 + Math.random() * 3),
        life: 40 + Math.random() * 20,
        color: `rgba(0,255,255,${0.7 + Math.random() * 0.3})`
      });
    }
  }
function activateBlackHole() {
  const angle = Math.atan2(mouseY - (player.y + player.h / 2), mouseX - (player.x + player.w / 2));
  const spawnDist = 100;
  const bx = player.x + player.w / 2 + Math.cos(angle) * spawnDist;
  const by = player.y + player.h / 2 + Math.sin(angle) * spawnDist;
  activeBlackHoles.push({
    x: bx,
    y: by,
    radius: 60,
    life: 420,
    swirlAngle: 0
  });
}
function summonMinion(type) {
  let template = {
    minion: {
      w: 30,
      h: 30,
      hp: 100 * magicMulti,
      speed: 2.5,
      color: "cyan",  
      summonTimer: null  
    },
    tanklet: {
      w: 60,
      h: 60,
      hp: 500 * magicMulti,
      speed: 1.8,
      color: "cyan",
      summonTimer: null  
    },
      boss: {
    w: 60,
    h: 60,
    hp: 5000 * magicMulti,
    speed: 1,
    color: "gold",
    summonTimer: 600 
  }
  };

  const base = template[type];

  const newMinion = {
    x: player.x + player.w / 2,
    y: player.y + player.h / 2,
    w: base.w,
    h: base.h,
    hp: base.hp,
    speed: base.speed,
    color: base.color,
    target: null,
    cooldown: 0,
    type: type,
    summonTimer: summonTimer
  };

  minions.push(newMinion);
}

function activateMeteor() {
  activeMeteors.push({
    x: mouseX,
    y: mouseY,
    radius: 70,
    showCircle: 90,
    hit: false,
    timer: 0
  });
}

function checkInstinctTrigger() {
  if (!unlockedSkills.includes("Instinct")) return;

  const isLow = hp <= maxHP * 0.2;

  if (isLow && !instinctActive) {
    skillBonuses.damage += 1;
    instinctActive = true;
    applyStats();
    drawPlayer();
  } else if (!isLow && instinctActive) {
    skillBonuses.damage -= 1;
    instinctActive = false;
    applyStats();
    drawPlayer();
  }
}

function checkOverchargeTrigger() {
  if (!unlockedSkills.includes("Overcharge")) return;

  const isFull = hp >= maxHP;

  if (isFull && !overchargeActive) {
    skillBonuses.damage += 1;
    overchargeActive = true;
    applyStats();
    drawPlayer();
  } else if (!isFull && overchargeActive) {
    skillBonuses.damage -= 1;
    overchargeActive = false;
    applyStats();
    drawPlayer();
  }
}

function drawBerserkerStatus() {
  if (!berserkerActive || berserkerTimer <= 0) return;

  ctx.save();
  ctx.font = "bold 32px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.shadowColor = "black";
  ctx.shadowBlur = 8;

  const seconds = (berserkerTimer / 60).toFixed(1);
  const text = `BERSERKER MODE = ${seconds}s`;

  ctx.fillText(text, 24, canvas.height - 24);
  ctx.restore();
}
function drawPauseWeaponList() {
  const list = document.getElementById("pauseWeaponList");
  list.innerHTML = "";
  inventory.forEach((w, idx) => {
    const div = document.createElement("div");
    div.className = "weapon-block" + (w === selectedPauseWeapon ? " selected" : "");
    div.draggable = true;
    div.textContent = `${weaponsData[w]?.name || w}\nLv.${weaponLevels[w] || 1}`;
    div.onclick = () => {
      selectedPauseWeapon = w;
      drawPauseWeaponList();
      drawPauseUpgradeMenu();
    };

    div.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", idx);
      div.classList.add("selected");
    });
    div.addEventListener("dragend", e => {
      div.classList.remove("selected");
      drawPauseWeaponList();
    });
    div.addEventListener("dragover", e => {
      e.preventDefault();
      div.classList.add("drag-over");
    });
    div.addEventListener("dragleave", e => div.classList.remove("drag-over"));
    div.addEventListener("drop", e => {
      e.preventDefault();
      const fromIdx = Number(e.dataTransfer.getData("text/plain"));
      const toIdx = idx;
      div.classList.remove("drag-over");
      if (fromIdx !== toIdx) {
        const item = inventory[fromIdx];
        inventory.splice(fromIdx, 1);
        inventory.splice(toIdx, 0, item);
        selectedPauseWeapon = item;
        drawPauseWeaponList();
        drawPauseUpgradeMenu();
        saveGame(); 
      }
    });

    list.appendChild(div);
  });
  drawPauseUpgradeMenu();
}

function drawPauseUpgradeMenu() {
  const menu = document.getElementById("pauseUpgradeMenu");
  if (!selectedPauseWeapon) {
    menu.innerHTML = "<div style='color:#555;'>Select a weapon to upgrade.</div>";
    return;
  }
  const w = selectedPauseWeapon;
  const level = weaponLevels[w] || 1;
  const multi = getWeaponDamageMultiplier(level);
  const nextMulti = getWeaponDamageMultiplier(Math.min(level + 1, 5));
  const weapon = weaponsData[w];
  const rarity = weapon.rarity

menu.innerHTML = `
  <div>
    <h4>Upgrade: ${weapon.name}</h4>
    <div>Level: ${level} / 5</div>
    <div>Rarity: <b>${weapon.rarity}</b></div>
    <div>Gold: <span style="color:gold">${gold}</span></div>
    <button onclick="upgradeWeapon('${w}')"
      ${level >= 5 || gold < getWeaponUpgradeCost(w) ? "disabled" : ""}>
      Upgrade (${getWeaponUpgradeCost(w)} Gold)
    </button>
    <div style="margin-top:14px;">
      <div>Damage Multiplier: <b>x${multi.toFixed(2)}</b>${level < 5 ? ` → <b>x${nextMulti.toFixed(2)}</b> (next)` : ""}</div>
    </div>
  </div>
`;
}

function getWeaponUpgradeCost(weapon) {
  const level = weaponLevels[weapon] || 1;
  return level * (50 * level);
}

function upgradeWeapon(weapon) {
  const level = weaponLevels[weapon] || 1;
  if (level >= 5) return;
  const cost = getWeaponUpgradeCost(weapon);
  if (gold >= cost) {
    gold -= cost;
    weaponLevels[weapon] = level + 1;
    drawPauseUpgradeMenu();
    drawPauseWeaponList();
    applyStats();
    updateHUD();
    saveGame();
  }
}

function saveGame() {
  const saveData = {
    wave,
    upgradePoints,
    skillPoints,
    unlockedSkills,
    inventory,
    currentWeapon,
    boundSkills,
    statUpgrades,
    hp,
    level,
    score,
    gold,
    currentSkin,
    unlockedSkins: skins.filter(s => !s.locked).map(s => s.name),
    weaponLevels,
    nextLevelScore,
    nextUpgradeScore,
    upgradePointsObtained
  };
  localStorage.setItem("simgaShooterSave", JSON.stringify(saveData));
}

function loadGame() {
  const data = localStorage.getItem("simgaShooterSave");
  if (data) {
    try {
      const save = JSON.parse(data);

      wave = save.wave ?? 1;
      upgradePoints = save.upgradePoints ?? 0;
      skillPoints = save.skillPoints ?? 0;
      unlockedSkills = save.unlockedSkills ?? [];
      inventory = save.inventory ?? ['pistol'];
      currentWeapon = save.currentWeapon ?? 'pistol';
      hp = save.hp ?? 0;
      level = save.level ?? 1;
      score = save.score ?? 0;
      gold = save.gold ?? 0;
      currentSkin = save.currentSkin || "Default";

      skins.forEach(s => { s.locked = true; });

  (save.unlockedSkins || ["Default"]).forEach(name => {
    const skin = skins.find(s => s.name === name);
    if (skin) skin.locked = false;
  });  
      nextLevelScore = save.nextLevelScore ?? 500;
      nextUpgradeScore = save.nextUpgradeScore ?? 100;
      upgradePointsObtained = save.upgradePointsObtained ?? 0;

      if (save.boundSkills) {
        boundSkills.Q = save.boundSkills.Q ?? null;
        boundSkills.E = save.boundSkills.E ?? null;
      }
      if (save.statUpgrades) {
        statUpgrades = save.statUpgrades;
      }
      weaponLevels = save.weaponLevels || {};

      reapplyPassiveSkillEffects();

      drawInventory();
      applyStats();
      updateHUD();
      spawnEnemy();
      updateUpgradeButtons();  
      return;
    } catch (e) {
      console.error("Failed to load save:", e);
    }
  }

  if (!inventory.includes('pistol')) {
    inventory.push('pistol');
    currentWeapon = 'pistol';
    drawInventory();
  }
}


function loadGameTest() {
      if (!inventory.includes('pistol')) {
    inventory.push('pistol');
    currentWeapon = 'pistol';
    drawInventory();
  }
    }
function resetSave() {
  localStorage.removeItem("simgaShooterSave");
  location.reload();
}  

function restartGame() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
if (unlockedSkills.includes("Second Wind") && secondWind === false) {
    secondWind = true
    }
  restoreControls();
  pause = false;
    instinctActive = false;
overchargeActive = false;
    bossHUD.style.display = "none";
    nextUpgradeScore = 100;
  upgradePointsObtained = 0;     
statUpgrades = {
  speed: 0,
  damage: 0,
  maxHP: 0,
  reload: 0,
  luck: 0,
  intellect: 0
};
    playerSlowTimer = 0;
    playerStunTimer = 0;

    baseHP = 100;
    baseDamage = 5;
    maxHP = baseHP;

  wave = 0;
  score = 0;
  upgradePoints = 0;
  fireRateMultiplier = 1.0;

    
player = {
  x: 300,
  y: 300,
  w: 40,
  h: 40,
  color: 'cyan',
  speed: 40,
  damage: 5,
  isDashing: false,
  dashCooldown: 0,
  dashTime: 0,
  dashDir: { x: 0, y: 0 },
  dashTrail: [],
  angle: 0,
  shieldRegenTimer: 0,
  maxShield: 0,
  shield: 0
};
    laserBeam = {
  active: false,
  duration: 10,
  timer: 0
};
berserkerActive = false;
berserkerTimer = 0;

    

    checkOverchargeTrigger();
    updatePlayer();

  inventory = ['pistol'];
  currentWeapon = 'pistol';
    applyStats();
  bullets = [];
  enemyBullets = [];
  enemies = [];
  particles = [];
  droppedItems = [];

  luck = 1.0;
  waveTimer = 60;

  document.getElementById("deathScreen").style.display = "none";
    document.getElementById("winScreen").style.display = "none";  
  updateHUD();
  drawInventory();
    applyStats();
        hp = maxHP;
  gameLoop(); 
    updateUpgradeButtons();
}


    loadGame();
