<template>
    <section class="py-5" :style="cssProps" >
        <div class="row container mt-5" >
            <div class="col-11 col-sm-10 col-md-8 col-lg-6 ms-3 ms-lg-5">
                <h1 v-for="(element, index) in title" :key="index" class="serifed">{{ element }}</h1>
                <h4 v-for="(element, index) in subtitle" :key="index" class="serifed">{{ element }}</h4>
                <br>
                <p v-for="(element, index) in details" :key="index">{{ element }}</p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Hero',
    props: {
        title: {
            type: Array,
            default: []
        },
        subtitle: {
            type: Array,
            default: []
        },
        bgimage: {
            type: String,
            default: ''
        },
        details: {
            type: Array,
            default: []
        }
    },
    setup(props) {
        const bgimage = props.bgimage;
        const cssProps = { '--background-hero': `url(${bgimage})` };

        return {
            cssProps,
            bgimage
        }
    }
}
</script>

<style lang="scss" scoped>
    section {
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-color: rgba(200,200,200,1);
        background-color: black;
        background: linear-gradient(0deg,rgba(0,0,0,0.25), rgba(0,0,0,0.75)), var(--background-hero);
        background-size: cover;
        background-position: right;
        background-attachment: fixed;

        h1 {
            font-size: 3em;
            font-weight: 700;
        }
    }
</style>
