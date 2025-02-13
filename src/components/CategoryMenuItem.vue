<template>
  <div class="categoryMenuItem ">
    <div class="categoryContenter flex items-center justify-around w-3/4">
      <div class="relative inline-block text-left">
        <div class="rounded-md w-full h-1/2 flex items-center">

          <button type="button"
            class="flex items-center cursor-pointer w-full h-full justify-center gap-1 rounded-md px-5 py-3 text-sm text-gray-900  hover:bg-[#3ab87db0] bg-[#3ab87e]"
            style="font-weight: 700;"
            id="menu-btn" aria-expanded="true" aria-haspopup="true">
            <IconRectangleGroup /> Browse All Category

          </button>
        </div>


      </div>

      <div class="categoryItem flex items-center justify-center gap-6 ">
        <RouterLink to="/categories/1">
          <div class="cateItem"> <IconFire /> Hot Deal</div>
        </RouterLink>
        <RouterLink to="/">
          <div class="cateItem">Home</div>
        </RouterLink>
        <RouterLink to="/categories/1">
          <div class="cateItem"> Foods
            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                data-slot="icon">
                <path fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
          </div>
        </RouterLink>
        <RouterLink to="/categories/1">
          <div class="cateItem"> Vegetables
            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                data-slot="icon">
                <path fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
          </div>
        </RouterLink>
        <RouterLink to="/categories/1">
          <div class="cateItem"> Drinks</div>
        </RouterLink>
        <RouterLink to="/categories/1">
          <div class="cateItem"> Cookies</div>
        </RouterLink>
        <RouterLink to="/categories/1">
          <div class="cateItem"> Bakery</div>
        </RouterLink>
        <RouterLink to="/categories/1">
          <div class="cateItem"> Meat & Seafood
            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                data-slot="icon">
                <path fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class=" place-item-center flex items-center justify-end gap-2 w-1/4">
      <div class="callIcon"> <IconPhone /> </div>
      <div class="">
        <div class="phone text-[#3ab87e] text-[20px]" style="font-weight: 700;">1900 - 8888</div>
        <div class="title text-[12px]">24/7 Support center</div>
      </div>
    </div>




  </div>

</template>

<script scoped>
import IconRectangleGroup from './icons/IconRectangleGroup.vue';
import IconFire from './icons/IconFire.vue';
import IconPhone from './icons/IconPhone.vue';

export default {
  name: 'CategoryMenuItem',

  components: {
    IconRectangleGroup,
    IconFire,
    IconPhone
  }
}


</script>

<style scoped>
.categoryMenuItem {
  width: 70vw;
  height: 10vh;
  border: 1px solid #000;
  border-left: 0;
  border-right: 0;
  padding: 10px;
  display: flex;
  place-items: center;
  margin-bottom: 20px;


}
.cateItem{
  font-weight: 600;
  display: flex;
  place-items: center;
}
</style>
