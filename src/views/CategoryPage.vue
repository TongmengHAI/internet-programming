<template>
  <main class="cateroryPage">
    <CategoryMenuItem />

    <!-- page header -->
    <template v-for="item in category">
      <template v-if="item.id == categoryId">
        <Page_header :title="item.name" :path="item.name" />

      </template>
    </template>
  </main>
</template>

<script scoped>
import { data } from "@/stores/data";
import { mapState } from "pinia";

import Page_header from '@/components/Page_header.vue';
import CategoryMenuItem from '@/components/CategoryMenuItem.vue';

export default {

  components: {
    Page_header,
    CategoryMenuItem,

  },

  computed: {
    ...mapState(data, ['category']),


    categoryId() {
      return this.$route.params.categoryId; // Accessing parameter directly
    },
  },

}

</script>

<style scoped>
  .cateroryPage {

    width: 70vw;
    margin-bottom: 10px;
  }
</style>
