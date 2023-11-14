<template>
    <div class="products">
        <div class="image">
            <img :src="img">
            
            <template v-if =" tag == ' ' ">
                <div class="tag" style="padding: 0;">
                    {{ tag }} 
                </div>
            </template>
            <template v-else>
                <template v-if = " tag =='Hot'" >
                    <div class="tag" style="padding: 5px 10px 5px 10px;" :style="{backgroundColor:tagColor[1]}">
                        {{ tag }}                          
                    </div>
                </template>
                <template v-else-if = " tag =='Sale'" >
                    <div class="tag" style="padding: 5px 10px 5px 10px;" :style="{backgroundColor:tagColor[2]}">
                        {{ tag }}                          
                    </div>
                </template>
                <template v-else>
                    <div class="tag" style="padding: 5px 10px 5px 10px;" :style="{backgroundColor:tagColor[0]}">
                        {{ tag }}                          
                    </div>
                </template>
            </template>
            
        </div>
        <div class="content">
            <div class="">
                <div class="type">{{ type }}</div>
                <div class="title">{{ title }}</div>
                <div class="rating">
                    <template v-for="num in rating ">
                        <i class=' rating bx bxs-star'></i>
                    </template>
                    <template v-for="item in (5-rating)">
                        <i class='unrating bx bxs-star' ></i>
                    </template>
                    <span class="rating_num">({{ rating.toFixed(1) }})</span>
                </div>
                <div class="description">{{ description }}</div>
            </div>
            <div class="price">
                <div class="allPrice">
                    <div class="discountPrice">${{ disPrice }}</div>
                    <div class="sellprice"><s>${{sellPrice}}</s></div>
                </div>
                
                <div class="add_btn" >
                    <button class="btn" style="cursor: pointer;">Add +</button>
                    <input type="number" class="add_num" value="1"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style>
    .products{
        /* width: 298px; */
        width: 100%;
        height: 350px;
        
        border: 1px solid #BCE3C9;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    .products .image{
        display: flex;
        align-items: end ;
        justify-content: center;
        position: relative;
        height: 50%;
    }
    .products .image img{
        width: 70%;

        border-radius: 10px 10px 0 0;
        object-fit: contain;
    }
    .products .image .tag{
        /* width: 58px;
        height: 32px; */
        /* top: 20px; */
        font-size: 14px;
        font-weight: 400;
        color: white;
        /* padding: 5px 10px 5px 10px; */
        border-radius: 0px 30px 30px 0px;
        /* background-color: #3BB77E; */

        position: absolute;
        left: 0;
        top: 20%;
        translate: 0 -50%;

    }
    .products .content{
        padding: 19px;
    }
    .products .content .title{
        color: #253D4E;
        font-size: 14px;
        font-weight: 700;
    }
    .products .content .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .products .content .price .allPrice{
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .products .content .type{
        font-size: 14px;
        font-weight: 400;
        color: #7E7E7E;
    }
    .products .content .rating{
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .products .content .rating .rating{
        color: #FDC040;
    }
    .products .content .rating .unrating{
        color: #CDCDCD;
    }
    .products .content .rating .rating_num{
        padding-left: 10px ;
        color: #7E7E7E;
    }
    .products .content .description,.sellprice{
        font-size: 12px;
        font-weight: 400;
        color: #7E7E7E;
    }
    .products .content .discountPrice{
        font-size: 20px;
        font-weight: 700;
        color: #3BB77E;
    }
    .products .content .add_btn{
        display: flex;
        align-items: center;
        
    }
    .products .content .add_btn .add_num{
        width: 67px;
        height: 29px;
        border-radius: 5px;
        color: #3BB77E;
        text-align: center;
        font-size: 14px;
        border: 1px solid #3BB77E;
        display: none;

    }
    .products .content .add_btn .btn{
        width: 67px;
        height: 29px;
        border-radius: 5px;
        background-color: #DEF9EC;
        border: none;
        color: #3BB77E;
        font-size: 14px;
        font-weight: 700;
    }
    

</style>


<script>
    import { mapState } from 'pinia';
    import { useProductStore } from "../stores/product_store";

    export default{
        name:"products",
        
        computed:{
            ...mapState(useProductStore,['groups'])
        },
        props:{
            img:String,
            tag:String,
            type:String,
            title:String,
            rating:Number,
            description:String,
            disPrice:Number,
            sellPrice:Number,

        },
        data(){
            return{
                tagColor:[
                    "#3BB77E","#FD6E6E","#FDC040"
                ]
            }   
        }
        
    }

    $(document).ready(function() {
        $('.add_btn').on('click', '.btn', function() {
            $(this).css('display', 'none'); 
            $(this).next('.add_num').css('display', 'block'); 
            
            
        });

    
        
    });

</script>