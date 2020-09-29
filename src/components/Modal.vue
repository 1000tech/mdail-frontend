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
        max-width 450px
        margin 0 25px
        padding 32px
        border-radius 5px
        background #fff
        box-shadow 0 2px 16px 0 $shadow
</style>

<script>

</script>