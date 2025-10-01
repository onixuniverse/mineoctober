StartupEvents.registry('item', event => {
    event.create('mineoctober:pumpkin_cookie').food(food => {
        food
            .nutrition(3)
            .saturation(0.3)
            .fastToEat()
    })
        .translationKey("item.mineoctober.pumpkin_cookie")
        .texture("mineoctober:item/pumpkin_cookie")
        .maxStackSize(64)
        .tag('c:foods')
        .tag('c:foods/cookie')
        .tag('c:foods/cookies')
        .tag('minecraft:parrot_poisonous_food')
        .tag('supplementaries:cookies')
})