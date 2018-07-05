<template>
  <section class="app-main">
      <!--<div class="invalid-time"><a href="#">1</a><a href="#">2</a><a href="#">3</a></div>-->
      <div class="invalid-time">
          <breadcrumb></breadcrumb>
          <p v-if="!isSysMng" style="display:inline-block;">数据更新于2018年5月1日</p></div>
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  import Breadcrumb from '@/components/Breadcrumb'

export default {
    name: 'AppMain',
    props: {
      isSysMng: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Breadcrumb
    },
    computed: {
      // key() {
      //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      // }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .app-main {
        margin-top: 50px;
        .invalid-time {
            margin: 50px 20px 0 0;
            p {
                display: inline-block;
                line-height: 50px;
                margin: 0;
                padding: 0;
                float: right;
            }
        }
    }
</style>