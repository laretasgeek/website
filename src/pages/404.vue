<template>
  <layout>
    <h3>{{ $t('page-not-found') }}</h3>

    <g-link to="/" class="btn">
      {{ $t('go-to-home') }}
    </g-link>
  </layout>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'page-404',
})
</script>