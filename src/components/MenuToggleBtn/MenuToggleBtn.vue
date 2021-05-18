<template>
  <a class="menu-toggle-btn" :class="{ open: mobileMenu }" @click.prevent="onClick">
    <span class="top-line" />
    <span class="middle-line" />
    <span class="bottom-line" />
  </a>
</template>
<script lang="ts">
import { computed, defineComponent, Ref } from '@vue/composition-api'
import './MenuToggleBtn.scss'
import { useMutations, useState } from 'vuex-composition-helpers'

export default defineComponent({
  name: 'menu-toggle-btn',
  setup () {
    const { setMobileMenuVisibility } = useMutations(['setMobileMenuVisibility'])

    const mobileMenu: Ref<boolean> = computed({
      get: () => useState(['mobileMenu']).mobileMenu.value,
      set: (newValue: boolean) => setMobileMenuVisibility(newValue)
    })

    const onClick = () => {
      mobileMenu.value = !mobileMenu.value
    }

    return {
      mobileMenu,
      onClick
    }
  }
})
</script>
