<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">PedroSG</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarBar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarBar">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#" @click="switchLang" class="nav-link">[ {{ altLang() }} ]</a>
                    </li>
                    <li class="nav-item" v-for="route in routes" :key="route.name">
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
import { routes } from '../router';

export default {
  name: "Navigation",
  setup() {
      const store = useStore();
      let lang = computed(() => store.state.lang);
      
      const altLang = () => {
          const otherLang = lang.value === 'eng' ? 'esp' : 'eng';
          return otherLang
      };

      const switchLang = () => {
        store.dispatch('switchLang',altLang());
        store.dispatch('getTexts',lang.value);
        store.dispatch('getBlogTexts',lang.value);
      }

    return {
        routes,
        switchLang,
        altLang
    }
  }
};
</script>

<style></style>
