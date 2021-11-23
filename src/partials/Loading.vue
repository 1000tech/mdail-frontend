<template lang='pug'>
.load
</template>

<style lang='stylus'>
.load
    extend()
    width 50px
    height 50px
    border-radius 50%
    border 3px solid $night-grey
    border-left-color transparent
    border-right-color transparent
    animation spinner 575ms infinite linear
@keyframes spinner
    to
        transform: rotate(360deg)
</style>