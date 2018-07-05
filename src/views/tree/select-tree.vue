<template>
    <div class="app-container">
        <div class="invalid-time"><a href="#">1</a><a href="#">2</a><a href="#">3</a></div>
        <div class="text-container">
            <div class="block1">
                <el-tree
                    :data="data1"
                    show-checkbox
                    @check-change="handleCheckChange">
                </el-tree>
                <el-tree
                    :props="props1"
                    :load="loadNode1"
                    lazy
                    show-checkbox>
                </el-tree>
            </div>
            <div class="block2">
                <el-table
                    :data="tableData"
                    stripe
                    height="250"
                    border>
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="120">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)"
                            >详细
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <div class='chart-container'>
            <line-chart height='100%' width='100%' id='chart1'></line-chart>
        </div>
        <div style="margin-top: 20px;">
            <ve-line :data="chartData"></ve-line>
        </div>
        <modal name="hello-world" height="auto" :scrollable="true">
            <div slot="top-right">
                <button @click="$modal.hide('foo')">
                    ❌
                </button>
            </div>
            <div class="my-modal">
                <p style="padding: 0px 20px">标题</p>
                <div class='net-container'>
                    <line-chart height='100%' width='100%' id='chart4'></line-chart>
                </div>
                <div class='net-container'>
                    <line-chart height='100%' width='100%' id='chart5'></line-chart>
                </div>
                <div class='net-container'>
                    <line-chart height='100%' width='100%' id='chart6'></line-chart>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
  import VeLine from 'v-charts/lib/line.common'
  import lineChart from '@/components/Charts/lineChart'

  export default {
    name: 'select-tree',
    components: {
      VeLine,
      lineChart
    },
    data() {
      return {
        data: [
          {
            id: 1,
            label: '一级 1',
            isLeaf: false
          }, {
            id: 2,
            label: '一级 2',
            isLeaf: true
          }, {
            id: 3,
            label: '一级 3',
            isLeaf: false
          }],
        data1: [
          {
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }, {
            id: 4,
            label: '一级 4',
            isLeaf: false
          }],
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        chartData: {
          columns: ['date', 'PV'],
          rows: [
            { 'date': '01-01', 'PV': 1231 },
            { 'date': '01-02', 'PV': 1223 },
            { 'date': '01-03', 'PV': 2123 },
            { 'date': '01-04', 'PV': 4123 },
            { 'date': '01-05', 'PV': 3123 },
            { 'date': '01-06', 'PV': 7123 }
          ]
        },
        initOptions: {
          renderer: 'canvas'
        },
        bar: {
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        myChart: {},
        props1: {
          id: 'name',
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        }
      }
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        // console.log(data, checked, indeterminate)
      },
      handleEdit(index, row) {
        this.$modal.show('hello-world')
        console.log(index, row)
      },
      loadNode1(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }])
        }
        if (node.level > 3) return resolve([])
        if (node.level === 2) {
          setTimeout(() => {
            const data = [{
              name: 'leaf',
              leaf: true
            }, {
              name: 'zone',
              leaf: true
            }]
            resolve(data)
          }, 500)
        }
        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: false
          }, {
            name: 'zone',
            leaf: false
          }]
          resolve(data)
        }, 500)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .invalid-time {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        a {
            padding: 0 5px;
            text-decoration: underline;
        }
    }

    .text-container {
        display: flex;
        .block1 {
            min-width: 200px;
            border: 1px solid #eee;
        }
        .block2 {
            margin-left: 20px;
            min-width: calc(100% - 220px);
        }
    }

    .chart-container {
        position: relative;
        margin-top:20px;
        width: 100%;
        height: 85vh;
        border: 1px solid black;
        padding: 20px;
    }
    .net-container {
        height: 300px;
    }
    .echarts {
        height: 300px;
        width: 100%;
    }
    #chartId {
        height:100px;
        width:100%;
    }
    .modal-style {
        height: auto;

    }

</style>