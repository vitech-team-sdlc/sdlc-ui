<template>
  <div class="max-w-604 flex flex-col">
    <div class="grid grid-cols-2 gap-24 w-full">
      <CardComponent
        v-for="item in data"
        :key="item.id"
        v-model="selectedCardValue"
        class="justify-between py-24 px-22"
        :value="item.id"
      >
        <div>
          <p class="text-tulip-tree text-20 font-medium mb-24">{{ item.label }}</p>
          <div v-for="plan in item.plan" :key="plan" class="my-8 text-14">
            <span class="icon-check-mark text-success-default" /><span class="pl-11">{{ plan }}</span>
          </div>
        </div>
        <div class="mt-20">
          <div class="flex mb-14">
            <div class="flex">
              <span class="text-24 font-bold">{{ item.priceDay }}</span>
              <span class="text-12 text-foreground-200 align-super pt-3">/day</span>
            </div>
            <span class="text-24 font-bold px-3">/</span>
            <div class="flex">
              <span class="text-24 font-bold">{{ item.priceMonth }}</span>
              <span class="text-12 text-foreground-200 align-super pt-3">/month</span>
            </div>
          </div>
          <p class="font-inter text-foreground-100 text-14">More about EC2 prices at</p>
          <div style="background-color: #38363C" class="flex items-center px-6 h-36 rounded-6">
            <span
              class="text-tulip-tree text-14"
              @click="navigateToLink(item.link)"
            >{{ item.link }}</span>
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
        @disable="$emit('disable', $event)"
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
import { computed, defineComponent, ref, watchEffect } from 'vue'
import CardComponent from '@/components/CardComponent.vue'
import CopyComponent from '@/components/CopyComponent.vue'
import InputModule from '@/components/InputModule.vue'

export default defineComponent({
  name: 'TemplateBasedConfiguration',
  components: { InputModule, CopyComponent, CardComponent },
  emits: ['disable'],

  setup (_, { emit }) {
    const data = [
      {
        label: '3 environments',
        plan: ['Development', 'Pre- PRD', 'PROD'],
        priceDay: '$15',
        priceMonth: '$450',
        link: 'www.aws.amazon.com/ec2/pricing/',
        id: '0'
      },
      {
        label: '4 environments',
        plan: ['Development', 'Pre- PRD', 'QA', 'PROD'],
        priceDay: '$18',
        priceMonth: '$550',
        link: 'www.aws.amazon.com/ec2/pricing/',
        id: '1'
      }
    ]

    const selectedCardValue = ref('0')
    const awsKey = ref('')
    const awsSecretKey = ref('')

    const isDisabledFields = computed(() => {
      return awsKey.value.length === 0 || awsSecretKey.value.length === 0
    })

    watchEffect(() => { emit('disable', isDisabledFields.value) })

    function navigateToLink (link: string) {
      window.open(`https://${link}`)
    }

    return { selectedCardValue, data, awsKey, awsSecretKey, isDisabledFields, navigateToLink }
  }
})
</script>
