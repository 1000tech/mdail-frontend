<script>
import Tags from '@/Tags'

export default {
    components: {
        Tags,
    },
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
                return this.put(uri, this.item)
                    .then(() => this.$router.push({ path: '/' }))
            }

            uri = APP_API_URL
            this.post(uri, this.item)
                .then(() => this.$router.push({ path: '/' }))
        }
    }
}
</script>

<template lang='pug'>
div
    form.card(@submit.prevent='postItem')
        div(class='My(15px)')
            input.field(
                type='text'
                placeholder='Title'
                v-model='item.title'
                maxlength='255'
                required=''
            )
        div(class='My(15px)')
            input.field(
                type='text'
                placeholder='URL'
                v-model='item.url'
                maxlength='255'
                minlength='4'
                required=''
            )
        div(class='My(15px)')
            Tags(:list='item.tags')
        div(class='My(15px)')
            textarea.field(
                class='Mih(100px) Py(15px)'
                placeholder='Description'
                v-model='item.desc'
                maxlength='255'
            )
        div(class='D(f) Ai(c) Jc(fe)')
            button.btn(type='submit')
                | Save
</template>