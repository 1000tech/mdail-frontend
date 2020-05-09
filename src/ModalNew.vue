<template lang="pug">
    .modal
        .modal-backdrop(@click="close")
        .modal-content
            button(
                type="button")
                | Закрой меня

</template>

<style lang="stylus">

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