// priority: 10

ItemEvents.modifyTooltips(event => {
	event.add('mineoctober:duralumin_ingot', Text.gray(Text.translate('item.mineoctober.tooltip.duralumin_ingot')));
	event.add('mineoctober:steel_ingot', Text.gray(Text.translate('item.mineoctober.tooltip.steel_ingot')));
	event.add('mineoctober:aluminum_ingot', Text.gray(Text.translate('item.mineoctober.tooltip.aluminum_ingot')));
	event.add('mineoctober:aluminum_nugget', Text.gray(Text.translate('item.mineoctober.tooltip.aluminum_nugget')));
});