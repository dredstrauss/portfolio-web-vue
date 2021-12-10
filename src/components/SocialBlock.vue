<template>
    <div class="text-center p-4">
        <img class="m-2" :src="require(`../assets/img/social/${logo}`)" :alt="title" height="50">
        <br>
        <a class="nav-link" :href="link" target="_blank">{{ title }}</a>
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
    @import "../assets/custom.scss";
    a {
        word-wrap: break-word;
    }
</style>
