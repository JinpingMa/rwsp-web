<template>
    <div class="tab-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="新增服务" name="first">
            <add-service></add-service>
        </el-tab-pane>
        <el-tab-pane label="服务列表" name="fourth">
            <service-list></service-list>
        </el-tab-pane>
    </el-tabs>
    </div>
</template>
<script>
  import addService from './components/addService'
  import changeService from './components/editServiceDialog'
  import serviceList from './components/serviceList'

  export default {
    components: { addService, changeService, serviceList },
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
<style scoped>
    .tab-container {
        padding: 0 20px;
    }
    .user-id {
        display: inline-block;
        float: left;
        line-height: 36px;
        width: 100px;
        text-align: right;
        padding-right: 10px;
    }
</style>