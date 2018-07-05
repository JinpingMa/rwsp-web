<template>
    <div class="app-wrapper" :class="classObj">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>
        <navbar :isSysMng="true"></navbar>
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <app-main :isSysMng="true"></app-main>
        </div>
    </div>
</template>

<script>
  import { Navbar, Sidebar, AppMain } from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import GlobalFooter from '../../components/GlobalFooter'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain,
      GlobalFooter
    },
    mixins: [ResizeMixin],
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      },
      footerClass() {
        return {
          footerHideSidebar: !this.sidebar.opened
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        .sidebar-container {
            top: 50px !important;
            height: calc(100% - 50px) !important;
        }
        .my-header {
            background-color: #ccc;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            box-sizing: border-box;
            height: 50px;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

</style>
