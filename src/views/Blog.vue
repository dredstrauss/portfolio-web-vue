<template>

  <Hero :title="texts.blog.hero.title" :subtitle="texts.blog.hero.subtitle" />

</template>

<script>
import { useStore } from 'vuex'

import Hero from '../components/Hero.vue'
import SpinningWheel from '../components/SpinningWheel.vue'

export default {
  name: 'Blog',
  components: {
    Hero,
    SpinningWheel
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