<template lang="pug">
    aside
        div
            Logo
            router-link(to="/")
                i.i-bookmark
                span Marks
            button
                i.i-add
                span Add new Mark
        div
            button
                i.i-night
                span Dark Mode
            router-link(to="/account" class="Mt(15px)")
                .user-avatar
                span Account

</template>

<style lang="stylus">
    aside
        display flex
        flex-direction column
        justify-content space-between
        padding 15px 20px
        a, button
            display flex
            align-items center
            color $white
            width 50px
            height 50px
            font-size 22px
            margin 0 0 8px
            border-radius 50%
            letter-spacing 1px
            &:hover, &.active
                background $purple
            @media (max-width $lg)
                justify-content center
                span
                    display none
            @media (min-width $lg)
                width 100%
                border-radius 5px
                font 700 18px/40px 'R'
                padding 0 15px
                span
                    margin 0 0 0 8px
    .user-avatar
        width 40px
        height 40px
        border-radius 50%
        background $grey
</style>

<script>
    import Logo from './Logo.vue'
    export default {
        components: {
            Logo
        },
    }
</script>