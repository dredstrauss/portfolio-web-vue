import marked from 'marked';

export const markedMixin = {
    methods: {
        md(input) {
            return marked(input);
        }
    }
};
