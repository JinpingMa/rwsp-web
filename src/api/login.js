import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function addUser(username, password, userType) {
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

export function deleteUser(id) {
  return request({
    url: '/deleteUser',
    method: 'post',
    data: {
      id
    }
  })
}
