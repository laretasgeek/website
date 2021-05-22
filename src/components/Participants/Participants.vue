<template>
  <aside class="participants">
    <header>
      <h2>{{ $t('participants.title')}}</h2>
    </header>
    <ul>
      <li v-for="participant in participants" :key="participant.name" class="participant">
        <g-link :to="participant.path">
          <image-hex :src="participant.image || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='" width="120"   height="100" :alt="participant.name"></image-hex>
        </g-link>
        <div class="meta">
          <h3>
            <g-link :to="participant.path">
              {{ participant.name }}
            </g-link>
          </h3>
          <p>
            {{ participant.excerpt }} <g-link :to="participant.path">{{ $t('view-more') }}</g-link>
          </p>
        </div>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ImageHex from '../ImageHexagon'

import './Participants.scss'

export default defineComponent({
  name: 'participants',
  components: {
    ImageHex
  },
  props: {
    participants: Array
  }
})
</script>
