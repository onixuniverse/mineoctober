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