<template>
  <Hero :title="texts.home.hero.title" :subtitle="texts.home.hero.subtitle" :bgimage="require(`@/assets/img/${texts.home.hero.bgimage}`)" />
  <div class="container text-center">
      <a href="#" class="nav-link" @click="switchLang">→ [{{ altLang() }}]</a>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

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

    const altLang = () => {
        const otherLang = lang.value === 'eng' ? 'esp' : 'eng';
        return otherLang
    };

    const switchLang = () => {
        store.dispatch('switchLang',altLang());
        store.dispatch('getTexts',lang.value);
        store.dispatch('getBlogTexts',lang.value);

    }

    return {
      texts,
      altLang,
      switchLang
    }
  }
}
</script>

<style>

</style>
