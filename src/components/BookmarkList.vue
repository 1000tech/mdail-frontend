<template lang="pug">
    li
        span {{ item.text }}
        // Генерируем событие, возможно с передаваемыми данными
        button(@click="$emit('remove', item.id)")
            | X
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    }
</script>