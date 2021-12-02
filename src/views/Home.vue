<template>
  <Hero :title="texts.home.hero.title" :subtitle="texts.home.hero.subtitle" :bgimage="require(`@/assets/img/${texts.home.hero.bgimage}`)" />
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import Hero from '../components/Hero.vue'
import { useRoute } from 'vue-router'
import { router } from '../router'

export default {
  name: 'Home',
  components: {
    Hero
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const texts = computed(()=> store.state.texts);

    onMounted(() => {

        const checkRoute = (routeToCheck) => {
            let routeExists = false;
            router.getRoutes().forEach((r) => {
                if (r.path === `/${routeToCheck}`) {routeExists = true};
            });
            return routeExists
        };

        let inRoute = route.params.catchAll;

        if (checkRoute(inRoute)) {
            router.push(`/${inRoute}`)
        } else {
            let localLang = localStorage.getItem('lang');
            const otherLang = localLang === 'eng' ? 'esp' : 'eng';
            store.dispatch('switchLang',otherLang);
            store.dispatch('getTexts',otherLang).then(() => {
                store.dispatch('getBlogTexts',otherLang);
            }).then(()=> {
                if (checkRoute(inRoute)) {
                    router.push(`/${inRoute}`)
                } else {
                    router.push(`/`)
                }
            })
        }
    });

    return {
      texts
    }
  }
}
</script>

<style>

</style>
