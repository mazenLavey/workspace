<script setup lang="ts">
import TaskCard from "@/components/TaskCard.vue";
import { useTasksStore } from "@/stores/TasksStore"
import { storeToRefs } from "pinia";

const store = useTasksStore();
const { allActiveTasks } = storeToRefs(store);

</script>


<template>
    <div class="TasksList">
        <TransitionGroup name="task">
            <TaskCard v-for="task in allActiveTasks" :key="task.id" :data="task" />
        </TransitionGroup>
    </div>
</template>

<style lang="scss" scoped>
.TasksList {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.task-enter-active,
.task-leave-active {
    transition: var(--transition-fast);
}

.task-enter-to,
.task-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.task-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.task-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}
</style>