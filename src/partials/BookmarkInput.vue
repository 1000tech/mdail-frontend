<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },
}
</script>

<template lang='pug'>
input(
    class='field mt-[15px]'
    type='text'
    :value='modelValue'
    @input="$emit('update:modelValue', $event.target.value)"
)
</template>