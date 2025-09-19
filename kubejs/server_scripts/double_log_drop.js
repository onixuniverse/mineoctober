// priority: 100

BlockEvents.broken(event => {
    const player = event.getPlayer();
    if (!player) return;

    const attributeValue = player.getAttributeValue('mineoctober:bonus_tree_loot');
    if (attributeValue == 1.0) return;

    const block = event.getBlock();

    if (!isTreeLog(block)) return;
    
    if (!isNaturalTree(block)) return;
    
    doubleDrop(block, attributeValue);
});

function isTreeLog(block) {
    const blockId = block.getId().toString();
    // Проверяем теги и исключаем stripped блоки
    return (block.hasTag('minecraft:logs') || 
           blockId.includes('_log') || 
           blockId.includes('_stem')) && 
           !blockId.includes('stripped');
}

function isTreeLeaf(block) {
    const blockId = block.getId().toString();
    return block.hasTag('minecraft:leaves') || 
           blockId.includes('_leaves') ||
           blockId.includes('_wart_block') ||
           blockId === 'minecraft:shroomlight';
}

function isNaturalTree(block) {
    const pos = block.getPos();
    const level = block.getLevel();
    
    // 1. Проверяем высоту - природные деревья обычно выше уровня моря
    if (pos.getY() < 60) return false;
    
    // 2. Проверяем, что это часть ствола (дерево сверху или снизу)
    const above = level.getBlock(pos.offset(0, 1, 0));
    const below = level.getBlock(pos.offset(0, -1, 0));
    
    const isPartOfTrunk = (above && isTreeLog(above)) || 
                          (below && isTreeLog(below));
    if (!isPartOfTrunk) return false;
    
    // 3. Проверяем наличие листьев в радиусе (как в Tree Harvester)
    if (!hasLeavesNearby(block, 4)) return false;
    
    // 4. Проверяем, что дерево растет из естественной поверхности
    if (!isOnNaturalSurface(block)) return false;
    
    // 5. Проверка на связанность с другими блоками дерева (как в Tree Harvester)
    if (!isConnectedToOtherLogs(block, 3)) return false;

    if (!hasMinimumTreeHeight(block)) return false;
    
    return true;
}

function hasLeavesNearby(block, radius) {
    const pos = block.getPos();
    const level = block.getLevel();
    
    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            for (let z = -radius; z <= radius; z++) {
                if (x === 0 && y === 0 && z === 0) continue;
                
                let checkPos = pos.offset(x, y, z);
                let neighborBlock = level.getBlock(checkPos);
                
                if (isTreeLeaf(neighborBlock)) return true;
            }
        }
    }
    return false;
}

function isOnNaturalSurface(block) {
    const pos = block.getPos();
    const level = block.getLevel();
    
    // Находим самый нижний блок дерева
    let currentPos = pos;
    let currentBlock = block;
    
    while (currentBlock && isTreeLog(currentBlock)) {
        currentPos = currentPos.offset(0, -1, 0);
        currentBlock = level.getBlock(currentPos);
    }
    
    // Проверяем блок под деревом
    const groundBlock = level.getBlock(currentPos);
    if (!groundBlock) return false;
    
    const groundId = groundBlock.getId().toString();
    
    // Естественные поверхности (как в Tree Harvester)
    return groundId.includes('dirt') || 
           groundId.includes('grass') || 
           groundId.includes('podzol') ||
           groundId.includes('coarse_dirt') ||
           groundId.includes('stone') ||
           groundId.includes('sand') ||
           groundId.includes('air') ||
           groundId.includes('mycelium');
}

function isConnectedToOtherLogs(block, radius) {
    const pos = block.getPos();
    const level = block.getLevel();

    let connectedLogs = 0;

    for (let x = -radius; x <= radius; x++) {
        for (let y = -radius; y <= radius; y++) {
            for (let z = -radius; z <= radius; z++) {
                if (x === 0 && y === 0 && z === 0) continue;
                
                let checkPos = pos.offset(x, y, z);
                let neighborBlock = level.getBlock(checkPos);
                
                if (neighborBlock && isTreeLog(neighborBlock)) connectedLogs++;
            }
        }
    }

    return connectedLogs >= 2; // Уменьшаем требование до 1 соседа
}

function hasMinimumTreeHeight(block) {
    const pos = block.getPos();
    const level = block.getLevel();
    
    let height = 1;
    let currentPos = pos;
    let currentBlock = block;
    
    // Считаем вверх
    while (currentBlock && isTreeLog(currentBlock)) {
        currentPos = currentPos.offset(0, 1, 0);
        currentBlock = level.getBlock(currentPos);
        if (currentBlock && isTreeLog(currentBlock)) {
            height++;
        }
    }
    
    // Природные деревья обычно имеют высоту хотя бы 3 блока
    return height >= 3;
}

function doubleDrop(block, attributeValue) {
    const drops = block.getDrops();

    // Рассчитываем шанс двойного дропа
    // attributeValue от 1.0 до 2.0, где:
    // 1.0 = 0% шанса, 1.1 = 10%, ..., 2.0 = 100%
    const doubleDropChance = (attributeValue - 1.0) * 100;

    // Генерируем случайное число от 0 до 100
    const randomChance = Math.random() * 100;

    if (randomChance <= doubleDropChance) {
        // Шанс сработал - добавляем дополнительный дроп (x2)
        drops.forEach(drop => {
            block.popItem(drop);
        });
    }
}