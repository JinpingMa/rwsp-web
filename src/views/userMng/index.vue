<template>
    <div class="tab-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="新增用户" name="first">
            <add-user></add-user>
        </el-tab-pane>
        <el-tab-pane label="删除用户" name="second">
            <label class="user-id">用户id:</label>
            <div style="margin-left:100px;">
                <el-input></el-input>
            </div>
            <div style="padding: 30px;">
            <el-button type="primary" >提交</el-button>
            <el-button >重置</el-button>
            </div>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="third">
            <change-pass></change-pass>
        </el-tab-pane>
        <el-tab-pane label="用户列表" name="fourth">
            <users-list></users-list>
        </el-tab-pane>
    </el-tabs>
    </div>
</template>
<script>
  import addUser from './components/addUser'
  import changePass from './components/changePass'
  import usersList from './components/userslist'

  export default {
    components: { addUser, changePass, usersList },
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