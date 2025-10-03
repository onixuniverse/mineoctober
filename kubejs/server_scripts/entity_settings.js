// priority: 10

EntityEvents.spawned('crabbersdelight:crab', event => {
    if (Math.random() > 0.5) { event.cancel(); };
});