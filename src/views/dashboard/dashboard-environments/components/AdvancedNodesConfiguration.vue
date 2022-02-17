<template>
  <div class="flex mx-auto items-center flex-col max-w-1110 border border-foreground-500 rounded-16 p-32">
    <div class="flex justify-between w-full mb-24">
      <h4>Nodes</h4>
      <ButtonModule prefix="icon-add text-14 mr-16" text="Add" size="xs" @click="addNewNode" />
    </div>
    <div class="w-full border border-foreground-500 rounded-16">
      <div class="flex">
        <div class="max-w-248 w-full">
          <div
            v-for="(node, index) in nodes" :key="index + 1"
            class="flex items-center pl-32 pr-50 py-16 menu-item border-b border-foreground-500 cursor-pointer"
            :class="activeNode === index ? 'bg-tulip' : 'bg-foreground-900'"
            @click="activeNode = index"
          >
            <div class="bg-tulip-tree w-32 h-32 flex justify-center items-center rounded-100">
              <span class="text-23 text-black icon-widgets" />
            </div>
            <div class="pl-24">
              <p>{{ node.nodesName }}</p>
              <p class="text-foreground-200">3 nodes</p>
            </div>
          </div>
        </div>
        <div
          class="flex-1 border-l border-foreground-500 px-19 bg-foreground-900"
        >
          <div class="flex justify-end px-4 pt-23 text-22 text-tulip-tree">
            <span class="icon-save cursor-pointer" />
            <span class="icon-delete ml-24 cursor-pointer" />
          </div>
          <div class="mb-32 max-w-531">
            <InputModule
              v-model="nodes[activeNode].nodesName"
              label="Nodes name"
              class="w-316"
              placeholder="Nodes name"
            />
            <SelectModule label="Nodes Count" :options="['4', '3']" class="w-146 mt-16" />
            <SelectModule label="Spot Instances" :options="['50%', '100%']" class="w-146 mt-16" />
            <SelectModule
              label="Nodes Type"
              :options="['m5 large 2 vSPUs, 8 RAM, up to 10 Gbps Netw...', '100%']"
              class="w-full mt-16"
            />
            <h4 class="mt-16">Kubernetes node labels</h4>
            <div v-for="(item, index) in nodes[activeNode].nodeLabels" :key="index + 1" class="flex mt-16">
              <InputModule
                v-model="item.keyLabel"
                label="Key"
                class="w-165 mr-16"
                placeholder="Nodes name"
              />
              <InputModule
                v-model="item.valueLabel"
                label="Value"
                class="w-165"
                placeholder="Nodes name"
              />
            </div>
            <button
              class="flex justify-center bg-transparent border-2 border-dashed border-tulip-tree text-tulip-tree
                items-center rounded-4 h-36 transition duration-300 ease-in-out text-18 w-full mt-16"
              @click="addAnotherLabel"
            >
              <span class="icon-add pr-12 text-16" /> Add another
            </button>
            <h4 class="mt-16">Kubernetes node taints</h4>
            <div v-for="(item, index) in nodes[activeNode].nodeTaints" :key="index" class="flex mt-16">
              <InputModule
                v-model="item.keyLabel"
                label="Key"
                class="w-175"
                placeholder="Nodes name"
              />
              <InputModule
                v-model="item.valueLabel"
                label="Value"
                class="w-175 mx-16"
                placeholder="Nodes name"
              />
              <SelectModule label="Nodes Count" :options="item.scheduleLabel" class="flex-1" />
            </div>
            <button
              class="flex justify-center bg-transparent border-2 border-dashed border-tulip-tree text-tulip-tree
                items-center rounded-4 h-36 transition duration-300 ease-in-out text-18 w-full mt-16"
              @click="addAnotherTaint"
            >
              <span class="icon-add pr-12 text-16" /> Add another
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import ButtonModule from '@/components/ButtonModule.vue'
import InputModule from '@/components/InputModule.vue'
import SelectModule from '@/components/SelectModule.vue'

export default defineComponent({
  name: 'AdvancedNodesConfiguration',
  components: { ButtonModule, InputModule, SelectModule },
  emits: ['disabled'],
  setup () {
    const nodeLabels = {
      keyLabel: '',
      valueLabel: ''
    }

    const nodeTaints = {
      keyLabel: '',
      valueLabel: '',
      scheduleLabel: ['No schedule']
    }

    const initialValue = {
      nodesName: 'Nodes Name',
      nodesCount: ['3', '4'],
      spotInstances: ['50%', '100%'],
      nodesType: ['name'],
      nodeLabels: [{ ...nodeLabels }],
      nodeTaints: [{ ...nodeTaints }]
    }
    const showModal = ref(false)
    const activeNode = ref(0)

    const nodes = reactive([{ ...initialValue }])

    function addNewNode () {
      nodes.push({ ...initialValue })
    }

    function addAnotherLabel () {
      nodes[activeNode.value].nodeLabels.push({
        keyLabel: '',
        valueLabel: ''
      })
    }

    function addAnotherTaint () {
      nodes[activeNode.value].nodeTaints.push({ ...nodeTaints })
    }

    return { showModal, nodes, addNewNode, activeNode, addAnotherLabel, addAnotherTaint }
  }
})
</script>

<style scoped>
.menu-item:first-child {
  @apply rounded-tl-15
}
</style>
