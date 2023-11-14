
<template>
  <div class="container" style="max-width: 1400px; margin: auto;" >
    <Menus :title="title[0]"/>
    
    <div class="category_container" style="display: flex; justify-content: space-between; gap: 20px; margin-bottom: 75px;">
      <Category v-for="item in category " :img="item.img" :name='item.name' :num_item="item.num_item" :bg_color="item.bg_color" />
    </div>

    <div class="promotion_container" style="display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;">
      
      <Promotion v-for="item in promotion" 
            :img='item.img' :title="item.title" 
            :bg_color="item.bg_color" 
            :btn_color="item.btn_color" />
    </div>
    
    <Menus :title="title[1]"/>

    <div class="product_container" style="display: grid; grid-template-columns: repeat(5,1fr); gap: 24px;">
      <Products v-for="item in products" 
            :img="item.image" :tag="item.tag"
            :type="item.type" :title="item.name"
            :rating="item.rate" :description="item.description"
            :disPrice="item.discountPrice" :sellPrice="item.sellPrice" />
    </div>
  </div>
</template>

<script>

import Category from '@/components/Category.vue';
import Promotion from './components/Promotion.vue';
import Menus from './components/menu.vue';
import Products from './components/Products.vue';

import { useProductStore } from "./stores/product_store";
import { mapState } from "pinia";

export default {

  components: {
    Category,
    Promotion,
    Menus,
    Products,
  },

  

  computed:{
    ...mapState(useProductStore,['category']),
    ...mapState(useProductStore,['promotion']),
    ...mapState(useProductStore,['products']),
    ...mapState(useProductStore,['productCountsByCategory'])
  },

  data() {
    return {
      title:[
        "Featured Categories",
        "Popular Products"
      ],
      
    }
  }

}


</script>




