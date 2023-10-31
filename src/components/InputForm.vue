<script setup lang="ts">
import { defineEmits } from "vue"

defineProps({
    id: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    placeholder: {
        required: false,
        type: String
    },
    modelValue: {
        type: String
    },
});


const emit = defineEmits(['update:modelValue'])

const handleChange = (e: Event) => {
    const val = (e.target as HTMLInputElement).value
    emit('update:modelValue', val)
}

</script>

<template>
    <div class="InputForm__Wrapper">
        <input class="InputForm" type="text" :name="name" :id="id" :placeholder="placeholder" :value="modelValue"
            @input="handleChange">
    </div>
</template>


<style lang="scss" scoped>
.InputForm__Wrapper {
    display: flex;
    border-radius: 8px;
    height: 100%;
    flex-grow: 1;
    font-size: var(--font-300);
    border: 1px solid var(--color-border);
    background-color: var(--white-400);
    transition: var(--transition-fast);
    overflow: hidden;

    &:focus-within,
    &:hover {
        border-color: var(--color-primary);
    }
}

.InputForm {
    padding: 10px;
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
}
</style>