<script>
export default {
    props: {
        name: {
            type: String
        }
    }
}
</script>

<template>
    <svg fill="currentColor" width="1em" height="1em">
        <use :xlink:href="`/icons/sprite.svg#${name}`"/>
    </svg>
</template>