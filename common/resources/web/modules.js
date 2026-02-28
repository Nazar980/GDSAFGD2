import * as http from '/http.js'
import { getComponent } from '/components/Loader.js'

const modules = {
    all: [],
    automation1: {},
    esp: {},
    hacks1: {},
    visuals1: {},
    scripting: {},
    utility1: {}
};

const module = (params) => {
    modules.all.push(params);

    params.componentRef = getComponent(`${params.group}/${params.component}`);
    modules[params.group][params.component] = params;
};

// Automation Modules =================

module({
    group: 'automation1',
    name: 'Auto Disconnect',
    component: 'AutoDisconnect',
    path: 'auto-disconnect',
    tags: ['auto', 'disconnect']
});
module({
    group: 'automation1',
    name: 'Auto Bucket',
    component: 'AutoBucket',
    path: 'auto-bucket',
    tags: ['auto', 'bucket', 'mlg', 'nofall', 'no', 'fall']
});
module({
    group: 'automation1',
    name: 'Auto Fish',
    component: 'AutoFish',
    path: 'auto-fish',
    tags: ['auto', 'fish', 'fishing']
});
module({
    group: 'automation1',
    name: 'Auto Totem',
    component: 'AutoTotem',
    path: 'auto-totem',
    tags: ['auto', 'totem']
});
module({
    group: 'automation1',
    name: 'Auto Drop',
    component: 'AutoDrop',
    path: 'auto-drop',
    tags: ['auto', 'drop', 'inventory']
});
module({
    group: 'automation1',
    name: 'Container Buttons',
    component: 'ContainerButtons',
    path: 'container-buttons',
    tags: ['container', 'buttons']
});
module({
    group: 'automation1',
    name: 'Auto Eat',
    component: 'AutoEat',
    path: 'auto-eat',
    tags: ['auto', 'eat']
});
module({
    group: 'automation1',
    name: 'Anti Respawn Reset',
    component: 'AntiRespawnReset',
    path: 'anti-respawn-reset',
    tags: ['anti', 'respawn', 'bed', 'anchor']
});
module({
    group: 'automation1',
    name: 'Auto Craft',
    component: 'AutoCraft',
    path: 'auto-craft',
    tags: ['auto', 'craft']
});
module({
    group: 'automation1',
    name: 'TriggerBot',
    component: 'AutoAttack',
    path: 'auto-attack',
    tags: ['auto', 'attack']
});
module({
    group: 'automation1',
    name: 'Breach Swap',
    component: 'BreachSwap',
    path: 'breach-swap',
    tags: ['auto', 'attack', 'breach', 'mace', 'swap']
});
module({
    group: 'automation1',
    name: 'Schematica',
    component: 'Schematica',
    path: 'schematica',
    tags: ['schematica']
});
module({
    group: 'automation1',
    name: 'Auto Hotbar',
    component: 'AutoHotbar',
    path: 'auto-hotbar',
    tags: ['auto', 'hotbar']
});
module({
    group: 'automation1',
    name: 'Auto Tool',
    component: 'AutoTool',
    path: 'auto-tool',
    tags: ['auto', 'tool']
});
module({
    group: 'automation1',
    name: 'Spear Range',
    component: 'SpearRange',
    path: 'spear-range',
    tags: ['spear', 'reach', 'range']
});
module({
    group: 'automation1',
    name: 'Shield breaker',
    component: 'AutoStunner',
    path: 'auto-stunner',
    tags: ['stun', 'shield', 'break', 'auto']
});

// ESP modules ======================

module({
    group: 'esp',
    name: 'Block ESP',
    component: 'BlockESP',
    path: 'block-esp',
    tags: ['blocks', 'esp', 'xray']
});
module({
    group: 'esp',
    name: 'Players Esp',
    component: 'EntityESP',
    path: 'entity-esp',
    tags: ['entity', 'entities', 'esp']
});
module({
    group: 'esp',
    name: 'Projectile Path',
    component: 'ProjectilePath',
    path: 'projectile-path',
    tags: ['projectile', 'path', 'ender', 'pearl']
});
module({
    group: 'esp',
    name: 'Light Level',
    component: 'LightLevel',
    path: 'light-level',
    tags: ['light', 'level', 'mob', 'spawn']
});
module({
    group: 'esp',
    name: 'End City Chunks',
    component: 'EndCityChunks',
    path: 'end-city-chunks',
    tags: ['end', 'city', 'cities', 'chunks']
});
module({
    group: 'esp',
    name: 'Entity Owner',
    component: 'EntityOwner',
    path: 'entity-owner',
    tags: ['entity', 'owner']
});
module({
    group: 'esp',
    name: 'Free Cam',
    component: 'FreeCam',
    path: 'freecam',
    tags: ['freecam', 'camera']
});
module({
    group: 'esp',
    name: 'New Chunks',
    component: 'NewChunks',
    path: 'new-chunks',
    tags: ['new', 'chunks']
});
module({
    group: 'esp',
    name: 'Entity Titles',
    component: 'EntityTitle',
    path: 'entity-titles',
    tags: ['entity', 'title', 'health']
});

// Hacks Modules ==========================

module({
    group: 'hacks1',
    name: 'Kill Aura',
    component: 'KillAura',
    path: 'kill-aura',
    tags: ['kill', 'aura', 'auto', 'attack']
});
module({
    group: 'hacks1',
    name: 'Elytra Fly',
    component: 'ElytraHack',
    path: 'elytra-fly',
    tags: ['elytra', 'hack', 'fly']
});
module({
    group: 'hacks1',
    name: 'Pig',
    component: 'PigHack',
    path: 'pig',
    tags: ['pig', 'hack']
});
module({
    group: 'hacks1',
    name: 'Auto Criticals',
    component: 'AutoCriticals',
    path: 'auto-criticals',
    tags: ['auto', 'criticals']
});
module({
    group: 'hacks1',
    name: 'Fly',
    component: 'FlyHack',
    path: 'fly',
    tags: ['fly', 'hack']
});
module({
    group: 'hacks1',
    name: 'Elytra Tunnel',
    component: 'ElytraTunnel',
    path: 'elytra-tunnel',
    tags: ['elytra', 'tunnel']
});
module({
    group: 'hacks1',
    name: 'Movement',
    component: 'MovementHack',
    path: 'movement',
    tags: ['movement', 'hack']
});
module({
    group: 'hacks1',
    name: 'Scaffold',
    component: 'Scaffold',
    path: 'scaffold',
    tags: ['scaffold']
});
module({
    group: 'hacks1',
    name: 'No Fall',
    component: 'NoFall',
    path: 'no-fall',
    tags: ['nofall', 'no', 'fall']
});
module({
    group: 'hacks1',
    name: 'Fast Break',
    component: 'FastBreak',
    path: 'fast-break',
    tags: ['fast', 'break']
});
module({
    group: 'hacks1',
    name: 'Reach',
    component: 'Reach',
    path: 'reach',
    tags: ['reach']
});
module({
    group: 'hacks1',
    name: 'Teleport',
    component: 'TeleportHack',
    path: 'teleport',
    tags: ['teleport', 'hack']
});
module({
    group: 'hacks1',
    name: 'Fake Lag',
    component: 'FakeLag',
    path: 'fake-lag',
    tags: ['fake', 'lag']
});
module({
    group: 'hacks1',
    name: 'Blink',
    component: 'Blink',
    path: 'blink',
    tags: ['blink']
});
module({
    group: 'hacks1',
    name: 'Boat',
    component: 'BoatHack',
    path: 'boat',
    tags: ['boat', 'hack', 'fly']
});
module({
    group: 'hacks1',
    name: 'Inv Move',
    component: 'InvMove',
    path: 'inv-move',
    tags: ['inventory', 'move', 'keys']
});
module({
    group: 'hacks1',
    name: 'Area Mine',
    component: 'AreaMine',
    path: 'area-mine',
    tags: ['area', 'mine']
});
module({
    group: 'hacks1',
    name: 'Server Plugins',
    component: 'ServerPlugins',
    path: 'server-plugins',
    tags: ['server', 'plugins']
});
module({
    group: 'hacks1',
    name: 'Hitbox Size',
    component: 'HitboxSize',
    path: 'hitbox-size',
    tags: ['hitbox', 'size']
});
module({
    group: 'hacks1',
    name: 'Bedrock Breaker',
    component: 'BedrockBreaker',
    path: 'bedrock-breaker',
    tags: ['bedrock', 'breaker']
});
module({
    group: 'hacks1',
    name: 'Anti Hunger',
    component: 'AntiHunger',
    path: 'anti-hunger',
    tags: ['anti', 'hunger']
});
module({
    group: 'hacks1',
    name: 'Step Up',
    component: 'StepUp',
    path: 'step-up',
    tags: ['step', 'up', 'jump']
});
module({
    group: 'hacks1',
    name: 'Aim Assist',
    component: 'AimAssist',
    path: 'aim-assist',
    tags: ['aim', 'bow', 'assist']
});
module({
    group: 'hacks1',
    name: 'Air Place',
    component: 'AirPlace',
    path: 'air-place',
    tags: ['air', 'place', 'airplace', 'scaffold']
});

// Visuals Modules ============================

module({
    group: 'visuals1',
    name: 'Full Bright',
    component: 'FullBright',
    path: 'full-bright',
    tags: ['full', 'bright', 'night', 'vision']
});
module({
    group: 'visuals1',
    name: 'Armor Overlay',
    component: 'ArmorOverlay',
    path: 'armor-overlay',
    tags: ['armor', 'overlay']
});
module({
    group: 'visuals1',
    name: 'Shulker Tooltip',
    component: 'ShulkerTooltip',
    path: 'shulker-tooltip',
    tags: ['shulker', 'tooltip']
});
module({
    group: 'visuals1',
    name: 'Advanced Tooltips',
    component: 'AdvancedTooltips',
    path: 'adv-tooltips',
    tags: ['advanced', 'tooltips']
});
module({
    group: 'visuals1',
    name: 'Exploration Mini Map',
    component: 'ExplorationMiniMap',
    path: 'exploration-mini-map',
    tags: ['exploration', 'minimap']
});
module({
    group: 'visuals1',
    name: 'Death Coordinates',
    component: 'DeathCoordinates',
    path: 'death-coordinates',
    tags: ['death', 'coordinates']
});
module({
    group: 'visuals1',
    name: 'No Fog',
    component: 'Fog',
    path: 'no-fog',
    tags: ['fog']
});
module({
    group: 'visuals1',
    name: 'Chunks',
    component: 'Chunks',
    path: 'chunks',
    tags: ['chunks', 'distance']
});
module({
    group: 'visuals1',
    name: 'Status Effects',
    component: 'StatusEffects',
    path: 'status-effects',
    tags: ['status', 'effects']
});
module({
    group: 'visuals1',
    name: 'Zoom',
    component: 'Zoom',
    path: 'zoom',
    tags: ['zoom']
});
module({
    group: 'visuals1',
    name: 'Performance',
    component: 'Performance',
    path: 'performance',
    tags: ['performance', 'fps']
});
module({
    group: 'visuals1',
    name: 'World Markers',
    component: 'WorldMarkers',
    path: 'world-markers',
    tags: ['world', 'markers']
});
module({
    group: 'visuals1',
    name: 'Hurt Bobbing',
    component: 'BobHurt',
    path: 'bob-hurt',
    tags: ['nohurtcam', 'bobhurt']
});
module({
    group: 'visuals1',
    name: 'No Weather',
    component: 'NoWeather',
    path: 'no-weather',
    tags: ['no', 'weather']
});
module({
    group: 'visuals1',
    name: 'Fake Weather',
    component: 'FakeWeather',
    path: 'fake-weather',
    tags: ['fake', 'weather']
});
module({
    group: 'visuals1',
    name: 'Logout Spots',
    component: 'LogoutSpots',
    path: 'logout-spots',
    tags: ['logout', 'spots']
});
module({
    group: 'visuals1',
    name: 'Block Entity',
    component: 'BlockEntityDistance',
    path: 'block-entity',
    tags: ['block', 'entity', 'chest', 'render']
});

// Scripting Modules ======================

module({
    group: 'scripting',
    name: 'Key Bindings',
    component: 'KeyBindingScripts',
    path: 'key-bindings',
    tags: ['key', 'bindings', 'scripting']
});
module({
    group: 'scripting',
    name: 'Status Overlay',
    component: 'StatusOverlay',
    path: 'status-overlay',
    tags: ['status', 'overlay', 'f3']
});
module({
    group: 'scripting',
    name: 'Events Scripting',
    component: 'EventsScripting',
    path: 'events-scripting',
    tags: ['events', 'tick', 'scripting']
});
module({
    group: 'scripting',
    name: 'Block Automation',
    component: 'BlockAutomation',
    path: 'block-automation',
    tags: ['scripted', 'block', 'placer', 'automation']
});
module({
    group: 'scripting',
    name: 'Exec',
    component: 'Exec',
    path: 'exec',
    tags: ['exec']
});
module({
    group: 'scripting',
    name: 'Villager Roller',
    component: 'VillagerRoller',
    path: 'villager-roller',
    tags: ['villager', 'roller']
});
module({
    group: 'scripting',
    name: 'TPS',
    component: 'Tps',
    path: 'tps',
    tags: ['tps', 'tick', 'rate']
});
module({
    group: 'scripting',
    name: 'Debug',
    component: 'Debugging',
    path: 'debugging',
    tags: ['script', 'debug']
});
module({
    group: 'scripting',
    name: 'Editor Config',
    component: 'MonacoEditorConfig',
    path: 'editor-config',
    tags: ['script', 'editor', 'config', 'monaco']
});
module({
    group: 'scripting',
    name: 'LLM Guide.md',
    component: 'LLM-Guide',
    tags: ['llm', 'guide', 'docs', 'documentation'],
    localLink: true,
    onClick() {
        window.open('/llm/cheatutils-llm-guide.md', '_blank');
    }
});
module({
    group: 'scripting',
    name: 'LLM API.txt',
    component: 'LLM-API',
    tags: ['llm', 'api', 'docs', 'documentation'],
    localLink: true,
    onClick() {
        window.open('/llm/cheatutils-api.txt', '_blank');
    }
});
module({
    group: 'scripting',
    name: 'Language Docs',
    component: 'LanguageDocs',
    tags: ['scripting', 'language', 'docs', 'documentation'],
    externalLink: true,
    onClick() {
        const fallback = 'https://github.com/Zergatul/java-scripting-language';
        http.get('/api/commits').then(commits => {
            if (commits['java-scripting-language']) {
                window.open(`https://github.com/Zergatul/java-scripting-language/blob/${commits['java-scripting-language']}/README.md`, '_blank');
            } else {
                window.open(fallback, '_blank');
            }
        }).catch(() => {
            window.open(fallback, '_blank');
        });
    }
});
module({
    group: 'scripting',
    name: 'Script Examples',
    component: 'Script Examples',
    tags: ['script', 'examples', 'docs', 'documentation'],
    externalLink: true,
    onClick() {
        window.open('https://github.com/Zergatul/cheatutils-examples/tree/master/v3', '_blank');
    }
});

// Utility Modules =================

module({
    group: 'utility1',
    name: 'Core Config',
    component: 'Core',
    path: 'core',
    tags: ['core', 'port', 'advanced', 'scripting']
});
module({
    group: 'utility1',
    name: 'Profiles',
    component: 'Profiles',
    path: 'profiles',
    tags: ['profiles']
});
module({
    group: 'utility1',
    name: 'User Name',
    component: 'UserName',
    path: 'user-name',
    tags: ['user', 'name']
});
module({
    group: 'utility1',
    name: 'Container Summary',
    component: 'ContainerSummary',
    path: 'container-summary',
    tags: ['container', 'summary']
});
module({
    group: 'utility1',
    name: 'Chat',
    component: 'ChatUtilities',
    path: 'chat',
    tags: ['chat']
});
module({
    group: 'utility1',
    name: 'Lock Inputs',
    component: 'LockInputs',
    path: 'lock-inputs',
    tags: ['lock', 'inputs']
});
module({
    group: 'utility1',
    name: 'World Download',
    component: 'WorldDownload',
    path: 'world-download',
    tags: ['world', 'download']
});
module({
    group: 'utility1',
    name: 'Reset',
    component: 'Reset',
    path: 'reset',
    tags: ['reset', 'config'],
    dangerous: true
});
module({
    group: 'utility1',
    name: 'Matrix Server',
    component: 'MatrixServer',
    tags: ['matrix', 'discord'],
    externalLink: true,
    onClick() {
        window.open('https://matrix.to/#/#cheatutils:matrix.org', '_blank');
    }
});
module({
    group: 'utility1',
    name: 'YouTube Tutorials',
    component: 'YouTubeTutorials',
    tags: ['youtube', 'video', 'tutorial', 'guide', 'docs', 'documentation'],
    externalLink: true,
    onClick() {
        window.open('https://www.youtube.com/playlist?list=PLG9SPA0O8HLSyHpxp-Y66ktVIAjQwWWk_', '_blank');
    }
});

export { modules }



