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
        submit() {
            this.tag = this.tag.replace(regExp.tag, '')
            this.tag = this.tag.replace(regExp.emoji, '')
            if (!this.tag) return

            const tags = this.tag.split(/[ ,]+/)

            tags.some(el => {
                if (!this.list.includes(el)) {
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
.field
    div(class='D(f) Ai(c)')
        button.tag(v-for='(item, index) in list' :key='index' @click='remove(index)')
            i.tag-close
            span.tag-text {{ item }}
        input.tag-input(
            type='text'
            v-model.trim='tag'
            @keydown.delete='removeTag(list.length-1)'
            @keydown.space='submit'
        )
</template>

<style lang='stylus'>
.tag
    background #ecf5ff
    border-radius 5px
    border 1px solid #d9ecff
    padding 1px 8px 3px
    margin 0 6px 0 0
    color #409eff
    white-space nowrap

.tag-close
    background-color #c0c4cc
    border-radius 50%
    color #909399

.tag-text
    color #909399

.tag-input
    height 28px
</style>