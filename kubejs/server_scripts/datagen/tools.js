//Creates Tool Recipes for tools made with kubejs, using mineoctober ingots.
ServerEvents.recipes(r => {
    let k = id => `mineoctober:${id}`;

    for (const mat of global.materials) {
        let ingot = mat == 'copper' ? 'minecraft:copper_ingot' : k(`${mat}_ingot`);
        r.shaped(`mineoctober:${mat}_axe`, ['aa ', 'ab ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`mineoctober:${mat}_pickaxe`, ['aaa', ' b ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`mineoctober:${mat}_hoe`, ['aa ', ' b ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`mineoctober:${mat}_shovel`, [' a ', ' b ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
        r.shaped(`mineoctober:${mat}_sword`, [' a ', ' a ', ' b '], {
            a: ingot,
            b: 'minecraft:stick'
        });
    }
})
