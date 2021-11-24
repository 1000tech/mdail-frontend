<script>
import Header from '@/Header'
import { getLocale } from '%/i18n'

export default {
    components: {
        Header
    },
    created() {
        getLocale()
    },
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
    grid-template-rows 1fr 70px
    grid-template-areas 'article' 'header'
    background $blue
    min-height 100%
    @media (min-width $md)
        grid-template-rows 1fr
        grid-template-columns 270px 1fr
        grid-template-areas 'header article'

article
    grid-area article
    background $white
    padding 0 20px 20px
    border-radius 0 0 10px 10px
    @media (min-width $md)
        padding 0 60px 28px
        min-height 100%
        height 100vh
        overflow auto
        border-radius 10px 0 0 10px

section
    max-width $lg
    margin auto

.field
    font-size 16px
    min-height 46px
    padding 4px 12px
    border-radius 7px
    border 1px solid $light-grey
    border-top-color $grey
    color $dark-grey
    transition box-shadow $time
    &:focus, &:focus-within
        box-shadow 0 1px 1px 0 $shadow

.btn
    font-weight 600
    letter-spacing 1px
    border-radius 7px
    padding 9px 24px 10px
    background $blue
    color $white
    &-empty
        background $grey
        color $blue
    &:hover
        background $blue-hover
        color $white
    &:active
        background $blue-active
</style>