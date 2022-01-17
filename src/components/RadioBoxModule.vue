<template>
  <label class="wrapper block relative pl-38 mb-24 cursor-pointer text-16 w-350">
    <span class="font-roboto font-bold">{{ label }}</span>
    <p class="text-14 font-inter text-foreground-100">{{ subline }}</p>
    <input
      class="checkbox absolute cursor-pointer h-0 w-0 opacity-0"
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="$emit('update:modelValue', $event.target.value)"
    >
    <span class="checkmark absolute top-0 left-0 h-20 w-20 bg-transparent rounded-full border" />
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'RadioBoxModule',
  props: {
    modelValue: { type: String, default: '' },
    label: { type: String, default: '', required: true },
    subline: { type: String, default: '' },
    value: { type: String, default: '' }
  },
  emits: ['update:modelValue'],
  setup (props) {
    const isChecked = computed(() => props.modelValue === props.value)

    return { isChecked }
  }
})
</script>

<style scoped>
.wrapper:hover input ~ .checkmark, .wrapper input:checked ~ .checkmark {
  @apply bg-transparent border-3 border-tulip-tree;
}

.checkmark:after {
  @apply absolute hidden;
  content: '';
}

.wrapper input:checked ~ .checkmark:after {
  @apply block;
}

.wrapper .checkmark:after {
  @apply top-3 left-3 w-8 h-8 rounded-full bg-tulip-tree
}
</style>
