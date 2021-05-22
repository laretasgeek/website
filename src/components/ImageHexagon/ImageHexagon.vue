<template>
  <div class="image-hex">
    <g-image
        :src="src"
        :width="width"
        :alt="alt"
        :height="height"
        :fit="fit"
    ></g-image>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import './ImageHexagon.scss'

export default defineComponent({
  name: 'image-hex',
  props: {
    src: String,
    alt: String,
    width: [String, Number],
    height: [String, Number],
    fit: String,
  }
})
</script>
