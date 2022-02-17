<template>
  <div class="flex bg-yellow-300 mx-auto items-center flex-col w-760">
    <div>
      <h1 class="text-center mt-48 mb-24">Please choose organization for installation</h1>
      <p class="text-24 text-center text-foreground-100">Lorem ispum</p>
      <div class="grid grid-cols-3 gap-20 mt-80">
        <CardComponent
          v-for="item in organizations"
          :key="item.id"
          v-model="activeOrganization"
          class="justify-center items-center p-16 h-160"
          :value="item.id"
        >
          <span class="text-20 mb-4">{{ item.id }}</span>
        </CardComponent>
      </div>
      <ButtonModule text="Continue" size="xl" class="mt-64" @click="goToDashboard" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watchEffect } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import { authStore } from '@/views/auth/auth.store'
import { useRoute, useRouter } from 'vue-router'
import { routesNames } from '@/router'
import { organizationStore } from '@/views/organization/organization.store'

import CardComponent from '@/components/CardComponent.vue'

export default defineComponent({
  name: 'Organization',
  components: { ButtonModule, CardComponent },

  setup () {
    const route = useRoute()
    const router = useRouter()

    const activeOrganization = ref('')

    const organizations = computed(() => organizationStore.organizations)
    watchEffect(() => { activeOrganization.value = organizations.value?.[0]?.id })

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
