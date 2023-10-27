<script setup lang="ts">
import Btn from '@/components/Btn.vue';
import InputForm from '@/components/InputForm.vue';
import { Icon } from '@iconify/vue';
const handleSubmit = () => {

}

</script>


<template>
    <form class="TaskCreator__Form" @submit.prevent="handleSubmit">
        <InputForm id="userInput" name="userInput" placeholder="Add new task... " />
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