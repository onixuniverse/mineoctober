//priority: 2147483647

import { disabledItems, recipeIds, removedRecipes } from "./Utils";

ServerEvents.recipes(event => {
    disabledItems.forEach(item => {
        event.remove({ output: item });
    });

    recipeIds.forEach(id => {
        event.remove({ id: id });
    });

    removedRecipes.forEach(item => {
        event.remove({ output: item });
    });
});