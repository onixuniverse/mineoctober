// priority: 100

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
    
    // squid
    event.getEntityTable('minecraft:squid')
        .firstPool()
        .addEntry(LootEntry.of('minecraft:ink_sac')
                .withWeight(8)
                .setCount([0, 3]))

    // evoker
    event.getEntityTable('minecraft:evoker')
        .createPool()
        .addEntry(
            LootEntry.of('endrem:magical_eye'))
})
