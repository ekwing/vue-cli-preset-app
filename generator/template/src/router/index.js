import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import config from '@/config'
import {SET_HEADER} from '@/store/mutation-types'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: config.routeBaseURL,
  routes: [
    {
      path: '/module',
      redirect: { name: 'home' },
      component: () => import('@/layouts/Base'),
      children: [
        {
          name: 'home',
          path: 'home',
          components: {
            header: () => import('@/components/BaseHeader'),
            default: () => import('@/views/home')
          },
          meta: {
            header: {
              title: 'home',
              'background-color': '#0a94ff',
              color: '#ffffff'
            }
          }
        }
      ]
    }
  ]
})

router.afterEach(to => {
  // 重置滑动高度
  document.documentElement.scrollTop = document.body.scrollTop = 0
  // 设置页面标题
  if (to.meta) {
    store.commit(SET_HEADER, to.meta.header)
  }
})

export default router
