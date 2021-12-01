<template>
  <Hero :title="texts.contact.hero.title" :subtitle="texts.contact.hero.subtitle" :bgimage="require(`@/assets/img/${texts.contact.hero.bgimage || texts.home.hero.bgimage}`)" />
</template>

<script>
import Hero from '../components/Hero.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Contact',
    components: {
        Hero
    },
    setup() {
        const store = useStore();
        const texts = computed(() => store.state.texts);

        return {
            texts
        }
    }
}
</script>

<style>

</style>
