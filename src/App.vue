<template>
  <div id="app">
<!--  router-link 得有链接 渲染成 a标签 router-view 放在哪影响位置

-->
    <router-view></router-view>
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
<!--  点击按钮会出现 router-link-active 这个改写样式  -->
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
    .router-link-active {
        color: red;
    }
</style>
