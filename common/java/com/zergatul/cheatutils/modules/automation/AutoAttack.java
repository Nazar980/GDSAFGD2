package com.zergatul.cheatutils.modules.automation;

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

public class AutoAttack implements Module {

    public static final AutoAttack instance = new AutoAttack();
    private final Minecraft mc = Minecraft.getInstance();

    private AutoAttack() {
        Events.ClientTickEnd.add(this::onClientTickEnd);
    }

    private void onClientTickEnd() {
        if (mc.player == null || mc.level == null || mc.gameMode == null) {
            return;
        }

        AutoAttackConfig config = ConfigStore.instance.getConfig().autoAttackConfig;
        if (!config.enabled) {
            return;
        }

        // 1. УБРАЛИ ПРОВЕРКУ keyAttack.isDown()
        // Теперь ЛКМ зажимать не нужно.

        // 2. Проверяем оружие (Меч, Топор или Трезубец)
        ItemStack mainHandItem = mc.player.getMainHandItem();
        boolean isValidWeapon = mainHandItem.getItem() instanceof SwordItem || 
                               mainHandItem.getItem() instanceof AxeItem || 
                               mainHandItem.getItem() instanceof TridentItem;
        
        if (!isValidWeapon) {
            return;
        }

        // 3. Проверяем прыжок (onGround == false означает, что мы в воздухе)
        if (mc.player.onGround()) {
            return;
        }

        // 4. Проверяем, наведен ли прицел на сущность
        if (mc.hitResult == null || mc.hitResult.getType() != HitResult.Type.ENTITY) {
            return;
        }

        Entity target = ((EntityHitResult) mc.hitResult).getEntity();

        // Дополнительная проверка: бьем только живых (чтобы не лупить по рамкам или лодкам)
        if (!(target instanceof LivingEntity)) {
            return;
        }

        // 5. Проверяем кулдаун (заряд удара)
        // Используем < 0.9f, чтобы удар был чуть более отзывчивым, или 1.0f для макс. урона
        if (mc.player.getAttackStrengthScale((float) -config.extraTicks) < 1.0f) {
            return;
        }

        // 6. Проверка дистанции и сам удар
        if (AttackRange.canHit(target)) {
            mc.gameMode.attack(mc.player, target);
            mc.player.swing(InteractionHand.MAIN_HAND);
        }
    }
}
