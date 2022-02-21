<template>
  <label class="flex flex-col cursor-pointer text-16 h-108">
    <span class="font-roboto font-bold mb-8">{{ label }}</span>
    <input
      class="border border-foreground-500 h-48 rounded-8 bg-transparent p-16 outline-none
       transition duration-300 ease-in-out"
      :class="{'has-error': validation[name]?.$error}"
      :type="type"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @blur="validation[name]?.$touch"
      @input="onChange"
    >
    <span v-show="validation[name]?.$error" class="text-danger-default text-14 mt-1">
      {{ validation[name]?.$errors[0]?.$message }}
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputModule',
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, default: '', required: true },
    type: { type: String, default: 'text' },
    name: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    validation: { type: Object, required: false }
  },
  emits: ['update:modelValue', 'disable'],

  setup (props, { emit }) {
    function onChange (event: Event) {
      emit('update:modelValue', (event.target as HTMLInputElement).value)
    }

    return { onChange }
  }
})
</script>

<style>
input:focus {
  @apply shadow-input;
}
.has-error {
  @apply shadow-error;
}
</style>
