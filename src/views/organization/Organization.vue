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
      <ButtonModule text="Continue" size="xl" class="mt-64" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import { authStore } from '@/views/auth/auth.store'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Organization',
  components: { ButtonModule },

  setup () {
    const route = useRoute()

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

    onMounted(async () => {
      if (!authStore.accessToken) {
        await authStore.getAccessTokenFromCode(JSON.stringify(route.query.code))
      }
      await authStore.getUser()
    })
    return { activeOrganization, items }
  }
})
</script>
