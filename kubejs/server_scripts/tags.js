// priority: 10

ServerEvents.tags('item', event => {
    let doughs = ['bakery:cake_dough', 'bakery:sweet_dough', 'culturaldelights:corn_dough', 'farm_and_charm:dough', 'farmersdelight:wheat_dough', 'mynethersdelight:ghast_dough', 'rusticdelight:batter'];
    doughs.forEach(e => {
        event.add("c:foods", e)
        event.add("c:foods/dough", e)    
        event.add("c:dough", e)    
    });

    let sugar = ['minecraft:sugar', 'ubesdelight:sugar_brown'];
    sugar.forEach(e => {
        event.add("c:sugar", e)  
    });

    const fantasy_armor_helmet = ['fantasy_armor:grave_sentinel_helmet', 'fantasy_armor:crucible_knight_helmet', 'fantasy_armor:evening_ghost_helmet', 'fantasy_armor:ronin_helmet', 'fantasy_armor:malenia_helmet', 'fantasy_armor:old_knight_helmet', 'fantasy_armor:silver_knight_helmet', 'fantasy_armor:dead_gladiator_helmet', 'fantasy_armor:wind_worshipper_helmet', 'fantasy_armor:lady_maria_helmet', 'fantasy_armor:gilded_hunt_helmet', 'fantasy_armor:twinned_helmet', 'fantasy_armor:redeemer_helmet', 'fantasy_armor:forgotten_trace_helmet', 'fantasy_armor:golden_execution_helmet', 'fantasy_armor:spark_of_dawn_helmet', 'fantasy_armor:dark_cover_helmet', 'fantasy_armor:fog_guard_helmet', 'fantasy_armor:eclipse_soldier_helmet', 'fantasy_armor:dragonslayer_helmet', 'fantasy_armor:hero_helmet', 'fantasy_armor:golden_horns_helmet', 'fantasy_armor:thief_helmet', 'fantasy_armor:wandering_wizard_helmet', 'fantasy_armor:chess_board_knight_helmet', 'fantasy_armor:dark_lord_helmet', 'fantasy_armor:sunset_wings_helmet'];
    const fantasy_armor_chestpalte = ['fantasy_armor:eclipse_soldier_chestplate', 'fantasy_armor:dragonslayer_chestplate', 'fantasy_armor:hero_chestplate', 'fantasy_armor:golden_horns_chestplate', 'fantasy_armor:thief_chestplate', 'fantasy_armor:wandering_wizard_chestplate', 'fantasy_armor:chess_board_knight_chestplate', 'fantasy_armor:dark_lord_chestplate', 'fantasy_armor:sunset_wings_chestplate', 'fantasy_armor:fog_guard_chestplate', 'fantasy_armor:dark_cover_chestplate', 'fantasy_armor:spark_of_dawn_chestplate', 'fantasy_armor:golden_execution_chestplate', 'fantasy_armor:forgotten_trace_chestplate', 'fantasy_armor:redeemer_chestplate', 'fantasy_armor:twinned_chestplate', 'fantasy_armor:gilded_hunt_chestplate', 'fantasy_armor:lady_maria_chestplate', 'fantasy_armor:crucible_knight_chestplate', 'fantasy_armor:evening_ghost_chestplate', 'fantasy_armor:ronin_chestplate', 'fantasy_armor:malenia_chestplate', 'fantasy_armor:old_knight_chestplate', 'fantasy_armor:silver_knight_chestplate', 'fantasy_armor:dead_gladiator_chestplate', 'fantasy_armor:flesh_of_the_feaster_chestplate', 'fantasy_armor:wind_worshipper_chestplate', 'fantasy_armor:grave_sentinel_chestplate'];
    const fantasy_armor_leggings = ['fantasy_armor:eclipse_soldier_leggings', 'fantasy_armor:dragonslayer_leggings', 'fantasy_armor:hero_leggings', 'fantasy_armor:golden_horns_leggings', 'fantasy_armor:thief_leggings', 'fantasy_armor:chess_board_knight_leggings', 'fantasy_armor:wandering_wizard_leggings', 'fantasy_armor:dark_lord_leggings', 'fantasy_armor:sunset_wings_leggings', 'fantasy_armor:fog_guard_leggings', 'fantasy_armor:dark_cover_leggings', 'fantasy_armor:spark_of_dawn_leggings', 'fantasy_armor:golden_execution_leggings', 'fantasy_armor:forgotten_trace_leggings', 'fantasy_armor:redeemer_leggings', 'fantasy_armor:twinned_leggings', 'fantasy_armor:gilded_hunt_leggings', 'fantasy_armor:lady_maria_leggings', 'fantasy_armor:wind_worshipper_leggings', 'fantasy_armor:flesh_of_the_feaster_leggings', 'fantasy_armor:dead_gladiator_leggings', 'fantasy_armor:silver_knight_leggings', 'fantasy_armor:old_knight_leggings', 'fantasy_armor:malenia_leggings', 'fantasy_armor:ronin_leggings', 'fantasy_armor:evening_ghost_leggings', 'fantasy_armor:crucible_knight_leggings', 'fantasy_armor:grave_sentinel_leggings'];
    const fantasy_armor_boots = ['fantasy_armor:grave_sentinel_boots', 'fantasy_armor:crucible_knight_boots', 'fantasy_armor:evening_ghost_boots', 'fantasy_armor:ronin_boots', 'fantasy_armor:malenia_boots', 'fantasy_armor:old_knight_boots', 'fantasy_armor:silver_knight_boots', 'fantasy_armor:dead_gladiator_boots', 'fantasy_armor:flesh_of_the_feaster_boots', 'fantasy_armor:wind_worshipper_boots', 'fantasy_armor:lady_maria_boots', 'fantasy_armor:gilded_hunt_boots', 'fantasy_armor:twinned_boots', 'fantasy_armor:redeemer_boots', 'fantasy_armor:forgotten_trace_boots', 'fantasy_armor:golden_execution_boots', 'fantasy_armor:spark_of_dawn_boots', 'fantasy_armor:dark_cover_boots', 'fantasy_armor:fog_guard_boots', 'fantasy_armor:eclipse_soldier_boots', 'fantasy_armor:dragonslayer_boots', 'fantasy_armor:hero_boots', 'fantasy_armor:golden_horns_boots', 'fantasy_armor:thief_boots', 'fantasy_armor:wandering_wizard_boots', 'fantasy_armor:chess_board_knight_boots', 'fantasy_armor:dark_lord_boots', 'fantasy_armor:sunset_wings_boots'];

    fantasy_armor_helmet.forEach(h => {
        event.add("c:armors", h)
        event.add("c:enchantables", h)
        event.add("minecraft:head_armor", h)
        event.remove("minecraft:trimmable_armor", h)
    })

    fantasy_armor_chestpalte.forEach(h => {
        event.add("c:armors", h)
        event.add("c:enchantables", h)
        event.add("minecraft:chest_armor", h)
        event.remove("minecraft:trimmable_armor", h)
    })

    fantasy_armor_leggings.forEach(h => {
        event.add("c:armors", h)
        event.add("c:enchantables", h)
        event.add("minecraft:leg_armor", h)
        event.remove("minecraft:trimmable_armor", h)
    })

    fantasy_armor_boots.forEach(h => {
        event.add("c:armors", h)
        event.add("c:enchantables", h)
        event.add("minecraft:foot_armor", h)
        event.remove("minecraft:trimmable_armor", h)
    })
});