<template>
  <article class="ama-teaser">
    <footer>
      <h4 class="date">
        {{ new Date(node.date) | formatDate }}<br/>
      </h4>
    </footer>
    <div class="cover responsive-embed-wrapper">
      <iframe
          width="1440" height="762" :src="`${youtubeEmbedLink}?showinfo=0`"
          frameborder="0" allow="encrypted-media" allowfullscreen
      ></iframe>
    </div>
    <header>
      <h2>
        <g-link :to="node.path" class="read">
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
import './AMATeaser.scss'

export default defineComponent({
  name: 'ama-teaser',
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

    const getYTIdFromUrl = (urlString: string) => {
      const url = new URL(urlString)
      return url.searchParams.get('v')
    }

    const youtubeEmbedLink: ComputedRef<string> = computed(() => {
      if (props.node.youtube) {
        const id = getYTIdFromUrl(props.node.youtube)
        return id ? `https://www.youtube-nocookie.com/embed/${id}` : ''
      } else {
        return ''
      }
    })

    return {
      youtubeEmbedLink,
      locale: (instance?.proxy as any).$i18n.locale.toString() || '',
    }


  }

})
</script>
