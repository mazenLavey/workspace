<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/layouts/AppHeader.vue"
</script>

<template>
    <main class="RootLayout">
        <div class="RootLayout__Inner">
            <AppHeader />
            <RouterView />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.RootLayout {
    display: flex;
    min-height: 100vh;
    padding: 20px;
    background-color: var(--base-background);
}

.RootLayout__Inner {
    display: flex;
    border-radius: 20px;
    min-height: 100%;
    flex-grow: 1;
    background-color: var(--background-light-white);
    overflow: hidden;
}
</style>