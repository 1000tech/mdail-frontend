<script>
import Logo from '@/Logo'
export default {
    components: {
        Logo
    },
    methods: {
        // Wave effect
        wave(e) {
            const
                size = Math.max(e.target.offsetWidth, e.target.offsetHeight),
                x = e.offsetX - size / 2,
                y = e.offsetY - size / 2,
                wave = document.createElement('span')

            // Create a new wave
            wave.className = 'wave'
            wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
            e.target.appendChild(wave)

            // Remove element after animation ends
            setTimeout(() => wave.remove(), 500)
        }
    }
}
</script>

<template lang='pug'>
header
    nav
        //Logo
        router-link(to='/' @click='wave')
            i.i-bookmark
            span Bookmarks
        router-link(to='/add' @click='wave')
            i.i-add
            span Add Bookmark
    nav
        button(@click='wave')
            i.i-night
            span Dark Mode
        router-link(to='/account' @click='wave').user
            .user-avatar
            span Account
</template>

<style lang='stylus'>
header
    display flex
    justify-content space-between
    position sticky
    top 0
    padding 15px

    @media (max-width $lg)
        > nav
            display flex
            align-items center

    @media (min-width $lg)
        flex-direction column

    a, button
        display flex
        align-items center
        color $white
        width 50px
        height 50px
        font-size 22px
        border-radius 50%
        letter-spacing 1px
        user-select none
        position relative
        overflow hidden
        &:hover, &.active
            background $blue-hover
        @media (max-width $lg)
            justify-content center
            span
                display none
        @media (min-width $lg)
            width 100%
            border-radius 7px
            font 700 18px/40px 'R'
            padding 0 15px
            margin 12px 0
            span
                margin 0 0 0 10px

.user
    @media (min-width $lg)
        padding 0 6px

.user-avatar
    width 40px
    height 40px
    border-radius 50%
    background $grey

.wave
    background rgba(255,255,255,.1)
    border-radius 50%
    transform scale(0)
    animation wave .5s linear
    pointer-events none
    position absolute

@keyframes wave {
    100% {
        transform scale(2)
        opacity 0
    }
}
</style>