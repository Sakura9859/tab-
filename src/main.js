import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
axios.defaults.baseURL = "https://www.escook.cn";
Vue.config.productionTip = false;
//全局指令
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
