<template>
  <div class="flex mx-auto bg-yellow-300 items-center flex-col max-w-1110"
       :class="isEditModeTitle ? 'mt-43' : 'mt-50'"
  >
    <div class="flex items-center w-full" :class="isEditModeTitle ? 'mb-18' : 'mb-26'">
      <span class="icon-arrow-back cursor-pointer" @click="goBackToDashboard" />
      <input v-if="isEditModeTitle" type="text" value="Installation Name 1" style="box-shadow: 0 0 0 1px #ecb935"
             class="bg-transparent p-8 mx-19 rounded-6 h-60 w-450 text-38 font-roboto-mono outline-none"
      >
      <h2 v-else class="mx-27">Installation Name 1</h2>
      <span v-if="isEditModeTitle" class="text-tulip-tree icon-check-mark text-18 cursor-pointer"
            @click="isEditModeTitle = false"
      />
      <span v-else class="text-tulip-tree icon-edit text-28 cursor-pointer"
            @click="isEditModeTitle = true"
      />
    </div>
    <div class="w-full bg-foreground-900 border border-foreground-500 rounded-16 mb-50">
      <ul class="flex text-15 font-bold mt-20 mb-3 ml-80">
        <li v-for="route in listRoutes" :key="route.name">
          <router-link
            :to="{ name: route.link }"
            class="flex items-center h-50 mr-41 relative cursor-pointer hover:text-tulip-tree h-50"
          >
            {{ route.name }}
          </router-link>
        </li>
      </ul>
      <div
        class="flex py-20 border-t border-foreground-500 px-64 py-50"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { routesNames } from '@/router'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'DashboardWrapper',
  components: { },

  setup () {
    const router = useRouter()

    const isEditModeTitle = ref(false)

    const listRoutes: Array<{ name: string; link: string }> = [
      {
        name: 'Overview',
        link: routesNames.dashboardOverview
      },
      {
        name: 'Environments',
        link: routesNames.dashboardEnvironments
      },
      {
        name: 'Applications',
        link: routesNames.dashboardApplications
      },
      {
        name: 'Topology Streams',
        link: routesNames.dashboardTopologyStreams
      }
    ]

    function goBackToDashboard () {
      router.push({ name: routesNames.dashboard })
    }

    return { listRoutes, goBackToDashboard, isEditModeTitle }
  }
})
</script>

<style scoped>
ul li a::before {
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

ul li a:hover::before, ul li a.router-link-exact-active::before {
  visibility: visible;
}

a.router-link-exact-active {
  color: var(--color-tulip-tree);
}
</style>
