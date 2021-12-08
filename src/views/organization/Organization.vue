<template>
  <div class="flex bg-yellow-300 mx-auto items-center flex-col h-screen w-760">
    <div>
      <h1 class="text-center mt-48 mb-24">Please choose organization for instalation</h1>
      <p class="text-24 text-center text-foreground-100">Lorem ispum</p>
      <div class="grid grid-cols-3 gap-20 mt-80">
        <div v-for="item in items" :key="item.value"
             class="flex items-center justify-center flex-col p-16 bg-baltic h-160
           rounded-16 hover:border-2 hover:border-tulip-tree cursor-pointer transition duration-300 ease-in-out"
             :class="item.title === activeOrganization.title ?
               'border-2 border-tulip-tree' : 'border border-foreground-500'"
             @click="activeOrganization = item"
        >
          <div class="text-20 mb-4">{{ item.title }}</div>
          <div>{{ item.label }}</div>
        </div>
      </div>
      <ButtonModule text="Continue" size="xl" class="mt-64" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ButtonModule from '@/components/ButtonModule.vue'
import { useRoute } from 'vue-router'
import { generalService } from '@/services'

export default defineComponent({
  name: 'Organization',
  components: { ButtonModule },

  setup () {
    const route = useRoute()

    const items = [{
      title: 'Arcadia',
      label: '5 salo installations'
    },
    {
      title: 'VioletX',
      label: '1 salo instalation'
    },
    {
      title: 'Philips',
      label: ''
    },
    {
      title: 'Immediate',
      label: '1 salo instalation'
    }]
    const activeOrganization = ref(items[0])
    onMounted(() => {
      const code = JSON.stringify(route.query.code)
      getAccessTokenFromCode(code)
    })
    async function getAccessTokenFromCode (code: string) {
      await generalService.getAccessToken(code)
      //   url: 'https://github.com/login/oauth/access_token',
      // const opts = { headers: { accept: 'application/json' } }
      // const { data } = await axios({
      //   url: 'https://github.com/login/oauth/access_token',
      //   method: 'post',
      //   headers: {
      //     Accept: 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      //     'Access-Control-Allow-Headers': 'Content-Type'
      //   },
      //   params: {
      //     client_id: 'ce907efc6366f92b54d8',
      //     client_secret: '386aa91051d3c668c950170c209581ce0367af1d',
      //     code: JSON.parse(code)
      //   }
      // })
      /**
       * GitHub returns data as a string we must parse.
       */
      // console.log(data, 'data')
    }
    return { activeOrganization, items }
  }
})
</script>
