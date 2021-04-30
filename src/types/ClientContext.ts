import VueRouter from 'vue-router'
import { MetaInfo } from 'vue-meta'

export interface ClientContext {
  appOptions: Record<string, any>;
  router: VueRouter;
  head: MetaInfo;
}