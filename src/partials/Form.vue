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
                uri = `${API_BOOKMARK}/${this.$route.params.id}`
                return this.put(uri, this.item)
                    .then(() => this.$router.push({ path: '/' }))
            }
            this.post(API_BOOKMARK, this.item)
                .then(() => this.$router.push({ path: '/' }))
        }
    }
}
</script>

<template lang='pug'>
div
    form.card(@submit.prevent='postItem')
        div(class='my-[15px]')
            input.field(
                type='text'
                :placeholder='$t("form.title")'
                v-model.trim='item.title'
                maxlength='255'
                required=''
            )
        div(class='my-[15px]')
            input.field(
                type='text'
                :placeholder='$t("form.url")'
                v-model.trim='item.url'
                maxlength='255'
                minlength='4'
                required=''
            )
        div(class='my-[15px]')
            Tags(:list='item.tags')
        div(class='my-[15px]')
            Textarea(
                class='field min-h-[100px] py-[12px] overflow-hidden'
                :placeholder='$t("form.desc")'
                v-model.trim='item.desc'
            )
        div(class='flex items-center justify-end')
            button.btn(type='submit')
                | {{ $t('btn.save') }}
</template>