<template>
  <div class="w-full">
    <h3>Environments</h3>
    <div class="pt-50 pb-38">
      <h4>Setup</h4>
      <p class="text-14 font-inter">Description of  the section</p>
    </div>
    <div class="px-34">
      <RadioBoxModule v-model="selectedRadioValue" label="Single cluster deployment" value="single_cluster" />
      <RadioBoxModule
        v-model="selectedRadioValue"
        label="Multi cluster deployment"
        subline="Each environment is created on separate cloud account  and Kubernets"
        value="multi_cluster"
      />
    </div>
    <ToggleModule v-model="selectedTab" :tabs="configurationTab" title="Configuration" />

    <div class="bg-foreground-900 border border-foreground-500 rounded-16 p-32 mt-32">
      <TemplateBasedConfiguration v-if="isSelectedTemplateBased" @disabled="isDisableTemplateBased = $event" />
      <ManualConfiguration v-else @disabled="isDisableManual = $event" />
    </div>
    <ButtonModule text="Create" :disabled="isDisabled" class="mt-50" @click="createEnvironment" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

import RadioBoxModule from '@/components/RadioBoxModule.vue'
import ToggleModule from '@/components/ToggleModule.vue'
import ManualConfiguration from '@/views/dashboard/dashboard-environments/components/ManualConfiguration.vue'
import TemplateBasedConfiguration
  from '@/views/dashboard/dashboard-environments/components/TemplateBasedConfiguration.vue'
import ButtonModule from '@/components/ButtonModule.vue'

export default defineComponent({
  name: 'DashboardEnvironments',
  components: { TemplateBasedConfiguration, ManualConfiguration, RadioBoxModule, ToggleModule, ButtonModule },

  setup () {
    const configurationTab = ['Template based', 'Manual']

    const selectedRadioValue = ref('single_cluster')
    const selectedTab = ref(configurationTab[0])
    const isDisableTemplateBased = ref(true)
    const isDisableManual = ref(true)

    const isSelectedTemplateBased = computed(() => selectedTab.value === configurationTab[0])
    const isDisabled = computed(() =>
      (isSelectedTemplateBased.value && isDisableTemplateBased.value) ||
      (!isSelectedTemplateBased.value && isDisableManual.value))

    function createEnvironment () {
      if (isDisabled.value) return true
    }

    return {
      selectedRadioValue,
      configurationTab,
      selectedTab,
      isDisableTemplateBased,
      isDisableManual,
      isSelectedTemplateBased,
      isDisabled,
      createEnvironment
    }
  }
})
</script>
