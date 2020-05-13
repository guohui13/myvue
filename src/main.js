import Vue from 'vue'
import App from './App.vue'
import router  from "@/router";
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')

axios({
  url:'https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb'
}).then(res=>{console.log(res)}) //then方法完后就会拿到result，然后打印