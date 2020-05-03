<template lang="pug">
    article
        h1
            i.i-select
            span Закладки
        BookMarkInput(
            v-model='newTodoText'
            placeholder='New todo'
            @keydown.enter='addTodo'
        )
        ul(v-if='todos.length')
            BookMarkList(
                v-for='todo in todos'
                :key='todo.id' :todo='todo'
                @remove='removeTodo'
            )
        p(v-else='')
            | У тебя нет закладок, еблан
</template>

<style lang="stylus">
    article
        grid-area article
        grid-row 1/2
        grid-column 2/2
</style>

<script>
    import BookMarkInput from './BookMarkInput.vue'
    import BookMarkList from './BookMarkList.vue'

    let nextTodoId = 1

    export default {
        components: {
            BookMarkInput, BookMarkList
        },
        data () {
            return {
                newTodoText: '',
                todos: [
                    {
                        id: nextTodoId++,
                        text: 'Закладка 1'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Закладка 2'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Закладка 3'
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