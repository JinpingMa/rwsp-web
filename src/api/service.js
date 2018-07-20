import request from '@/utils/request'

// 新增服务
export function addService(username, password) {
  return request({
    url: '/service/add',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 获取服务列表
export function getList(token) {
  return request({
    url: '/service/list',
    method: 'get',
    params: { token }
  })
}
// 编辑服务
export function editService(username, password, userType) {
  return request({
    url: '/adduser',
    method: 'post',
    data: {
      username,
      password,
      userType
    }
  })
}
// 激活服务
export function activeService(id) {
  return request({
    url: '/service/active',
    method: 'post',
    data: {
      id
    }
  })
}
// 冻结服务
export function freezeService(id) {
  return request({
    url: '/service/freeze',
    method: 'post',
    data: {
      id
    }
  })
}
// 删除服务
export function deleteService() {
  return request({
    url: '/service/delete',
    method: 'post'
  })
}
