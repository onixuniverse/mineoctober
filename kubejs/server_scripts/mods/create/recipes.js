ServerEvents.recipes(event => {
    let k = id => `mineoctober:${id}`;
    let c_tag = id => `#c:${id}`;
    let cr = id => `create:${id}`;

    function replaceInputTemplate(input, input_item, to_replace_item) {
        event.replaceInput(
            { input: input },
            input_item,
            to_replace_item
        );
    };

    function replaceOutputTemplate(output, output_item, to_replace_item) {
        event.replaceOutput(
            { output: output },
            output_item,
            to_replace_item
        );
    };

    event.shaped(
        Item.of('create:wrench'),
        [
            "GG ",
            "GC ",
            " S "
        ],
        {
            G: "#c:ingots/gold",
            C: "create:cogwheel",
            S: "#c:rods/wooden"
        }
    )

    // Zinc
    replaceInputTemplate('create:zinc_ingot', 'create:zinc_ingot', '#c:ingots/zinc');
    replaceOutputTemplate('create:zinc_ingot', 'create:zinc_ingot', 'mineoctober:zinc_ingot');

    replaceInputTemplate('create:zinc_nugget', 'create:zinc_nugget', '#c:nugget/zinc');
    replaceOutputTemplate('create:zinc_nugget', 'create:zinc_nugget', 'mineoctober:zinc_nugget');

    replaceInputTemplate('create:zinc_block', 'create:zinc_block', '#c:storage_blocks/zinc');
    replaceOutputTemplate('create:zinc_block', 'create:zinc_block', 'mineoctober:zinc_block');
    
    // Brass
    replaceInputTemplate('create:brass_ingot', 'create:brass_ingot', '#c:ingots/brass');
    replaceOutputTemplate('create:brass_ingot', 'create:brass_ingot', 'mineoctober:brass_ingot');

    replaceInputTemplate('create:brass_nugget', 'create:brass_nugget', '#c:nugget/brass');
    replaceOutputTemplate('create:brass_nugget', 'create:brass_nugget', 'mineoctober:brass_nugget');

    replaceInputTemplate('create:brass_block', 'create:brass_block', '#c:storage_blocks/brass');
    replaceOutputTemplate('create:brass_block', 'create:brass_block', 'mineoctober:brass_block');

    // brass ingot
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [
            {
                tag: "c:ingots/copper"
            },
            {
                tag: "c:ingots/zinc"
            }
        ],
        results: [
            {
                count: 2,
                id: 'mineoctober:brass_ingot'
            }
        ]
    })
    .id(k('mixing/brass_ingot'));
    
    event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "item": "mineoctober:iridium_ore"
            }
        ],
        "results": [
            {
                "id": "create:crushed_raw_iridium"
            },
            {
                "id": "create:crushed_raw_iridium",
                "chance": 0.75
            },
            {
                "id": "create:experience_nugget",
                "chance": 0.75
            },
            {
                "id": "minecraft:end_stone",
                "chance": 0.12
            }
        ],
        "processingTime": 400
    })
    .id('mineoctober:crushing/iridium_ore');

    let ro = ['zinc', 'tin', 'silver', 'nickel', 'aluminum', 'iridium'];

    ro.forEach(mat => {
        event.custom({
            type: "dndesires:seething",
            ingredients: [
                {
                    item: `create:crushed_raw_${mat}`
                }
            ],
            results: [
                {
                    id: `mineoctober:${mat}_ingot`
                },
                {
                    "chance": 0.8,
                    id: `mineoctober:${mat}_ingot`
                }
            ]
        });
    });

    function crushingRawToCrushedRaw(material) {
        event.custom({
            type: "create:crushing",
            ingredients: [
                {
                    tag: `c:raw_materials/${material}`
                }
            ],
            results: [
                {
                    id: cr(`crushed_raw_${material}`)
                },
                {
                    id: cr(`crushed_raw_${material}`)
                },
                {
                    chance: 0.3,
                    id: cr(`crushed_raw_${material}`)
                },
                {
                    chance: 0.75,
                    id: cr("experience_nugget")
                }
            ],
            processingTime: 400
        });
    };

    let raw_mats = ['iron', 'copper', 'gold', 'nickel', 'aluminum', 'zinc', 'iridium', 'tin', 'silver'];

    raw_mats.forEach(mat => {
        crushingRawToCrushedRaw(mat);
    });

        event.custom({
        type: 'create:crushing',
        ingredients: [
            { item: 'minecraft:diorite' }
        ],
        processing_time: 350,
        results: [
            {
                chance: 1,
                id: "mineoctober:raw_aluminum"
            },
            {
                chance: 0.5,
                id: "mineoctober:raw_aluminum"
            },
            {
                chance: 1,
                id: "mineoctober:raw_nickel"
            },
            {
                chance: 1,
                id: "mineoctober:raw_tin"
            },
            {
                chance: 1,
                id: "mineoctober:raw_silver"
            },
            {
                chance: 1,
                id: "minecraft:quartz"
            }
        ]
    })
});