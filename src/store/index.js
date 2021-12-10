import { createStore } from 'vuex'
import { router } from '../router'

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
    },
    setRoutes(state, payload){
        state.texts.site.menu = [];
        // router.getRoutes().forEach(route => {
        //     if (route.name !== 'Home') {
        //         router.removeRoute(route.name)
        //     }
        // }); // seems irrelevante thanks to the usage of the same route names in both langs
        Object.keys(payload).forEach((sectionKey) => {
            let sectionCapKey = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);
            let name = payload[sectionKey];
            let path = `/${sectionKey}`;
            let component = () => import(`../views/${sectionCapKey}.vue`);
            router.addRoute({
                path: path,
                name: name,
                component: component
            });
            state.texts.site.menu.push({path:path,name:name});
        });
    }
  },
  actions: {
    async getTexts({commit},lang) {
      try {
        const response = await fetch(`${apiURL}/lang-strings?lang=${lang}`);
        const result = await response.json();
        commit('setTexts', result);
        commit('setRoutes', result.site.nav);
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
