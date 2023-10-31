<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Logo from '@/components/Logo.vue';

</script>

<template>
    <section class="AppHeader">
        <Logo />
        <Navbar />
    </section>
</template>

<style lang="scss" scoped>
.AppHeader {
    width: 60px;
    height: 100%;
    padding: 20px 10px;
    background-color: var(--background-light-white)
}
</style>
