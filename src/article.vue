<template lang="pug">
    article
        h1
            i.i-bookmark
            span Bookmarks
        button(@click="showModal")
            | Окно
        Modal(v-if="isModalVisible" @close="closeModal")
        BookMarkInput(
            v-model='newTodoText'
            placeholder='Add new Bookmark'
            @keydown.enter='addTodo'
        )
        ul(v-if='todos.length')
            BookMarkList(
                v-for='todo in todos'
                :key='todo.id' :todo='todo'
                @remove='removeTodo'
            )
        p(v-else='')
            | You don't have any Bookmarks
</template>

<style lang="stylus">
    article
        grid-area article
        grid-row 1/2
        grid-column 2/2
        background #fff
        padding 25px 32px
        border-radius 8px 0 0 8px
        box-shadow 0 2px 16px 0 rgba(0,0,0,.2)
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
    import Modal from './ModalNew.vue'

    let nextTodoId = 1

    export default {
        components: {
            BookMarkInput, BookMarkList, Modal
        },
        data () {
            return {
                isModalVisible: false,

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
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },

            // List
            addTodo () {
                const trimmedText = this.newTodoText.trim()
                if (trimmedText) {
                    this.todos.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    this.newTodoText = ''
                }
            },
            removeTodo (idToRemove) {
                this.todos = this.todos.filter(todo => {
                    return todo.id !== idToRemove
                })
            }
        }
    }
</script>