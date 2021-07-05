<script>
import { regExp } from '../js/utils'

export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            tag: ''
        }
    },
    methods: {
        remove(index) {
            this.list.splice(index, 1)
        },
        removeTag(index) {
            if (this.tag === '') {
                this.list.splice(index, 1)
            }
        },
        submit(e) {
            e.preventDefault()

            this.tag = this.tag.replace(regExp.tag, '')
            this.tag = this.tag.replace(regExp.emoji, '')
            if (!this.tag) return

            const tags = this.tag.split(/[ ,]+/)

            tags.some(el => {
                if (el.length > 0 && !this.list.includes(el)) {
                    this.list.push(el)
                }
            })

            this.tag = ''
            this.$emit('change', this.list)
        }
    }
}
</script>

<template lang='pug'>
.field(class='D(f) Ai(c) Flw(w)')
    button.tag(
        type='button'
        v-for='(item, index) in list'
        :key='index'
        @click='remove(index)'
    )
        i.tag-close
        span.tag-text {{ item }}
    input.tag-input(
        class='H(28px) W(a) Flxg(1) My(4px)'
        type='text'
        placeholder='Tags'
        v-model.trim='tag'
        @keydown.delete='removeTag(list.length-1)'
        @keydown.space='submit'
        @keydown.enter='submit'
        @blur='submit'
    )
</template>

<style lang='stylus'>
.tag
    height 28px
    line-height 20px
    padding 2px 8px 4px
    margin 4px 8px 4px 0
    background #ecf5ff
    border-radius 5px
    border 1px solid #d9ecff
    color #409eff
    white-space nowrap
    &:hover
        background #d9ecff

.tag-close
    background-color #c0c4cc
    border-radius 50%
    color #909399

.tag-text
    ellipsis()
    max-width 200px
    color #909399
</style>