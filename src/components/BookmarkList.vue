<template lang="pug">
    li
        span {{ item.name }}
        button(@click="$emit('remove', item.id)")
            | X
</template>

<style lang="stylus">
    li
        display flex
        align-items center
        height 50px
</style>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    }
</script>