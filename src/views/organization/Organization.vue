<template>
  <div class="flex bg-yellow-300 mx-auto items-center flex-col h-screen w-760">
    <div>
      <h1 class="text-center mt-48 mb-24">Please choose organization for instalation</h1>
      <p class="text-24 text-center text-foreground-100">Lorem ispum</p>
      <div class="grid grid-cols-3 gap-20 mt-80">
        <div v-for="item in organizations" :key="item.value"
             class="flex items-center justify-center flex-col p-16 bg-baltic h-160
           rounded-16 hover:border-2 hover:border-tulip-tree cursor-pointer transition duration-300 ease-in-out"
             :class="item.Login === activeOrganization.Login ?
               'border-2 border-tulip-tree' : 'border border-foreground-500'"
             @click="activeOrganization = item"
        >
          <div class="text-20 mb-4">{{ item.Login }}</div>
          <div>{{ item.label }}</div>
        </div>
      </div>
      <ButtonModule text="Continue" size="xl" class="mt-64" @click="goToDashboard" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import { authStore } from '@/views/auth/auth.store'
import { useRoute, useRouter } from 'vue-router'
import { routesNames } from '@/router'
import { organizationStore } from '@/views/organization/organization.store'

export default defineComponent({
  name: 'Organization',
  components: { ButtonModule },

  setup () {
    const route = useRoute()
    const router = useRouter()

    const organizations = computed(() => organizationStore.organizations)
    const activeOrganization = computed(() => {
      return organizations.value[0]
    })

    onMounted(async () => {
      await getAccessToken()
      await organizationStore.getOrganizations()
      await authStore.getUser()
    })

    async function getAccessToken () {
      if (!authStore.accessToken) {
        try {
          await authStore.getAccessTokenFromCode(JSON.stringify(route.query.code))
        } catch (e) {
          await router.push('/login')
          console.log(e, 'e')
        }
      } else {
        await router.push('/login')
      }
    }

    function goToDashboard () {
      router.push({ name: routesNames.dashboard })
    }

    return { activeOrganization, organizations, goToDashboard }
  }
})
</script>
