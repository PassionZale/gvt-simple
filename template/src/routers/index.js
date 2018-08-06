import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layouts/Index.vue'

Vue.use(VueRouter);

const _import = file => () =>
  import ('../views/' + file + '.vue');


export const routes = [{
    path: '/',
    component: Layout,
    redirect: '/console',
    children: [{
        path: 'console',
        name: 'console',
        component: _import('console/Index'),
        meta: {
          title: '控制台'
        }
      },
      // 其他子路由... ...
    ]
  }, {
    path: '/login',
    name: 'auth-login',
    component: _import('auth/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/logout',
    name: 'auth-logout',
    component: _import('auth/Logout'),
    meta: {
      title: '注销'
    }
  },
  {
    path: '*',
    name: '404',
    component: _import('404')
  },
]

export default new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0
  }),
  routes
});
