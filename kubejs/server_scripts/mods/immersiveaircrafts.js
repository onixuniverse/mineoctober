//priority: 10

ServerEvents.recipes(event => {
    event.replaceInput(
        { output: 'immersive_aircraft:hull' },
        'minecraft:iron_ingot',
        '#c:ingots/duralumin'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:hull_reinforcement' },
        'minecraft:iron_ingot',
        '#c:ingots/steel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:engine' },
        'minecraft:cobblestone',
        'minecraft:iron_block'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:propeller' },
        'minecraft:iron_ingot',
        '#c:ingots/duralumin'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:steel_boiler' },
        'minecraft:iron_ingot',
        '#c:ingots/steel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:bomb_bay' },
        'minecraft:iron_ingot',
        '#c:ingots/steel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:industrial_gears' },
        'minecraft:iron_ingot',
        '#c:ingots/steel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:industrial_gears' },
        'minecraft:copper_ingot',
        '#c:ingots/duralumin'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:industrial_gears' },
        'minecraft:lever',
        'create:large_cogwheel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:sturdy_pipes' },
        'minecraft:iron_ingot',
        '#c:ingots/steel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:sturdy_pipes' },
        'minecraft:copper_ingot',
        '#c:ingots/duralumin'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:improved_landing_gear' },
        'minecraft:iron_ingot',
        '#c:ingots/duralumin'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:improved_landing_gear' },
        'minecraft:coal',
        'astikorcartsredux:wheel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:boiler' },
        'minecraft:copper_ingot',
        '#c:ingots/steel'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:sail' },
        'minecraft:string',
        'farmersdelight:safety_net'
    );
    
    event.replaceInput(
        { output: 'immersive_aircraft:sail' },
        'minecraft:white_carpet',
        'minecraft:white_wool'
    );
});