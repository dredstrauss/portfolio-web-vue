<template>
  <div class="main-section">
      <section class="container py-5">
          <div class="row justify-content-center">
            <div class="col-11 col-sm-6 col-md-4" v-for="(item, index) in items" :key="index" >
                    <hr class="mt-3">
                    <h4>{{ item.name[0] }}</h4>
                    <p v-for="(e, i) in item.shortdesc" :key="i" class="text-muted">{{ e }}</p>
                    <p>
                        <span v-for="(tech,index) in item.techsArr" :key="index" class="mx-1">
                            <img :src="require(`@/assets/img/techs/${tech}.png`)" :alt="tech" width="50">
                        </span>
                    </p>
                    <router-link class="nav-link" :to="'/projects/' + item.url">{{ texts.projects.page.readmore[0] }}</router-link>
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
    setup(props) {
        const store = useStore();
        const texts = store.state.texts;

        return {
            texts
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
