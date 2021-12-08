<template>
  <div class="flex bg-yellow-300 mx-auto items-center flex-col h-screen w-760">
    <div>
      <h1 class="text-center mt-48 mb-24">Please choose organization for instalation</h1>
      <p class="text-24 text-center text-foreground-100">Lorem ispum</p>
      <div class="grid grid-cols-3 gap-20 mt-80">
        <div v-for="item in items" :key="item.value"
             class="flex items-center justify-center flex-col p-16 bg-baltic h-160
             rounded-16 hover:border-2 hover:border-tulip-tree cursor-pointer transition duration-300 ease-in-out"
             :class="item.title === activeOrganization.title ?
               'border-2 border-tulip-tree' : 'border border-foreground-500'"
             @click="activeOrganization = item"
        >
          <div class="text-20 mb-4">{{ item.title }}</div>
          <div>{{ item.label }}</div>
        </div>
      </div>
      <button class="w-320 h-48 mx-auto bg-tulip-tree hover:shadow-button transition duration-300 ease-in-out
      text-18 text-mine-shaft flex justify-center items-center rounded-4 mt-64"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Organization',

  setup () {
    const items = [{
      title: 'Arcadia',
      label: '5 salo installations'
    },
    {
      title: 'VioletX',
      label: '1 salo instalation'
    },
    {
      title: 'Philips',
      label: ''
    },
    {
      title: 'Immediate',
      label: '1 salo instalation'
    }]
    const activeOrganization = ref(items[0])

    return { activeOrganization, items }
  }
})
</script>
