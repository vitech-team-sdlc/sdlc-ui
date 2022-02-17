<template>
  <div class="flex mx-auto bg-yellow-300 items-center flex-col max-w-1110">
    <div class="flex justify-between w-full mb-26">
      <h2>Environments</h2>
      <ButtonModule prefix="icon-add text-14 mr-16" text="Add" size="xs" @click="showModal = true" />
    </div>
    <div class="w-full bg-foreground-900 border border-foreground-500 rounded-16">
      <TableComponent :items="items" :headers="headers">
        <template #footer>
          <div
            class="flex justify-end py-20 text-14
              font-roboto font-medium border-t border-foreground-500"
          >
            <span>Total: $540/Day</span>
            <span class="ml-70 mr-32">Total: $540/Month</span>
          </div>
        </template>
      </TableComponent>
    </div>
  </div>
  <AddEnvironmentsModal v-model="showModal" />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

import ButtonModule from '@/components/ButtonModule.vue'
import TableComponent from '@/components/TableComponent.vue'
import AddEnvironmentsModal from '@/views/dashboard/dashboard-environments/components/AddEnvironmentsModal.vue'

export default defineComponent({
  name: 'ManualConfiguration',
  components: { ButtonModule, TableComponent, AddEnvironmentsModal },
  emits: ['disabled'],
  setup (_, { emit }) {
    const showModal = ref(false)
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
        key: 'nodes',
        value: 'Nodes'
      },
      {
        key: 'pricePerDay',
        value: 'Price per day',
        width: '183'
      },
      {
        key: 'pricePerMonth',
        value: 'Price per month',
        width: '218'
      }
    ]

    const items = [
      {
        id: '1d3v553',
        name: 'Environment Name 1',
        subline: 'Development',
        icon: 'workspaces',
        nodes: '4',
        pricePerDay: '$5',
        pricePerMonth: '$6'
      },
      {
        id: '1de55mv',
        name: 'Environment Name 2',
        subline: 'BA',
        icon: 'workspaces',
        nodes: '5',
        pricePerDay: '$6',
        pricePerMonth: '$4'
      }
    ]

    watchEffect(() => { emit('disabled', !items.length) })

    return { headers, items, showModal }
  }
})
</script>
