<template>
<div>
 <h2>Bar  组件</h2>
    <p>{{ $store.state.count }}</p>
    <!-- 不能这么做，主要原因是无法和调试工具协作 -->
    <button  @click="$store.state.count--"> - </button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
