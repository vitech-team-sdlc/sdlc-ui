<template>
  <section
    :class="{
      'm-toggle--is-dark': darkTheme
    }"
    class="m-toggle"
  >
    <input
      :id="id"
      v-model="toggleState"
      class="m-toggle__input"
      type="checkbox"
    >
    <span
      :aria-checked="toggleState"
      :aria-labelledby="`${id}-label`"
      class="m-toggle__content bg-baltic-black border border-foreground-500"
      :class="{'m-toggle__content--active': toggleState}"
      role="checkbox"
      @click="toggleState = !toggleState"
    />
    <label
      :id="`${id}-label`"
      :for="id"
      class="m-toggle__label font-bold"
    >
      {{ title }} {{ toggleState }}
    </label>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',

  props: {
    activeColor: {
      type: String,
      default: '#9FD6AE'
    },
    darkTheme: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    toggled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle'],

  setup (props, { emit }) {
    const toggleState = ref(props.toggled)
    const id = computed(() => props.title.replace(/ /g, '').toLowerCase())

    watchEffect(() => { emit('toggle', toggleState.value) })

    return { toggleState, id }
  }
})
</script>

<style lang="scss" scoped>
.m-toggle {
  $self: &;
  $toggle-spacing: 2px;
  align-items: center;
  display: flex;

  > * {
    cursor: pointer;
    margin-right: 16px;
  }

  &__label {
    user-select: none;
    font-size: v-bind(fontSize);

    #{$self}--is-disabled & {
      cursor: not-allowed;
    }

    #{$self}--is-dark & {
      color: white;
    }
  }

  &__input {
    display: none;

    &:checked {
      & + #{$self}__content {
        &:after {
          left: 50%;
        }
      }
    }
  }

  &__content {
    border-radius: 2em;
    box-sizing: border-box;
    height: 24px;
    outline: 0;
    transition: background-color .4s ease;
    width: 40px;
    will-change: background-color;

    &--active {
      @apply bg-tulip-tree
    }

    &:after {
      background: white;
      border-radius: 50%;
      box-shadow: 0 3px 1px rgba(0, 0, 0, 0.0510643), 0 2px 2px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: relative;
      transition: left .2s ease;
      width: 21px;
      will-change: left;
    }

    #{$self}--is-disabled & {
      cursor: not-allowed;
      opacity: 50%;
    }

    #{$self}--is-dark & {
      background: #374151;
    }
  }
}
</style>
