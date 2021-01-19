<template lang='pug'>
    section
        .title
            h1
                i.i-bookmark
                span Bookmarks

            BookmarkInput(
                v-model='newItemText'
                placeholder='Add new Bookmark'
                @keydown.enter='addItem'
            )

        Loading(v-if='loading')

        ul(v-else-if='items.length')
            BookmarkList(
                v-for='item in items'
                :item='item'
                @remove='showDeleteModal(item.id)'
            )

        Error(v-else-if='errored')

        p(v-else='')
            | Add your first Bookmark

        transition(name="modal")
            Modal(
                v-if="isModalDeleteVisible"
                @close="isModalDeleteVisible = false"
            )

                template(#text)
                    h2 Delete Bookmark
                    p Are you sure you want to delete this Bookmark?

                template(#button)
                    button(
                        @click="removeItem(deleteItemId)")
                        | Delete
</template>

<style lang='stylus'>

</style>

<script>
    import Loading from "@/Loading"
    import Error from '@/Error'
    import Modal from '@/Modal'
    import BookmarkInput from '@/BookmarkInput'
    import BookmarkList from '@/BookmarkList'

    let nextItemId = 1

    export default {
        components: {
            Loading,
            Error,
            Modal,
            BookmarkInput,
            BookmarkList,
        },
        data() {
            return {
                isModalDeleteVisible: false,
                deleteItemId: null,
                newItemText: '',
                loading: true,
                errored: false,
                items: [],
            }
        },
        created() {
            fetch('https://cors-anywhere.herokuapp.com/' + 'https://test-frontend-api.herokuapp.com/galaxies')
                .then(res => res.json())
                .then(items =>
                    this.items = items
                )
                .catch(error =>
                    this.errored = true
                )
                .finally(() =>
                    this.loading = false
                )
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
                        name: trimmedText
                    })
                    this.newItemText = ''
                }
            },

            // Remove Item
            removeItem(idToRemove) {
                this.items = this.items.filter(item => item.id !== idToRemove)
                this.isModalDeleteVisible = false
            }
        },
        computed: {
            filteredList() {
                let name = this.name

                if (this.sortBy && name === '') {
                    this.sortBy = false
                    return this.items.reverse()
                } else {
                    return this.items.filter((elem) => {
                        if (name === '') {
                            return true
                        }
                        else {
                            return elem.name.toLowerCase().indexOf(name.toLowerCase()) > -1
                        }
                    })
                }
            }
        }
    }
</script>