<template>
  <div class="back-to">
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>
    <g-link :to="to">
      {{ label || $t('back') }}
    </g-link>
  </div>

</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import './BackTo.scss'

export default defineComponent({
  name: 'back-to',
  props: {
    to: {
      type: String,
      required: true
    },
    label: String
  }
})
</script>
