<template lang="html">
    <Hero :bgimage="require(`@/assets/img/${texts.blog.hero.bgimage || texts.home.hero.bgimage}`)" />
    <div class="row justify-content-center container-fluid">

        <div v-if="article" class="container col-12 col-sm-10 col-md-6">
            <h1 class="mt-5">{{ article.title }}</h1>
            <p class="text-muted fw-bold">{{ article.author }} ({{ article.date }})</p>
            <hr>
            <p class="mt-3 text-muted">{{ article.summary }}</p>
            <hr class="text-muted">
            <div v-html="parsedBody"></div>
            <hr class="mt-5 text-muted">
        </div>

        <div v-else>
            <hr class="container mt-5">
            <h3 class="my-5 container col-12 col-sm-10 col-md-6 text-danger text-center">{{ texts.blog.article.notfound }}</h3>
            <hr class="container mt-5">
        </div>

        <router-link class="nav-link text-center" :to="{ name: 'Blog'}">{{ texts.site.generic.goback[0] }}</router-link>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked';

import Hero from '../../components/Hero.vue'

export default {
    name: 'Article',
    components: {
        Hero
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const texts = computed(()=>store.state.texts);

        let article = ref({});

        let slug = '...';
        let articles = '...';
        let parsedBody = ref('');

        store.dispatch('getBlogTexts',store.state.lang).then(() => {
            slug = route.params.slug;
            articles = computed(()=>store.state.blogTexts);
            let exists = `${slug}` in articles.value;
            if (exists) {
                article.value = articles.value[slug];
                let date = new Date(article.value.created);
                article.value.date = `${date.getMonth()+1} - ${date.getFullYear()}`;
                parsedBody.value = marked(article.value.body);
            } else {
                article.value = false
            }
        })

        return {
            texts,
            article,
            parsedBody
        }
    }
}

</script>

<style lang="css" scoped>
</style>
