<template lang="pug">
    .modal
        .modal-backdrop(@click="$emit('close')")
        .modal-content
            slot
</template>

<style lang="stylus">
    .modal-enter-active, .modal-leave-active
        transition opacity $time

    .modal-enter, .modal-leave-to
        opacity 0
        transition opacity $time

    .modal
        extend()
        display flex
        align-items center
        justify-content center

    .modal-backdrop
        position fixed
        z-index 2
        width 100%
        height 100%
        background $shadow
        backdrop-filter blur(4px)

    .modal-content
        position relative
        z-index 3
        display flex
        flex-direction column
        overflow-x auto
        width 100%
        max-width 500px
        margin 0 25px
        padding 30px 35px 35px
        border-radius 5px
        background $white
        box-shadow 0 2px 16px 0 $shadow
        p
            margin 15px 0 25px
        button
            background $grey
            color $blue
            font-weight 600
            letter-spacing 1px
            border-radius 5px
            padding 10px 24px
            &:last-child
                background $blue
                color $white
                margin 0 0 0 20px
            &:hover
                background $purple
                color $white
</style>

<script>

</script>