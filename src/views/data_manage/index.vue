<template>
    <div class="app-container">
        <el-table :data="list" stripe height="500px" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
            <el-table-column align="center" label='统计时间(累积)' width="95">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.display_time}}</span>
                    <!--{{scope.$index}}-->
                </template>
            </el-table-column>
            <el-table-column label="机构编码">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="机构名称">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="机构分类" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column class-name="status-col" label="疾病代码+治疗方式代码" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="疾病名称+治疗方式名称">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.display_time}}</span>
                </template>
            </el-table-column>
            <el-table-column label="例数" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="住院总费用次均费用" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="住院药品费用次均费用" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="住院耗材费用次均费用" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="医生组" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column label="科室" align="center">
                <template slot-scope="scope">
                    {{scope.row.pageviews}}
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
        list: null,
        listLoading: true,
        value: '',
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