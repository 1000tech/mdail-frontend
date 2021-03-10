<template lang='pug'>
    .modal
        .modal-backdrop(
            @click="$emit('close')"
        )

        .modal-wrap(ref='draggableContainer')
            .modal-content(@mousedown='dragMouseDown')
                slot(name='text')

                div(class='D(f) Ai(c) Jc(fe)')
                    button(@click="$emit('close')")
                        | Cancel
                    slot(name='button')
</template>

<style lang='stylus'>
    .modal-enter-active, .modal-leave-active
        transition opacity $time

    .modal-enter, .modal-leave-to
        opacity 0
        transition opacity $time

    .modal
        position fixed
        top 0
        bottom 0
        left 0
        right 0

    .modal-backdrop
        extend()
        z-index 2
        background $shadow

    .modal-wrap
        position relative
        width 100%
        height 100%
        display flex

    .modal-content
        position relative
        z-index 3
        overflow-x auto
        width 100%
        max-width 500px
        margin auto
        padding 30px 35px 35px
        border-radius 5px
        background $white
        box-shadow 0 2px 16px 0 $shadow
        cursor grab
        &:active
            cursor grabbing
        p
            margin 15px 0 25px
        button
            font-weight 600
            letter-spacing 1px
            border-radius 5px
            padding 10px 24px
            &:first-child
                background $grey
                color $blue
            &:last-child
                background $blue
                color $white
                margin 0 0 0 20px
            &:hover
                background $blue-hover
                color $white
            &:active
                background $blue-active
</style>

<script>
    export default {
        data() {
            return {
                positions: {
                    clientX: undefined,
                    clientY: undefined,
                    movementX: 0,
                    movementY: 0
                }
            }
        },
        methods: {
            dragMouseDown(event) {
                event.preventDefault()
                this.positions.clientX = event.clientX
                this.positions.clientY = event.clientY
                document.onmousemove = this.elementDrag
                document.onmouseup = this.closeDragElement
            },
            elementDrag(event) {
                event.preventDefault()
                this.positions.movementX = this.positions.clientX - event.clientX
                this.positions.movementY = this.positions.clientY - event.clientY
                this.positions.clientX = event.clientX
                this.positions.clientY = event.clientY
                this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
                this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
            },
            closeDragElement() {
                document.onmouseup = null
                document.onmousemove = null
            }
        }
    }
</script>