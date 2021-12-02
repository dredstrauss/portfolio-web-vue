<template>
  <Hero :title="texts.contact.hero.title" :subtitle="texts.contact.hero.subtitle" :bgimage="require(`@/assets/img/${texts.contact.hero.bgimage || texts.home.hero.bgimage}`)" />

  <div class="row justify-content-evenly">
      <div v-for="(acc, index) in socialAccounts" :key="index" class="col-10 col-sm-5 col-md-3 my-5">
          <SocialBlock :title="texts.contact[acc].title" :link="texts.contact[acc].link" />
      </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import SocialBlock from '../components/SocialBlock.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Contact',
    components: {
        Hero,
        SocialBlock
    },
    setup() {
        const store = useStore();
        const texts = computed(() => store.state.texts).value;

        const socialAccounts = ['linkedin','github','mastodon'];

        return {
            texts,
            socialAccounts
        }
    }
}
</script>

<style>

</style>
