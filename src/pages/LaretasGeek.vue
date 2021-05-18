<template>
  <Layout>
    <header>
      <h1>{{ $t('geek.title')}}</h1>
    </header>

    <div class="content">
      <p v-html="$t('geek.description')"></p>
    </div>

    [[[[Next Event]]]]

    <p class="mb-7">[[[[Link to playlists]]]</p>

    <div class="grid-row gap-30">
      <div
          v-for="item in $page.geek.edges"
          :key="item.node.id"
          class="col-xs-12 col-sm-6 col-md-4 mb-5"
      >
        <ama-teaser :node="item.node"></ama-teaser>
      </div>
    </div>

    <pager :info="$page.geek.pageInfo" class="pagination" navClass="nav" linkClass="page"/>
    <div style="margin-bottom: 40px"></div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  geek: allLaretasGeek (perPage: 12, page: $page, filter: { published: { eq: true }}) @paginate{
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
  name: 'geek-list-page',
  components: {
    AmaTeaser,
    Pager
  },
  metaInfo: {
    title: 'Laretas Geek'
  }
})
</script>
