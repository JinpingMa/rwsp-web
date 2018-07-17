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
            <span style="margin-left: 20px;">病种组合: </span>
            <el-input placeholder="支持编码和名称" auto-complete="on" maxlength=30 style="width:150px;margin-left:20px;"></el-input>
            <el-button type="primary" style="margin-left:20px;">搜索</el-button>
            <el-button-group class="tag-group" @click.native="selectTag">
                <el-button class="selected-tag" plain >病种组合</el-button>
                <el-button plain>机构</el-button>
                <el-button plain>科室</el-button>
                <el-button plain>医生组</el-button>
            </el-button-group>
            <el-button type="primary" class="download" icon="el-icon-download" circle title="数据下载"></el-button>
            <!--<el-button>数据下载</el-button>-->
        </div>
        <el-table :data="list" stripe max-height="430" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
            <!--<el-table-column fixed align="center" label='统计时间(累积)' width="95">-->
            <!--<template slot-scope="scope">-->
            <!--<i class="el-icon-time"></i>-->
            <!--<span>{{scope.row.display_time}}</span>-->
            <!--&lt;!&ndash;{{scope.$index}}&ndash;&gt;-->
            <!--</template>-->
            <!--</el-table-column>-->
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
        <el-pagination
                style="margin-top: 20px;"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
        <el-button v-if="dataChecked" type="primary" size="medium" round class="data-check">数据审批</el-button>
        <el-button v-else class="data-check">数据撤销</el-button>
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
        }],
        pageSizes: [10, 20, 30, 40],
        pageSize: 10,
        currentPage: 4,
        total: 400,
        dataChecked: true
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
      selectTag(e) {
        // console.log(e)
        // debugger
        const list = document.getElementsByClassName('tag-group')[0].children
        Array.from(list).map((l) => {
          l.className.indexOf('selected-tag') > 0 ? l.classList.remove('selected-tag') : ''
        })
        e.target.parentElement.className.indexOf('tag-group') > 0 ? e.target.classList.add('selected-tag') : e.target.parentElement.classList.add('selected-tag')
        console.log(e.target.textContent)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .condition-container {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        .tag-group {
            margin-left: 40px;
            .selected-tag, .selected-tag:hover, .selected-tag:focus, .selected-tag:active {
                background: #67c23a;
                border-color: #67c23a;
                color: #fff;
            }
            button:hover, button:focus {
                color: #67c23a;
                background: #f0f9eb;
                border-color: #c2e7b0;
            }
        }
        .download {
            position: absolute;
            right: 20px;
        }
    }
    .data-check {
        margin-top: 20px;
        float: right;
    }
</style>