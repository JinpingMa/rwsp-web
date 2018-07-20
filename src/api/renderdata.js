import request from '@/utils/request'

// 同级同类医疗机构数据
export function equalData(para1, para2, para3) {
  return request({
    url: '/equal/data',
    method: 'get',
    data: {
      para1,
      para2,
      para3
    }
  })
}
