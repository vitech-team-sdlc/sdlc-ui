<template>
  <div class="flex mx-auto bg-yellow-300 items-center flex-col h-screen max-w-1110 mt-50">
    <div class="flex justify-between w-full mb-26">
      <h2>Installations</h2>
      <ButtonModule prefix="icon-add text-14 mr-16" text="Add" size="xs" />
    </div>
    <div class="w-full bg-foreground-900 border border-foreground-500 rounded-16">
      <TableComponent :items="items" :headers="headers" @id="goToInstallationsTemplate($event)">
        <template #header>
          <SelectModule :options="['hello', 'world']" class="w-243 my-20 ml-32" />
        </template>
        <template #footer>
          <div
            class="flex justify-end py-20 text-foreground-200 text-14
              font-roboto font-medium border-t border-foreground-500"
          >
            <div class="flex">
              <span>Items per page</span>
              <SelectModule :options="['5', '4', '3']" is-outline class="w-64" />
            </div>
            <div class="flex ml-70 items-center">
              <span>1-5 of 24</span>
              <span class="icon-arrow-outline block transform rotate-90 text-9 mr-32 ml-24 cursor-pointer" />
              <span class="icon-arrow-outline block transform -rotate-90 text-9 mr-26 cursor-pointer" />
            </div>
          </div>
        </template>
      </TableComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import SelectModule from '@/components/SelectModule.vue'
import { useRouter } from 'vue-router'
import { routesNames } from '@/router'
import TableComponent from '@/components/TableComponent.vue'

export default defineComponent({
  name: 'Organization',
  components: { ButtonModule, SelectModule, TableComponent },

  setup () {
    const router = useRouter()
    const headers = [
      {
        key: 'icon',
        value: '',
        width: '84'
      },
      {
        key: 'name',
        value: 'Name'
      },
      {
        key: 'environments',
        value: 'Environments'
      },
      {
        key: 'applications',
        value: 'Applications',
        width: '183'
      },
      {
        key: 'topologyStreams',
        value: 'Topology streams',
        width: '218'
      }
    ]
    const items = [
      {
        id: '1d3v553vdg4',
        name: 'Installation Name 1',
        subline: 'Development',
        icon: 'settings',
        environments: '4',
        applications: '5',
        topologyStreams: '6'
      },
      {
        id: '1de55mvdg1',
        name: 'Installation Name 2',
        subline: 'BA',
        icon: 'settings',
        environments: '5',
        applications: '6',
        topologyStreams: '4'
      }
    ]

    function goToInstallationsTemplate (id: string) {
      router.push({ name: routesNames.dashboardOverview, params: { id } })
    }
    return { headers, items, goToInstallationsTemplate }
  }
})
</script>
