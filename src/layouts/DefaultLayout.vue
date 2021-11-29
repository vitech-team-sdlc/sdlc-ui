<template>
  <Header />
  <main class="bg-santas-grey">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  name: 'DefaultLayout',
  components: { Header }
})
</script>
