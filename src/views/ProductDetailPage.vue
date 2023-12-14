<template>
    <div class="container" style="max-width: 1440px; margin: auto;">
        <header class="header ">
            <nav class="navigaton h-full d-flex justify-content-between align-items-center ">
                <div class="logoSection">
                    <img style="object-fit: contain;" src="@/assets/img/Logo.png" alt="">
                </div>


                <!-- search box -->
                <Search_box />

                <div class="navMenu d-flex justify-content-centerr align-items-center gap-3 me-4 ">
                    <ul class="d-flex justify-content-center align-items-center gap-4 mt-3 " style="list-style-type: none;">
                        <MenuItem menuName="Account" icon="bx-user" icon_color="back" dropList="none" font_weight="400">
                        </MenuItem>
                        <MenuItem menuName="Compare" icon="bx-recycle" icon_color="back" dropList="none" font_weight="400">
                        </MenuItem>
                        <MenuItem menuName="Wishlist" icon="bx-heart" icon_color="back" dropList="none" font_weight="400">
                        </MenuItem>
                        <MenuItem menuName="Cart" icon="bx-cart" icon_color="back" dropList="none" font_weight="400">
                        </MenuItem>

                    </ul>

                </div>

            </nav>
        </header>
        <hr>
        <!-- menu -->
        <div class="menu d-flex justify-content-between align-items-center ">
            <div class="allMenu">
                <ul class="d-flex justify-content-center align-items-center gap-3 " style="list-style-type: none;">
                    <li class="allCategory d-flex justify-content-center align-items-center gap-1 "
                        style="background-color: #3BB77E; width: 250px; height: 45px; border-radius: 5px;">
                        <i class='bx bx-grid-alt'></i>
                        Browser all categories
                        <i class='bx bx-chevron-down'></i>
                    </li>
                    <RouterLink to="/categories/1">

                        <MenuItem menuName="Hot Deals" icon="bxs-hot" icon_color="#3BB77E" dropList="yes" font_weight="700">
                        </MenuItem>
                    </RouterLink>
                    <RouterLink to="/">

                        <MenuItem menuName="Home" icon="none" icon_color="black" dropList="none" font_weight="700">
                        </MenuItem>
                    </RouterLink>

                    <MenuItem menuName="Food" icon="none" icon_color="black" dropList="yes" font_weight="700">
                    </MenuItem>
                    <MenuItem menuName="Vegetables" icon="none" icon_color="black" dropList="yes" font_weight="700">
                    </MenuItem>
                    <MenuItem menuName="Drink" icon="none" icon_color="black" dropList="none" font_weight="700">
                    </MenuItem>
                    <MenuItem menuName="Cookies" icon="none" icon_color="black" dropList="none" font_weight="700">
                    </MenuItem>
                    <MenuItem menuName="Meat & Seafood" icon="none" icon_color="black" dropList="yes" font_weight="700">
                    </MenuItem>
                    <MenuItem menuName="Bakery" icon="none" icon_color="black" dropList="none" font_weight="700">
                    </MenuItem>

                </ul>

            </div>
            <div class="contactMenu d-flex justify-content-center align-items-center gap-2">
                <div class="icon mt-2">
                    <i class='bx bx-headphone' style="font-size: 36px; "></i>
                </div>
                <div class="contact">
                    <div class="number" style="font-size: 20px; color: #3BB77E; font-weight: 700;">1900 - 8888</div>
                    <div class="status" style="font-size: 12px;">24/7 support center</div>
                </div>
            </div>
        </div>
        <hr>
        <template v-for="item in products">
            <template v-if="item.id == productId">
                <div class="productDetail">
                    <div class="direction" style="color: #7E7E7E; padding: 1% 0;">
                        Home 
                        <i class='bx bx-chevron-right'></i> 
                        {{ item.type }}

                        <i class='bx bx-chevron-right'></i> 
                        <span style="color: #3BB77E;">
                            <template v-for="cate in category" >
                                <template v-if="cate.id == item.id">
                                    {{ cate.name }}
                                </template>
                            </template>
                        </span>
                    </div>
                    <div class="maniContent d-flex justify-content-between  "  >

                        <div class="d-flex align-items-center justify-content-center" style="width: 50%;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; border-radius: 5px;">
                            
                        <!-- <ProductImage :image="'../assets/img/'+item.image" />  -->
                        <ProductImage :img="'../src/assets/img/'+item.image" /> 

                        </div>

                        <div class="content"  style="width: 50%;padding: 0 2%; ">

                        <ProductDetail :title="item.name" :rating="item.rate" :description="item.description" :disPrice="item.discountPrice" :sellPrice="item.sellPrice" />

                        </div>
                            
                        
                    </div>
                    <div class="d-flex align-items-center justify-content-center my-4  " style="height: 100px ; width: 50% ;gap: 10px;">
                        <div class="back border px-2 py-1 " style="border-radius: 50%; cursor: pointer;">
                            <i class='bx bx-left-arrow-alt' style="font-size: 15px;"></i>                
                        </div>

                        <ProductImage :img="'../src/assets/img/'+item.image" /> 
                        <ProductImage img="../src/assets/img/subImage2.png" /> 
                        <ProductImage img="../src/assets/img/subImage3.png" /> 
                        <ProductImage img="../src/assets/img/subImage4.png" /> 


                        
                        <div class="next border px-2 py-1 " style="border-radius: 50%; cursor: pointer;">
                            <i class='bx bx-right-arrow-alt' style="font-size: 15px;"></i>
                        </div>
                    </div>
                    <div class="detail p-5 rounded mb-5" style="box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
                        <div class="header d-flex align-items-center justify-content-start gap-3" style="font-weight: 700;">
                            <div class="description py-2 px-4  " style="border-radius: 40px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; color: #3BB77E;font-weight: 500; cursor: pointer;">Description</div>
                            <div class="additionalInfo py-2 px-4 " style="border-radius: 40px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;font-weight: 500; cursor: pointer;">Additional Info</div>
                            <div class="reviews py-2 px-4 " style="border-radius: 40px;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;font-weight: 500; cursor: pointer;">Reviews(3)</div>
                        </div>
                        <div class="content mt-5 ">
                            <article style="color: #7E7E7E;">
                                {{ item.description }}
                            </article>
                        </div>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<style >
    .add_num{
        display: none;
    }
</style>
<script>

import Category from '@/components/Category.vue';
import Promotion from '@/components/Promotion.vue';
import Menus from '@/components/menu.vue';
import Products from '@/components/Products.vue';
import Search_box from '@/components/Search_box.vue';
import MenuItem from '@/components/MenuItem.vue';
import Show_case from '@/components/Show_case.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import ProductImage from '@/components/ProductImage.vue';

import { useProductStore } from "@/stores/product_store";
import { mapState } from "pinia";

    export default{
        name: "productDetail",
        props:{
            
        },
        
        components: {
            Category,
            Promotion,
            Menus,
            Products,
            Search_box,
            MenuItem,
            Show_case,
            ProductDetail,
            ProductImage,
        },



    computed: {
        ...mapState(useProductStore, ['category']),
        ...mapState(useProductStore, ['promotion']),
        ...mapState(useProductStore, ['products']),
        ...mapState(useProductStore, ['productCountsByCategory']),
        productId() {
            return this.$route.params.productId; // Accessing parameter directly
        }, 
    },
        
    }

    
</script>