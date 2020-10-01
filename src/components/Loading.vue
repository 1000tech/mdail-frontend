<template lang='pug'>
    .load
</template>

<style lang='stylus'>
    .load
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid #ccc;
        border-top-color: #333;
        animation: spinner .6s linear infinite;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;

    @keyframes spinner
        to
            transform: rotate(360deg)
</style>