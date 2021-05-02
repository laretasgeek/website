<template>
  <ul class="locale-switch">
    <li
      v-for="locale in availableLocales"
      :key="locale"
      :class="['locale-switch-lang', { 'locale-switch-lang-active': locale.toLowerCase() === currentLocale.toLowerCase() }]"
      @click="changeLocale(locale)"
    >{{ locale.substr(0, 2) }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import './LocaleSwitch.scss'

export default defineComponent({
  name: "locale-switch",
  setup(props: Record<string, any>, { root }) {

    const changeLocale = (locale: string) => {
      root.$router.push({
        path: (root as any).$tp(root.$route.path, locale.substr(0, 2), true)
      })
    }

    return {
      currentLocale: (root as any).$i18n.locale.toString(),
      availableLocales: (root as any).$i18n.availableLocales,
      changeLocale
    }
  }
})
</script>