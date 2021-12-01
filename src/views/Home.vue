<template>
  <Hero :title="texts.home.hero.title" :subtitle="texts.home.hero.subtitle" :bgimage="require(`@/assets/img/${texts.home.hero.bgimage}`)" />
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

    return {
      texts
    }
  }
}
</script>

<style>

</style>
