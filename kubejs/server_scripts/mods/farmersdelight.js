ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'minersdelight:squid' },
        'minersdelight:squid',
        'culturaldelights:squid'
    );

    event.replaceInput(
        { input: 'minersdelight:glow_squid' },
        'minersdelight:glow_squid',
        'culturaldelights:glow_squid'
    );

    // cooked_squid
    event.remove({ output: 'culturaldelights:cooked_squid' });

    // i: glow_squid
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'culturaldelights:glow_squid' }
        ],
        result: [
            {
                item: {
                    count: 2,
                    id: 'culturaldelights:raw_calamari'
                }
            },
            {
                item: {
                    count: 3,
                    id: 'minersdelight:tentacles'
                }
            },
            {
                item: {
                    count: 1,
                    id: 'crabbersdelight:raw_squid_tentacles'
                }
            },
            {
                item: {
                    count: 2,
                    id: 'minecraft:glow_ink_sac'
                }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    })

    // i: squid
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'culturaldelights:squid'
            }
        ],
        result: [
            {
                item: {
                    count: 2,
                    id: 'culturaldelights:raw_calamari'
                }
            },
            {
                item: {
                    count: 3,
                    id: 'minersdelight:tentacles'
                }
            },
            {
                item: {
                    count: 1,
                    id: 'crabbersdelight:raw_squid_tentacles'
                }
            },
            {
                item: {
                    count: 2,
                    id: 'minecraft:ink_sac'
                }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    })
})