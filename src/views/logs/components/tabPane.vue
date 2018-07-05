<template>
    <el-table :data="list[type]" border fit highlight-current-row style="width: 100%">

        <el-table-column align="center" label="ID" width="65"  v-loading="loading"
                         element-loading-text="请给我点时间！">
            <template slot-scope="scope">
                <span>{{scope.$index}}</span>
            </template>
        </el-table-column>

        <el-table-column width="180px" align="center" label="Date">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span>{{scope.row.displayTime }}</span>
            </template>
        </el-table-column>

        <el-table-column min-width="300px" label="Title">
            <template slot-scope="scope">
                <span>{{scope.row.title}}</span>
                <el-tag>{{scope.row.type}}</el-tag>
            </template>
        </el-table-column>

        <el-table-column width="110px" align="center" label="Author">
            <template slot-scope="scope">
                <span>{{scope.row.author}}</span>
            </template>
        </el-table-column>

        <el-table-column width="120px" label="Importance">
            <template slot-scope="scope">
                <svg-icon v-for="n in +scope.row.importance" icon-class="star" :key="n"></svg-icon>
            </template>
        </el-table-column>

        <el-table-column align="center" label="Readings" width="95">
            <template slot-scope="scope">
                <span>{{scope.row.pageviews}}</span>
            </template>
        </el-table-column>

        <el-table-column class-name="status-col" label="Status" width="110">
            <template slot-scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
            </template>
        </el-table-column>

    </el-table>
</template>

<script>
  import { getList } from '@/api/table'

  export default {
    props: {
      type: {
        type: String,
        default: 'login'
      }
    },
    data() {
      return {
        data: [{
          author: 'admin',
          timestamp: 643150166180,
          importance: 2,
          title: 'jfldsjf',
          type: 'login',
          pageviews: 3413,
          status: 'success'
        }],
        list: {
          'login': [{
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'login',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'login',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'login',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'login',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }],
          'approval': [{
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'approval',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'approval',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'approval',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'approval',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }],
          'download': [{
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'download',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'download',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'download',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'download',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }],
          'review': [{
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'review',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'review',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }, {
            author: 'admin',
            timestamp: 643150166180,
            importance: 2,
            title: 'jfldsjf',
            type: 'review',
            pageviews: 3413,
            status: 'success',
            displayTime: '2009-11-29 15:55:36'
          }] },
        listQuery: {
          page: 1,
          limit: 5,
          type: this.type,
          sort: '+id'
        },
        loading: false
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      console.log('logs type: ', this.type)
      // this.fetchList()
    },
    methods: {
      fetchList() {
        this.loading = true
        this.$emit('create') // for test
        getList(this.listQuery).then(response => {
          this.list = response.data.items
          this.loading = false
        })
      }
    }
  }
</script>

