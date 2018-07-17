<template>
    <div class="app-container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="添加数据" name="first">
                <el-form :model="addDataForm" :rules="rules" ref="addDataForm" label-width="100px">
                    <el-form-item label="数据时间" prop="date" required>
                        <el-input  v-model="addDataForm.date" placeholder="时间格式:201606"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="resetForm('addDataForm')">重置</el-button>
                        <el-button type="primary">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="数据列表" name="fourth">
                <el-table :data="list" stripe height="500px" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
                    <el-table-column align="center" label='时间段' width="95">
                        <template slot-scope="scope">
                            <i class="el-icon-time"></i>
                            <span>{{scope.row.display_time}}</span>
                            <!--{{scope.$index}}-->
                        </template>
                    </el-table-column>
                    <el-table-column label="名称">
                        <template slot-scope="scope">
                            {{scope.row.pageviews}}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            {{scope.row.pageviews}}
                        </template>
                    </el-table-column>
                    <el-table-column label="审批/撤销" align="center">
                        <template slot-scope="scope">
                            {{scope.row.pageviews}}
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  import { getList } from '@/api/table'

  export default {
    data() {
      const validateTime = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入时间'))
        } else {
          const reg = /^[1-2][0-9]{5}$/
          const date = value.trim()
          if (date.length === 6 && reg.test(date)) {
            callback()
          } else {
            callback(new Error('日期格式不对，日期格式:201806'))
          }
        }
      }
      return {
        addDataForm: {
          date: ''
        },
        rules: {
          date: [
            { required: true, message: '请输入时间', trigger: 'blur' },
            { validator: validateTime, trigger: 'blur' }
          ]
        },
        list: null,
        listLoading: true,
        value: '',
        activeName: 'first',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
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
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getList(this.listQuery).then(response => {
          this.list = response.data.items
          this.listLoading = false
        })
      },
      handleClick(tab, event) {
        console.log(tab, event)
      },
      resetForm(formData) {
        this.$refs[formData].resetFields()
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .condition-container {
        margin-bottom: 20px;
    }
    .data-check {
        margin-top: 20px;
        float: right;
    }
</style>