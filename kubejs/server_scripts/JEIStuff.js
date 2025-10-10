//priority: 2147483647

import { disabledItems, recipeIds, hiddenItems } from "./Utils";

RecipeViewerEvents.removeEntries('item', event => {
    hiddenItems.forEach(item => {
        event.remove(item);
    });

    disabledItems.forEach(item => {
        event.remove(item);
    });
    
    recipeIds.forEach(item => {
        event.remove(item);
    });
});

RecipeViewerEvents.addEntries('item', event => {
    let items_to_show = [
        'create:crushed_raw_tin',
        'create:crushed_raw_silver',
        // 'create:crushed_raw_lead',
        'create:crushed_raw_nickel',
        'create:crushed_raw_aluminum',
        // 'create:crushed_raw_osmium',
        // 'create:crushed_raw_uranium',
        'create:crushed_raw_zinc'
    ];

    items_to_show.forEach(item => {
        event.add(item)
    });
})