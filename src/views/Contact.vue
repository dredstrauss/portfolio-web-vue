<template>
  <Hero :title="texts.contact.hero.title" :subtitle="texts.contact.hero.subtitle" :bgimage="require(`@/assets/img/${texts.contact.hero.bgimage || texts.home.hero.bgimage}`)" />

  <div class="row justify-content-evenly socialBlock bg-dark">
      <div class="text-center mt-5 mb-3">
          <h2>{{ texts.contact.social.title }}</h2>
      </div>
      <div v-for="(acc, index) in socialAccounts" :key="index" class="col-10 col-sm-5 col-md-3 mb-5">
          <SocialBlock :title="texts.contact[acc].title" :link="texts.contact[acc].link" :logo="texts.contact[acc].logo"/>
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

<style lang="scss" scoped>
    @import "../assets/custom.scss";
    .socialBlock {
        border-bottom: 1px solid gray;
    }
</style>
