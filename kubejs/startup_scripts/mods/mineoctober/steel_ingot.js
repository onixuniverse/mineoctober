StartupEvents.registry("item", event => {
    event
        .create("mineoctober:steel_ingot")
        .translationKey("item.mineoctober.steel_ingot")
        .texture("mineoctober:item/steel_ingot")
        .maxStackSize(64)
        .tag("c:ingots")
        .tag("c:ingots/steel")
})