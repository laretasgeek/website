<template>
  <section class="recent-box laretas-ama">
    <header class="recent-box-header">
      <div class="grid-row">
        <div class="col-xs-12 col-sm-8">
          <h2>Laretas AMA</h2>
        </div>
        <div class="col-xs-12 col-sm-4 actions">
          <div>
            <g-link to="/ama" class="btn">
              {{ $t('view-more') }}
            </g-link>
          </div>
        </div>
      </div>
    </header>
    <div class="grid-row gap-30">
      <div
          v-for="item in $static.amas.edges"
          :key="item.node.id"
          class="col-xs-12 col-sm-6 col-md-4 mb-5"
      >
        <ama-teaser :node="item.node"></ama-teaser>
      </div>
    </div>
  </section>
</template>
<static-query>
query {
  amas: allLaretasAma (limit: 3, filter: { published: { eq: true }}, sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        published
        date (format: "YYYY-MM-DD")
        excerpt
        content
        youtube
        spotify
        ivoox
      }
    }
  }
}
</static-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AmaTeaser from '~/components/AMATeaser'

export default defineComponent({
  name: 'ama-recent',
  components: {
    AmaTeaser
  }
})
</script>
