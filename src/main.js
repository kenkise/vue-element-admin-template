import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import './styles/index.scss';
import './permission.js'; // content permission
import element from '@/utils/element';
import babelPolyfill from 'babel-polyfill';
// import '@babel/polyfill';
import request from './api/request';
import { register } from '@/global/index';

Vue.use(Element);
Vue.use(babelPolyfill);
Vue.use(register);

Vue.config.productionTip = false;
Vue.prototype.$element = element;
Vue.prototype.request = request;

// 在vue上挂载一个指量 preventReClick
const preventReClick = Vue.directive('preventReClick', {
  inserted: function (el, binding) {
    el.addEventListener('click', () => {
      console.log(el.disabled);
      if (!el.disabled) {
        el.disabled = true;
        el.classList.add('is-disabled');
        setTimeout(() => {
          el.disabled = false;
          el.classList.remove('is-disabled');
        }, binding.value || 3000);
      }
    });
  },
});
export { preventReClick };

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
