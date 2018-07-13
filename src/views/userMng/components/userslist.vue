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
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)"
                    >删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
                :visible.sync="dialogFormVisible"
                width="30%">
            <span>确定删除用户：用户名</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
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
        dialogFormVisible: false
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
        this.dialogFormVisible = true
        // alert(index + 1)
        // this.$store.dispatch('DeleteUser', index).then().catch()
      }
    }
  }
</script>