<template>
  <div class="justify-center flex bg-yellow-300 mx-auto items-center flex-col h-screen w-486">
    <div class="flex mb-57">
      <span class="icon-github text-84 text-foreground-default mr-57" />
      <div class="bg-tulip-tree w-88 h-88 flex justify-center items-center rounded-100">
        <span class="icon-logo text-24 text-mine-shaft" />
      </div>
    </div>
    <div class="bg-baltic-sea px-45 pb-57 rounded-10 text-foreground-default">
      <h2 class="my-32">Link your Github account to Salo</h2>
      <p class="mb-32">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque diam ante, feugiat ac rhoncus quis, auctor vel mauris.
      </p>
      <p>
        Morbi sed ipsum eget risus pharetra interdum eget eu odio.
        Mauris sit amet risus ut velit luctus consectetur vitae at metus.
      </p>
      <button class="w-full h-53 bg-tulip-tree hover:shadow-button transition duration-300 ease-in-out
      text-18 text-mine-shaft flex justify-center items-center rounded-4 mt-32" @click="goToOrganization"
      >
        <span class="icon-github text-32 mr-16" /> Autenticate with GitHub
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { router, routesNames } from '@/router'
export default defineComponent({
  name: 'Login',

  setup () {
    function goToOrganization () {
      router.push({ name: routesNames.organization })
    }
    return { goToOrganization }
  }
})
</script>
