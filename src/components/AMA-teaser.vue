<template>
  <article class="ama-teaser">
    <header>
      <h4 class="date">
        {{ node.date }}
      </h4>
      <h3>
        {{ node.title }}
      </h3>
    </header>
    VIDEO
    <div class="body">
        {{ node.content }}
    </div>
  </article>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ama-teaser',
  props: {
    node: Object
  }
})
</script>