<template>
  <header class="web-footer">
    <div class="web-footer-content container-fluid-1440">
      <div class="web-footer-hexagon">
        <svg width="629" height="625" viewBox="0 0 629 625" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path transform="translate(0, -80)" d="M314.5 0L628.434 181.25V543.75L314.5 725L0.565796 543.75V181.25L314.5 0Z" fill="currentColor"/>
        </svg>
      </div>
      <div class="grid-row">
        <div class="col-xs-12 col-sm-6">
          <ul class="web-footer-social">
            <li v-for="social in $static.metadata.social" class="web-footer-social-link">
              <a :href="social.link" target="_blank" rel="nofollow, noopener">
                <span class="icon-wrapper" v-html="social.icon"></span>
                <span class="user">
                  {{ social.user }}
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-6 web-footer-copy">
          &copy; {{ new Date().getFullYear() }} - VigoJUG &amp; CoruñaJUG
        </div>
      </div>
    </div>
  </header>
</template>
<static-query>
query {
  metadata {
    social {
      id
      user
      link
      icon
    }
  }
}
</static-query>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import './WebFooter.scss'

export default defineComponent({
  name: 'web-footer',
  setup() {}
})
</script>