<template>
  <div>
    <div v-if="label" class="font-roboto font-bold mb-8">{{ label }}</div>
    <div class="bg-foreground-900 border border-foreground-500 rounded-16 p-24 flex justify-between">
      <div class="roboto-mono font-medium">
        <p class="leading-21" style="color: #66BB6A;"># Use the following script to generate an access key</p>
        <p ref="copySelectedTextRef" class="leading-21">
          <span style="color: #ba68c8">aws iam</span> create-access-key
          <span style="color: #81d4fa">--username</span> Your_Username
        </p>
      </div>
      <span
        class="icon-copy text-22 cursor-pointer"
        :class="isClickedCopy && 'text-tulip-tree'"
        @click="copyText"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CopyComponent',
  props: {
    label: { type: String, required: false }
  },
  setup () {
    const isClickedCopy = ref(false)
    const copySelectedTextRef = ref<any>(null)

    async function copyText () {
      const selectedText = copySelectedTextRef.value.innerText
      await navigator.clipboard.writeText(selectedText)
      isClickedCopy.value = true
      setTimeout(() => {
        isClickedCopy.value = false
      }, 5000)
    }
    return { isClickedCopy, copySelectedTextRef, copyText }
  }
})
</script>
