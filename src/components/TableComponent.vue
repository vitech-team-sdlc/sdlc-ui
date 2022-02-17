<template>
  <div v-if="isHeaderPresent" class="border-b border-foreground-500">
    <slot name="header" />
  </div>
  <table class="w-full" aria-describedby="table">
    <tr>
      <th
        v-for="(header, index) in headers"
        :id="header.key"
        :key="header.key + index"
        :style="header.width && `width: ${header.width}px`"
        :class="alignLeft ? 'text-left' : 'align-right'"
      >
        {{ header.value }}
      </th>
    </tr>
    <tr v-for="item in items" :key="item.id" class="cursor-pointer" @click="$emit('id', item.id)">
      <td v-for="(val, i) in headers" :key="i" :class="alignLeft ? 'text-left' : 'align-right'">
        <template v-if="val.key === 'icon'">
          <div class="bg-tulip-tree w-32 h-32 flex justify-center items-center rounded-100">
            <span class="text-23 text-black" :class="`icon-${item.icon}`" />
          </div>
        </template>
        <template v-else>
          {{ item[val.key] }}<span v-if="val.key === 'name'" class="text-foreground-200 pl-8">{{ item.subline }}</span>
        </template>
      </td>
    </tr>
  </table>
  <slot name="footer" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'TableComponent',
  props: {
    headers: { type: Array },
    items: { type: Array },
    alignLeft: { type: Boolean, default: false }
  },
  emits: ['id'],
  setup (_, { slots }) {
    const isHeaderPresent = computed(() => !!slots.header)

    return { isHeaderPresent }
  }
})
</script>

<style lang="scss" scoped>
.align-right:nth-child(n+3) {
  @apply text-right;
}
tr {
  th {
    &:nth-child(2) {
      @apply text-left;
    }
    &:nth-child(1) {
      @apply pl-32;
    }
    &:last-child {
      @apply pr-32;
    }

    @apply text-foreground-200 text-14 font-roboto-mono h-57 font-medium;
  }
  td {
    &:nth-child(n+3) {
      @apply text-14;
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

    @apply h-57 border-t border-foreground-500 font-medium;
  }
}
</style>
