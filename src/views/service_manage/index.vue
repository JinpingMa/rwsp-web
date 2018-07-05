<template>
    <div class="app-container">
        <p>任务管理</p>
        <el-table :data="list" stripe height="400px" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
            <el-table-column align="center" label='任务名称'>
                <template slot-scope="scope">
                    <a>{{scope.row.name}}</a>
                </template>
            </el-table-column>
            <el-table-column label="参数">
                <template slot-scope="scope">
                    {{scope.row.params}}
                </template>
            </el-table-column>
            <el-table-column label="返回" align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.returnVal}}</span>
                </template>
            </el-table-column>
            <el-table-column label="查看示例" align="center">
                <template slot-scope="scope">
                    <a>{{scope.row.demo}}</a>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  import { getList } from '@/api/table'

  export default {
    data() {
      return {
        list: [{
          name: '认证操作',
          params: '用户ID、用户密码',
          returnVal: 'key',
          demo: '查看详细'
        }, {
          name: '同级同类数据查询',
          params: 'Key、时间截止日期、医疗机构类型',
          returnVal: '',
          demo: '查看详细'
        }, {
          name: '同级同类、病种组合查询',
          params: 'Key、时间截止日期、医疗机构类型、病种+治疗方式',
          returnVal: '',
          demo: '查看详细'
        }, {
          name: '同级同类、医生组查询',
          params: 'Key、时间截止日期、医疗机构类型、病种+治疗方式',
          returnVal: '',
          demo: '查看详细'
        }, {
          name: '同级同类、科室查询',
          params: 'Key、时间截止日期、医疗机构类型、病种+治疗方式',
          returnVal: '',
          demo: '查看详细'
        }],
        listLoading: false
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      // this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    a{
        text-decoration: underline;
    }
</style>