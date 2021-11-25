<template>
  <div class="main-section">
    <section class="container py-5">
      <div class="row justify-content-center">
        <div class="col-11 col-sm-6 col-md-4" v-for="(post, index) in posts" :key="index">
          <h4>{{ post.title }}</h4>
          <p class="fw-bold">{{ post.summary }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LatestPosts",
  props: {
    posts: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.25);
}
</style>
