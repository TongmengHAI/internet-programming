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
        <!-- page header -->
        <template v-for="item in category">
            <template v-if="item.id == categoryId ">
                <Page_header :title="item.name" :path="item.name"/>

            </template>
        </template>
        
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
import Page_header from '@/components/Page_header.vue';

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
        Page_header,
    },



    computed: {
        ...mapState(useProductStore, ['category']),
        ...mapState(useProductStore, ['promotion']),
        ...mapState(useProductStore, ['products']),
        ...mapState(useProductStore, ['productCountsByCategory']),

        categoryId() {
            return this.$route.params.categoryId; // Accessing parameter directly
        },
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
