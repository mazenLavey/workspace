<script setup lang="ts">

</script>

<template>
    <div class="Logo">
        WS
    </div>
</template>

<style lang="scss" scoped>
.Logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-700);
    font-weight: 600;
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
</style>
