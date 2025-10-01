//priority: 10

ServerEvents.recipes(event => {
    function backpackCrafting(output, prev_backpack, item)  {
        event.shaped(output,
	[
            'III',
            'IBI',
            'III'
        ],
	{
            I: item,
            B: prev_backpack
        })
    };

    backpackCrafting(
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:backpack',
        'minecraft:iron_block'
    )
    backpackCrafting(
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'minecraft:gold_block'
    )
    backpackCrafting(
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'minecraft:diamond_block'
    )

    event.shaped('sophisticatedbackpacks:backpack',
	[
            ' L ',
            'RCR',
            'LLL'
        ],
	{
            L: 'minecraft:leather',
            R: 'beautify:rope',
            C: '#c:chests/wooden'
        });

    event.shaped('sophisticatedbackpacks:feeding_upgrade',
        [
            ' M ',
            'AUC',
            ' B '
        ], {
            M: 'minecraft:glistering_melon_slice',
            A: 'minecraft:golden_apple',
            U: 'sophisticatedbackpacks:upgrade_base',
            C: 'minecraft:golden_carrot',
            B: 'supplementaries:lunch_basket'
        }
    );

    event.shaped('sophisticatedstorage:feeding_upgrade',
        [
            ' M ',
            'AUC',
            ' B '
        ], {
            M: 'minecraft:glistering_melon_slice',
            A: 'minecraft:golden_apple',
            U: 'sophisticatedstorage:upgrade_base',
            C: 'minecraft:golden_carrot',
            B: 'supplementaries:lunch_basket'
        }
    );

    event.shaped('sophisticatedstorage:storage_input',
        [
            'QLQ',
            'PCP',
            'QTQ'
        ], {
            Q: 'minecraft:quartz_block',
            L: 'create:electron_tube',
            P: '#minecraft:planks',
            C: '#c:chests/wooden',
            T: 'minecraft:redstone_torch'
        }
    );

    event.shaped('sophisticatedstorage:storage_output',
        [
            'QTQ',
            'PCP',
            'QLQ'
        ], {
            Q: 'minecraft:quartz_block',
            L: 'create:electron_tube',
            P: '#minecraft:planks',
            C: '#c:chests/wooden',
            T: 'minecraft:redstone_torch'
        }
    );

    event.shaped('sophisticatedstorage:controller',
        [
            'QLQ',
            'ICO',
            'QLQ'
        ], {
            Q: 'minecraft:quartz_block',
            L: 'create:electron_tube',
            I: 'sophisticatedstorage:storage_input',
            O: 'sophisticatedstorage:storage_output',
            C: '#c:chests/wooden'
        }
    );
    
    event.replaceInput(
        { input: 'minecraft:chest' },
        'minecraft:chest',
        '#c:chests/wooden'
    )

    event.remove({ id: 'minecraft:chest' })

    event.shapeless(
        'minecraft:chest',
        [
            '#c:chests/wooden'
        ]
    )

    event.shaped('sophisticatedstorage:chest[sophisticatedstorage:wood_type="oak"]',
        [
            'PPP',
            'P P',
            'PPP'
        ],
        {
            P: "#minecraft:planks"
        }
    )

    function craftWoodChest(output_chest, planks_type) {
        event.shaped(output_chest,
            [
                'PPP',
                'P P',
                'PPP'
            ],
            {
                P: planks_type+"_planks"
            }
        )
    }

    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="acacia"]', 'acacia')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="birch"]', 'birch')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="crimson"]', 'crimson')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="dark_oak"]', 'dark_oak')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="jungle"]', 'jungle')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="oak"]', 'oak')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="spruce"]', 'spruce')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="warped"]', 'warped')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="mangrove"]', 'mangrove')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="cherry"]', 'cherry')
    craftWoodChest('sophisticatedstorage:chest[sophisticatedstorage:wood_type="bamboo"]', 'bamboo')
});



ItemEvents.modifyTooltips(event => {
    const woodenItems = [
        'sophisticatedstorage:barrel[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:iron_barrel[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:gold_barrel[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_barrel_1[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_iron_barrel_1[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_gold_barrel_1[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_diamond_barrel_1[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_netherite_barrel_1[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_barrel_2[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_iron_barrel_2[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_gold_barrel_2[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_diamond_barrel_2[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_netherite_barrel_2[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_barrel_3[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_iron_barrel_3[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_gold_barrel_3[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_diamond_barrel_3[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_netherite_barrel_3[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_barrel_4[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_iron_barrel_4[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_gold_barrel_4[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_diamond_barrel_4[sophisticatedstorage:wood_type="spruce"]',
		'sophisticatedstorage:limited_netherite_barrel_4[sophisticatedstorage:wood_type="spruce"]',

        'sophisticatedstorage:chest[sophisticatedstorage:wood_type="oak"]',
		'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="oak"]',
		'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="oak"]',
		'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="oak"]',
		'sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="oak"]'
    ];

    const repaintItems = [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack',
        
        'sophisticatedstorage:shulker_box',
		'sophisticatedstorage:iron_shulker_box',
		'sophisticatedstorage:gold_shulker_box',
		'sophisticatedstorage:diamond_shulker_box',
		'sophisticatedstorage:netherite_shulker_box'
    ];

    repaintItems.push(woodenItems);
    
	repaintItems.forEach(element => {
		event.add(element, Text.aqua(Text.translate('mineoctober.sophisticated.tooltip.repaint')))
	});

	woodenItems.forEach(element => {
		event.add(element, Text.darkRed(Text.translate('mineoctober.sophisticated.tooltip.any_wood_crafting')))
	});	
});