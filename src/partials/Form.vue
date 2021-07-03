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
    data() {
        return{
            list: ['tag1','tag2']
        }
    },
    methods: {
        postItem() {
            let uri

            if (this.$route.params.id) { // is existing item
                uri = `${APP_API_URL}/${this.$route.params.id}`
                return this.put(uri, this.item).then(() =>
                    this.$router.push({ path: '/' })
                )
            }

            uri = APP_API_URL
            this.post(uri, this.item).then(() =>
                this.$router.push({ path: '/' })
            )
        }
    }
}
</script>

<template lang='pug'>
div
    .p-2
        Tags(:list="list")
    form.card(@submit.prevent='postItem')
        .p-2
            label Title:
            input.field(type='text' v-model='item.title' minlength='1' maxlength='255' required='')
        .p-2
            label URL:
            input.field(type='text' v-model='item.url' minlength='4' maxlength='255' required='')
        div(class='D(f) Ai(c) Jc(fe)')
            button.btn(type='submit')
                | Save
</template>