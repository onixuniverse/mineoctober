//Creates Raw Ore for non-Vanilla and non-Alloy materials.
const raw_ore_properties = {
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  aluminum: { color: aluminum },
  duralumin: { color: duralumin },
  osmium: { color: osmium },
  uranium: { color: uranium },
  zinc: { color: zinc },
  iridium: { color: iridium },
};

global.raw_ores = [
  "tin",
  "silver",
  // "lead",
  "nickel",
  "aluminum",
  // "osmium",
  // "uranium",
  "zinc",
  "iridium"
];

StartupEvents.registry("item", (event) => {
  for (const mat of global.raw_ores) {
    event
      .create(`mineoctober:raw_${mat}`)
      .translationKey(`item.mineoctober.raw_${mat}`)
      .texture("layer0", "mineoctober:item/raw_ore")
      .color(0, raw_ore_properties[mat].color)
      .tag("c:raw_materials")
      .tag(`c:raw_materials/${mat}`);
  }
});
