<template lang='pug'>
.title
    h1(v-if='$route.name') 
        | {{ $t($route.name) }}
    slot
</template>

<style lang='stylus'>
.title
    position sticky
    top 0
    background $white
    padding 25px 0 0
    margin 0 0 15px
    &:after
        content ''
        position absolute
        z-index 1
        left 0
        right 0
        bottom -15px
        height 15px
        background linear-gradient($white, rgba(255,255,255,.3))
</style>