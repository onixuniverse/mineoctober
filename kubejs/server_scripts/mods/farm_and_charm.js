ServerEvents.recipes(event => {
    event.custom({
        type: 'farm_and_charm:stove',
        ingredients: [
            {
            "item": 'farmersdelight:pumpkin_slice'
            },
            {
            "tag": "c:dough"
            },
            {
            "tag": "c:sugar"
            }
        ],
        result: {
            id: "mineoctober:pumpkin_cookie",
            count: 4
        },
        experience: 0.2,
        requiresLearning: false
    })
})