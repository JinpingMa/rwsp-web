<template>
    <div class="form-container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="ruleForm">
            <el-form-item label="服务名称" prop="serviceName" required>
                <el-input v-model="ruleForm.serviceName" placeholder="必填，不少于5个字符，中文"></el-input>
            </el-form-item>
            <el-form-item label="服务接口URL" prop="serviceURL" required>
                <el-input v-model="ruleForm.serviceURL" placeholder="英文"></el-input>
            </el-form-item>
            <el-form-item label="请求参数" prop="requestPara" required>
                <el-input v-model="ruleForm.requestPara" placeholder="例如：服务名称（name），服务url(url)"></el-input>
            </el-form-item>
            <el-form-item label="请求类型" prop="requestType" required>
                <el-input v-model="ruleForm.requestType" placeholder="例如：GET"></el-input>
            </el-form-item>
            <el-form-item label="返回类型" prop="returnType" required>
                <el-input v-model="ruleForm.returnType" placeholder="JSON格式"></el-input>
            </el-form-item>
            <el-form-item label="返回参数" prop="returnPara" required>
                <el-input v-model="ruleForm.returnPara" placeholder="JSON格式"></el-input>
            </el-form-item>
            <el-form-item label="测试用例" prop="demo" required>
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="JSON 例子" v-model="ruleForm.demo">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
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
      ruleForm: {
        serviceName: '',
        serviceURL: '',
        requestPara: '',
        requestType: '',
        returnPara: '',
        returnType: '',
        demo: ''
      },
      rules: {
        serviceName: [
          { required: true, message: '请输入服务名', trigger: 'blur' },
          { min: 5, message: '不少于 5 个字符', trigger: 'blur' }
        ],
        serviceURL: [
          { required: true, message: '请输入服务接口', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        requestPara: [
          { required: true, message: '请输入请求参数', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        requestType: [
          { required: true, message: '请输入请求类型', trigger: 'blur' }
        ],
        returnPara: [
          { required: true, message: '请输入返回类型', trigger: 'blur' }
        ],
        returnType: [
          { required: true, message: '请输入返回参数', trigger: 'blur' }
        ],
        demo: [
          { required: true, message: '请输入测试用例', trigger: 'blur' }
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .form-container {
        padding-right: 20px;
    }

</style>