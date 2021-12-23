<template lang="html">
    <div class="container-fluid">
        <div class="p-3 my-5 text-center text-muted fst-italic container boxed">
            <p class="m-0 p-0">{{ texts.home.notes.underconstruction }}</p>
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
