<template lang="pug">
    .modal
        .modal-backdrop(@click="$emit('close')")
        .modal-content
            button(
                type="button" @click="$emit('confirm', id)")
                | Удалить на хуй

</template>

<style lang="stylus">

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
    };
</script>