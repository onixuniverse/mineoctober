//priority: 10

ServerEvents.recipes(event => {
    function replaceHammerCraftItemTemplate(hammer, craft_item, to_replace_item) {
        event.replaceInput(
            { output: hammer },
            craft_item,
            to_replace_item
        );
    };

    replaceHammerCraftItemTemplate('justhammers:iron_hammer', 'minecraft:iron_ingot', '#c:storage_blocks/iron');
    replaceHammerCraftItemTemplate('justhammers:gold_hammer', 'minecraft:gold_ingot', '#c:storage_blocks/gold');
    replaceHammerCraftItemTemplate('justhammers:diamond_hammer', 'minecraft:diamond', '#c:storage_blocks/diamond');

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "justhammers:reinforced_impact_core"
            },
            {
                "tag": "c:storage_blocks/redstone"
            },
            {
                "tag": "c:storage_blocks/redstone"
            },
            {
                "tag": "c:storage_blocks/diamond"
            },
            {
                "tag": "c:storage_blocks/diamond"
            }
        ],
        "results": [
            {
                "id": "justhammers:destructor_core"
            }
        ],
        "heat_requirement": "superheated"
    }).id('mineoctober:compacting/destructor_core');

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "justhammers:reinforced_core"
            },
            {
                "tag": "c:storage_blocks/redstone"
            },
            {
                "tag": "c:storage_blocks/redstone"
            },
            {
                "tag": "c:storage_blocks/gold"
            },
            {
                "tag": "c:storage_blocks/diamond"
            }
        ],
        "results": [
            {
                "id": "justhammers:reinforced_impact_core"
            }
        ],
        "heat_requirement": "superheated"
    }).id('mineoctober:compacting/reinforced_impact_core');

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "justhammers:impact_core"
            },
            {
                "tag": "c:storage_blocks/redstone"
            },
            {
                "tag": "c:storage_blocks/redstone"
            },
            {
                "tag": "c:storage_blocks/gold"
            },
            {
                "tag": "c:storage_blocks/gold"
            }
        ],
        "results": [
            {
                "id": "justhammers:reinforced_core"
            }
        ],
        "heat_requirement": "superheated"
    }).id('mineoctober:compacting/reinforced_core');

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "justhammers:netherite_hammer"
            },
            {
                "tag": "c:dusts/redstone"
            },
            {
                "tag": "c:dusts/redstone"
            },
            {
                "tag": "c:storage_blocks/iron"
            },
            {
                "tag": "c:storage_blocks/gold"
            }
        ],
        "results": [
            {
                "id": "justhammers:impact_core"
            }
        ],
        "heat_requirement": "superheated"
    }).id('mineoctober:compacting/impact_core');


});