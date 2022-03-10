import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import router from '@/router';
import App from './App.vue';

axios.defaults.baseURL = 'localhost:5555';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
