<template>
    <div class="img"
        style="height: 100%; width: 100%; padding: 2%; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;border-radius: 5px;">
        <img :src="img" style="width: 100%; height: 100%; object-fit: contain;" alt="">
        <!-- @/assets/img/corn.png -->
    </div>
</template>

<script>
    export default{
        props:{
            img: String,
        }
        
        
    }

</script>