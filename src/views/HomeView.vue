<script setup lang="ts">
import TodoApp from "@/modules/TodoApp/index.vue";
import WeatherApp from "@/modules/WeatherApp/index.vue";
</script>

<template>
  <div class="HomeView__Wrapper">
    <TodoApp />
    <WeatherApp />
  </div>
</template>

<style lang="scss" scoped>
.HomeView__Wrapper {
  display: flex;
  flex-grow: 1;
  height: 100%;
}
</style>
