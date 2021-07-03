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

<template lang='pug'>
input.field(
    class='Mt(15px)'
    type='text'
    :value='modelValue'
    @input="$emit('update:modelValue', $event.target.value)"
)
</template>

<style lang='stylus'>

</style>