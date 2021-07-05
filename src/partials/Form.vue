<script>
import Tags from '@/Tags'
import Textarea from '@/Textarea'

export default {
    components: {
        Tags,
        Textarea,
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
                v-model.trim='item.title'
                maxlength='255'
                required=''
            )
        div(class='My(15px)')
            input.field(
                type='text'
                placeholder='URL'
                v-model.trim='item.url'
                maxlength='255'
                minlength='4'
                required=''
            )
        div(class='My(15px)')
            Tags(:list='item.tags')
        div(class='My(15px)')
            Textarea.field(
                class='Mih(100px) Py(12px) Ov(h)'
                placeholder='Description'
                v-model.trim='item.desc'
            )
        div(class='D(f) Ai(c) Jc(fe)')
            button.btn(type='submit')
                | Save
</template>