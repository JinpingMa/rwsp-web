<template>
    <div>
        <el-menu class="navbar" mode="horizontal">
            <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
            <!--<breadcrumb></breadcrumb>-->
            <p class="title" v-if="isSysMng">区域医疗大数据分析</p>
            <p class="title" v-else>病种组合指数服务平台</p>
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <!--<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">-->
                    <p class="system-manege">用户名</p>
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu class="user-dropdown" slot="dropdown">
                    <el-dropdown-item @click.native="dialogFormVisible = true">
                        <span>修改密码</span>
                    </el-dropdown-item>
                    <!--<router-link class="inlineBlock" to="/">-->
                        <!--&lt;!&ndash;<el-dropdown-item>&ndash;&gt;-->
                        <!--&lt;!&ndash;详细信息&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-dropdown-item>&ndash;&gt;-->
                        <!---->
                    <!--</router-link>-->
                    <el-dropdown-item divided @click.native="logout">
                        <span style="display:block;">登出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
        <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" @close="handleClose('changeForm')">
            <el-form :model="changeForm" status-icon :rules="rules" ref="changeForm" label-width="100px"
                     class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="changeForm.username"></el-input>
                </el-form-item>
                <el-form-item label="原密码" prop="oldPass" required>
                    <el-input type="password" v-model="changeForm.oldPass"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="pass" required>
                    <el-input type="password" v-model="changeForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" required>
                    <el-input type="password" v-model="changeForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <!--<el-form-item>-->
                <!--<el-button type="primary" @click="submitForm('changeForm')">提交</el-button>-->
                <!--<el-button @click="resetForm('changeForm')">取消</el-button>-->
                <!--</el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="changePass">确认</el-button>
            </div>
        </el-dialog>
    </div>
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
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.changeForm.checkPass !== '') {
            this.$refs.changeForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.changeForm.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        dialogTitle: '修改密码',
        dialogFormVisible: false,
        changeForm: {
          username: '用户名',
          oldPass: '', // 判断一下是否正确
          pass: '',
          checkPass: ''
        },
        rules: {
          oldPass: [
            { required: true, message: '请输入正确的密码', trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
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
      },
      changePass() {
        this.$refs['changeForm'].validate((valid) => {
          if (valid) {
            alert('修改密码已提交')
            this.dialogFormVisible = false
          } else {
            // alert('填写正确信息')
            // this.dialogFormVisible = false
          }
        })
      },
      handleClose(formName) {
        // 重置对话框，去除错误提示和已经填写的信息
        this.$refs[formName].resetFields()
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

