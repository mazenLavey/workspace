<script setup lang="ts">
defineProps({
    name: {
        required: true,
        type: String,
    },
    id: {
        required: true,
        type: String,
    },
    checked: {
        required: true,
        type: Boolean,
    },
    label: {
        required: true,
        type: String,
    },
})
</script>

<template>
    <div class="CheckboxForm__Wrapper">
        <input class="CheckboxForm" type="checkbox" :name="name" :id="id" :checked="checked">
        <label class="CheckboxForm__label" :for="id">{{ label }}</label>
    </div>
</template>

<style lang="scss" scoped>
.CheckboxForm__Wrapper {
    display: flex;
    gap: 8px;
}

.CheckboxForm {
    position: relative;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    border: 1px solid var(--color-border);
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:checked {
        background-color: var(--color-primary);
        border-color: var(--color-primary);
    }

    &:checked::before {
        content: url("https://api.iconify.design/fa-solid/check.svg?color=white&width=12&height=12");
    }

    &:hover {
        border-color: var(--color-primary);
    }
}

.CheckboxForm__label {
    color: var(--text-dark-400);
    font-size: var(--font-300);
    cursor: pointer;

    &::first-letter {
        text-transform: capitalize;
    }

    &:hover {
        opacity: 0.8;
    }

    .CheckboxForm:checked+& {
        text-decoration: line-through;
    }
}
</style>
