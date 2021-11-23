<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<template lang='pug'>
li
    span {{ item.title }}
    button(@click="$emit('remove', item.id)")
        | X
    router-link(:to='`/edit/${item.id}`')
        | {{ $t('btn.edit') }}
</template>

<style lang='stylus'>
ul
    padding 0 12px
li
    display flex
    align-items center
    height 50px
</style>