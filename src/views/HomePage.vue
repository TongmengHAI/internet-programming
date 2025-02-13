<template>
  <main class="">
    <CategoryMenuItem />

    <BannerItem />

    <MenuItem :title="title[0]" />

    <div class="categoryContainer">
      <Category v-for="item in category " :categoryId="'/categories/' + item.id" :img="'./src/assets/img/' + item.img"
        :name='item.name' :num_item="item.num_item" :bg_color="item.bg_color" />
    </div>

    <MenuItem :title="title[1]" />

    <div class="product_container" style="display: grid; grid-template-columns: repeat(5,1fr); gap: 24px;">
      <Products v-for="item in products" :productId="'/products/' + item.id" :img="'../src/assets/img/' + item.image"
        :tag="item.tag" :type="item.type" :title="item.name" :rating="item.rate" :weight="item.weight"
        :disPrice="item.discountPrice" :sellPrice="item.sellPrice" />
    </div>


  </main>
</template>

<script scoped>
import CategoryMenuItem from '@/components/CategoryMenuItem.vue';
import BannerItem from '@/components/BannerItem.vue';
import MenuItem from '@/components/MenuItem.vue';
import Category from '@/components/CategoryItem.vue';
import Products from '@/components/Products.vue';

import { data } from "@/stores/data";
import { mapState } from "pinia";

export default {
  components: {
    CategoryMenuItem,
    BannerItem,
    MenuItem,
    Category,
    Products
  },

  computed: {
    ...mapState(data, ['category']),
    ...mapState(data, ['promotion']),
    ...mapState(data, ['products']),
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

<style scoped>
.categoryContainer, .product_container{
  width: 70vw;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>
