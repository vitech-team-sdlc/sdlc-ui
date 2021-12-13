<template>
  <div class="flex mx-auto bg-yellow-300 items-center flex-col h-screen max-w-1110 mt-50">
    <div class="flex justify-between w-full mb-26">
      <h2>Installations</h2>
      <ButtonModule prefix="icon-add text-14 mr-16" text="Add" size="xs" />
    </div>
    <div class="w-full bg-foreground-900 border border-foreground-500 rounded-16">
      <SelectModule :options="['hello', 'world']" class="w-243 my-20 ml-32" />

      <table class="w-full">
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
        <tr v-for="item in items" :key="item.name">
          <td>
            <div class="bg-tulip-tree w-32 h-32 flex justify-center items-center rounded-100">
              <span class="icon-settings text-23 text-black" />
            </div>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.environments }}</td>
          <td>{{ item.applications }}</td>
          <td>{{ item.topologyStreams }}</td>
        </tr>
      </table>
      <div class="flex justify-end">
        <div>
          <span>items per page</span>
        </div>
        <div>1-5 of 24</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import SelectModule from '@/components/SelectModule.vue'

export default defineComponent({
  name: 'Organization',
  components: { ButtonModule, SelectModule },

  setup () {
    const headers = ['', 'Name', 'Environments', 'Applications', 'Topology streams']
    const items = [
      {
        name: 'Instalation Name 1',
        environments: '4',
        applications: '5',
        topologyStreams: '6'
      }
    ]
    return { headers, items }
  }
})
</script>

<style lang="scss" scoped>
tr {
  th {
    &:nth-child(n+3) {
      @apply text-right;
    }
    &:nth-child(2) {
      @apply text-left;
    }
    &:nth-child(1) {
      @apply pl-32;
    }
    &:last-child {
      @apply pr-32;
    }

    @apply text-foreground-200 text-14 font-roboto-mono h-57 border-t border-foreground-500;
  }
  td {
    &:nth-child(n+3) {
      @apply text-right text-14;
    }
    &:nth-child(2) {
      @apply text-left text-14;
    }
    &:nth-child(1) {
      @apply pl-32;
    }
    &:last-child {
      @apply pr-32;
    }

    @apply h-57 border-t border-foreground-500;
  }
}
</style>
