<template>
    <div>
        <el-table
                :data="tableData3"
                height="250"
                border
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="ID"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="用户名"
                    width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                    <el-button
                            size="mini" type="danger"
                            @click="handleDelete(scope.$index, scope.row)"
                    >删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                title="编辑用户"
                :visible.sync="editDialogVisible"
                width="30%"
                @close="handleClose('ruleForm')"
        >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
                <el-form-item label="用户名" prop="username" required>
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" required>
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" required>
                    <el-input v-model="ruleForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item label="用户类型" prop="userType">
                    <el-select v-model="ruleForm.userType" placeholder="医院用户">
                        <el-option label="医院用户" value="shanghai"></el-option>
                        <el-option label="区县用户" value="beijing"></el-option>
                        <el-option label="卫计委管理员用户" value="item3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button @click="cancleSubmit('ruleForm')">取 消</el-button>
                    <el-button type="primary" @click="handleSubmit('ruleForm')">提交</el-button>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">

          </span>
        </el-dialog>
        <el-dialog
                :visible.sync="deleteDialogVisible"
                width="30%">
            <p>确定删除用户：用户名</p>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        tableData3: [{
          date: '1',
          name: '王小虎',
          address: '删除'
        }, {
          date: '2',
          name: '王小虎',
          address: '删除'
        }, {
          date: '3',
          name: '王小虎',
          address: '删除'
        }, {
          date: '4',
          name: '王小虎',
          address: '删除'
        }, {
          date: '5',
          name: '王小虎',
          address: '删除'
        }, {
          date: '6',
          name: '王小虎',
          address: '删除'
        }, {
          date: '7',
          name: '王小虎',
          address: '删除'
        }],
        editDialogVisible: false,
        deleteDialogVisible: false,
        ruleForm: {
          username: '',
          password: '',
          checkPass: '',
          userType: '',
          type: []
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          userType: [
            { required: true, message: '请选择所属机构', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
            this.$store.dispatch('AddUsers', this.ruleForm).then(() => {
              alert('success!')
              // this.$router.push({ path: '/' })
              // location.reload()
              // this.$store.dispatch('GenerateRouters', { roles: ['admin'] })
              //   .then(() => {
              //     this.$router.addRoutes(this.$store.getters.addRouters)
              //   })
            }).catch(() => {
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      handleEdit(index, row) {
        this.editDialogVisible = true
        // alert('编辑' + (index + 1))
        // this.$store.dispatch('DeleteUser', index).then().catch()
      },
      handleSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
            this.$store.dispatch('AddUsers', this.ruleForm).then(() => {
              alert('success!')
              // this.$router.push({ path: '/' })
              // location.reload()
              // this.$store.dispatch('GenerateRouters', { roles: ['admin'] })
              //   .then(() => {
              //     this.$router.addRoutes(this.$store.getters.addRouters)
              //   })
            }).catch(() => {
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
        // this.editDialogVisible = false
        // this.$refs[formName].resetField()
      },
      cancleSubmit(formName) {
        // this.$refs[formName].resetFields()
        this.editDialogVisible = false
      },
      handleClose(formName) {
        // 重置对话框，去除错误提示和已经填写的信息
        this.$refs[formName].resetFields()
      },
      handleDelete(index) {
        this.deleteDialogVisible = true
        // alert('删除' + (index + 1))
      }
    }
  }
</script>