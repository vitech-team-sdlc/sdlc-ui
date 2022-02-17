<template>
  <teleport to="body">
    <transition name="fade">
      <div
        class="fixed top-0 left-0 md:p-15 w-full h-full flex justify-center items-center z-50"
        @click.self="$emit('close')"
      >
        <div
          class="relative bg-primary w-full h-full bg-background-default
          max-w-1030 max-h-830 overflow-hidden rounded-16"
        >
          <p class="p-24 font-medium text-19 font-roboto-mono">{{ title }}</p>
          <div class="h-full overflow-y-auto max-h-611 p-32">
            <slot />
          </div>
          <div class="px-24 pb-10 flex justify-end items-end max-h-126 h-full">
            <ButtonModule text="Cancel" size="s" outline class="mr-8" @click="$emit('close')" />
            <ButtonModule text="Add" size="s" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
// import { preventBodyScroll } from '@/core/helpers.ts'

import ButtonModule from '@/components/ButtonModule'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalComponent',

  components: { ButtonModule },

  props: {
    isModalOpen: { type: Boolean },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['close']
})
</script>
