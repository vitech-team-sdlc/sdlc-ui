<template>
  <header class="max-w-1110 mx-auto h-110 flex items-center justify-between text-foreground-default">
    <div class="flex">
      <span class="icon-logo text-24 cursor-pointer" />
      <nav class="ml-110">
        <ul class="flex text-15 font-bold">
          <li v-for="route in listRoutes" :key="route" class="mr-51">{{ route }}</li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center cursor-pointer">
      <span class="icon-github text-28 text-foreground-default" />
      <span class="text-14 mx-8 font-bold">Justin Fagundez</span>
      <span class="icon-arrow text-9 text-foreground-default" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  setup () {
    const listRoutes = ['Organization', 'Dashboard', 'About']
    return { listRoutes }
  }
})
</script>
