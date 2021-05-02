<template>
  <aside class="content-external-links">
    <a v-if="youtube" :href="youtube" target="_blank" ref="noopener" class="youtube">
      <img src="~@/assets/i/youtube.svg" alt="Youtube" />
    </a>
    <a v-if="ivoox" :href="ivoox" target="_blank" ref="noopener" class="ivoox">
      <img src="~@/assets/i/ivoox.svg" alt="ivoox" />
    </a>
    <a v-if="spotify" :href="spotify" target="_blank" ref="noopener" class="sporify">
      <img src="~@/assets/i/spotify.svg" alt="Spotify" />
    </a>
  </aside>
</template>
<script lang="ts">
import { defineComponent} from '@vue/composition-api'
import './ContentExternalLinks.scss'

export default defineComponent({
  name: 'content-external-links',
  props: {
    youtube: String,
    ivoox: String,
    spotify: String
  },
  setup(props: Record<string, any>) {

  }
})
</script>

