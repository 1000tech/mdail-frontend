<template lang="pug">
    input.add-bookmark(
        type='text'
        :value='value'
        v-on='listeners'
    )
</template>

<style lang="stylus">
    .add-bookmark
        height 50px
        margin 20px 0 0
        padding 8px 10px
        border-radius 4px
        background $grey
        transition background $time
        &:hover, &:focus
            background $dark-grey
</style>

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