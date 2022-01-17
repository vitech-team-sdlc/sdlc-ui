<template>
  <label
    class="flex flex-col bg-baltic rounded-16 hover:border-2
      hover:border-tulip-tree cursor-pointer transition duration-300 ease-in-out"
    :class="isChecked ? 'border-2 border-tulip-tree' : 'border-2 border-foreground-500'"
  >
    <slot />
    <input
      class="absolute cursor-pointer h-0 w-0 opacity-0"
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="$emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CardComponent',
  props: {
    modelValue: { type: String, default: '0' },
    subline: { type: String, default: '' },
    value: { type: String, default: '0' }
  },
  emits: ['update:modelValue'],
  setup (props) {
    const isChecked = computed(() => props.modelValue === props.value)

    return { isChecked }
  }
})
</script>
