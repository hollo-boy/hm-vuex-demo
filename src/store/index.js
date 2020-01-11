import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建容器实例并导出
export default new Vuex.Store({
  // 作用：类似于组件中的 data, 在这里他就是容器的 data
  // 简单理解：把需要共享的数据初始化到容器的 state 中
  // 如何在组件中 操作容器中的数据？
  //       访问： this.$store.state.xxx
  //       修改：
  // 组件中的 this.$store 其实就是这里的 store 实例 ，原因是 Vuex 自动帮我们把容器实例挂载到了 Vue.prototype 原型对象中了
  state: {
    count: 10
  },

  // 作用：类似于 methods,主要用来修改 state
  // 注意：
  //      mutation函数中没有 this
  //      mutation函数的第一个参数就是 state，和你起啥名儿没关系
  // 如何在组件中调用 mutation 函数？
  //       this.$store.commit('mutation函数名称'，可选参数)
  mutations: {
    add (state, data = 1, data2) {
      window.console.log(data)
      // window.console.log(data)
      state.count++
      // state.count += data
    }
  }
})
