export default {
    name: 'app-view',
    data() {
        return {
            url: '//' + this.$route.params.url
        }
    },
    created() {
        console.log(this.$route.params.url);
    }
};
