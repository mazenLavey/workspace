<script setup lang="ts">
import Btn from '@/components/Btn.vue';
import InputForm from '@/components/InputForm.vue';
import { reactive } from "vue";
import { useTasksStore } from '@/stores/TasksStore';

const { addNewTask } = useTasksStore();

const taskState = reactive({
    task: ""
})

const handleSubmit = () => {
    if (!!taskState.task) {
        addNewTask(taskState.task)
        taskState.task = ""
    }
}


</script>


<template>
    <form class="TaskCreator__Form" @submit.prevent="handleSubmit">
        <InputForm  id="userInput" name="userInput" placeholder="Add new task..." v-model="taskState.task" />
        <Btn text="add" />
    </form>
</template>

<style lang="scss" scoped>
.TaskCreator__Form {
    display: flex;
    gap: 8px;
    height: 46px;
}
</style>