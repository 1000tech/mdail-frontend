<template lang="pug">
div.full-width.center-content
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

<style scoped>
</style>
