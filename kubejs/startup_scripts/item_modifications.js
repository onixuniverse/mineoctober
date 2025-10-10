ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
        item.rarity = 'UNCOMMON'
    });
});