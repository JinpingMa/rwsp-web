<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <!--<breadcrumb></breadcrumb>-->
      <p class="title" v-if="isSysMng">区域医疗大数据分析</p>
      <p class="title" v-else>病种组合指数服务平台</p>
    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <!--<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">-->
          <p class="system-manege">系统管理</p>
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            用户管理
          </el-dropdown-item>
            <el-dropdown-item>
                数据管理
            </el-dropdown-item>
            <el-dropdown-item>
                服务管理
            </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">登出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  props: {
    isSysMng: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .title {
        display: inline-block;
        margin: 0;
        color: seagreen;
        font-size: 24px;
        font-weight: bold;
    }
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;
    display: block;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      /*margin-top: 5px;*/
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
        .system-manege {
            line-height: 50px;
            font-size: 18px;
            display: inline-block;
            font-weight: 500;
            margin: 0;
        }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

