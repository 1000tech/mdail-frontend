<script>
import Title from '@/Title'
import { listLocales, loadLocale } from '%/i18n'

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
    button(
        v-for='(lang, index) in listLocales' 
        :key='index' 
        @click='changeLang(lang)'
    )
        | {{ lang }}

    div
        button
            icon(name='night')
            span {{ $t('nav.darkMode') }}
</template>

<style lang='stylus'>

</style>