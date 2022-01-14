<template>
  <Hero :title="texts.about.hero.title" :subtitle="texts.about.hero.subtitle" :details="texts.about.hero.details" :bgimage="require(`@/assets/img/${texts.about.hero.bgimage[0] || texts.home.hero.bgimage}`)" />

  <template v-for="(background, index) in bloques" :key="index">
      <BackgroundBlock :title="background.title" :shortDesc="background.short_description" :bItems="background.item" :bgImage="require(`@/assets/img/${background.img[0] || texts.home.hero.bgimage[0] }`)" :inverted="index" />
  </template>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import Hero from '../components/Hero.vue'
import BackgroundBlock from '../components/pages/BackgroundBlock.vue'

export default {
  name: 'About',
  components: {
    Hero,
    BackgroundBlock
  },
  setup() {
    const store = useStore();
    let texts = computed(()=>store.state.texts);

    let bloques = [];
    for (const key of Object.getOwnPropertyNames(texts.value.background_block)) {
        bloques.push(texts.value.background_block[key])
    }
    bloques = bloques.reverse()

    return {
      texts,
      bloques
    }
  }
}
</script>

<style>

</style>
