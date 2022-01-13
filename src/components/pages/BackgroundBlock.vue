<template lang="html">
    <section class="py-5 container-fluid" :style="cssProps">

        <div class="row mx-5">

            <div class="col-12 col-md-4 p-5 columnaTitular" :class="order[0]">
                <h2 v-for="(e,i) in title" :key="i">{{ e }}</h2>
                <p v-for="(e,i) in shortDesc" :key="i">{{ e }}</p>
            </div>

            <div class="col-12 col-md-8 p-5" :class="order[1]">
                <div v-for="(e,i) in parsedItems" :key="i">
                    <div v-html="e"></div>
                </div>
            </div>

        </div>

    </section>
</template>

<script>
import { marked } from 'marked';

export default {
    name: 'BackgroundBlock',
    props: {
        title: {
            type: Array,
            default: []
        },
        shortDesc: {
            type: Array,
            default: []
        },
        bItems: {
            type: Array,
            default: []
        },
        bgImage: {
            type: String,
            default: ''
        },
        inverted: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const items = props.bItems;
        let parsedItems = [];
        items.forEach((item) => {
            parsedItems.push(marked(item))
        });

        const bgImage = props.bgImage;
        const cssProps = { '--background-block': `url(${bgImage})` };

        const oddPosition = (props.inverted + 1) % 2;
        const order = oddPosition ? ['order-1','order-2'] : ['order-1 order-md-2','order-2 order-md-1'];

        return {
            cssProps,
            bgImage,
            parsedItems,
            order
        }
    }
}

</script>

<style lang="scss" scoped>

    @import '../../assets/custom.scss';

    p {
        margin: 0;
    }

    section {
        border-bottom: 1px solid;
        border-color: rgba(200,200,200,1);
        background-color: black;
        background: linear-gradient(0deg,rgba(0,0,0,0.75), rgba(0,0,0,1)), var(--background-block);
        background-size: cover;
        background-position: right;
    }

    .columnaTitular {
        background: black;
    }

</style>
