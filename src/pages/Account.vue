<script>
import Title from '@/Title'
import { loadLanguageAsync, languagesAvailable, navigatorCloseLanguage } from '../js/i18n'

export default {
    components: {
        Title
    },
    data () {
        return {
            listLang: languagesAvailable
        }
    },
    methods: {
        changeLang: function (lang) {
            loadLanguageAsync(lang)
        }
    },
    created: function () {
        navigatorCloseLanguage()
    }
}
</script>

<template lang='pug'>
section
    Title
    p {{ $t('item.bookmark') }}
    p {{ $i18n.locale }}
    button(v-for='(lang, index) in listLang' :key='index' @click='changeLang(lang)') {{ lang }}

</template>

<style lang='stylus'>

</style>