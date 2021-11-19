<template>
  <Hero :title="texts.projects.hero.title" :subtitle="texts.projects.hero.subtitle" />
  <PreviewItems :items="projectsItems" />
</template>

<script>
import { useStore } from 'vuex';
import Hero from '../components/Hero.vue'
import PreviewItems from '../components/pages/PreviewItems.vue'

export default {
    name: 'Projects',
    components: {
      Hero,
      PreviewItems
    },
    setup() {
      const store = useStore();
      const texts = store.state.texts;

      const projectsArray = () => {
        let arr = [];
        Object.keys(texts.projects_list).forEach((project) => {
          const proj = texts.projects_list[project];
          arr.push(proj);
        })
        return arr
      };
      const projectsItems = projectsArray();

      return {
        texts,
        projectsItems
      }
    }
}
</script>

<style>

</style>