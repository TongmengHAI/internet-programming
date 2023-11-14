<template>
    <div class="promotion" :style="{backgroundColor:bg_color}">
        <div class="content">
            <div class="title">{{ title }}</div>
            <Button_show :button_color="btn_color"/>
        </div>
        <div class="image"><img :src="img" alt=""></div>
    </div>
</template>

<script>

    import Button_show from './Button_show.vue';
    
    export default{
        name:'promotion',

        components:{
            Button_show,
        },
        props:{
            img:String,
            title:String,
            btn_color:String,
            bg_color:String,
        },
        
    }
</script>
<style>
    .promotion{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 280px;
        border-radius: 10px;
    }
    .promotion .content{
        width: 50%;
        padding: 10% 0 10% 10%;
        font-weight: 600;
        font-size: 20px;
        
    }
    
    .promotion .image{
        height: 100%;
        width: 50%;
        display: flex;
        align-items:flex-end;
        justify-content: center;
    }
    .promotion img{
        width: 100%;
        object-fit: cover;
        border-radius: 0 0 10px 0;
    }
</style>