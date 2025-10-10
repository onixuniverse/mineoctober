const ingot_properties = {
  copper: { color: copper },
  iron: { color: iron },
  gold: { color: gold },
  tin: { color: tin },
  silver: { color: silver },
  lead: { color: lead },
  nickel: { color: nickel },
  steel: { color: steel },
  aluminum: { color: aluminum },
  duralumin: { color: duralumin },
  electrum: { color: electrum },
  constantan: { color: constantan },
  osmium: { color: osmium },
  bronze: { color: bronze },
  zinc: { color: zinc },
  brass: { color: brass },
  enderium: { color: enderium },
  lumium: { color: lumium },
  invar: { color: invar },
  signalum: { color: signalum },
  tungsten: { color: tungsten },
  signar: { color: signar },
  uranium: { color: uranium },
  iridium: { color: iridium }
};

global.ingots = [
  "tin",
  "silver",
  // "lead",
  "nickel",
  "steel",
  "aluminum",
  "duralumin",
  // "electrum",
  // "constantan",
  // "osmium",
  "bronze",
  "zinc",
  "brass",
  // "enderium",
  // "lumium",
  // "invar",
  // "signalum",
  // "tungsten",
  // "signar",
  // "uranium",
  "iridium"
];

StartupEvents.registry("item", (event) => {
  for (const mat of global.ingots) {
    event
      .create(`mineoctober:${mat}_ingot`)
      .translationKey(`item.mineoctober.${mat}_ingot`)
      .texture("layer0", "mineoctober:item/ingot")
      .color(0, ingot_properties[mat].color)
      .tag("c:ingots")
      .tag(`c:ingots/${mat}`)
      .tag("minecraft:beacon_payment_items");
    event
      .create(`mineoctober:${mat}_nugget`)
      .translationKey(`item.mineoctober.${mat}_nugget`)
      .texture("layer0", "mineoctober:item/nugget")
      .color(0, ingot_properties[mat].color)
      .tag("c:nuggets")
      .tag(`c:nuggets/${mat}`);
  }
});
