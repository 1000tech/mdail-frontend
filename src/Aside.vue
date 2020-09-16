<template lang="pug">
    aside
        div
            Logo
            router-link(to="/")
                i.i-bookmark
            button
                i.i-add
        div
            button
                i.i-night
            router-link(to="/account" class="Mt(15px)")
                .user-avatar

</template>

<style lang="stylus">
    aside
        display flex
        flex-direction column
        justify-content space-between
        padding 15px 0
        margin 0 auto
        a, button
            display flex
            align-items center
            justify-content center
            border-radius 50%
            color $white
            width 50px
            height 50px
            font-size 22px
            margin 7px 0
            &:hover, &.active
                background $purple
    .user-avatar
        width 42px
        height 42px
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