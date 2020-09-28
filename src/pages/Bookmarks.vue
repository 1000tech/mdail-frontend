<template lang='pug'>
    article
        section
            h1
                i.i-bookmark
                span Bookmarks
            BookMarkInput(
                v-model='newTodoText'
                placeholder='Add new Bookmark'
                @keydown.enter='addTodo'
            )
            ul(v-if='todos.length')
                BookMarkList(
                    v-for='todo in todos'
                    :key='todo.id' :todo='todo'
                    @remove='showDeleteModal(todo.id)'
                )
            p(v-else='')
                | Add your first Bookmark
            transition(name="modal")
                ModalDelete(
                    :id="deleteItemId"
                    v-if="isModalDeleteVisible"
                    @close="isModalDeleteVisible = false"
                    @confirm="removeTodo")
</template>

<style lang='stylus'>
    article
        background $white
        padding 20px 25px
        border-radius 10px 10px 0 0
        @media (min-width $lg)
            padding 40px 60px 60px
            min-height 100vh
            overflow auto
            border-radius 10px 0 0 10px
        h1
            display flex
            align-content center
            font 600 34px/40px 'R'
            i
                font-size 28px
                margin 0 15px 0 0
    section
        max-width $lg
        margin auto
</style>

<script>
    import BookMarkInput from '@/BookmarkInput'
    import BookMarkList from '@/BookmarkList'
    import ModalDelete from '@/ModalBookmarkDelete'

    let nextTodoId = 1

    export default {
        components: {
            BookMarkInput,
            BookMarkList,
            ModalDelete
        },
        data () {
            return {
                isModalDeleteVisible: false,
                deleteItemId: null,

                newTodoText: '',
                todos: [
                    {
                        id: nextTodoId++,
                        text: 'Bookmark 1'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Bookmark 2'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Bookmark 3'
                    }
                ]
            }
        },
        methods: {
            // Modal
            showDeleteModal(id) {
                this.deleteItemId = id;
                this.isModalDeleteVisible = true;
            },

            // List
            addTodo() {
                const trimmedText = this.newTodoText.trim()
                if (trimmedText) {
                    this.todos.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    this.newTodoText = ''
                }
            },
            removeTodo(idToRemove) {
                this.todos = this.todos.filter(todo => todo.id !== idToRemove)
                this.isModalDeleteVisible = false
            }
        }
    }
</script>