//priority: 10

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('fantasy_armor:moon_crystal'),
        [
            ' A ',
            'CAT',
            'DDD'
        ],
        {
            D: "minecraft:diamond",
            A: "minecraft:amethyst_shard",
            T: "pastel:topaz_shard",
            C: "pastel:citrine_shard"
        }
    )
});