// priority: 100

LootJS.modifiers(event => {
    event
        .addTableModifier("/^lootr:lootr_chests\/.*/")
        .removeLoot('artifacts:everlasting_beef')
        .removeLoot('artifacts:eternal_steak')
        .removeLoot('relics:infinity_ham')
})

LootJS.lootTables(event => {
    // warden
    event.getEntityTable('minecraft:warden')
        .createPool()
        .addEntry(LootEntry.of('plushies:warden_plushie'))

    // wither
    event.getEntityTable('minecraft:wither')
        .createPool()
        .addEntry(LootEntry.of('plushies:wither_plushie'))

    // ender dragon
    event.getEntityTable('minecraft:ender_dragon')
        .createPool()
        .addEntry(LootEntry.of('plushies:dragon_plushie'))
})
