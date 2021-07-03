<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        postItem() {
            let uri

            if (this.$route.params.id) { // is existing item
                uri = `${APP_API_URL}/${this.$route.params.id}`
            } else {
                uri = APP_API_URL
            }

            this.post(uri, this.item).then(() =>
                this.$router.push({ path: '/' })
            )
        }
    }
}
</script>

<template lang='pug'>
form.card(@submit.prevent='postItem')
    //router-link(:to="`/image/${item.id}`")
    .p-2
        label Title:
        input.form-control(type='text' v-model='item.title' minlength='1' maxlength='255' required='')
    .p-2
        label URL:
        input.form-control(type='text' v-model='item.url' minlength='4' maxlength='255' required='')
    .p-2
        input.btn.btn-primary(type='submit' value='Save Item')
</template>