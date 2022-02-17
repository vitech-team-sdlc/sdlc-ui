<template>
  <div class="flex w-full items-center flex-col">
    <div class="flex justify-between w-full mb-26">
      <h2>Applications</h2>
      <div class="flex">
        <ButtonModule outline prefix="icon-add text-14 mr-16" class="mr-24" text="Import" size="xs" />
        <ButtonModule prefix="icon-add text-14 mr-16" text="Create" size="xs" @click="showModal = true" />
      </div>
    </div>
    <div class="w-full bg-foreground-900 border border-foreground-500 rounded-16">
      <TableComponent :items="items" :headers="headers" align-left @id="goToInstallationsTemplate($event)" />
    </div>
  </div>
  <AddApplicationModal v-model="showModal" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import TableComponent from '@/components/TableComponent.vue'
import AddApplicationModal from '@/views/dashboard/dashboard-applications/components/AddApplicationModal.vue'

export default defineComponent({
  name: 'DashboardApplications',
  components: { ButtonModule, TableComponent, AddApplicationModal },

  setup () {
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
        key: 'template',
        value: 'Template'
      },
      {
        key: 'pipeline',
        value: 'Pipeline'
      }
    ]
    const items = [
      {
        id: '1d3v553dfssvdg4',
        name: 'Application Name 1',
        template: 'Gridle  + Java8 + Sprint Boot',
        pipeline: 'Gridle  + Sonar',
        icon: 'workspaces'
      },
      {
        id: '1de55mrwervdg1',
        name: 'Application Name 2',
        template: 'Maven  + Java8 + Sprint Boot',
        pipeline: 'Gridle  + Super Linter',
        icon: 'workspaces'
      }
    ]

    function goToInstallationsTemplate (id: string) {
      console.log(id, 1111)
    }
    return { headers, items, goToInstallationsTemplate, showModal }
  }
})
</script>
