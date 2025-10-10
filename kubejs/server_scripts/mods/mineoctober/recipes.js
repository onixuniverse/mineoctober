//priority: 10

ServerEvents.recipes(event => {
    // mineoctober:raw_aluminum
    event.remove({ id: "create:crushing/diorite" })
    event.remove({ id: "create:crushing/diorite_recycling" })
    // event.custom({
    //     type: 'create:crushing',
    //     ingredients: [
    //         { item: 'minecraft:diorite' }
    //     ],
    //     processing_time: 350,
    //     results: [
    //         {
    //             chance: 1,
    //             id: "mineoctober:raw_aluminum"
    //         },
    //         {
    //             chance: 0.25,
    //             id: "mineoctober:raw_aluminum"
    //         },
    //         {
    //             chance: 0.25,
    //             id: "minecraft:quartz"
    //         }
    //     ]
    // })

    // mineoctober:duralumin_nugget
    // event.custom({
    //     type: "create:mixing",
    //     heat_requirement: "heated",
    //     ingredients: [
    //         {
    //             tag: "c:nuggets/copper"
    //         },
    //         {
    //             tag: "c:nuggets/copper"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         },
    //         {
    //             tag: "c:nuggets/aluminum"
    //         }
    //     ],
    //     results: [
    //         {
    //             count: 9,
    //             id: "mineoctober:duralumin_nugget"
    //         }
    //     ]
    // })

    // mineoctober:duralumin_ingot
    // event.custom({
    //     type: "create:mixing",
    //     heat_requirement: "superheated",
    //     ingredients: [
    //         {
    //             tag: "c:ingots/copper"
    //         },
    //         {
    //             tag: "c:ingots/copper"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         },
    //         {
    //             tag: "c:ingots/aluminum"
    //         }
    //     ],
    //     results: [
    //         {
    //             count: 9,
    //             id: "mineoctober:duralumin_ingot"
    //         }
    //     ]
    // })


    // mineoctober:steel_ingot
    
    event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
        {
            tag: "c:raw_materials/copper"
        },
        {
            tag: "c:raw_materials/aluminum"
        },
        {
            tag: "c:raw_materials/aluminum"
        }
    ],
    results: [
        {
            count: 3,
            id: 'mineoctober:duralumin_ingot'
        }
    ]
    });
    
    event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
        {
            tag: "minecraft:coals"
        },
        {
            tag: "c:ingots/iron"
        },
        {
            tag: "c:ingots/iron"
        }
    ],
    results: [
        {
            count: 2,
            id: 'mineoctober:steel_ingot'
        }
    ]
    })

    // mineoctober:steel_ingot
    event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
        {
            tag: "minecraft:coals"
        },
        {
            tag: "c:raw_materials/iron"
        },
        {
            tag: 'c:raw_materials/iron'
        }
    ],
    results: [
        {
            count: 3,
            id: 'mineoctober:steel_ingot'
        }
    ]
    })
})