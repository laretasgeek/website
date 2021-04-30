<template>
  <Layout>
    <header>
      <h1>Laretas AMA (Ask me anything)</h1>
    </header>

    <div class="content">
      <p>
        Este formato de <strong>Laretas</strong> ten como obxectivo dar a coñecer a persoas da comunidade tecnolóxica galega. En cada evento un destes membros entrevista de forma informal. O final da entrevista o entrevistado nomea a persona que será a vindeira entrevistada e este pasa a ser persoa que entrevista na seguinte edición,
      </p>
    </div>

    Next AMA

    <p>Link to playlists</p>

    <div class="grid-row">
      <div
        v-for="item in $page.amas.edges"
        :key="item.node.id"
        class="col-xs-12 col-sm-6 col-md-3 mb-3"
      >
        <ama-teaser :node="item.node"></ama-teaser>
      </div>
    </div>

  <Pager :info="$page.amas.pageInfo" />
  </Layout>
</template>

<page-query>
query ($page: Int) {
  amas: allAma (perPage: 3, page: $page, filter: { published: { eq: true }}) @paginate{
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
        date (format: "MMMM D, YYYY")
        excerpt
        content
      }
    }
  }
}
</page-query>

<!--videos: allAma ( perPage: 3, page: 1, filter: { published: { eq: true }}) @paginate {-->
<!--pageInfo {-->
<!--totalPages-->
<!--currentPage-->
<!--}-->
<!--edges {-->
<!--node {-->
<!--id-->
<!--path-->
<!--title-->
<!--published-->
<!--date (format: "MMMM D, YYYY")-->
<!--excerpt-->
<!--}-->
<!--}-->
<!--}-->

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Pager } from 'gridsome'
import AmaTeaser from '../components/AMA-teaser.vue'
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
