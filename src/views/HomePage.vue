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
        <!-- show case -->
        <div class="banner" style="height: 500px; border-radius: 30px; background-color: #FDC04033;">
            <Show_case></Show_case>
        </div>

        <Menus :title="title[0]" />

        <div class="category_container"
            style="display: flex; justify-content: space-between; gap: 20px; margin-bottom: 75px;">
            
            <Category v-for="item in category " :categoryId="'/categories/'+item.id" :img="'./src/assets/img/'+item.img" :name='item.name' :num_item="item.num_item"
                :bg_color="item.bg_color" />
        </div>

        <div class="promotion_container" style="display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;">

            <Promotion v-for="item in promotion"  productId="/products/1" :img='"../src/assets/img/"+item.img' :title="item.title" :bg_color="item.bg_color"
                :btn_color="item.btn_color" />
        </div>

        <Menus :title="title[1]" />

        <div class="product_container" style="display: grid; grid-template-columns: repeat(5,1fr); gap: 24px;">
            <Products v-for="item in products" :productId="'/products/'+item.id" :img="'../src/assets/img/'+item.image" :tag="item.tag" :type="item.type" :title="item.name"
                :rating="item.rate" :weight="item.weight" :disPrice="item.discountPrice"
                :sellPrice="item.sellPrice" />
        </div>
    </div>
</template>
  
<script>


import Category from '@/components/Category.vue';
import Promotion from '@/components/Promotion.vue';
import Menus from '@/components/menu.vue';
import Products from '@/components/Products.vue';
import Search_box from '@/components/Search_box.vue';
import MenuItem from '@/components/MenuItem.vue';
import Show_case from '@/components/Show_case.vue';

import { useProductStore } from "@/stores/product_store";
import { mapState } from "pinia";

export default {

    components: {
        Category,
        Promotion,
        Menus,
        Products,
        Search_box,
        MenuItem,
        Show_case,
    },



    computed: {
        ...mapState(useProductStore, ['category']),
        ...mapState(useProductStore, ['promotion']),
        ...mapState(useProductStore, ['products']),
        ...mapState(useProductStore, ['productCountsByCategory'])
    },

    data() {
        return {
            title: [
                "Featured Categories",
                "Popular Products"
            ],

        }
    }

}


</script>
