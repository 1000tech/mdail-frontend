<template lang="pug">
    .modal
        .modal-backdrop(@click="$emit('close')")
        .modal-content
            slot


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