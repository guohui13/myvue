//创建vue项目后 npm install vue-router --save 来安装vue-router
//然后src中创建router文件夹 ，router中创建 index.js文件
//导入 VueRouter
import VueRouter from 'vue-router'
//导入Vue
import Vue from 'vue'


import Home from "@/components/Home";
import About from "@/components/About";
// 1、通过Vue.use(插件), 安装插件
Vue.use(VueRouter)

//2、创建VueRouter对象router
const router = new VueRouter({ //配置映射关系
    routes : [
        {path:'',
         redirect: '/home'},
        {path:'/home',
            component: Home},
        {path:'/about',
         component: About}
    ]
})

//3、讲router对象传入Vue实例，在另外的使用中需要import这个router对象

export default router