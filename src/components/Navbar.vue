<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>

<template>
    <ul class="Navbar">
        <li class="Navbar__Item Navbar__Item--active">
            <a class="Navbar__Link" href="">
                <Icon icon="mdi:view-dashboard-outline" width="24" height="24"/>
            </a>
        </li>
        <li class="Navbar__Item">
            <a class="Navbar__Link" href="">
                <Icon icon="fluent:settings-24-regular" width="24" height="24"/>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
$transition-duarition: var(--transition-fast);

.Navbar {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.Navbar__Item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        right: -10px;
        top: 0;
        height: 100%;
        width: 5px;
        border-radius: 5px 0 0 5px;
        background-color: transparent;
        transition: $transition-duarition;
    }

    &:hover::after,
    &--active::after {
        background-color: var(--color-primary);
    }
}

.Navbar__Link {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: var(--color-icon);
    background-color: transparent;
    font-size: 32px;
    cursor: pointer;
    transition: $transition-duarition;

    .Navbar__Item:hover &,
    .Navbar__Item--active & {
        background-color: var(--color-primary);
        color: var(--color-secondary);
        border-right-color: var(--color-primary);
    }
}
</style>
