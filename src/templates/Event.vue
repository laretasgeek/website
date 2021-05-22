<template>
  <layout>
      <article class="article laretas-event">
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

        <article class="article-content" v-html="$page.event.content" />

        <participants :participants="$page.event.participants"></participants>
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
import { defineComponent } from '@vue/composition-api'
import formatDate from '~/filters/formatDate'
import YoutubeHelper from '~/helpers/youtube'
import Participants from '../components/Participants'

export default defineComponent({
  name: 'event-detail',
  components: {
    Participants
  },
  filters: {
    formatDate
  },
  setup(props) {
    const youtubeEmbedLink = (url: string) => {
      return YoutubeHelper.embedLink(url)
    }

    return {
      youtubeEmbedLink
    }
  }
})

</script>
