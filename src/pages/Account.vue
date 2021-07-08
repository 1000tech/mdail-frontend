<script>
import Title from '@/Title'
import { listLocales, loadLocale } from '../js/i18n'

export default {
    components: {
        Title
    },
    data() {
        return {
            listLocales,
        }
    },
    methods: {
        changeLang(lang) {
            loadLocale(lang)
        }
    },
}
</script>

<template lang='pug'>
section
    Title
    p {{ $i18n.locale }}
    button(v-for='(lang, index) in listLocales' :key='index' @click='changeLang(lang)')
        | {{ lang }}
</template>

<style lang='stylus'>

</style>