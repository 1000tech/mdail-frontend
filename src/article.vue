<template lang="pug">
    article
        h1
            i.i-bookmark
            span Bookmarks
        bookMarkInput(
            v-model='newTodoText'
            placeholder='Add new Bookmark'
            @keydown.enter='addTodo'
        )
        ul(v-if='todos.length')
            bookMarkList(
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
        padding 22px 32px
        border-radius 8px 0 0 8px
        box-shadow 0 2px 16px 0 rgba(0,0,0,.2)
        h1
            display flex
            align-content center
            i
                font-size 28px
                margin 0 15px 0 0
            span
                font-size 30px
</style>

<script>
    import bookMarkInput from './bookMarkInput.vue'
    import bookMarkList from './bookMarkList.vue'

    let nextTodoId = 1

    export default {
        components: {
            bookMarkInput, bookMarkList
        },
        data () {
            return {
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