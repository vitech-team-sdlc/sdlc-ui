<template>
  <div>Applications</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DashboardApplications',
  components: { },

  setup () {
    const listRoutes: Array<{ name: string; link: string }> = [
      {
        name: 'Overview',
        link: 'dashboard-overview'
      },
      {
        name: 'Environments',
        link: 'dashboard'
      },
      {
        name: 'Applications',
        link: 'dashboard'
      },
      {
        name: 'Topology Streams',
        link: 'dashboard'
      }
    ]
    return { listRoutes }
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
