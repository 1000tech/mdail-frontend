<template lang="pug">
    article
        h1
            i.i-select
            span Hello {{ test }}
</template>

<style lang="stylus">
    article
        grid-area article
        grid-row 1/2
        grid-column 2/2
</style>

<script>
    export default {
        data() {
            return {
                test: 'Хуй!'
            }
        }
    }
</script>