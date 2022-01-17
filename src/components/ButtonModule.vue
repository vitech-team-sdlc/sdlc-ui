<template>
  <button
    :class="[btnClass[size][type], btnClass[size].default]"
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
    size: String,
    type: String
  },

  setup () {
    const btnClass = computed(() => {
      return {
        ultra: {
          default: 'w-full h-48 mx-auto bg-tulip-tree hover:shadow-button transition duration-300 ease-in-out text-18 text-mine-shaft flex justify-center items-center rounded-4',
          outline: 'bg-deep-grey',
          disabled: 'cursor-not-allowed border border-warm-grey-50 text-warm-grey-50'
        },
        xl: {
          default: 'w-320 h-48 mx-auto bg-tulip-tree hover:shadow-button transition duration-300 ease-in-out text-18 text-mine-shaft flex justify-center items-center rounded-4',
          outline: 'bg-deep-grey',
          disabled: 'cursor-not-allowed border border-warm-grey-50 text-warm-grey-50'
        },
        xs: {
          default: 'w-120 h-48 bg-tulip-tree hover:shadow-button transition duration-300 ease-in-out text-18 text-mine-shaft flex justify-center items-center rounded-4',
          outline: 'bg-deep-grey',
          disabled: 'cursor-not-allowed border border-warm-grey-50 text-warm-grey-50'
        }
      }
    })

    return { btnClass }
  }
})
</script>
