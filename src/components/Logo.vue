<script setup lang="ts">
</script>

<template>
    <div class="Logo">
        <img class="Logo__Img" src="@/assets/icons/workspace-logo.png" alt="logo">
    </div>
</template>

<style lang="scss" scoped>
.Logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: opacity(0.8);
    padding-bottom: 16px;
    margin-bottom: 16px;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 65%;
        height: 3px;
        border-radius: 4px;
        background-color: var(--divider-grey-400);
    }
}

.Logo__Img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
