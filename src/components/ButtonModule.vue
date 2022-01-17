<template>
  <button
    class="flex justify-center items-center rounded-4 h-48 transition duration-300 ease-in-out text-18"
    :class="[{
               'bg-transparent border-2 border-tulip-tree text-tulip-tree': outline,
               'bg-tulip-tree text-mine-shaft': !outline,
               'bg-tulip-tree text-mine-shaft opacity-40 cursor-not-allowed': disabled
             },
             btnClass[size]]"
  >
    <span v-if="prefix" :class="prefix" /> {{ text }}
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonModule',
  props: {
    text: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      required: false
    },
    size: {
      type: String,
      default: 'default'
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    const btnClass = computed(() => {
      return {
        full: 'w-full',
        xl: 'w-320 mx-auto',
        default: 'w-238 mx-auto',
        xs: 'w-120'
      }
    })

    return { btnClass }
  }
})
</script>
