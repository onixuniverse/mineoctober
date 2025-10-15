//Adds storage blocks for all materials you can use with global.ingots
StartupEvents.registry("block", (event) => {
  for (const mat of global.ingots) {
    event
      .create(`mineoctober:${mat}_block`)
      .translationKey(`item.mineoctober.${mat}_block`)
      .texture("mineoctober:block/storage_block")
      .color(0, ingot_properties[mat].color)
      .tag("c:storage_blocks")
      .tag(`c:storage_blocks/${mat}`)
      .tag("minecraft:mineable/pickaxe")
      .requiresTool(true)
      .soundType("metal")
      .item((i) => {
        i.color(ingot_properties[mat].color);
      });
  }
});
