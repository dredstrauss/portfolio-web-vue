<template>
  <div class="main-section">
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-6 col-md-4" v-for="(post, index) in posts" :key="index">
            <hr class="mt-3">
            <h4>{{ post.title }}</h4>
            <p class="text-muted mb-3">{{ post.summary }}</p>
            <router-link class="nav-link" :to="'/blog/' + index">{{ texts.blog.article.readmore }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: "LatestPosts",
  props: {
    posts: {
      type: Object,
      default: {},
    },
  },
  setup() {
      const store = useStore();
      const texts = store.state.texts;

      return {
          texts
      }
  }
};
</script>

<style lang="scss" scoped>
.main-section {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.25);
}
</style>
