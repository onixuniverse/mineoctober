// priority: 10

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
        
        event.player.stages.add('starting_items');
        
        event.player.give('ftbquests:book');
        event.player.give('8x mineoctober:pumpkin_cookie');
    };
});