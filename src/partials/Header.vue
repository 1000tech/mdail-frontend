<script>
import Logo from '@/Logo'

export default {
    components: {
        Logo
    },
    methods: {
        wave(e) {
            const size = Math.max(e.target.offsetWidth, e.target.offsetHeight)
            const x = e.offsetX - size / 2
            const y = e.offsetY - size / 2
            const wave = document.createElement('span')

            wave.className = 'wave'
            wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
            e.target.appendChild(wave)

            setTimeout(() => wave.remove(), 500)
        }
    }
}
</script>

<template lang='pug'>
header
    nav
        Logo
        router-link(to='/' @click='wave')
            icon(name='bookmark')
            span {{ $t('page.home.title') }}
        router-link(to='/add' @click='wave')
            icon(name='add')
            span {{ $t('page.add.title') }}
    nav
        button(@click='wave')
            icon(name='night')
            span {{ $t('nav.darkMode') }}
        router-link(to='/account' @click='wave').user
            .user-avatar
            span {{ $t('page.account.title') }}
</template>

<style lang='stylus'>
header
    position sticky
    bottom 0
    display flex
    justify-content space-between
    grid-area header
    padding 15px
    color $white
    > nav
        display flex
        align-items center
        gap 8px

    @media (min-width $md)
        flex-direction column
        > nav
            flex-direction column
            align-items start
            gap 12px

    a, button
        display flex
        align-items center
        justify-content center
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
        span
            display none
        @media (min-width $md)
            justify-content start
            width 100%
            border-radius 7px
            font 700 18px/40px 'R'
            padding 0 15px
            span
                display block
                margin 0 0 0 10px

.user
    @media (min-width $md)
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