<script setup lang="ts">
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
})
</script>

<template>
    <div class="InputForm__Wrapper">
        <input v-bind="$attrs" class="InputForm" type="text" :name="name" :id="id" :placeholder="placeholder">
    </div>
</template>


<style lang="scss" scoped>
.InputForm__Wrapper {
    display: flex;
    padding: 10px;
    border-radius: 8px;
    height: 100%;
    flex-grow: 1;
    font-size: var(--font-300);
    border: 1px solid var(--color-border);
    background-color: var(--white-400);
    transition: var(--transition-300);

    &:focus-within,
    &:hover {
        border-color: var(--color-primary);
    }
}

.InputForm {
    background-color: transparent;
    outline: none;
    border: none;
    width: 100%;
}
</style>