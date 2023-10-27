<script setup lang="ts">
import CheckboxForm from './CheckboxForm.vue';
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="TaskCard">
        <CheckboxForm :checked="false" id="id" name="name" label="text" />
        <div class="TaskCard__Controls">
            <button class="TaskCard__Controls-Btn">
                <Icon icon="lucide:pencil-line" width="16" height="16" />
            </button>
            <button class="TaskCard__Controls-Btn">
                <Icon icon="gg:trash" width="16" height="16" />
            </button>
            <div class="TaskCard__Drag">
                <Icon icon="ri:draggable" width="20" height="20" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.TaskCard {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--color-secondary);
}

.TaskCard__Controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.TaskCard__Controls-Btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    
    &:hover, &:active {
        background-color: var(--color-secondary-hover);
    }

    &:active {
        transform: scale(0.95);
    }
}
.TaskCard__Drag {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;

    &:hover,
    &:active {
        color: var(--color-primary);
    }
}
</style>
