<template>

  <div v-if="!blogTexts" class="spinner">
    <SpinningWheel />
  </div>
  <div v-else>

    <Hero :title="texts.blog.hero.title" :subtitle="texts.blog.hero.subtitle" :bgimage="require(`@/assets/img/${texts.blog.hero.bgimage || texts.home.hero.bgimage}`)" />
    <LatestPosts :posts="blogTexts" />

  </div>

</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import Hero from '../components/Hero.vue'
import SpinningWheel from '../components/SpinningWheel.vue'
import LatestPosts from '../components/pages/LatestPosts.vue'

export default {
  name: 'Blog',
  components: {
    Hero,
    SpinningWheel,
    LatestPosts
  },
  setup() {
    const store = useStore();
    const texts = computed(() => store.state.texts);
    const blogTexts = computed(()=> store.state.blogTexts);

    onMounted(()=> {
      store.dispatch('getBlogTexts',store.state.lang)
    });

    return {
      texts,
      blogTexts
    }
  }
}
</script>

<style>

</style>
