//priority: 10

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('mineoctober:aluminum_ingot'),
        [
            '9x mineoctober:aluminum_nugget'
        ]
    )

    event.shapeless(
        Item.of('9x mineoctober:aluminum_nugget'),
        [
            'mineoctober:aluminum_ingot'
        ]
    )

    event.shapeless(
        Item.of('mineoctober:duralumin_ingot'),
        [
            '9x mineoctober:duralumin_nugget'
        ]
    )

    event.shapeless(
        Item.of('9x mineoctober:duralumin_nugget'),
        [
            'mineoctober:duralumin_ingot'
        ]
    )

    // mineoctober:aluminum_nugget
    event.remove({ id: "create:crushing/diorite" })
    event.remove({ id: "create:crushing/diorite_recycling" })
    event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:diorite' }
        ],
        processing_time: 350,
        results: [
            {
                chance: 0.25,
                id: "minecraft:quartz"
            },
            {
                chance: 0.35,
                id: "mineoctober:aluminum_nugget"
            }
        ]
    })

    // mineoctober:duralumin_nugget
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:nuggets/copper"
            },
            {
                tag: "c:nuggets/copper"
            },
            {
                tag: "c:nuggets/aluminum"
            },
            {
                tag: "c:nuggets/aluminum"
            },
            {
                tag: "c:nuggets/aluminum"
            },
            {
                tag: "c:nuggets/aluminum"
            },
            {
                tag: "c:nuggets/aluminum"
            },
            {
                tag: "c:nuggets/aluminum"
            },
            {
                tag: "c:nuggets/aluminum"
            }
        ],
        results: [
            {
                count: 9,
                id: "mineoctober:duralumin_nugget"
            }
        ]
    })

    // mineoctober:duralumin_ingot
    event.custom({
        type: "create:mixing",
        heat_requirement: "superheated",
        ingredients: [
            {
                tag: "c:ingots/copper"
            },
            {
                tag: "c:ingots/copper"
            },
            {
                tag: "c:ingots/aluminum"
            },
            {
                tag: "c:ingots/aluminum"
            },
            {
                tag: "c:ingots/aluminum"
            },
            {
                tag: "c:ingots/aluminum"
            },
            {
                tag: "c:ingots/aluminum"
            },
            {
                tag: "c:ingots/aluminum"
            },
            {
                tag: "c:ingots/aluminum"
            }
        ],
        results: [
            {
                count: 9,
                id: "mineoctober:duralumin_ingot"
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
})