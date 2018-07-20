import request from '@/utils/request'

// 添加数据
export function addData(username, password) {
  return request({
    url: '/data/add',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 获取数据列表
export function getDataList(token) {
  return request({
    url: '/data/list',
    method: 'get',
    params: { token }
  })
}
// 审批
export function approval(username, password, userType) {
  return request({
    url: '/approval',
    method: 'post',
    data: {
      username,
      password,
      userType
    }
  })
}
// 撤销审批
export function cancel(id) {
  return request({
    url: '/cancel',
    method: 'post',
    data: {
      id
    }
  })
}
