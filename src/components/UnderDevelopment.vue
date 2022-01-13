<template lang="html">
    <div class="container-fluid">
        <div class="p-3 my-5 text-center text-muted fst-italic container boxed">
            <p v-for="(element, index) in texts.home.notes.underconstruction" :key="index" class="m-0 p-0">{{ element }}</p>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: "UnderDevelopment",
    setup() {
        const store = useStore();
        const texts = computed(()=> store.state.texts);

        return {
          texts
        }
    }
}
</script>

<style lang="scss" scoped>
    .boxed {
        border: dotted 1px;
    }
</style>
