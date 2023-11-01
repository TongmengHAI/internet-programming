
<template>
  <div class="container" >
    <div class="category_container" style="display: flex; justify-content: space-between; gap: 20px; margin-bottom: 75px;">
      <Category v-for="item in category " :img="item.img" :name='item.name' :num_item="item.num_item" :bg_color="item.bg_color" />
    </div>
    <div class="promotion_container" style="display: grid; grid-template-columns: repeat(3,1fr); gap: 24px;">
      
      <Promotion v-for="item in promotion" :img='item.img' :title="item.title" :bg_color="item.bg_color" :btn_color="item.btn_color" />
      
    </div>
  </div>
</template>

<script>

import Category from '@/components/Category.vue';
import Promotion from './components/Promotion.vue';
export default {

  components: {
    Category,
    Promotion,
  },
  data() {
    return {
      category: [
        {
          img: "./src/assets/img/humbeger.png",
          name: "Cake & Milk",
          num_item: "14",
          bg_color: "#F2FCE4",
        },
        {
          img: "./src/assets/img/persimmon.png",
          name: "Peach",
          num_item: "17",
          bg_color: "#FFFCEB"
        },
        {
          img: "./src/assets/img/kiwi.png",
          name: "Oganic Kiwi",
          num_item: "21",
          bg_color: "#ECFFEC"
        },
        {
          img: "./src/assets/img/apple.png",
          name: "Red apple",
          num_item: "68",
          bg_color: "#FEEFEA"
        },
        {
          img: "./src/assets/img/snack.png",
          name: "Snack",
          num_item: "34",
          bg_color: "#FFF3EB"
        },
        {
          img: "./src/assets/img/blueberry.png",
          name: "Black plum",
          num_item: "25",
          bg_color: "#FFF3FF"
        },
        {
          img: "./src/assets/img/cabbage.png",
          name: "Vegetables",
          num_item: "65",
          bg_color: "#F2FCE4"
        },
        {
          img: "./src/assets/img/headphone.png",
          name: "Headphone",
          num_item: "33",
          bg_color: "#FFFCEB"
        },
        {
          img: "./src/assets/img/Biscuits.png",
          name: "Cake & Milk",
          num_item: "54",
          bg_color: "#F2FCE4"
        },
        {
          img: "./src/assets/img/orange.png",
          name: "Orange",
          num_item: "63",
          bg_color: "#FFF3FF"
        },
      ],
      promotion:[
        {
          img:"./src/assets/img/oinoin.png",
          title:"Everyday Fresh & Clean with Our Products",
          bg_color:"#F0E8D5",
          btn_color:'#3BB77E',
        },
        {
          img:"./src/assets/img/juice.png",
          title:"Make your Breakfast Healthy and Easy",
          bg_color:"#F3E8E8",
          btn_color:'#3BB77E',
        },
        {
          img:"./src/assets/img/vegetables.png",
          title:"The best Organic Products Online",
          bg_color:"#E7EAF3",
          btn_color:'#FDC040',
        }

      ]

    }
  }
}
</script>




