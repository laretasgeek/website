<template>
  <Layout>
    <header>
      <h1>{{ $t('ama.title')}}</h1>
    </header>

    <div class="content">
      <p v-html="$t('ama.description')"></p>
    </div>

    [[[[Next AMA]]]]

    <p class="mb-7">[[[[Link to playlists]]]</p>

    <div class="grid-row gap-30">
      <div
          v-for="item in $page.amas.edges"
          :key="item.node.id"
          class="col-xs-12 col-sm-6 col-md-4 mb-3"
      >
        <ama-teaser :node="item.node"></ama-teaser>
      </div>
    </div>

    <pager :info="$page.amas.pageInfo" class="pagination" navClass="nav" linkClass="page"/>
    <div style="margin-bottom: 40px"></div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  amas: allAma (perPage: 12, page: $page, filter: { published: { eq: true }}) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
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
</page-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Pager } from 'gridsome'
import AmaTeaser from '../components/AMATeaser'

export default defineComponent({
  name: 'ama-list-page',
  components: {
    AmaTeaser,
    Pager
  },
  metaInfo: {
    title: 'Ask me Anything'
  }
})
</script>
