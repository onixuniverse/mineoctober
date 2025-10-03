// priority: 100

LootJS.lootTables(event => {
    // warden
    event.getEntityTable('minecraft:warden')
        .createPool()
        .addEntry(LootEntry.of('plushies:warden_plushie'));

    // wither
    event.getEntityTable('minecraft:wither')
        .createPool()
        .addEntry(LootEntry.of('plushies:wither_plushie'));

    // ender dragon
    event.getEntityTable('minecraft:ender_dragon')
        .createPool()
        .addEntry(LootEntry.of('plushies:dragon_plushie'));
    
    // elder_guardian
    event.getEntityTable('minecraft:elder_guardian')
        .createPool()
        .addEntry(LootEntry.of('plushies:elder_guardian_plushie'));

    // squid
    event.getEntityTable('minecraft:squid')
        .firstPool()
        .addEntry(LootEntry.of('minecraft:ink_sac')
                .withWeight(8)
                .setCount([0, 3]));

    // magical_eye
    event.getEntityTable('minecraft:evoker')
        .createPool()
        .addEntry(
            LootEntry.of('endrem:magical_eye'));

    
    let mob_names = ['zombie_villager', 'pillager', 'vindicator', 'witch', 'creeper', 'skeleton', 'stray', 'spider', 'cave_spider', 'phantom', 'slime', 'zombie', 'husk', 'drowned', 'guardian', 'wither_skeleton', 'piglin', 'piglin_brute', 'blaze', 'ghast', 'hoglin', 'glow_squid', 'magma_cube', 'enderman', 'endermite', 'shulker', 'zombiefied_piglin'];

    mob_names.forEach(mob => {
        event.getEntityTable('minecraft:' + mob)
        .createPool()
        .addEntry(LootEntry.of('plushies:' + mob + '_plushie')
            .setCount([0, 1])
            .withWeight(1))
        .addEntry(LootEntry.empty()
            .withWeight(19));
    });
});