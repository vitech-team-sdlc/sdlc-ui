<template>
  <div class="relative text-left outline-0 leading-24" @blur="open = false">
    <div
      :class="[ open ? 'rounded-t-8' : 'rounded-8 ' ]"
      class="bg-transparent pl-16 cursor-pointer "
      @click="open = !open"
    >
      {{ selected }}
      <span class="text-right icon-arrow-outline right-15 absolute text-9 transition ease-in-out delay-100"
            :class="{ 'transform -rotate-180 ': open }" style="top: 34%"
      />
    </div>
    <div
      class="absolute left-0 right-0 z-index-10 rounded-b-8 bg-background-default"
      :class="{ 'hidden': !open }"
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SelectOutlineModule',
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
    size: String,
    type: String
  },
  emits: ['input'],

  setup (props, { emit }) {
    const selected = ref(props.default ? props.default : props.options.length > 0 ? props.options[0] : null)
    const open = ref(false)

    function selectOption (option: string) {
      selected.value = option
      open.value = false
      emit('input', option)
    }

    return { selected, open, selectOption }
  }
})
</script>
