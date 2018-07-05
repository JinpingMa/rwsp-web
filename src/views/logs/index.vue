<template>
    <div class="tab-container">
        <!--<el-tag>mounted times ：{{createdTimes}}</el-tag>-->
        <!--<el-alert style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" :closable="false">-->
        <!--</el-alert>-->
        <el-tabs style='margin-top:15px;' v-model="activeName" type="border-card">
            <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
                <keep-alive>
                    <tab-pane v-if='activeName==item.key' :type='item.key' @create='showCreatedTimes'></tab-pane>
                </keep-alive>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  import tabPane from './components/tabPane'

  export default {
    name: 'tab',
    components: { tabPane },
    data() {
      return {
        tabMapOptions: [
          { label: '登录', key: 'login' },
          { label: '数据审批', key: 'approval' },
          { label: '数据下载', key: 'download' },
          { label: '数据浏览', key: 'review' }
        ],
        activeName: 'login',
        createdTimes: 0
      }
    },
    methods: {
      showCreatedTimes() {
        this.createdTimes = this.createdTimes + 1
      }
    }
  }
</script>

<style scoped>
    .tab-container{
        margin: 30px;
    }
</style>
