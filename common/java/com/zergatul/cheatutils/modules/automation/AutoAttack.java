package com.zergatul.cheatutils.modules.automation;

import com.zergatul.cheatutils.common.Events;
import com.zergatul.cheatutils.configs.AutoAttackConfig;
import com.zergatul.cheatutils.configs.ConfigStore;
import com.zergatul.cheatutils.modules.Module;
import com.zergatul.cheatutils.wrappers.AttackRange;
import net.minecraft.client.Minecraft;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.entity.Entity;
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
        if (mc.player == null) return;

        AutoAttackConfig config = ConfigStore.instance.getConfig().autoAttackConfig;
        if (!config.enabled) return;

        // 1. Проверка: зажата ли клавиша атаки
        if (!mc.options.keyAttack.isDown()) return;

        // 2. Проверка: находится ли игрок в прыжке (не на земле)
        // Если нужно, чтобы работало только при падении (для критов), можно добавить: && mc.player.getDeltaMovement().y < 0
        if (mc.player.onGround()) return;

        // 3. Проверка: правильное ли оружие в руке
        ItemStack mainHandItem = mc.player.getMainHandItem();
        boolean isValidWeapon = mainHandItem.getItem() instanceof SwordItem || 
                               mainHandItem.getItem() instanceof AxeItem || 
                               mainHandItem.getItem() instanceof TridentItem;
        
        if (!isValidWeapon) return;

        // 4. Проверка цели
        if (mc.hitResult == null || mc.hitResult.getType() != HitResult.Type.ENTITY) return;

        // 5. Проверка КД (кулдауна) атаки
        if (mc.player.getAttackStrengthScale((float) -config.extraTicks) != 1) return;

        Entity entity = ((EntityHitResult) mc.hitResult).getEntity();
        if (AttackRange.canHit(entity)) {
            mc.gameMode.attack(mc.player, entity);
            mc.player.swing(InteractionHand.MAIN_HAND);
        }
    }
}
