<template>
    <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">PedroSG</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarBar">
                <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item" v-for="route in texts.site.menu" :key="route.path">
                        <template v-if="route.name !== 'Home'">
                            <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
                        </template>
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

<style></style>
