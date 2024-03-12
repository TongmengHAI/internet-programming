
<template>           
        <div class="category" :style="{ backgroundColor: bg_color }">
            <RouterLink :to="categoryId">
                <div class="image" >
                    <img :src="img" alt="Hello" />
                </div>
                <div class="content">
                    <div class="name">{{ name }}</div>
                    <div class="num_item">{{ num_item }} items</div>
                    
                </div>
            </RouterLink>

        </div>

</template>

<script>
    
    export default{
        name:"category",
        props:{
            categoryId:String,
            img:String,
            name:String,
            num_item:String,
            bg_color:String,
        },
    }
</script>
<style>
    .category{
        width: 120px;
        height: 150px;
        background-color: red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 5px 0;

    }
    .category:hover{
        border: 1px solid green;
        cursor: pointer;
    }
    .category .image{
        height: 70%;

    }
    .category img{
        width: 95%;
        object-fit: cover;
    }
    .category .content{
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    .category .content .name{
        font-weight: bold;
        font-size: 14px;
    }
    .category .content .num_item{
        font-size: 12px;
        color: #B6B6B6;
    }
    
</style>