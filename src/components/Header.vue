<template>
  <header class="max-w-1110 mx-auto h-110 flex items-center justify-between text-foreground-default">
    <span class="icon-logo text-24 cursor-pointer" />
    <nav>
      <ul class="flex">
        <li>Dashboard</li>
        <li>About</li>
      </ul>
    </nav>
    <div class="flex items-center cursor-pointer">
      <span class="icon-github text-28 text-foreground-default" />
      <span class="text-14 mx-8 font-bold">Justin Fagundez</span>
      <span class="icon-arrow-down text-9 text-foreground-default" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>
