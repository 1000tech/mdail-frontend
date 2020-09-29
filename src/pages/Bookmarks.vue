<template lang='pug'>
    article
        section
            h1
                i.i-bookmark
                span Bookmarks

            BookmarkInput(
                v-model='newItemText'
                placeholder='Add new Bookmark'
                @keydown.enter='addItem'
            )

            ul(v-if='items.length')
                BookmarkList(
                    v-for='item in items'
                    :item='item' :key='item.id'
                    @remove='showDeleteModal(item.id)'
                )

            p(v-else='')
                | Add your first Bookmark

        transition(name="modal")
            Modal(
                v-if="isModalDeleteVisible"
                @close="isModalDeleteVisible = false")

                h2 Delete Bookmark
                p Are you sure you want to delete this Bookmark?

                div(class="D(f) Ai(c) Jc(fe)")
                    button(
                        @click="isModalDeleteVisible = false")
                        | Cancel
                    button(
                        @click="removeItem(deleteItemId)")
                        | Delete
</template>

<style lang='stylus'>
    article
        background $white
        padding 25px 28px
        border-radius 10px 10px 0 0
        @media (min-width $lg)
            padding 40px 60px 60px
            min-height 100vh
            overflow auto
            border-radius 10px 0 0 10px
    section
        max-width $lg
        margin auto
</style>

<script>
    import BookmarkInput from '@/BookmarkInput'
    import BookmarkList from '@/BookmarkList'
    import Modal from '@/Modal'

    let nextItemId = 1

    export default {

        components: {
            BookmarkInput,
            BookmarkList,
            Modal
        },
        data () {
            return {
                isModalDeleteVisible: false,
                deleteItemId: null,

                newItemText: '',
                items: [
                    {
                        id: nextItemId++,
                        text: 'Bookmark 1'
                    },
                    {
                        id: nextItemId++,
                        text: 'Bookmark 2'
                    },
                    {
                        id: nextItemId++,
                        text: 'Bookmark 3'
                    }
                ]
            }
        },
        methods: {
            // Modal
            showDeleteModal(id) {
                this.deleteItemId = id
                this.isModalDeleteVisible = true
            },

            // Add Item
            addItem() {
                const trimmedText = this.newItemText.trim()
                if (trimmedText) {
                    this.items.push({
                        id: nextItemId++,
                        text: trimmedText
                    })
                    this.newItemText = ''
                }
            },

            // Remove Item
            removeItem(idToRemove) {
                this.items = this.items.filter(item => item.id !== idToRemove)
                this.isModalDeleteVisible = false
            }
        }
    }
</script>