<template>
  <layout>
    <article class="article participant">
      <header class="article-header">
        <h1 class="article-title">
          {{ $page.participant.name }}
        </h1>
      </header>

      <image-hexagon
        v-if="$page.participant.image"
        :src="$page.participant.image"
        class="participant-image"
        :width="400"
        :height="300"
        fit="cover"
      ></image-hexagon>

      <div class="article-content" v-html="$page.participant.content"></div>

      <aside class="participations">
        <header>
          <h3 class="participations-title">
            {{ $t('participations')}}
          </h3>
        </header>
        <event-list :items="$page.participant.belongsTo.edges"></event-list>
      </aside>
    </article>
  </layout>
</template>
<page-query>
query ($path: String!) {
  participant: participant (path: $path) {
    id
    name
    twitter
    linkedin
    content
    image (width: 200, height: 170)
    belongsTo {
      edges {
        node {
          ... on Event {
            id
            date
            title
            path
            youtube
            spotify
            ivoox
          }
        }
      }
    }
  }
}
</page-query>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import EventList from '../components/EventList'
import ImageHexagon from '../components/ImageHexagon'

export default defineComponent({
  name: 'participant',
  components: { EventList, ImageHexagon }
})
</script>
