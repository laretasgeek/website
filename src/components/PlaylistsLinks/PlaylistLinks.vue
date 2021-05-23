<template>
  <aside class="playlist-links">
    <header>
      <h2>{{ $t('all-content-in')}}</h2>
    </header>
    <ul>
      <li v-if="youtube">
        <a :href="youtube" target="_blank" ref="noopener" class="youtube">
          <img src="~@/assets/i/youtube.svg" alt="Youtube" />
        </a>
      </li>
      <li v-if="ivoox">
        <a :href="ivoox" target="_blank" ref="noopener" class="ivoox">
          <img src="~@/assets/i/ivoox.svg" alt="ivoox" />
        </a>
      </li>
      <li v-if="spotify">
        <a  :href="spotify" target="_blank" ref="noopener" class="spotify">
          <img src="~@/assets/i/spotify.svg" alt="Spotify" />
        </a>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import './PlaylistLinks.scss'

export default defineComponent({
  name: 'playlist-links',
  props: {
    youtube: String,
    ivoox: String,
    spotify: String
  }
})
</script>
