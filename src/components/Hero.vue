<template>
  <section class="py-5">
      <div class="container">
        <h1>{{ title }}</h1>
        <h4>{{ subtitle }}</h4>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Hero',
    props: {
      title: {
        type: String,
        default: ' '
      },
      subtitle: {
        type: String,
        default: ' '
      }
    }
}
</script>

<style lang="scss" scoped>
    section {
        background-color: black;
        border-top: 1px solid;
        border-bottom: 2px solid;
        border-color: rgba(250,250,250,0.3);
    }
</style>
