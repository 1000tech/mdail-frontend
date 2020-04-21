<template lang="pug">

    main
        header(role='banner')
            include pug/jellyfish
        article
            h1
                i.select
                span Hello {{ test }}

</template>

<script>
    export default {
        data() {
            return {
                test: 'Хуй!'
            }
        },
        mounted() {
            console.log('App mounted');
        },
    }
</script>