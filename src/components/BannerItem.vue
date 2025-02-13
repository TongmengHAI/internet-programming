<template>
  <div class="bannerContainer flex justify-between items-center">
    <div class="bannerContent px-15">
      <div class="bannerTitle text-[50px]/[60px]" style="font-weight: 700;" >Don’t miss amazing grocery deals</div>
      <div class="bannerSubtitle text-[20px] text-[#7E7E7E]" style="margin-bottom: 30px;">Sign up for the daily newsletter</div>
      <div class="searchBox relative">
        <input class="w-full h-10 bg-white rounded-3xl px-15 text-[13px] " type="text" placeholder="Enter email address">
        <span class="absolute top-2.5 left-8"> <IconEmail/> </span>
        <input class="absolute top-0 right-0 h-full bg-[#3fb77f] text-white px-10 rounded-3xl hover:bg-[#3fb77fb9] cursor-pointer" style="font-weight: 600;" type="button" value="Subcribe">
      </div>
    </div>
    <div class="bannerImage h-full">
      <img src="../assets/img/bannerImg.png" alt="" class="h-[100%]">
    </div>
  </div>
</template>


<script scoped>

import IconEmail from './icons/IconEmail.vue';

export default {
  name: 'BannerItem',

  components: {
    IconEmail,
  },

}



</script>

<style scoped>
.bannerContainer {
  width: 70vw;
  height: 40vh;
  margin-bottom: 10px;
  background:#fff2d9;
  border-radius: 20px;

  background-image: url('../assets/img/backgroundImg.png');


}

</style>
