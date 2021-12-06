<template>
    <div class="sblock container text-center p-3">
        <img class="m-2" :src="require(`../assets/img/social/${logo}`)" :alt="title" height="100">
        <br>
        <a class="m-2 nav-link" :href="link">{{ title }}</a>
    </div>
</template>

<script>

export default {
    name: 'SocialBlock',
    props: {
        title: {
            type: String,
            default: '...'
        },
        link: {
            type: String,
            default: '#'
        },
        logo: {
            type: String,
            default: 'notfound.svg'
        }
    },
    setup() {

    }
}
</script>

<style lang="scss" scoped>
    .sblock {
        border-bottom: 1px solid gray;
    }
</style>
