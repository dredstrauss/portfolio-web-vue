<template>
  <Hero :title="texts.projects.hero.title" :subtitle="texts.projects.hero.subtitle" />
</template>

<script>
import { useStore } from 'vuex';
import Hero from '../components/Hero.vue'

export default {
    name: 'Projects',
    components: {
      Hero
    },
    setup() {
      const store = useStore();
      const texts = store.state.texts;

      return {
        texts
      }
    }
}
</script>

<style>

</style>