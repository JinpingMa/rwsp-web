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
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'citywide-std',
    children: [
      {
        path: 'citywide-std',
        name: 'CitywideStd',
        component: () => import('@/views/citywide_standard/index'),
        meta: { title: '全市标准' }
      }
    ]
  },
  {
    path: '/equeal',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '同级同类医疗机构',
        component: () => import('@/views/equeal_level/index'),
        meta: { title: '同级同类医疗机构' }
      }
    ]
  },
  {
    path: '/total-area',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '全区标准',
        component: () => import('@/views/whole_district_std/index'),
        meta: { title: '全区标准' }
      }
    ]
  },
  {
    path: '/hospital',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '本医院数据',
        component: () => import('@/views/hospital_data/index'),
        meta: { title: '本医院数据' }
      }
    ]
  },
  {
    path: '/logs',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Log',
        component: () => import('@/views/logs/index'),
        meta: { title: '日志' }
      }
    ]
  }
  // {
  //   path: '/user-manage',
  //   component: MngLayout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'UserManage',
  //       component: () => import('@/views/user_manage/index'),
  //       meta: { title: '用户管理' }
  //     }
  //   ]
  // },
  // {
  //   path: '/data-manage',
  //   component: MngLayout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'DataManage',
  //       component: () => import('@/views/data_manage/index'),
  //       meta: { title: '数据管理' }
  //     }
  //   ]
  // },
  // {
  //   path: '/service-manage',
  //   component: MngLayout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'ServiceManage',
  //       component: () => import('@/views/service_manage/index'),
  //       meta: { title: '服务管理' }
  //     }
  //   ]
  // },
  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   redirect: '/dashboard/index',
  //   name: 'Dashboard',
  //   hidden: true,
  //   children: [{
  //     path: 'index',
  //     component: () => import('@/views/dashboard/index')
  //   }]
  // }, {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'tree', icon: 'tree' }
  //     }
  //   ]
  // },
  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // }, {
  //   path: '/tree',
  //   component: Layout,
  //   name: 'Trees',
  //   meta: { title: 'Trees', icon: 'tree' },
  //   redirect: '/tree/index',
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'TreeIndex',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'tree', icon: 'tree' }
  //     },
  //     {
  //       path: 'select-tree',
  //       name: 'SelectTree',
  //       component: () => import('@/views/tree/select-tree'),
  //       meta: { title: 'select-tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // { path: '*', redirect: '/404', hidden: true }
]

export const systemMsgRouterMap = [
  {
    path: '/user-manage',
    component: MngLayout,
    children: [
      {
        path: 'index',
        name: 'UserManage',
        component: () => import('@/views/user_manage/index'),
        meta: { title: '用户管理' }
      }
    ]
  },
  {
    path: '/data-manage',
    component: MngLayout,
    children: [
      {
        path: 'index',
        name: 'DataManage',
        component: () => import('@/views/data_manage/index'),
        meta: { title: '数据管理' }
      }
    ]
  },
  {
    path: '/service-manage',
    component: MngLayout,
    children: [
      {
        path: 'index',
        name: 'ServiceManage',
        component: () => import('@/views/service_manage/index'),
        meta: { title: '服务管理' }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
