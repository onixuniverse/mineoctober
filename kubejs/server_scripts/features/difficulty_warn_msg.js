// priority: 10

import { sendImmersiveToast } from "./immersive_message";

const $DifficultyFetcher = Java.loadClass('io.github.flemmli97.improvedmobs.api.difficulty.DifficultyFetcher');
const $ServerLevel = Java.loadClass('net.minecraft.server.level.ServerLevel');
const $ChatFormatting = Java.loadClass('net.minecraft.ChatFormatting');
const $Component = Java.loadClass('net.minecraft.network.chat.Component');

PlayerEvents.tick(event => {
    let player = event.player;

    if (player.level instanceof $ServerLevel) {
        let difficulty = $DifficultyFetcher.getDifficulty(player.level, player.position());
        
        let persistentData = player.persistentData;
        
        if (difficulty > 2 && !persistentData.contains('high_difficulty_warned')) {            
            let titleText = $Component.translatable("message.mineoctober.difficulty_warning_title").getString();
            let subtitleText = $Component.translatable("message.mineoctober.difficulty_warning_subtitle").getString();
            
            sendImmersiveToast(player, 8.0, $ChatFormatting.RED, titleText, subtitleText);
            
            persistentData.putBoolean('high_difficulty_warned', true);
        }
        
        if (difficulty <= 2 && persistentData.contains('high_difficulty_warned')) {
            persistentData.remove('high_difficulty_warned');
        }
    };
});