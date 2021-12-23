<template>

  <div v-if="!texts" class="spinner">
    <SpinningWheel />
  </div>
  <div v-else>
    <Navigation />
    <UnderDevelopment />
    <Footer />
  </div>

</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore} from 'vuex';

import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import SpinningWheel from './components/SpinningWheel.vue'
import UnderDevelopment from './components/UnderDevelopment.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    SpinningWheel,
    UnderDevelopment
  },
  setup() {
    const store = useStore();
    const texts = computed(()=> store.state.texts);
    const lang = computed(() => store.state.lang);

    onMounted(()=> {
        if (localStorage.getItem('lang') == null) {
            localStorage.setItem('lang',lang.value)
            store.dispatch('getTexts',lang.value)
        } else {
            let localLang = localStorage.getItem('lang');
            store.dispatch('switchLang',localLang)
            store.dispatch('getTexts',lang.value)
        }
    });

    document.title = 'Pedro SG';

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
