<template lang="pug">
    main
        Header
        Article
</template>

<style lang="stylus">
    main
        position relative
        min-height 100%
        padding 0 0 env(safe-area-inset-bottom)
        display grid
        justify-content flex-start
        grid-template-columns 100px 1fr
        grid-template-rows 1fr auto
        grid-template-areas "header aricle"
        background $blue
</style>

<script>
    import Header from './Header.vue'
    import Article from './Article.vue'
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