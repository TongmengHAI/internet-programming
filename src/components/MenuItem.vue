<template>
    <li class="vegetable" :style="{fontWeight:font_weight}">
        <template v-if="icon != 'none'">
            <i :class="['bx', icon]" :style="{color:icon_color}"></i>
        </template>
        {{ menuName }}
        <template v-if="dropList != 'none' ">
            <i class='bx bx-chevron-down' ></i>
        </template>
    </li>
</template>

<script>
    export default{
        name: "menuItem",
        props:{
            menuName:String,
            dropList:String,
            icon:String,
            icon_color:String,
            font_weight:String,
        }
    };
</script>