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
        router-view(v-slot='{ Component }')
            component(:is='Component')
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
</style>