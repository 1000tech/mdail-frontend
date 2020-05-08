<template lang="pug">
    li
        span {{ todo.text }}
        button(@click="$emit('remove', todo.id)")
            | X
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
    }
</script>