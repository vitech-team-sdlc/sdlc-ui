<template>
  <div class="max-w-604 flex flex-col">
    <div class="grid grid-cols-2 gap-24 w-full">
      <CardComponent
        v-for="template in getListOfTemplates"
        :key="template.name"
        v-model="selectedCardValue"
        class="justify-between py-24 px-22"
        :value="template.name"
      >
        <div>
          <p class="text-tulip-tree text-20 font-medium mb-24">{{ template.name }}</p>
          <div v-for="plan in template.environments" :key="plan.cluster.name" class="my-8 text-14">
            <span class="icon-check-mark text-success-default" /><span class="pl-11">{{ plan.cluster.name }}</span>
          </div>
        </div>
        <div class="mt-20">
          <div class="flex mb-14">
            <div class="flex">
              <span class="text-24 font-bold">$15</span>
              <span class="text-12 text-foreground-200 align-super pt-3">/day</span>
            </div>
            <span class="text-24 font-bold px-3">/</span>
            <div class="flex">
              <span class="text-24 font-bold">$450</span>
              <span class="text-12 text-foreground-200 align-super pt-3">/month</span>
            </div>
          </div>
          <p class="font-inter text-foreground-100 text-14">More about EC2 prices at</p>
          <div style="background-color: #38363C" class="flex items-center px-6 h-36 rounded-6">
            <span
              class="text-tulip-tree text-14"
              @click="navigateToLink('www.aws.amazon.com/ec2/pricing/')"
            >www.aws.amazon.com/ec2/pricing/</span>
          </div>
        </div>
      </CardComponent>
    </div>
    <CopyComponent class="mt-64" />
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref, watchEffect } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import CopyComponent from '@/components/CopyComponent.vue'
import InputModule from '@/components/InputModule.vue'
import { dashboardEnvironmentsService } from '@/views/dashboard/dashboard-environments/dashboard-environments.service'
import { ITemplate } from '@/views/dashboard/dashboard-environments/dashboard-environments.types'

export default defineComponent({
  name: 'TemplateBasedConfiguration',
  components: { InputModule, CopyComponent, CardComponent },
  emits: ['disabled'],

  setup (_, { emit }) {
    const getListOfTemplates: Ref<ITemplate[]> = ref([])
    const selectedCardValue = ref('')
    const awsKey = ref('')
    const awsSecretKey = ref('')

    const isDisabledFields = computed(() => {
      return awsKey.value.length === 0 || awsSecretKey.value.length === 0
    })

    watchEffect(() => { emit('disabled', isDisabledFields.value) })

    function navigateToLink (link: string) {
      window.open(`https://${link}`)
    }

    onMounted(async () => {
      const getListOfTemplatesResponse = await dashboardEnvironmentsService.getListOfTemplates()
      selectedCardValue.value = getListOfTemplatesResponse[0].name
      getListOfTemplates.value = getListOfTemplatesResponse
    })

    return {
      selectedCardValue,
      awsKey,
      awsSecretKey,
      isDisabledFields,
      navigateToLink,
      getListOfTemplates
    }
  }
})
</script>
