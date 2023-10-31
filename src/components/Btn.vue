<script setup lang="ts">
defineProps({
    text: {
        required: true,
        type: String,
    }
})
</script>

<template>
    <button class="Btn" v-bind="$attrs">
        <slot name="left-icon"></slot>
        {{ text }}
        <slot name="right-icon"></slot>
    </button>
</template>


<style lang="scss" scoped>
.Btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: var(--font-300);
    background-color: var(--color-secondary);
    border: 1px solid var(--color-border);
    color: var(--text-dark-400);
    text-transform: capitalize;

    &:hover, &:focus {
        background-color: var(--color-primary);
        color: var(--text-light-400);
    }

    &:active {
        transform: scale(0.95);
    }
}
</style>