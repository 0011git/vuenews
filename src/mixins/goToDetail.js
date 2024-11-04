export const goToDetailMixin = {
    methods: {
        goToDetail() {
            this.$emit('click', this.news);
        }
    }
}