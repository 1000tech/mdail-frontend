<script>
import Title from '@/Title'
import Form from '@/Form'

export default {
    components: {
        Title,
        Form,
    },
    data() {
        return {
            item: {}
        }
    },
    created() {
        this.getItem()
    },
    methods: {
        getItem() {
            const uri = `${API_BOOKMARK}/${this.$route.params.id}`
            this.get(uri).then(res => this.item = res.item)
        },
    }
}
</script>

<template lang='pug'>
section
    Title
    Form(:item='item')
</template>