<script setup lang="ts">
import TaskCreator from "./TaskCreator/index.vue";
import TasksList from "./TasksList/index.vue";
</script>

<template>
    <section class="TodoApp">
        Todo app
        <TaskCreator />
        <TasksList />
    </section>
</template>

<style lang="scss" scoped>
.TodoApp {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;
    min-height: 100%;
    padding: 20px;
    background-color: var(--background-light-blue);
}
</style>
