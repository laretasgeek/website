<template>
  <div :class="['layout', { 'not-in-top': notInTop }]">
    <web-header></web-header>
    <div class="container-fluid-1440">
      <div class="grid-row">
        <div class="col-md-1"></div>
        <div class="col-xs-12 col-md-10">
          <slot/>
        </div>
      </div>
    </div>
    <web-footer></web-footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, Ref, ref } from '@vue/composition-api'
import WebHeader from '~/components/WebHeader'
import WebFooter from '~/components/WebFooter'

export default defineComponent({
  name: 'default-layout',
  components: {
    WebHeader,
    WebFooter
  },
  setup() {

    const notInTop: Ref<boolean> = ref(false)

    const scrollHandler = () => {
      notInTop.value = window.scrollY > 0
    }

    onBeforeMount(() => {
      window.addEventListener('scroll', scrollHandler)
      scrollHandler()
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollHandler)
    })

    return {
      notInTop
    }
  }
})
</script>


