//Creates Tools for all materials besides ones provided by Minecraft.
const properties = {
  tin: { color: tin, damage: 350, tier: "stone" },
  silver: { color: silver, damage: 400, tier: "diamond" },
  lead: { color: lead, damage: 375, tier: "tier" },
  nickel: { color: nickel, damage: 320, tier: "iron" },
  zinc: { color: zinc, damage: 260, tier: "iron" },
  osmium: { color: osmium, damage: 450, tier: "diamond" },
  copper: { color: copper, damage: 200, tier: "stone" },
  steel: { color: steel, damage: 375, tier: "iron" },
  electrum: { color: electrum, damage: 432, tier: "iron" },
  aluminum: { color: aluminum, damage: 515, tier: "iron" },
  duralumin: { color: duralumin, damage: 815, tier: "iron" },
  tungsten: { color: tungsten, damage: 780, tier: "netherite" },
  brass: { color: brass, damage: 292, tier: "stone" },
  bronze: { color: bronze, damage: 550, tier: "iron" },
  constantan: { color: constantan, damage: 520, tier: "iron" },
  enderium: { color: enderium, damage: 2183, tier: "netherite" },
  invar: { color: invar, damage: 570, tier: "iron" },
  lumium: { color: lumium, damage: 925, tier: "diamond" },
  signalum: { color: signalum, damage: 700, tier: "diamond" },
  signar: { color: signar, damage: 1000, tier: "netherite" },
  // iridium: { color: iridium, damage: 3000, tier: "iridium" },
};

global.materials = [
  "tin",
  "silver",
  // "lead",
  "nickel",
  "zinc",
  // "osmium",
  "copper",
  "steel",
  // "electrum",
  "aluminum",
  // "tungsten",
  "brass",
  "bronze",
  // "constantan",
  // "enderium",
  // "invar",
  // "lumium",
  // "signalum",
  // "signar",
  // "iridium"
];

StartupEvents.registry("item", (event) => {
  for (const mat of global.materials) {
    event
      .create(`mineoctober:${mat}_axe`, "axe")
      .translationKey(`item.mineoctober.${mat}_axe`)
      .texture("layer0", "mineoctober:item/axe_handle")
      .texture("layer1", "mineoctober:item/axe_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("c:tools/axes")
      .tag(`c:tools/axes/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`mineoctober:${mat}_pickaxe`, "pickaxe")
      .translationKey(`item.mineoctober.${mat}_pickaxe`)
      .texture("layer0", "mineoctober:item/pickaxe_handle")
      .texture("layer1", "mineoctober:item/pickaxe_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("c:tools/pickaxes")
      .tag(`c:tools/pickaxes/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`mineoctober:${mat}_shovel`, "shovel")
      .translationKey(`item.mineoctober.${mat}_shovel`)
      .texture("layer0", "mineoctober:item/shovel_handle")
      .texture("layer1", "mineoctober:item/shovel_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("c:tools/shovels")
      .tag(`c:tools/shovels/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`mineoctober:${mat}_hoe`, "hoe")
      .translationKey(`item.mineoctober.${mat}_hoe`)
      .texture("layer0", "mineoctober:item/hoe_handle")
      .texture("layer1", "mineoctober:item/hoe_head")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("c:tools/hoe")
      .tag(`c:tools/hoe/${mat}`)
      .tier(`${properties[mat].tier}`);
    event
      .create(`mineoctober:${mat}_sword`, "sword")
      .translationKey(`item.mineoctober.${mat}_sword`)
      .texture("layer0", "mineoctober:item/sword_hilt")
      .texture("layer1", "mineoctober:item/sword_blade")
      .color(1, properties[mat].color)
      .maxDamage(properties[mat].damage)
      .tag("c:tools/swords")
      .tag(`c:tools/swords/${mat}`)
      .tier(`${properties[mat].tier}`)
      .attackDamageBonus(8);
  }
});
