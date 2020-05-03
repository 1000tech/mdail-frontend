<template lang="pug">
    main
        Header
        Article
</template>

<style lang="stylus">

</style>

<script>
    import Header from './header.vue'
    import Article from './article.vue'
    export default {
        components: {
            Header,
            Article
        },
        mounted() {
            console.log('App mounted');
        },
    }
</script>