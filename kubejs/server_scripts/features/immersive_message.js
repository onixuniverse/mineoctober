// priority: 10

const $ImmersiveMessage = Java.loadClass('toni.immersivemessages.api.ImmersiveMessage');
const $ImmersiveColor = Java.loadClass('toni.immersivemessages.util.ImmersiveColor');


/**
 * Generate Toast Message to player
 * @param {event.player} player 
 * @param {number} duration 
 * @param {ChatFormatting} title_color 
 * @param {string} title 
 * @param {string} text 
 * @param {ImmersiveColor} bg_color 
 * @param {ImmersiveColor} border_top_color 
 * @param {ImmersiveColor} border_bottom_color 
 */
function sendImmersiveToast(player, duration, title_color, title, text, bg_color, border_top_color, border_bottom_color) {
    let message = $ImmersiveMessage["toast(float,java.lang.String,java.lang.String)"](duration, title, text)
            ["color(net.minecraft.ChatFormatting)"](title_color)
            .slideLeft(0.3)
            .slideOutRight(0.3)
            .fadeIn(0.5)
            .fadeOut(0.5)
            .size(1.0)
            .backgroundColor(bg_color)
            .borderTopColor(border_top_color)
            .borderBottomColor(border_bottom_color);
        
    message["sendServer(net.minecraft.server.level.ServerPlayer)"](player);
};