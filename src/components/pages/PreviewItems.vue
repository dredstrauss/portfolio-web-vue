<template>
  <div class="main-section">
      <section class="container py-5">
          <div class="row justify-content-center">
            <div class="col-4" v-for="(item, index) in items" :key="index" >
                    <h4>{{ item.name }}</h4>
                    <p>{{ item.shortdesc }}</p>
            </div>
          </div>
      </section>
  </div>
</template>

<script>
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
    }
}
</script>

<style>
</style>
