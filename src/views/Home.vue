<template>
  <Hero :title="texts.home.hero.title" :subtitle="texts.home.hero.subtitle" :details="texts.home.hero.details" :bgimage="require(`@/assets/img/${texts.home.hero.bgimage}`)" />
  <div class="langBar text-center">
      <a href="#" class="nav-link" @click="switchLang">[ {{ altLang() }} ]</a>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Hero from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  },
  setup() {
    const store = useStore();
    const texts = computed(()=> store.state.texts);
    let lang = computed(() => store.state.lang);
    const routes = useRoute();
    const router = useRouter();

    const altLang = () => {
        const otherLang = lang.value === 'eng' ? 'esp' : 'eng';
        return otherLang
    };

    const switchLang = () => {
        store.dispatch('switchLang',altLang());
        store.dispatch('getTexts',lang.value);
        store.dispatch('getBlogTexts',lang.value);

    }

    onMounted(() => {
        const triedRoute = routes.path;
        const avalaibleRoutes = router.getRoutes();
        let found = 0
        avalaibleRoutes.forEach((route) => {
            if (route.path === triedRoute) {
                router.push(triedRoute)
                found = 1
            }
        });
        if (!found) console.log('404');
    })

    return {
      texts,
      altLang,
      switchLang
    }
  }
}
</script>

<style lang="scss" scoped>
    .langBar {
        background-color: black;
        border-bottom: 1px solid gray;
    }
</style>
