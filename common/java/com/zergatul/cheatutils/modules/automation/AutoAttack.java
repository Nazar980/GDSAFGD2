package com.zergatul.cheatutils.modules.automation;

import com.mojang.blaze3d.platform.InputConstants;
import com.zergatul.cheatutils.common.Events;
import com.zergatul.cheatutils.configs.AutoAttackConfig;
import com.zergatul.cheatutils.configs.ConfigStore;
import com.zergatul.cheatutils.modules.Module;
import com.zergatul.cheatutils.wrappers.AttackRange;
import net.minecraft.client.Minecraft;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.AxeItem;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.SwordItem;
import net.minecraft.world.item.TridentItem;
import net.minecraft.world.phys.EntityHitResult;
import net.minecraft.world.phys.HitResult;
import org.lwjgl.glfw.GLFW;

public class AutoAttack implements Module {

    public static final AutoAttack instance = new AutoAttack();
    private final Minecraft mc = Minecraft.getInstance();
    
    // Переменные для работы переключателя
    private boolean enabledByBind = false; // Текущее состояние (вкл/выкл)
    private boolean isKeyPressed = false;  // Флаг, чтобы не переключать по 20 раз в секунду при зажатии

    private AutoAttack() {
        Events.ClientTickEnd.add(this::onClientTickEnd);
    }

    private void onClientTickEnd() {
        if (mc.player == null || mc.level == null || mc.gameMode == null) {
            return;
        }

        // --- ЛОГИКА ПЕРЕКЛЮЧАТЕЛЯ (TOGGLE) ---
        long window = mc.getWindow().getWindow();
        boolean isNowPressed = InputConstants.isKeyDown(window, GLFW.GLFW_KEY_M);

        // Если клавиша нажата сейчас, но не была нажата в прошлом тике
        if (isNowPressed && !isKeyPressed) {
            enabledByBind = !enabledByBind; // Меняем состояние на противоположное
            
            // Опционально: можно вывести сообщение в чат о смене режима
            // mc.player.displayClientMessage(Component.literal("AutoAttack: " + (enabledByBind ? "ON" : "OFF")), true);
        }
        isKeyPressed = isNowPressed; // Запоминаем состояние клавиши для следующего тика

        // Если модуль выключен через бинд — выходим
        if (!enabledByBind) {
            return;
        }
        // --------------------------------------

        AutoAttackConfig config = ConfigStore.instance.getConfig().autoAttackConfig;
        if (!config.enabled) {
            return;
        }

        // Проверяем оружие
        ItemStack mainHandItem = mc.player.getMainHandItem();
        boolean isValidWeapon = mainHandItem.getItem() instanceof SwordItem || 
                                mainHandItem.getItem() instanceof AxeItem || 
                                mainHandItem.getItem() instanceof TridentItem;
        
        if (!isValidWeapon) {
            return;
        }

        // Проверяем прыжок (крит)
        if (mc.player.onGround()) {
            return;
        }

        // Проверяем цель
        if (mc.hitResult == null || mc.hitResult.getType() != HitResult.Type.ENTITY) {
            return;
        }

        Entity target = ((EntityHitResult) mc.hitResult).getEntity();
        if (!(target instanceof LivingEntity)) {
            return;
        }

        // Проверяем кулдаун
        if (mc.player.getAttackStrengthScale((float) -config.extraTicks) < 1.0f) {
            return;
        }

        // Удар
        if (AttackRange.canHit(target)) {
            mc.gameMode.attack(mc.player, target);
            mc.player.swing(InteractionHand.MAIN_HAND);
        }
    }
}
