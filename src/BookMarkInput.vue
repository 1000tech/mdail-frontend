<template lang="pug">
    input.add-bookmark(
        type='text'
        :value='value'
        v-on='listeners'
    )
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: '',
            }
        },
        computed: {
            listeners () {
                return {
                    // Pass all component listeners directly to input
                    ...this.$listeners,
                    // Override input listener to work with v-model
                    input: event => this.$emit('input', event.target.value)
                }
            }
        }
    }
</script>

<style lang="stylus">
    .add-bookmark
        margin 16px 0
        padding 8px 10px
        transition border-color $time
        border 1px solid $grey
        background $grey
        border-radius 4px
        &:hover, &:focus
            border-color $night-grey
</style>
