<template lang="pug">
    main
        Header
        router-view
</template>

<style lang="stylus">
    main
        position relative
        min-height 100%
        max-width 1500px
        margin auto
        padding 0 0 env(safe-area-inset-bottom)
        display grid
        justify-content flex-start
        grid-template-columns 100px 1fr
        grid-template-rows 1fr auto
        grid-template-areas "header aricle"
        background $blue
</style>

<script>
    import Header from './Header.vue'
    export default {
        components: {
            Header
        },
        mounted() {
            console.log('App mounted');
        },
    }
</script>