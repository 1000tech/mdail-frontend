<template lang="pug">
    .modal
        .modal-backdrop(@click="$emit('close')")
        .modal-content
            button(
                type="button" @click="$emit('confirm', id)")
                | Удалить на хуй

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
        background rgba(0, 0, 0, 0.3)
    .modal-content
        position relative
        z-index 3
        background #fff
        box-shadow 2px 2px 20px 1px
        padding 32px
        overflow-x auto
        display flex
        flex-direction column
</style>

<script>
    export default {
        name: 'modal',
        props: {
            id: {
                type: Number,
                default: null,
            }
        },
        methods: {
            // close() {
            //     this.$emit('close');
            // },
            // confirm() {
            //     this.$emit('confirm', this.id);
            // }
        },
    };
</script>