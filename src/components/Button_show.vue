<template>
    <button class="button" :style="{backgroundColor:button_color}" style="color: white;">
        <span  style="margin-right: 2px;">Shop now</span>
        <i class="fa-solid fa-arrow-right" style="font-size: 12px;"></i>
    </button>
</template>

<script>
    export default{
        name:"button",
        props:{
            button_color:String,
        }
    }
</script>
<style>
    .promotion .button{
        padding:8px;
        margin-top: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: 500;
        transition: 0.3s;

    }
    .promotion .button:hover{
        opacity: 0.7;
        transform: scale(0.97);
        transition: 0.3s;

    }
</style>