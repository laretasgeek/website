<template>
  <article class="ama-teaser">
    <footer>
      <h4 class="date">
        {{ $d(new Date(node.date), 'medium') }}<br/>
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
        {{ node.title }}
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
import { defineComponent, ComputedRef, computed } from '@vue/composition-api'
import './AMATeaser.scss'
import ContentExternalLinks from '../ContentExternalLinks/ContentExternalLinks.vue'

export default defineComponent({
  name: 'ama-teaser',
  components: {
    ContentExternalLinks
  },
  props: {
    node: Object
  },
  setup (props: Record<string, any>) {

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
      youtubeEmbedLink
    }


  }

})
</script>