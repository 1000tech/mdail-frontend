<template lang='pug'>
input.add-bookmark(
    type='text'
    :value='modelValue'
    @input="$emit('update:modelValue', $event.target.value)"
)
</template>

<style lang='stylus'>
    .add-bookmark
        height 50px
        margin 20px 0 0
        padding 8px 12px
        border-radius 7px
        background $grey
        transition background $time
        &:hover, &:focus
            background $dark-grey
</style>

<script>
    export default {
        props: {
            modelValue: {
                type: String,
                default: '',
            }
        }
    }
</script>