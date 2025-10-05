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
})