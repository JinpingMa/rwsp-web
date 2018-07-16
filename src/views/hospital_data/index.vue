<template>
    <div class="app-container">
        <div class="condition-container">
            <span>统计时间：</span>
            <el-select v-model="value" placeholder="请选择时间">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <span>病种组合</span>
            <el-input placeholder="支持编码和名称" auto-complete="on" maxlength=30 style="width:150px"></el-input>
            <el-button type="primary">搜索</el-button>
            <el-button>病种组合</el-button>
            <el-button>机构</el-button>
            <el-button>科室</el-button>
            <el-button>医生组</el-button>
            <el-button>数据下载</el-button>
        </div>
        <el-table :data="list" stripe max-height="480" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
            <el-table-column fixed align="center" label='统计时间(累积)' width="95">
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
        <el-button class="data-check">数据审批</el-button>
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
          value: '201806',
          label: '201806'
        }, {
          value: '201805',
          label: '201805'
        }, {
          value: '201804',
          label: '201804'
        }, {
          value: '201803',
          label: '201803'
        }, {
          value: '201802',
          label: '201802'
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