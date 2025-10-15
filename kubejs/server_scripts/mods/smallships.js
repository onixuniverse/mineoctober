//priority: 10

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('smallships:sail', 1),
        [
            'SLS',
            'SLS',
            'SLS'
        ],
        {
            S: 'immersive_aircraft:sail',
            L: '#minecraft:logs'
        }
    );
});