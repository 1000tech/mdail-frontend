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
        position fixed
        display flex
        align-items center
        justify-content center

    .modal-backdrop
        extend()
        z-index 2
        background $shadow
        backdrop-filter blur(4px)

    .modal-content
        position relative
        z-index 3
        background #fff
        box-shadow 0 2px 16px 0 $shadow
        padding 32px
        overflow-x auto
        display flex
        flex-direction column
</style>

<script>

</script>