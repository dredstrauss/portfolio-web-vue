<template>
  <div class="main-section">
      <section class="container py-5">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-6 col-md-4" v-for="(item, index) in items" :key="index" >
                    <hr class="mt-3">
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.shortdesc }}</p>
                    <router-link class="nav-link" :to="'/projects/' + item.url">{{ texts.projects.page.readmore }}</router-link>
            </div>
          </div>
      </section>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: 'PreviewItems',
    props: {
        items: {
            type: Array,
            default: [{
                name: ' ',
                shortdesc: ''
            }]
        }
    },
    setup() {
        const store = useStore();
        const texts = store.state.texts;

        return {
            texts
        }
    }
}
</script>

<style>
</style>
