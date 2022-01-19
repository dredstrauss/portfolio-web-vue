<template>
  <Hero :title="texts.projects.hero.title" :subtitle="texts.projects.hero.subtitle" :details="texts.projects.hero.details" :bgimage="require(`@/assets/img/${texts.projects.hero.bgimage || texts.home.hero.bgimage}`)" />
  <PreviewItems :items="projectsArray()" />
</template>

<script>
import { computed } from 'vue'
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
      const texts = computed(() => store.state.texts);

      const projectsArray = () => {
        let arr = [];
        Object.keys(texts.value.projects_list).forEach((project) => {
          let proj = texts.value.projects_list[project];
          proj.url = project;
          proj.techsArr = texts.value.projects_list[project].techs[0].split(', ');
          proj.techsArr.forEach((tech,i) => {
              proj.techsArr[i] = tech.toLowerCase();
          });
          arr.push(proj);
        })
        return arr
      };

      return {
        texts,
        projectsArray
      }
    }
}
</script>

<style>

</style>
