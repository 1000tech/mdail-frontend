<template lang="pug">

    main
        header(role='banner')#header
            include pug/jellyfish
        article
            h1 Hello world! {{ test }}

</template>

<script>
    export default {
        data() {
            return {
                test: 'Пиписька'
            }
        },
        mounted() {
            console.log('App mounted');
        },
    }
</script>