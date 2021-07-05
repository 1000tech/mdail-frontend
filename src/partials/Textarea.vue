<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: '',
        }
    },
    watch: {
        modelValue() {
            console.log(`${this.$el.scrollHeight}px`)
            this.$nextTick(() => {
                this.$el.style.height = `${this.$el.scrollHeight}px`
            })
        }
    }
}
</script>

<template lang='pug'>
textarea(
    :value='modelValue'
    @input="$emit('update:modelValue', $event.target.value)"
)
</template>