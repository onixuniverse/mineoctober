//Creates Storage Block Recipes using mineoctober ingots / Nuggets
ServerEvents.recipes(r => {
    let m = id => `mineoctober:${id}`;
    let c_tag = id => `#c:${id}`;
    let cr = id => `create:${id}`;

    function nuggetsToIngot(material) {
        r.shaped(m(`${material}_ingot`), [
            'MMM',
            'MMM',
            'MMM'
        ], {
            M: c_tag(`nuggets/${material}`)
        }).id(m(`${material}_nuggets_to_${material}_ingot`));
    }

    function ingotToNuggets(material) {
        r.shapeless(Item.of(m(`${material}_nugget`), 9), c_tag(`ingots/${material}`))
            .id(m(`${material}_ingot_to_${material}_nuggets`));
    }

    function ingotsToBlocm(material) {
        r.shaped(m(`${material}_block`), [
            'MMM',
            'MMM',
            'MMM'
        ], {
            M: c_tag(`ingots/${material}`)
        }).id(m(`${material}_ingots_to_${material}_block`));
    }

    function blockToIngots(material) {
        r.shapeless(Item.of(m(`${material}_ingot`), 9), c_tag(`storage_blocks/${material}`))
            .id(m(`${material}_block_to_${material}_ingots`));
    }

    for (const mat of global.ingots) {
        ingotsToBlocm(mat);
        blockToIngots(mat);
        nuggetsToIngot(mat);
        ingotToNuggets(mat);
    }
    

    function smeltRawToIngot(material) {
        r.smelting(m(`${material}_ingot`), c_tag(`raw_materials/${material}`))
            .id(m(`${material}_ingot_from_smelting_raw_${material}`));
    }

    function blastRawToIngot(material) {
        r.blasting(m(`${material}_ingot`), c_tag(`raw_materials/${material}`))
            .id(m(`${material}_ingot_from_blasting_raw_${material}`));
    }

    function smeltCrushedRawToIngot(material) {
        r.smelting(m(`${material}_ingot`), cr(`crushed_raw_${material}`))
            .id(m(`smelting/${material}_ingot_from_crushed`));
    }

    function seethingBurning(material) {
        r.custom({
            type: "dndesires:seething",
            ingredients: [
                {
                    tag: `c:raw_materials/${material}`
                }
            ],
            results: [
                {
                    id: `mineoctober:${material}_ingot`
                },
                {
                    "chance": 0.8,
                    id: `mineoctober:${material}_ingot`
                }
            ]
        });
    }
    
    for (const mat of global.raw_ores) {
        smeltRawToIngot(mat);
        blastRawToIngot(mat);
        smeltCrushedRawToIngot(mat);
        seethingBurning(mat);
    }
});
