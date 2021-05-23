<template>
  <section class="recent-box laretas-ama">
    <header class="recent-box-header">
      <div class="grid-row">
        <div class="col-xs-12 col-sm-8">
          <h2>{{ title }}</h2>
        </div>
      </div>
    </header>
    <div class="grid-row gap-30">
      <div
          v-for="item in items"
          :key="item.node.id"
          class="col-xs-12 col-sm-6 col-md-4 mb-5"
      >
        <event-teaser :node="item.node"></event-teaser>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import EventTeaser from '~/components/EventTeaser'

export default defineComponent({
  name: 'recent',
  components: {
    EventTeaser
  },
  props: {
    items: Array,
    title: String
  }
})
</script>
