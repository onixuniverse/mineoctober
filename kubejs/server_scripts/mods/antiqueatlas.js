//priority: 10

ServerEvents.recipes(event => {
    // aa4-atlas:duralumin_nugget
    event.custom({
        type: "farmersdelight:cooking",
        "container": {
            "count": 1,
            "id": "minecraft:book"
        },
        "experience": 1.0,
        "ingredients": [
            {
                "item": "minecraft:ink_sac"
            },
            {
                "item": "minecraft:compass"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "count": 1,
            "id": "aa4-atlas:antique_atlas"
        }
    })
});