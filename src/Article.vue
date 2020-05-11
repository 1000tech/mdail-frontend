<template lang="pug">
    article
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

<style lang="stylus">
    article
        grid-area article
        grid-row 1/2
        grid-column 2/2
        background #fff
        padding 25px 32px
        border-radius 8px 0 0 8px
        box-shadow 0 2px 16px 0 $shadow
        h1
            display flex
            align-content center
            font-size 30px
            i
                font-size 28px
                margin 0 15px 0 0
</style>

<script>
    import BookMarkInput from './BookMarkInput.vue'
    import BookMarkList from './BookMarkList.vue'
    import ModalDelete from './ModalBookmarkDelete.vue'

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
                // this.todos = this.todos.filter(todo => {
                //     return todo.id !== idToRemove
                // })
                this.todos = this.todos.filter(todo => todo.id !== idToRemove)
                this.isModalDeleteVisible = false
            }
        }
    }
</script>