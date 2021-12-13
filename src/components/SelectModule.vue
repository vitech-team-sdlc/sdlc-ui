<template>
  <div class="custom-select relative text-left outline-0 h-47 leading-47" @blur="open = false">
    <div
      :class="[ open ? 'border border-tulip-tree rounded-t-8' : 'border border-foreground-500 rounded-8 ' ]"
      class="bg-transparent pl-16 cursor-pointer "
      @click="open = !open"
    >
      {{ selected }}
      <span class="text-right icon-arrow right-15 absolute text-9 transition ease-in-out delay-100"
            :class="{ 'transform -rotate-180 ': open }" style="top: 45%"
      />
    </div>
    <div
      class="absolute left-0 right-0 z-index-10
      border-r border-l border-b border-tulip-tree rounded-b-8 bg-background-default"
      :class="{ 'hidden': !open }"
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        class="pl-16 cursor-pointer hover:bg-tulip-tree hover:text-black"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    size: String,
    type: String
  },

  setup (props) {
    const selected = props.default ? props.default : props.options.length > 0 ? props.options[0] : null
    const open = ref(false)

    return { selected, open }
  }
})
</script>
