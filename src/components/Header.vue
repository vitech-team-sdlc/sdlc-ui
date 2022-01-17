<template>
  <header class="max-w-1110 mx-auto h-110 flex items-center justify-between text-foreground-default">
    <div class="flex items-center">
      <span class="icon-logo text-24 cursor-pointer" />
      <nav v-if="!isOrganizationRoute" class="ml-110">
        <ul class="flex text-15 font-bold">
          <li v-for="route in listRoutes" :key="route.name">
            <router-link
              :to="{ name: route.link }"
              class="flex items-center h-50 mr-51 relative cursor-pointer hover:text-tulip-tree h-50"
            >
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center cursor-pointer">
      <span v-if="!user?.AvatarUrl" class="icon-github text-28" />
      <img v-else :src="user?.AvatarUrl" alt="avatar" class="w-28 rounded-full">
      <span class="text-14 mx-8 font-bold">{{ user?.Name }}</span>
      <span class="icon-arrow text-9 text-foreground-default" />
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { routesNames } from '@/router'
import { useRoute } from 'vue-router'
import { authStore } from '@/views/auth/auth.store'

export default defineComponent({
  name: 'Header',

  setup () {
    const route = useRoute()
    const user = computed(() => authStore.user)
    const listRoutes: Array<{ name: string; link: string }> = [
      {
        name: 'Dashboard',
        link: routesNames.dashboard
      },
      {
        name: 'About',
        link: routesNames.about
      }
    ]

    const isOrganizationRoute = route.name === routesNames.organization
    return { listRoutes, isOrganizationRoute, user }
  }
})
</script>

<style scoped>
nav ul li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: var(--color-tulip-tree);
  top: 50px;
  visibility: hidden;
  border-top-right-radius: 13px;
  border-top-left-radius: 13px;
}

nav ul li a:hover::before, nav ul li a.router-link-active::before {
  visibility: visible;
}

a.router-link-active {
  color: var(--color-tulip-tree);
}
</style>
