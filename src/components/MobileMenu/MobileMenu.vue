<template>
  <transition name="slide-right">
    <div v-show="mobileMenu" class="mobile-menu">
      <div class="mobile-menu-cover" @click="closeMenu"></div>
      <nav class="mobile-menu-navigation" role="navigation">
        <ul>
          <li v-for="(item, key) in menuItems" :key="key">
            <g-link :to="item.to" @click.native="closeMenu">
              {{ $t(item.label) }}
            </g-link>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>
<script lang="ts">
import Vue from 'vue'
import { computed, Ref } from '@vue/composition-api'
import { useState, useMutations } from 'vuex-composition-helpers'
import { StoreState } from '~/store'
import menuItems from '~/data/menu'
import './MobileMenu.scss'

export default Vue.extend({
  name: 'mobile-menu',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const { setMobileMenuVisibility } = useMutations(['setMobileMenuVisibility'])

    const mobileMenu: Ref<boolean> = computed({
      get: () => useState<StoreState>(['mobileMenu']).mobileMenu.value,
      set: (newValue: boolean) => setMobileMenuVisibility(newValue)
    })

    const closeMenu = () => {
      setMobileMenuVisibility(false)
    }

    return {
      mobileMenu,
      menuItems,
      closeMenu
    }
  }
})
</script>
