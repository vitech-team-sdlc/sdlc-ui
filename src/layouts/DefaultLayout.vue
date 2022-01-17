<template>
  <Header />
  <main class="bg-santas-grey">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import { authStore } from '@/views/auth/auth.store'

export default defineComponent({
  name: 'DefaultLayout',
  components: { Header },

  setup () {
    onMounted(async () => {
      if (authStore.accessToken) {
        await authStore.getUser()
      }
    })
  }
})
</script>
