<template lang="html">
    <Hero :bgimage="require(`@/assets/img/${texts.projects.hero.bgimage || texts.home.hero.bgimage}`)" />
    <div class="row justify-content-center container-fluid gx-3 gx-sm-5">

        <template v-if="project">

            <div class="col-12 col-sm-5 col-md-4 mt-5 p-4 specsBlock">
                <h3>{{ texts.projects.page.techs[0] }}:</h3>
                <p>{{ project.techs[0] }}</p>
                <br>
                <h3>{{ texts.projects.page.shortdesc[0] }}:</h3>
                <p v-for="(e, i) in project.shortdesc" in :key="i">{{ e }}</p>
                <a class="nav-link text-center p-4 text-primary" :href="project.link[0]" target="_blank">{{ texts.projects.page.link[0] }}</a>
            </div>

            <div class="col-12 col-sm-7 col-md-6 mt-5">
                <h1 v-for="(e,i) in project.name" :key="i">{{ e }}</h1>
                <hr>
                <div v-html="parsedBody"></div>
                <hr class="mt-5 text-muted">
            </div>

        </template>

        <div v-else>
            <hr class="container mt-5">
            <h3 class="my-5 container col-6 text-danger text-center">{{ texts.blog.article.notfound[0] }}</h3>
            <hr class="container mt-5">
        </div>

        <router-link class="nav-link text-center" :to="{ name: 'Projects'}">{{ texts.site.generic.goback[0] }}</router-link>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked';

import Hero from '../../components/Hero.vue'

export default {
    name: 'Project',
    components: {
        Hero
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const texts = computed(()=>store.state.texts);

        const projectName = route.params.project;
        const project = texts.value.projects_list[projectName] || false;

        const parsedBody = marked(project.body.join('\n'));

        return {
            texts,
            project,
            parsedBody
        }
    }
}

</script>

<style lang="css" scoped>
    .specsBlock {
        background-color: rgb(10,10,10);
    }
</style>
