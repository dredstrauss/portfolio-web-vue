<template>
  <Hero :title="texts.about.hero.title" :subtitle="texts.about.hero.subtitle" />
</template>

<script>
import { useStore } from 'vuex'
import Hero from '../components/Hero.vue'

export default {
  name: 'About',
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