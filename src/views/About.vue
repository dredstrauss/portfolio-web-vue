<template>
  <Hero :title="texts.about.hero.title" :subtitle="texts.about.hero.subtitle" :bgimage="require(`@/assets/img/${texts.about.hero.bgimage || texts.home.hero.bgimage}`)" />
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Hero from '../components/Hero.vue'

export default {
  name: 'About',
  components: {
    Hero
  },
  setup() {
    const store = useStore();
    let texts = computed(()=>store.state.texts);

    return {
      texts
    }
  }
}
</script>

<style>

</style>
