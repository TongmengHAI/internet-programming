<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="header">
    <RouterLink to="/">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" class="">
    </div>
    </RouterLink>
    <div class="search relative rounded-md border-1 border-[#cadbd1] w-full h-1/2 flex items-center px-2">
      <label class="absolute bg-white ">
        <div class="relative inline-block text-left">
          <div>
            <button type="button"
              class="inline-flex cursor-pointer w-full h-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50"
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              Category
              <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                data-slot="icon">
                <path fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div id="menu-items"
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="p-3" role="none">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="menu-item-0">Account settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="menu-item-1">Support</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                id="menu-item-2">License</a>

            </div>
          </div>
        </div>
        |
      </label>
      <input type="text" class="pl-30 w-full h-full focus:outline-hidden" placeholder="Search for item" >
      <IconSearch />

    </div>
    <div class="options">
      <ul class="flex gap-5 text-sm">
        <li> <a href="#"> <IconUser /> Account</a></li>
        <li> <a href="#"> <IconRectangleGroup /> Compare</a></li>
        <li> <a href="#"> <IconHeart/> Wishlist</a></li>
        <li> <a href="#">  <IconShoppingCart />Cart</a></li>
      </ul>
    </div>
  </div>
</template>



<script scoped>
  import IconSearch from './icons/IconSearch.vue';
  import IconHeart from './icons/IconHeart.vue';
  import IconRectangleGroup from './icons/IconRectangleGroup.vue';
  import IconUser from './icons/IconUser.vue';
  import IconShoppingCart from './icons/IconShoppingCart.vue';

  export default {
  components: {
    IconSearch,
    IconHeart,
    IconRectangleGroup,
    IconUser,
    IconShoppingCart
  }
  }

$(document).ready(function () {
  $("#menu-items").hide();
  $("#menu-button").mouseover(function () {
    $("#menu-items").show();
  })
  $("#menu-items").mouseleave(function () {
    $("#menu-items").hide();
  })
});
</script>

<style scoped>
.header {
  width: 70vw;
  height: 10vh;

  display: grid;
  grid-template-columns: 20% 50% 30%;
  place-items: center;
  margin-bottom: 20px;
}
li a{
  display: flex;
  align-items: center;
  gap: 3px;

  color: #000;

}
</style>
