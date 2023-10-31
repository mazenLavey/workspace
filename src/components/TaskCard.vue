<script setup lang="ts">
import CheckboxForm from './CheckboxForm.vue';
import InputForm from './InputForm.vue';
import { Icon } from '@iconify/vue';
import type { TaskType } from "@/types/tasksType";
import { reactive, ref, watchEffect } from 'vue';
import { useTasksStore } from "@/stores/TasksStore";

const { deleteTask, editTask, handleComplete } = useTasksStore();

type Props = {
    data: TaskType,
}

const { data } = defineProps<Props>();


const taskState = reactive({
    task: data.text
})

const isEdit = ref(false)

const toggleEdit = () => {
    isEdit.value = !isEdit.value
}

const handleEdit = () => {
    editTask(data.id, taskState.task)
    toggleEdit()
}
</script>

<template>
    <div class="TaskCard" :class="{ 'TaskCard--edit': isEdit, 'TaskCard--completed': data.isCompleted }">
        <InputForm v-if="isEdit" :id="data.id" :name="data.id" v-model="taskState.task" />
        <CheckboxForm v-else :id="data.id" :name="data.id" :label="data.text" :checked="data.isCompleted"
            @update:checked="(checked) => handleComplete(data.id, checked)" />
        <div class="TaskCard__Controls" :class="{ 'TaskCard__Controls--completed': data.isCompleted }">
            <button v-if="isEdit" class="TaskCard__Controls-Btn TaskCard__Controls-Btn--green" @click="handleEdit">
                <Icon icon="gg:check-o" width="16" height="16" />
            </button>
            <button v-else class="TaskCard__Controls-Btn" @click="toggleEdit">
                <Icon icon="lucide:pencil-line" width="16" height="16" />
            </button>
            <button class="TaskCard__Controls-Btn" @click="() => deleteTask(data.id)">
                <Icon icon="gg:trash" width="16" height="16" />
            </button>
            <div class="TaskCard__Drag" tabindex="0">
                <Icon icon="ri:draggable" width="20" height="20" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.TaskCard {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--color-secondary);
    transition: background-color var(--transition-fast), box-shadow var(--transition-fast);

    &--edit {
        padding: 3px 20px;
    }

    &--completed {
        background-color: var(--brown-300);
        opacity: 0.7;
    }

    &--completed:hover {
        opacity: 0.9;
    }

    &:hover:not(&--completed) {
        box-shadow: 0px 3px 8px var(--gray-300);
    }
}

.TaskCard__Controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.TaskCard__Controls-Btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    &:focus,
    &:hover,
    &:active {
        background-color: var(--color-primary-hover);
    }

    .TaskCard__Controls--completed & {

        &:focus,
        &:hover,
        &:active {
            background-color: var(--white-400) !important;
        }
    }

    &:active {
        transform: scale(0.95);
    }

    &--green {
        color: var(--green-400);
    }
}

.TaskCard__Drag {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    outline: none;

    &:focus,
    &:hover,
    &:active {
        color: var(--color-primary);
    }
}
</style>
