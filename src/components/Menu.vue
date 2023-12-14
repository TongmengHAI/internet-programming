<template>
    <div class="menu_container">
        <div class="title">
            <h2 style="font-weight: bold;">{{ title }}</h2>
        </div>  
        <div class="all_menu">
            <li><a href="#" style="font-weight: bold">All</a></li>
            <ul v-for="items in groups" style="margin-top: 20px;">
    
                <li ><a href="#">{{items}}</a></li>
            </ul>
        </div>
    </div>
</template>
<style>
    .menu_container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 10px ;
        
    }
    .menu_container .all_menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .menu_container li,a{
        padding:0 5px ;
        text-decoration: none;
        color: black;
        list-style-type: none;
        
    }

</style>

<script>
    import { mapState } from 'pinia';
    import { useProductStore } from "../stores/product_store";

    export default{
        name:"menu",
        props:{
            title:String,
            // groups:String,
        },
        computed:{
            ...mapState(useProductStore,['groups'])
        }
    }

</script>
