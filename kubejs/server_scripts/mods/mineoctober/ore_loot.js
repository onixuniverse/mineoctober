LootJS.modifiers(event => {
    event.addBlockModifier('mineoctober:iridium_ore')
         .addLoot('mineoctober:raw_iridium')
         .removeLoot('mineoctober:iridium_ore')
         .applyOreBonus("minecraft:fortune");
});