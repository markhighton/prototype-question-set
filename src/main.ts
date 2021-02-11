import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue';
import { User } from './types/index';
import QuestionRepository from '../src/domain/QuestionRepository';

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    triageQuestions: []
  },
  getters: {
    allTriageQuestions() {
         const repo = new QuestionRepository();
         return repo.getTriageQuestions();
    }
  }
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
