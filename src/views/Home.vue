<template>
  <Hero :title="title" :subtitle="subtitle" />
</template>

<script>
import { useStore } from 'vuex';
import Hero from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Hero
  },
  setup() {
    const store = useStore();
    const title = store.state.texts.site.main.name;
    const subtitle = store.state.texts.site.main.title;

    return {
      title,
      subtitle
    }
  }
}
</script>

<style>

</style>