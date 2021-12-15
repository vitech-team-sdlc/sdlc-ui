<template>
  <div class="relative text-left outline-0" :class="isOutline ? 'leading-24' : 'leading-47 h-47'" @blur="open = false">
    <div
      :class="[ isOutline ? isOutlineStyle : isNotOutline ]"
      class="bg-transparent pl-16 cursor-pointer flex items-center"
      @click="open = !open"
    >
      {{ selected }}
      <span
        class="text-right right-15 absolute text-9 transition ease-in-out delay-100"
        :class="[{ 'transform -rotate-180 ': open }, isOutline ? 'icon-arrow-outline' : 'icon-arrow']"
      />
    </div>
    <div
      class="absolute left-0 right-0 z-index-10 rounded-b-8 bg-background-default"
      :class="[{ 'hidden': !open }, { 'border-r border-l border-b border-tulip-tree': !isOutline }]"
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        class="pl-16 cursor-pointer hover:bg-tulip-tree hover:text-black"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SelectModule',
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    isOutline: {
      type: Boolean,
      required: false,
      default: false
    },
    size: String,
    type: String
  },
  emits: ['input'],

  setup (props, { emit }) {
    const selected = ref(getSelectedItem())
    const open = ref(false)

    const isOutlineStyle = computed(() => open.value ? 'rounded-t-8 h-25' : 'rounded-8 h-25')
    const isNotOutline = computed(() => open.value ? 'border border-tulip-tree rounded-t-8' : 'border border-foreground-500 rounded-8')

    function selectOption (option: string) {
      selected.value = option
      open.value = false
      emit('input', option)
    }

    function getSelectedItem () {
      if (props.default) {
        return props.default
      }
      return props.options.length > 0 ? props.options[0] : null
    }

    return { selected, open, selectOption, isOutlineStyle, isNotOutline }
  }
})
</script>
