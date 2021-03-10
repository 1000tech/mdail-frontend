<template lang='pug'>
    header
        div
            Logo
            router-link(to='/')
                i.i-bookmark
                span Bookmarks
            button
                i.i-add
                span Add Bookmark
        div
            button
                i.i-night
                span Dark Mode
            router-link(to='/account').user
                .user-avatar
                span Account

</template>

<style lang='stylus'>
    header
        display flex
        justify-content space-between
        position sticky
        top 0
        padding 15px

        @media (max-width $lg)
            > div
                display flex
                align-items center

        @media (min-width $lg)
            flex-direction column

        a, button
            display flex
            align-items center
            color $white
            width 50px
            height 50px
            font-size 22px
            border-radius 50%
            letter-spacing 1px
            &.active
                pointer-events none
            &:hover, &.active
                background $blue-hover
            &:active
                background $blue-active

            @media (max-width $lg)
                justify-content center
                span
                    display none

            @media (min-width $lg)
                width 100%
                border-radius 5px
                font 700 18px/40px 'R'
                margin 0 0 10px
                padding 0 15px
                span
                    margin 0 0 0 10px

    .user
        @media (min-width $lg)
            padding 0 6px

    .user-avatar
        width 40px
        height 40px
        border-radius 50%
        background $grey
</style>

<script>
    import Logo from '@/Logo'
    export default {
        components: {
            Logo
        }
    }
</script>