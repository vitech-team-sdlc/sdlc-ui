<template>
  <div>
    <p class="pb-8 font-medium">{{ title }}</p>
    <ul class="inline-flex text-14 rounded-8 h-38 px-5 py-2 bg-baltic-black">
      <li v-for="(tab) in tabs"
          :key="tab"
          :class="modelValue === tab && 'selected rounded-8 bg-tulip-tree text-baltic-black'"
          class="flex justify-center items-center cursor-pointer px-12"
          @click="$emit('update:modelValue', tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleModule',

  props: {
    modelValue: { type: String, default: '' },
    title: { type: String, default: '' },
    tabs: { type: Array }
  },
  emits: ['update:modelValue'],

  setup () {
    return {}
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
