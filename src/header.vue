<template lang="pug">
    header(role='banner')
        div
            Logo
            a(href="#")
                i.i-bookmark
            a(href="#")
                i.i-add
        div
            a(href="#")
                i.i-night
        // a(href="#")
            i(class='i-search TranslateX(2px)')


</template>

<style lang="stylus">
    header
        grid-area header
        grid-row 1/2
        grid-column 1/2
        padding 15px 0
        margin 0 auto
        display flex
        flex-direction column
        justify-content space-between
        a
            color #fff
            border-radius 50%
            width 54px
            height 54px
            font-size 22px
            margin 5px 0
            display flex
            align-content center
            justify-content center
            &:hover
                background $purple
</style>

<script>
    import Logo from './Logo.vue'
    export default {
        components: {
            Logo
        }
    }
</script>