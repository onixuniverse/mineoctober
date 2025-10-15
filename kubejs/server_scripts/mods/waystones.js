//priority: 10

ServerEvents.recipes(event => {
    const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone', 'waystones:deepslate_waystone', 'waystones:blackstone_waystone', 'waystones:end_stone_waystone'];
    
    waystones.forEach(waystone => {
        event.replaceInput(
            { output: waystone },
            'minecraft:obsidian',
            'thaumon:eldritch_stone'
        );
    });

    event.replaceInput(
        { output: 'waystones:warp_stone' },
        'minecraft:amethyst_shard',
        'magic_vibe_decorations:ametrine_shard'
    );

    event.replaceInput(
        { output: 'waystones:warp_stone' },
        'minecraft:emerald',
        'minecraft:emerald_block'
    );
});