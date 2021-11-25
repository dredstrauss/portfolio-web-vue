<template>
  <Hero :title="title" :subtitle="subtitle" />
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
    const title = computed(()=> store.state.texts.site.main.name);
    const subtitle = computed(() => store.state.texts.site.main.title);

    return {
      title,
      subtitle
    }
  }
}
</script>

<style>

</style>