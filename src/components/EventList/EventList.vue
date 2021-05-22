<template>
  <div class="event-list">
    <div class="grid-row gap-30">
      <div
          v-for="item in items"
          :key="item.node.id"
          class="col-xs-12 col-sm-6 col-md-4 mb-5"
      >
        <event-teaser :node="item.node"></event-teaser>
      </div>
    </div>

    <pager v-if="pageInfo" :info="pageInfo" class="pagination" navClass="nav" linkClass="page"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Pager } from 'gridsome'
import EventTeaser from '~/components/EventTeaser'

export default defineComponent({
  name: 'event-list',
  components: {
    EventTeaser,
    Pager
  },
  props: {
    items: Array,
    pageInfo: Object
  }
})
</script>
