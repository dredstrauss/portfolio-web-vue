import { createStore } from 'vuex'

export default createStore({
  state: {
    lang: 'eng'
  },
  mutations: {
    setTexts(state, payload) {
      state.texts = payload;
    }
  },
  actions: {
    async getTexts({commit},lang) {
      try {
        const response = await fetch(`http://bookapi.pedrosg.com/lang-strings?lang=${lang}`);
        const result = await response.json();
        commit('setTexts', result);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})