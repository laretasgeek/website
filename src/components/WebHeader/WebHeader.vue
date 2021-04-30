<template>
  <header class="web-header">
    <div class="container-fluid-1440">
      <div class="web-header-content">
        <h1 class="web-header-logo">
          <g-link to="/">
            <img src="~@/assets/i/logo.png" :alt="$static.metadata.siteName" />
          </g-link>
        </h1>
        <nav class="nav">
          <g-link to="/videos/">Videos</g-link>
          <g-link to="/ama/">AMA</g-link>
          <g-link to="/participants/">Participantes</g-link>
        </nav>
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
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch.vue'
import './WebHeader.scss'

export default defineComponent({
  name: 'web-header',
  components: { ThemeSwitch },
  setup() {
  }
})
</script>