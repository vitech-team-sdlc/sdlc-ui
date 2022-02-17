<template>
  <div class="flex items-center flex-col max-w-1110 mb-32">
    <div class="flex gap-16 w-full">
      <SelectModule label="Nodes Count" :options="['3', '2']" class="w-146" />
      <SelectModule
        label="Nodes Type"
        class="flex-grow"
        :options="['m5 large 2 vSPUs, 8 RAM, up to 10 Gbps Network, EBS up to 2120 Mbp', '2']"
      />
    </div>
    <div class="flex gap-16 w-full mt-24 items-start">
      <SelectModule label="Spot Instances" :options="['50%', '100%']" class="w-146" />
      <ToggleSwitch title="Use Fargate for pipelines" class="mt-45" @toggle="toggleItem = $event" />
    </div>
    <div class="flex flex-col rounded-6 border border-tulip-tree w-full py-8 px-32 mt-64">
      <div class="flex">
        <span class="text-24 font-bold">$15</span>
        <span class="text-12 text-foreground-200 align-super pt-3">/day</span>
        <span class="text-24 font-bold px-3">/</span>
        <span class="text-24 font-bold">$450</span>
        <span class="text-12 text-foreground-200 align-super pt-3">/month</span>
      </div>
      <p class="font-inter text-foreground-100 text-14 mt-8">More about EC2 prices at</p>
      <div style="background-color: #38363C" class="flex items-center px-6 h-36 rounded-6 max-w-248">
        <a href="https://aws.amazon.com/ec2/pricing/" class="text-tulip-tree text-14">
          www.aws.amazon.com/ec2/pricing/
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

import SelectModule from '@/components/SelectModule.vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'

export default defineComponent({
  name: 'SimpleNodesConfiguration',
  components: { SelectModule, ToggleSwitch },
  emits: ['disabled'],
  setup (_, { emit }) {
    const showModal = ref(false)
    const toggleItem = ref(false)
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

    return { headers, items, showModal, toggleItem }
  }
})
</script>
