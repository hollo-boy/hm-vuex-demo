<template>
<div>
    <h2>Foo 组件</h2>
    <!-- 模板中访问数据成员不需要加 this -->
    <p>{{ $store.state.count }}</p>

    <!-- 在 JavaScript 中访问需要加 this-->
    <button @click="$store.commit('add')"> + </button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
