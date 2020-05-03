<template lang="pug">
    header(role='banner')
        Logo
</template>

<style lang="stylus">
    header
        grid-area header
        grid-row 1/2
        grid-column 1/2
        padding 10px 25px
        background $blue
</style>

<script>
    import Logo from './logo.vue'
    export default {
        components: {
            Logo
        }
    }
</script>