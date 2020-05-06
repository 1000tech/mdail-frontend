<template>
    <li>
        {{ todo.text }}
        <button @click="$emit('remove', todo.id)">
            X
        </button>
<!--        <button v-on:click="onGoClick()">go</button>-->
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        // methods: {
        //     onGoClick: function() {
        //         this.$router.push({ path:'foo' });
        //     }
        // }
    }
</script>