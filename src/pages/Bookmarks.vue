<script>
import Title from '@/Title'
import Loading from '@/Loading'
import Error from '@/Error'
import Modal from '@/Modal'
import BookmarkInput from '@/BookmarkInput'
import BookmarkList from '@/BookmarkList'

export default {
    components: {
        Title,
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
            newBookmark: '',
            loading: true,
            errored: false,
            items: [],
        }
    },
    created() {
        this.get(APP_API_URL)
            .then(res => this.items = res.items)
            .catch(error => this.errored = true)
            .finally(() => this.loading = false)
    },
    methods: {
        // Modal
        showDeleteModal(id) {
            this.deleteItemId = id
            this.isModalDeleteVisible = true
        },
        // Add Item
        addItem() {
            let nextItemId
            this.items.push({
                id: nextItemId++,
                title: this.newBookmark
            })
            this.newBookmark = ''
        },
        // Remove Item
        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
            this.isModalDeleteVisible = false
        },
        searchItems() {
            const name = this.name.toLowerCase()
            return this.items.filter(el =>
                el.title.toLowerCase().includes(name)
            )
        }
    },
    computed: {
        filteredList() {
            let title = this.title

            if (this.sortBy && title === '') {
                this.sortBy = false
                return this.items.reverse()
            } else {
                return this.items.filter(elem => {
                    if (title === '') {
                        return true
                    }
                    else {
                        return elem.title.toLowerCase().indexOf(title.toLowerCase()) > -1
                    }
                })
            }
        }
    }
}
</script>

<template lang='pug'>
section
    Title
        BookmarkInput(
            v-model.trim='newBookmark'
            placeholder='Add new Bookmark'
            @keydown.enter='addItem'
        )

    Loading(v-if='loading')

    ul(v-else-if='items.length')
        BookmarkList(
            v-for='item in items'
            :item='item'
            :key='item.id'
            @remove='showDeleteModal(item.id)'
        )

    Error(v-else-if='errored')

    p(v-else='')
        | Add your first Bookmark

    transition(name='modal')
        Modal(
            v-if='isModalDeleteVisible'
            @close='isModalDeleteVisible = false'
        )
            template(#text)
                h2 Delete Bookmark
                p Are you sure you want to delete this Bookmark?
            template(#button)
                button(class='btn' @click='removeItem(deleteItemId)')
                    | Delete
</template>

<style lang='stylus'>

</style>