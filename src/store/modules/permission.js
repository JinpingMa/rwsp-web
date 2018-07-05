import { constantRouterMap, systemMsgRouterMap } from '../../router'

function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.indexOf(role) >= 0)
  } else {
    return false
  }
}

function filterSystemRouter(systemRouter, roles) {
  const accessedRouters = systemRouter.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterSystemRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = [...constantRouterMap, ...routers]
    }
  },
  actions: {
    GenerateRouters({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.includes('admin')) {
          accessedRouters = systemMsgRouterMap
        } else {
          accessedRouters = filterSystemRouter(systemMsgRouterMap, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
