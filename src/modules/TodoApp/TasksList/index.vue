<script setup lang="ts">
import TaskCard from "@/components/TaskCard.vue";
</script>


<template>
    <div class="TasksList">
        <TaskCard />
    </div>
</template>

<style lang="scss" scoped>
.TasksList {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>