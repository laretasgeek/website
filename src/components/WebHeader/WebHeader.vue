<template>
  <header class="web-header">
    <div class="container-fluid-1440">
      <div class="web-header-content">
        <menu-toggle-btn v-model="menu" class="hidden-md hidden-lg" />
        <h1 class="web-header-logo">
          <g-link to="/">
            <img src="~@/assets/i/logo.png" :alt="$static.metadata.siteName" />
          </g-link>
        </h1>
        <nav class="nav hidden-xs hidden-lxs hidden-sm">
          <g-link v-for="(item, index) in menu" :key="index" :to="item.to">{{ $t(item.label) }}</g-link>
        </nav>
        <div class="spacer"></div>
        <locale-switch></locale-switch>
        <theme-switch></theme-switch>
      </div>
    </div>
  </header>
</template>
<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>
<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'
import { Theme } from '~/types'
import ThemeSwitch from '../ThemeSwitch'
import LocaleSwitch from '../LocaleSwitch'
import MenuToggleBtn from '../MenuToggleBtn'
import menu from '~/data/menu'
import './WebHeader.scss'


export default defineComponent({
  name: 'web-header',
  components: {
    ThemeSwitch,
    LocaleSwitch,
    MenuToggleBtn
  },
  setup() {
    return {
      menu
    }
  }
})
</script>