// priority: 10

RecipeViewerEvents.addEntries('item', event => {
    for (let i = 0; i <= 15; i++) {
        event.add(`minecraft:light[block_state={level:"${i}"}]`);
    };
});


ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:light[block_state={level:"15"}]', 3),
        [
            "minecraft:torch"
        ]
    );

    for (let i = 0; i < 15; i++){
        event.shapeless(
            Item.of(`minecraft:light[block_state={level:"${i}"}]`, 2),
            [
                `minecraft:light[block_state={level:"${i + 1}"}]`
            ]
        );
    };

    for (let i = 1; i <= 15; i++){
        event.shapeless(
            Item.of(`minecraft:light[block_state={level:"${i}"}]`),
            [
                `2x minecraft:light[block_state={level:"${i - 1}"}]`,
            ]
        );
    };
});


ServerEvents.tags('item', event => {
    event.add('c:light/bulb', 'minecraft:light')
});
