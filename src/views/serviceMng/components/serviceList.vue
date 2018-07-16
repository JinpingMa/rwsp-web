<template>
    <div>
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
            <el-table-column label="返回" align="center" width="50">
                <template slot-scope="scope">
                    <span>{{scope.row.returnVal}}</span>
                </template>
            </el-table-column>
            <el-table-column label="查看示例" align="center">
                <template slot-scope="scope">
                    <a>{{scope.row.demo}}</a>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="300" class-name="small-padding fixed-width">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handleEdit(scope.row,'edit')">编辑</el-button>
                    <el-button v-if="scope.row.status!='published'" size="mini" type="success" @click="handleActive(scope.row,'actived')">激活
                    </el-button>
                    <el-button v-if="scope.row.status!='draft'" size="mini" @click="handleFreeze(scope.row,'freeze')">冻结
                    </el-button>
                    <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleDelete(scope.row,'deleted')">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <edit-service :isVisible="isVisible"
                        @listenToChildEvent="handleChildEvent"></edit-service>
    </div>
</template>
<script>
  import editService from './editServiceDialog'
  export default {
    components: { editService },
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
        listLoading: false,
        isVisible: false
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
            this.$store.dispatch('AddUsers', this.ruleForm).then(() => {
              alert('success!')
              // this.$router.push({ path: '/' })
              // location.reload()
              // this.$store.dispatch('GenerateRouters', { roles: ['admin'] })
              //   .then(() => {
              //     this.$router.addRoutes(this.$store.getters.addRouters)
              //   })
            }).catch(() => {
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleChildEvent(data) {
        this.isVisible = data
      },
      handleEdit() {
        // 显示编辑服务对话框
        this.isVisible = true
      },
      handleActive(row, operatio) {
        alert(operatio + row.name)
        // this.$store.dispatch('DeleteUser', index).then().catch()
      },
      handleFreeze(row, operatio) {
        alert(operatio + row.name)
      },
      handleDelete(row, operatio) {
        alert(operatio + row.name)
      }
    }
  }
</script>