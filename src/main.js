import Vue from 'vue'
import App from './App.vue'
import router  from "@/router";
import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import {Button,Table,TableColumn} from 'element-ui';

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL= 'http://localhost:8083'

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url:'http://192.168.1.106:8083/queryIncome'
// }).then(res=>{console.log(res)}) //then方法完后就会拿到result，然后打印



// axios({
//   url:'http://192.168.1.106:8083/queryIncome',
//   methods: 'get'
// } ).then(res => {  console.log(res)} )

//并发发送请求
axios.all([axios({url:'/queryIncome'}),
                 axios({url:'/hello'})])
       .then(results => { console.log(results)} )