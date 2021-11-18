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
    }
</style>