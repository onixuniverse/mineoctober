// priority: 10

const $ImmersiveMessage = Java.loadClass('toni.immersivemessages.api.ImmersiveMessage');
const $ImmersiveColor = Java.loadClass('toni.immersivemessages.util.ImmersiveColor');

function sendImmersiveToast(player, duration, color, title, text) {
    let message = $ImmersiveMessage["toast(float,java.lang.String,java.lang.String)"](duration, title, text)
            ["color(net.minecraft.ChatFormatting)"](color)
            .slideLeft(0.3)
            .slideOutRight(0.3)
            .fadeIn(0.5)
            .fadeOut(0.5)
            .size(1.0)
            .backgroundColor(new $ImmersiveColor(224, 145, 121))
            .borderTopColor(new $ImmersiveColor(118, 48, 83))
            .borderBottomColor(new $ImmersiveColor(118, 48, 83));
        
    message["sendServer(net.minecraft.server.level.ServerPlayer)"](player);
};