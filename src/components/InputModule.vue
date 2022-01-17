<template>
  <label class="flex flex-col cursor-pointer text-16">
    <span class="font-roboto font-bold mb-8">{{ label }}</span>
    <input
      class="bg-foreground-900 border border-foreground-500
        rounded-8 bg-transparent p-16 outline-none transition duration-300 ease-in-out"
      type="text"
      :name="label"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value); $emit('disable', isDisable($event.target.value))"
    >
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'InputModule',
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, default: '', required: true },
    value: { type: String, default: '' },
    placeholder: { type: String, default: '' }
  },
  emits: ['update:modelValue', 'disable'],

  setup () {
    const isDisable = computed(() => {
      return (value: string) => value.length === 0
    })

    return { isDisable }
  }
})
</script>

<style>
input:focus {
  @apply shadow-input;
}
</style>
