<template>
  <header class="web-footer">
    <div class="web-footer-content container-fluid-1440">
      <theme-switch></theme-switch>
        &copy; {{ new Date().getFullYear() }} - VigoJUG &amp; CoruñaJUG
    </div>
  </header>
</template>
<static-query>
query {
  metadata {
    social
  }
}
</static-query>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'web-footer',
  setup() {}
})
</script>