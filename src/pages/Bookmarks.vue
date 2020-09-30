<template lang='pug'>
    article
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

            Error(v-if='errored')

            ul(v-else='')
                li(v-if='loading') Loading...
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

                template(#text)
                    h2 Delete Bookmark
                    p Are you sure you want to delete this Bookmark?

                template(#button)
                    button(
                        @click="removeItem(deleteItemId)")
                        | Delete
</template>

<style lang='stylus'>
    article
        background $white
        padding 0 28px 25px
        border-radius 10px 10px 0 0
        @media (min-width $lg)
            padding 0 60px 60px
            min-height 100%
            height 100vh
            overflow auto
            border-radius 10px 0 0 10px
    section
        max-width $lg
        margin auto
    .title
        position sticky
        top 0
        background $white
        padding 25px 0 0
        @media (min-width $lg)
            padding 40px 0 0
        &:after
            content ''
            position absolute
            z-index 1
            left 0
            right 0
            bottom -15px
            height 15px
            background linear-gradient($white,rgba(255,255,255,.1))
</style>

<script>
    import Error from '@/Error'
    import Modal from '@/Modal'
    import BookmarkInput from '@/BookmarkInput'
    import BookmarkList from '@/BookmarkList'

    let nextItemId = 1

    export default {
        components: {
            Error,
            Modal,
            BookmarkInput,
            BookmarkList,
        },
        data () {
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
                .then(items => {
                    this.items = items
                })
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
            filteredList () {
                let name = this.name

                if (this.sortBy && name==='') {
                    this.sortBy = false
                    return this.items.reverse()
                } else {
                    return this.items.filter(function(elem) {
                        if (name==='') return true
                        else return elem.name.toLowerCase().indexOf(name.toLowerCase()) > -1
                    })
                }
            }
        },
    }
</script>