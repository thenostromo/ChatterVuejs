// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router'
import VueChatScroll from "vue-chat-scroll"

Vue.use(Vuex);
Vue.use(VueChatScroll)

Vue.config.productionTip = false

const VueStorage = new Vuex.Store({
  strict: true,
  state: {
    messages: []
  },
  mutations: {
    addMessage(state, value) {
      state.messages.push(value)
    },
    setMessages(state, value) {
      state.messages = value
    }
  },
  getters: {
    getMessages(state) {
      return state.messages;
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: VueStorage,
  components: { App },
  template: '<App/>'
})
