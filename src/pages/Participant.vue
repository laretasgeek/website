<template>
  <Layout>
    <header>
      <h1>{{ $t('participants.title')}}</h1>
    </header>

    <div class="content">
      <p v-html="$t('participants.description')"></p>
    </div>

    <div class="grid-row gap-30">
      <div
          v-for="item in $page.participants.edges"
          :key="item.node.id"
          class="col-xs-12 col-sm-6 col-md-4 mb-3"
      >
        <g-link :to="item.node.path">
          {{ item.node.name }}
        </g-link>
      </div>
    </div>

    {{ $page.participants.pageInfo }}

    <pager :info="$page.participants.pageInfo" class="pagination" navClass="nav" linkClass="page"/>
    <div style="margin-bottom: 40px"></div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  participants: allParticipant (perPage: 12, page: $page, filter: { published: { eq: true }}) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        path
      }
    }
  }
}
</page-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Pager } from 'gridsome'

export default defineComponent({
  name: 'participants-list-page',
  components: {
    Pager
  },
  metaInfo: {
    title: 'Participantes'
  }
})
</script>
