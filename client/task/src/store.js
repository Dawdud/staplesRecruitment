import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products:[],
  },
  mutations: {
      SET_PRODUCT_LIST: (state, {list} )=>{
        state.products= list
      }
  },
  actions: {
    LOAD_PRODUCT_LIST: function({commit}){
      axios.get('http://localhost:3005/products').then((response) =>{
        
        commit('SET_PRODUCT_LIST', {list: response.data})
      }, (err)=>{
        console.log(err)
      })
    }
  },
});
