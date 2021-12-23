<template>
  <Hero :title="texts.contact.hero.title" :subtitle="texts.contact.hero.subtitle" :details="texts.contact.hero.details" :bgimage="require(`@/assets/img/${texts.contact.hero.bgimage || texts.home.hero.bgimage}`)" />

  <div class="container-fluid">

      <div class="row justify-content-center personalSection">
          <div class="text-center mt-5 mb-3">
              <h2>{{ texts.contact.personal.title }}</h2>
          </div>
          <div v-for="(acc, index) in personalAccounts" :key="index" class="col-12 col-sm-6 col-md-4 mb-5">
              <SocialBlock :title="texts.contact[acc].title" :link="texts.contact[acc].link" :logo="texts.contact[acc].logo"/>
          </div>
      </div>

      <div class="row justify-content-center socialSection">
          <div class="text-center mt-5 mb-3">
              <h2>{{ texts.contact.social.title }}</h2>
          </div>
          <div v-for="(acc, index) in socialAccounts" :key="index" class="col-12 col-sm-6 col-md-4 mb-5">
              <SocialBlock :title="texts.contact[acc].title" :link="texts.contact[acc].link" :logo="texts.contact[acc].logo"/>
          </div>
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
        const personalAccounts = ['email','telegram','matrix'];

        return {
            texts,
            socialAccounts,
            personalAccounts
        }
    }
}
</script>

<style lang="scss" scoped>
    .personalSection {
        border-bottom: 1px solid gray;
        background-color: rgb(15,15,15);
    }
    .socialSection {
        border-bottom: 1px solid gray;
    }
</style>
