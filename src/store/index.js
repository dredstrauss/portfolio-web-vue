import { createStore } from 'vuex'

const apiURL = process.env.APIURL || 'https://dred-strauss-portfolio.herokuapp.com';

export default createStore({
  state: {
    lang: 'eng'
  },
  mutations: {
    setTexts(state, payload) {
      state.texts = payload;
    },
    setBlogTexts(state, payload) {
      state.blogTexts = payload;
    },
    setLang(state, payload) {
        localStorage.setItem('lang',payload)
        state.lang = payload;
    }
  },
  actions: {
    async getTexts({commit},lang) {
      try {
        const response = await fetch(`${apiURL}/lang-strings?lang=${lang}`);
        const result = await response.json();
        commit('setTexts', result);
        return result
      } catch (error) {
        console.log(error);
      }
    },
    async getBlogTexts({commit},lang) {
      try {
        const response = await fetch(`${apiURL}/blog-strings?lang=${lang}`);
        const result = await response.json();
        commit('setBlogTexts', result);
        return result
      } catch (error) {
        console.log(error);
      }
    },
    switchLang({commit}, lang) {
      commit('setLang', lang);
    }
  },
  modules: {
  }
})
