import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import MngLayout from '../views/layout/MngLayout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * roles: []                     the roles of user
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  { path: '/404', component: () => import('@/views/404'), hidden: true }
]

export const systemMsgRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'citywide-std',
    meta: {
      roles: ['admin', 'citywide']
    },
    children: [
      {
        path: 'citywide-std',
        name: 'CitywideStd',
        component: () => import('@/views/citywide_standard/index'),
        meta: { title: '全市标准', roles: ['admin', 'citywide'] }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'equal',
    meta: {
      roles: ['admin', 'equal']
    },
    children: [
      {
        path: 'equal',
        name: 'Equal',
        component: () => import('@/views/equeal_level/index'),
        meta: { title: '同级同类医疗机构', roles: ['admin', 'equal'] }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'total-area',
    meta: {
      roles: ['admin', 'totalarea']
    },
    children: [
      {
        path: 'total-area',
        name: '全区标准',
        component: () => import('@/views/whole_district_std/index'),
        meta: { title: '全区标准', roles: ['admin', 'totalarea'] }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'hospital',
    meta: {
      roles: ['admin', 'hospital']
    },
    children: [
      {
        path: 'hospital',
        name: '本医院数据',
        component: () => import('@/views/hospital_data/index'),
        meta: { title: '本医院数据', roles: ['admin', 'hospital'] }
      }
    ]
  },
  {
    path: '/logs',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        name: 'Log',
        component: () => import('@/views/logs/index'),
        meta: { title: '日志', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/user-manage1',
    component: MngLayout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        name: 'UserManage1',
        component: () => import('@/views/user_manage/index'),
        meta: { title: '用户管理1', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/user-manage',
    component: MngLayout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        name: 'UserManage',
        component: () => import('@/views/userMng/index'),
        meta: { title: '用户管理', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/data-manage',
    component: MngLayout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        name: 'DataManage',
        component: () => import('@/views/data_manage/index'),
        meta: { title: '数据管理', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/service-manage',
    component: MngLayout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        name: 'ServiceManage',
        component: () => import('@/views/service_manage/index'),
        meta: { title: '服务管理', roles: ['admin'] }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
