<template>
  <ModalComponent v-if="modelValue" title="Add an environment" @close="$emit('update:modelValue', false)">
    <div class="flex h-full w-full flex-col">
      <div class="max-w-611 w-full flex flex-col">
        <div class="flex gap-24 w-full">
          <SelectModule label="Environment Type" :options="['Development', 'hello']" class="w-221" />
          <InputModule
            v-model="awsKey"
            class="w-365"
            label="Environment name"
            placeholder="Put your environment name here"
          />
        </div>
        <CopyComponent label="AWS Credentials" class="mt-47" />
        <div class="grid grid-cols-2 gap-24 w-full mt-24">
          <InputModule
            v-model="awsKey"
            label="AWS Key"
            placeholder="Put your AWS Key here"
          />
          <InputModule
            v-model="awsSecretKey"
            label="AWS Secret Key"
            placeholder="Put your AWS Secret Key here"
          />
        </div>
        <ToggleModule v-model="selectedTab" class="mt-56" :tabs="configurationTab" title="Nodes Configuration" />
      </div>
      <div class="mt-32">
        <SimpleNodesConfiguration v-if="isSelectedSimpleNodes" @disabled="isDisableSimpleNodes = $event" />
        <AdvancedNodesConfiguration v-else @disabled="isDisableAdvancedNodes = $event" />
      </div>
    </div>
  </ModalComponent>
</template>

<script>
import { defineComponent, ref, computed, watchEffect } from 'vue'

import ModalComponent from '@/components/ModalComponent'
import SelectModule from '@/components/SelectModule'
import CopyComponent from '@/components/CopyComponent'
import InputModule from '@/components/InputModule'
import ToggleModule from '@/components/ToggleModule'
import SimpleNodesConfiguration from '@/views/dashboard/dashboard-environments/components/SimpleNodesConfiguration'
import AdvancedNodesConfiguration from '@/views/dashboard/dashboard-environments/components/AdvancedNodesConfiguration'
import { preventBodyScroll } from '@/core/helpers'

export default defineComponent({
  name: 'AddEnvironmentsModal',
  components: {
    ModalComponent,
    SelectModule,
    CopyComponent,
    InputModule,
    ToggleModule,
    SimpleNodesConfiguration,
    AdvancedNodesConfiguration
  },

  props: {
    showModal: Boolean,
    modelValue: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup (props) {
    const configurationTab = ['Simple', 'Advanced']
    const selectedTab = ref(configurationTab[0])
    const awsKey = ref('')
    const awsSecretKey = ref('')

    const isDisableSimpleNodes = ref(true)
    const isDisableAdvancedNodes = ref(true)

    const isSelectedSimpleNodes = computed(() => selectedTab.value === configurationTab[0])

    watchEffect(() => preventBodyScroll(props.modelValue))

    return {
      configurationTab,
      selectedTab,
      awsKey,
      awsSecretKey,
      isDisableSimpleNodes,
      isDisableAdvancedNodes,
      isSelectedSimpleNodes
    }
  }
})
</script>
