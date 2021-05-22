<template>
  <article class="event-teaser">
    <footer>
      <h4 class="date">
        {{ new Date(node.date) | formatDate }}
      </h4>
    </footer>

    <g-link :to="node.path">
      <g-image :src="cover" width="480" height="300" fit="cover"></g-image>
    </g-link>

    <header>
      <h2>
        <g-link :to="node.path" class="read-more">
          {{ node.title }}
        </g-link>
      </h2>
    </header>

    <content-external-links
        :youtube="node.youtube"
        :ivoox="node.ivoox"
        :spotify="node.spotify"
    ></content-external-links>
  </article>
</template>
<script lang="ts">
import { defineComponent, ComputedRef, computed, getCurrentInstance } from '@vue/composition-api'
import ContentExternalLinks from '../ContentExternalLinks/'
import formatDate from '~/filters/formatDate'
import './EventTeaser.scss'
import YoutubeHelper from '~/helpers/youtube'

export default defineComponent({
  name: 'event-teaser',
  components: {
    ContentExternalLinks
  },
  filters: {
    formatDate
  },
  props: {
    node: Object
  },
  setup (props: Record<string, any>) {
    const instance = getCurrentInstance()

    const cover: ComputedRef<string> = computed(() => {
      return YoutubeHelper.coverUrl(props.node.youtube)
    })

    const youtubeEmbedLink: ComputedRef<string> = computed(() => {
      return YoutubeHelper.embedLink(props.node.youtube)
    })

    return {
      youtubeEmbedLink,
      cover,
      locale: (instance?.proxy as any).$i18n.locale.toString() || '',
    }
  }

})
</script>
