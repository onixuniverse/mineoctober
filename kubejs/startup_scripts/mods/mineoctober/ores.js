global.ores = [
    "iridium"
];


StartupEvents.registry("block", (event) => {
  for (const mat of global.ores) {
    event
        .create(`mineoctober:${mat}_ore`)
        .translationKey(`block.mineoctober.${mat}_ore`)
        .texture(`mineoctober:block/${mat}_ore`)
        .tag("c:ores")
        .tag(`c:ores/${mat}`)
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock('minecraft:needs_diamond_tool')
        .requiresTool(true)
        .stoneSoundType()
        .lightLevel(0.3)
    }
});