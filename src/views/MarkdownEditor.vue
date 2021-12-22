<template>
  <Hero title="Editor" subtitle="-> Markdown" :bgimage="require(`@/assets/img/${texts.home.hero.bgimage}`)" />
  <div class="row container my-3">
      <div class="col-12 col-md-6">
          <textarea class="form-control" id="rawText" @change="parseContent()"></textarea>
      </div>
      <div class="col-12 col-md-6">
          <div id="parsedText"></div>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { marked } from 'marked';
import Hero from '../components/Hero.vue'

export default {
  name: 'About',
  components: {
    Hero
  },
  setup() {
    const store = useStore();
    let texts = computed(()=>store.state.texts);

    const parseContent = () => {
        let raw = document.getElementById('rawText').value;
        let output = document.getElementById('parsedText');
        let parsed = marked(raw);
        output.innerHTML = parsed;
    }

    return {
      texts,
      parseContent
    }
  }
}
</script>

<style>

</style>
