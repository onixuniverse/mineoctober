LootJS.modifiers(event => {
    event.addBlockModifier("create:zinc_ore")
         .addLoot("mineoctober:raw_zinc")
         .removeLoot("create:raw_zinc")
         .applyOreBonus("minecraft:fortune");

    event.addBlockModifier("create:deepslate_zinc_ore")
         .addLoot("mineoctober:raw_zinc")
         .removeLoot("create:raw_zinc")
         .applyOreBonus("minecraft:fortune");
});