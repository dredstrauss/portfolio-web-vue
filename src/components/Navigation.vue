<template>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/"><img class="logo" :src="require('../assets/img/pedrosg-logo.svg')" alt="Pedro SG"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarBar">
                <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item" v-for="(route, index) in texts.site.nav" :key="index">
                        <router-link class="nav-link" :to="'/' + index">{{ route }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "Navigation",
    setup() {
        const store = useStore();
        let texts = computed(()=> store.state.texts);

        return {
            texts
        }
    }
};
</script>

<style lang="scss" scoped>
    .logo {
        height: 2rem;
    }
    .navbar {
        height: 5rem;
    }
</style>
