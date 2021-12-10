<template>
    <section class="py-5" :style="cssProps" >
        <div class="row container mt-5" >
            <div class="col-10 col-lg-6 ms-5">
                <h1>{{ title }}</h1>
                <h4>{{ subtitle }}</h4>
                <br>
                <p>{{ details }}</p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Hero',
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        },
        bgimage: {
            type: String,
            default: ''
        },
        details: {
            type: String,
            default: ''
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
        min-height: 60vh;
        background-attachment: fixed;
    }
</style>
