<template lang="pug">
    transition(name="modal-fade")
        .modal
            .modal-backdrop(
                @click="close")
            .modal-content(
                role="dialog")
                button(
                    type="button"
                    aria-label="Close modal"
                    @click="close")
                    | Закрой меня

</template>

<style lang="stylus">
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
        methods: {
            close() {
                this.$emit('close');
            },
        },
    };
</script>