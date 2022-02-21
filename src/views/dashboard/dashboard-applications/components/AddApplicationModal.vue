<template>
  <ModalComponent v-if="modelValue" title="Add an application" @close="$emit('update:modelValue', false)">
    <div class="flex h-full w-full flex-col">
      <p class="font-medium">Application Template</p>
      <div class="grid grid-cols-3 gap-24 w-full mt-28">
        <CardComponent
          v-for="item in appTemplate"
          :key="item.id"
          v-model="selectedCardTemplateValue"
          class="justify-between py-24 px-22"
          :value="item.id"
        >
          <p class="text-foreground-100 text-14">{{ item.label }}</p>
          <div class="mt-56">
            <div v-for="plan in item.plan" :key="plan" class="my-8 text-14">
              <span class="icon-check-mark text-success-default" /><span class="pl-11">{{ plan }}</span>
            </div>
          </div>
        </CardComponent>
      </div>
      <p class="font-medium mt-50 mb-28">Application Pipeline</p>
      <div class="grid grid-cols-3 gap-24 w-full">
        <CardComponent
          v-for="item in appPipeline"
          :key="item.id"
          v-model="selectedCardPipelineValue"
          class="justify-between py-24 px-22"
          :value="item.id"
        >
          <p class="text-foreground-100 text-14">{{ item.label }}</p>
          <div class="mt-56">
            <div v-for="plan in item.plan" :key="plan" class="my-8 text-14">
              <span class="icon-check-mark text-success-default" /><span class="pl-11">{{ plan }}</span>
            </div>
          </div>
        </CardComponent>
      </div>
      <div class="w-full flex flex-col mt-28 pb-32">
        <div class="flex gap-24 w-full">
          <InputModule
            v-model="formData.applicationName"
            name="applicationName"
            class="flex-1"
            label="Application name"
            placeholder="Put your application name here"
            :validation="v$"
          />
          <InputModule
            v-model="formData.slackChannel"
            name="slackChannel"
            class="flex-1"
            label="Slack channel"
            placeholder="Put your Salo slack token here"
            :validation="v$"
          />
        </div>
      </div>
    </div>
  </ModalComponent>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue'

import ModalComponent from '@/components/ModalComponent'
import InputModule from '@/components/InputModule'
import CardComponent from '@/components/CardComponent'

import { preventBodyScroll } from '@/core/helpers'
import { reactive } from '@vue/reactivity'
import { required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

export default defineComponent({
  name: 'AddApplicationModal',
  components: {
    ModalComponent,
    InputModule,
    CardComponent
  },

  props: {
    showModal: Boolean,
    modelValue: { type: Boolean, default: false }
  },
  emits: ['update:modelValue'],
  setup (props) {
    const selectedCardTemplateValue = ref('0')
    const selectedCardPipelineValue = ref('0')

    const formData = reactive({
      applicationName: '',
      slackChannel: ''
    })
    const rules = {
      applicationName: { required },
      slackChannel: { required }
    }
    const v$ = useVuelidate(rules, formData)

    const appTemplate = [
      {
        label: 'Simple  Rest Application with the Sprint Boot on board!',
        plan: ['Gradle', 'Java8', 'Sprint Boot'],
        id: '0'
      },
      {
        label: 'Simple  Rest Application with the Sprint Boot on board...',
        plan: ['Gradle', 'Java8', 'Sprint Boot'],
        id: '1'
      },
      {
        label: 'Simple  Rest Application with the Sprint Boot on board.',
        plan: ['Gradle', 'Java17', 'Sprint Boot Reactive'],
        id: '2'
      }
    ]
    const appPipeline = [
      {
        label: 'Simple  Rest Application with the Sprint Boot on board',
        plan: ['Gradle', 'Sonar'],
        id: '0'
      },
      {
        label: 'Simple  Rest Application with the Sprint Boot on board',
        plan: ['Gradle', 'Super Linter'],
        id: '1'
      }
    ]

    watchEffect(() => preventBodyScroll(props.modelValue))

    return {
      selectedCardTemplateValue,
      selectedCardPipelineValue,
      v$,
      formData,
      appTemplate,
      appPipeline
    }
  }
})
</script>
