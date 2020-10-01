<template lang="pug">
    main
        Header
        article
            transition
                router-view
</template>

<style lang="stylus">
    main
        display grid
        grid-template-rows 70px 1fr
        background $blue
        min-height 100%
        @media (min-width $lg)
            grid-template-rows 1fr
            grid-template-columns 270px 1fr

    article
        background $white
        padding 0 28px 25px
        border-radius 10px 10px 0 0
        @media (min-width $lg)
            padding 0 60px 60px
            min-height 100%
            height 100vh
            overflow auto
            border-radius 10px 0 0 10px
</style>

<script>
    import Header from '@/Header'
    export default {
        components: {
            Header
        },
        mounted() {
            console.log('App mounted');
        },
    }
</script>