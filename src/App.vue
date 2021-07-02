<script>
import Header from '@/Header'
export default {
    components: {
        Header
    }
}
</script>

<template lang='pug'>
main
    Header
    article
        transition
            router-view
</template>

<style lang='stylus'>
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
    padding 0 20px 20px
    border-radius 10px 10px 0 0
    @media (min-width $lg)
        padding 0 60px 28px
        min-height 100%
        height 100vh
        overflow auto
        border-radius 10px 0 0 10px

section
    max-width $lg
    margin auto

.title
    position sticky
    top 0
    background $white
    padding 20px 0 0
    @media (min-width $lg)
        padding 40px 0 0
    &:after
        content ''
        position absolute
        z-index 1
        left 0
        right 0
        bottom -15px
        height 15px
        background linear-gradient($white,rgba(255,255,255,.3))
</style>