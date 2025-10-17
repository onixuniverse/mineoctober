// priority: 10000

// ItemEvents.toolTierRegistry(event => {
//     event.add('iridium', tier => {
//       tier.setUses(3000)
//       tier.setSpeed(10)
//       tier.setAttackDamageBonus(8.0)
//       tier.setIncorrectBlocksForDropsTag('minecraft:incorrect_for_netherite_tool')
//       tier.setEnchantmentValue(15)
//       tier.setRepairIngredient('#c:ingots/iridium')
//     });
// });

// ItemEvents.modification(event => {
//     event.modify("irons_spellbooks:keeper_flamberge", item => { let attack_damage = item.getAttributes("minecraft:generic.attack_damage").get(0)
//     item.removeAttribute("minecraft:generic.attack_damage", attack_damage.id)
//     item.addAttribute("minecraft:generic.attack_damage", attack_damage.id, attack_damage.name, attack_damage.amount -2, attack_damage.operation)
//     });
// })