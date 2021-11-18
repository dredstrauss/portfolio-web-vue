<template>

  <div v-if="!texts" class="spinner">
    <SpinningWheel />
  </div>
  <div v-else>
    <Navigation />
    <Footer />
  </div>

</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import SpinningWheel from './components/SpinningWheel.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    SpinningWheel
  },
  setup() {
    const store = useStore();
    const texts = computed(()=> store.state.texts);

    onMounted(()=> {
      store.dispatch('getTexts','eng')
    });

    return {
      texts
    }
  }
}
</script>

<style lang="scss" scoped>
  .spinner {
    padding: 40vh 50vh;
  }
</style>