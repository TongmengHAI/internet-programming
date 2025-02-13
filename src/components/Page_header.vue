<template>
  <div class="pageHeader flex items-center" style="background-color: #3BB77E33; height: 235px; border-radius: 30px; ">
    <div class="pageHeaderBgImg" style="width: 100%; height: 100%; object-fit: cover;">
      <div class="title text-[40px]" style="font-weight: 500;">{{ title }}</div>
      <div class="direction text-[#7E7E7E] flex items-center" >Home <IconChevronRight/> Categories <IconChevronRight/> {{ path }}</div>
    </div>
  </div>
</template>
<script scoped>
import IconChevronRight from './icons/IconChevronRight.vue';
export default {
  name: "Page Header",
  components: {
    IconChevronRight
  },
  props: {
    title: String,
    path: String,
  }
};
</script>

<style scoped>
.pageHeader .pageHeaderBgImg {
  background-image: url("@/assets/img/pageHeaderImg.png");
  border-radius: 30px;
  padding: 50px;

}
</style>
