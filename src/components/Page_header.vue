<template>
    <div class="pageHeader d-flex align-items-center" style="background-color: #3BB77E33; height: 235px; border-radius: 30px; ">
            <div class="pageHeaderBgImg"  style="width: 100%; height: 100%; object-fit: cover;">
                <div class="title"><h1>{{ title }}</h1></div>
                <div class="direction" style="color: #7E7E7E;">Home <i class='bx bx-chevron-right'></i> Categories <i class='bx bx-chevron-right'></i> {{ path }}</div>
            </div>
    </div>
</template>
<script>
    export default{
        name: "menuItem",
        props:{
            title:String,
            path:String,
        }
    };
</script>