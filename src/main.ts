import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

import Notify from "vue-dust-notify";
Vue.use(Notify, { timeout: 5000 });

// import css
import "vue-dust-notify/dist/vue-dust-notify.css";

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
