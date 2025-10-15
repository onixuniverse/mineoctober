// priority: 10

import { disabledItems } from "./Utils";

ItemEvents.modifyTooltips(event => {
	disabledItems.forEach(element => {
        event.add(element, Text.red(Text.translate('item.mineoctober.tooltip.hazard_item_1')));
        event.add(element, Text.red(Text.translate('item.mineoctober.tooltip.hazard_item_2')));
    });
});