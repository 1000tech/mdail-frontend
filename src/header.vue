<template lang="pug">
    header(role='banner')
        Logo
        a(href="#")
            i.i-bookmark
        a(href="#")
            i.i-search
</template>

<style lang="stylus">
    header
        grid-area header
        grid-row 1/2
        grid-column 1/2
        padding 10px 25px
        a
            color #fff
            border-radius 50%
            width 50px
            height 50px
            font-size 20px
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