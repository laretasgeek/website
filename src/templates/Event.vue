<template>
  <layout>
    <article class="article laretas-event">
      <back-to :to="back"></back-to>

      <header class="article-header">
        <h4 class="article-date">
          {{ new Date($page.event.date) | formatDate }}
        </h4>
        <h1 class="article-title">
          {{ $page.event.title }}
        </h1>
      </header>

      <div class="article-video responsive-embed-wrapper" v-if="youtubeEmbedLink($page.event.youtube)">
        <iframe
            width="1440" height="762" :src="`${youtubeEmbedLink($page.event.youtube)}?showinfo=0`"
            frameborder="0" allow="encrypted-media" allowfullscreen
        ></iframe>
      </div>
      <content-external-links
          :youtube="$page.event.youtube"
          :ivoox="$page.event.ivoox"
          :spotify="$page.event.spotify"
      ></content-external-links>

      <article class="article-content" v-html="$page.event.content"/>

      <participants :participants="$page.event.participants"></participants>

      <back-to :to="back"></back-to>
    </article>
  </layout>
</template>
<page-query>
query Event ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
  event: event (path: $path) {
    id
    title
    content
    youtube
    ivoox
    spotify
    type
    participants {
      path
      id
      name
      excerpt
      image (width: 120, height: 100)
    }
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>

<script lang="ts">
import { computed, ComputedRef, defineComponent, getCurrentInstance } from '@vue/composition-api'
import formatDate from '~/filters/formatDate'
import YoutubeHelper from '~/helpers/youtube'
import BackTo from '../components/BackTo'
import Participants from '../components/Participants'
import ContentExternalLinks from '../components/ContentExternalLinks'

export default defineComponent({
  name: 'event-detail',
  components: {
    BackTo,
    Participants,
    ContentExternalLinks
  },
  filters: {
    formatDate
  },
  setup(props, context) {
    const youtubeEmbedLink = (url: string) => {
      return YoutubeHelper.embedLink(url)
    }
    const instance = getCurrentInstance()

    const back: ComputedRef<string> = computed(() => {
      const page = (instance?.proxy as any).$page
      switch (page.event.type) {
        case 'laretas-geek':
          return '/laretas-geek'
        case 'laretas-ama':
          return '/laretas-ama'
        case 'laretas-java':
          return '/laretas-jave'
      }
      return '/'
    })


    return {
      back,
      youtubeEmbedLink
    }
  }
})

</script>
