import { RouteRecordRaw } from 'vue-router'

export const aboutRouteNames = {
  about: 'about'
}

export const aboutRoutes: Array<RouteRecordRaw> = [
  {
    path: 'about',
    name: aboutRouteNames.about,
    component: () => import('./About.vue')
  }
]
