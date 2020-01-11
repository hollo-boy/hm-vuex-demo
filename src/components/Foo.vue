<template>
  <div>
    <h2>Foo 组件</h2>
    <!-- 模板中访问数据成员不需要加 this -->
    <p>{{ $store.state.count }}</p>

    <!-- 在 JavaScript 中访问需要加 this-->
    <button @click="$store.commit('add')">+</button>

    <p>mutation 传参</p>
    <!-- <button @click="$store.commit('add')"> + </button> -->

    <!-- mutation 函数只能传递一个参数 -->
    <!-- <button @click="$store.commit('add',2,3)"> + </button> -->

    <!-- 多个参数就使用数组或对象 -->
    <button @click="$store.commit('add',{num1:10,num2:20})">+</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'for message'
    }
  }
}
</script>

<style>
</style>
