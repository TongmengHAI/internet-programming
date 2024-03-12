<template>
    <div class="" style="width: 100%;">
        <div class="status"
            style="color: #3BB77E; background-color: #DEF9EC; display: inline-block;  border-radius: 5px; font-weight: 500; padding: 0 5px;">
            In Stock</div>
        <div class="title" style="font-size: 35px; font-weight: 700; line-height: 40px; padding: 3% 0;">{{ title }}</div>
        <div class="rating">

            <template v-for="num in rating ">
                <i class=' rating bx bxs-star' style="color: orange;"></i>
            </template>
            <template v-for="item in (5 - rating)">
                <i class='unrating bx bxs-star' style="color:#bab8b8;"></i>
            </template>
            <span class="rating_num">({{ rating.toFixed(1) }})</span>
                    
        </div>
        <div class="price d-flex justify-content-start align-items-center gap-4">
            <div class="disPrice" style="color: #3BB77E; font-weight: 700; font-size: 38px; ">$ {{ disPrice }}</div>
            <div class="salePrice" style="font-size: 25px; font-weight: 700; color: #7E7E7E; "><s>$ {{ sellPrice }}</s></div>
        </div>
        <div class="description mt-4" style="color: #7E7E7E;">{{ description }} </div>
        <div class="action d-flex align-items-center gap-2 mt-2">
            <div class="add_btn" style="background-color: #3BB77E;  border-radius: 5px; width: 70px; ">
                <button class="btn" style="cursor: pointer; color: white; width: 100%; height: 33px; font-size: 14px;">Add
                    +</button>
                <input type="number" class="add_num" value="1"
                    style="width: 100%;height: 33px; border: 2px solid #3BB77E; border-radius: 5px; font-size: 14px;" />
            </div>
            <div class="add_cart"
                style="background-color: #3BB77E; padding: 5px; border-radius: 5px; font-size: 14px;height: 33px; color: white; ">
                <i class='bx bx-cart-alt'></i>
                Add To Cart
            </div>
            <div class="favorite"
                style="padding: 5px 10px; border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                <i class='bx bx-heart'></i>
            </div>
            <div class="shuffle" style="padding: 5px 10px; border-radius: 5px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                <i class='bx bx-shuffle'></i>
        </div>
    </div>
    <div class="d-flex flex-column justify-content-end mt-5">
        <div class="vendor">Vendor: <span style="color: #7E7E7E;">NestMart</span></div>
        <div class="sku">SKU: <span style="color: #7E7E7E;"> FWM15VKT</span></div>
    </div>
</div>
</template>

<script>
export default{
    props:{
        title: String,
        rating: Number,
        description: String,
        disPrice: Number,
        sellPrice: Number,
    }
}

$(document).ready(function() {
        $('.add_btn').on('click', '.btn', function() {
            $(this).css('display', 'none'); 
            $(this).next('.add_num').css('display', 'block'); 
            
            
        }); 
    });
</script>