<template>
  <div class="menu_container">
      <div class="title">
          <span style="font-weight: bold; font-size: 35px;">{{ title }}</span>
      </div>
      <div class="all_menu">
          <li><a href="#" style="font-weight: bold">All</a></li>
          <ul v-for="items in groups">
            <li ><a href="#">{{items}}</a></li>
          </ul>
      </div>
  </div>
</template>
<style scoped>
  .menu_container{
    width: 70vw;
    margin-bottom: 20px;
          display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px 10px ;

  }
  .menu_container .all_menu {
      display: flex;
      align-items: center;
      justify-content: space-between;


  }
  .menu_container li,a{
      padding:0 10px ;
      text-decoration: none;
      color: black;
      list-style-type: none;

  }
  /* li a{
    font-size: 18px;
  } */

</style>

<script scoped>

  import { mapState } from 'pinia';
  import { data } from "../stores/data";

  export default{
      name:"menu",
      props:{
          title:String,
      },
      computed:{
          ...mapState(data,['groups'])
      }
  }

</script>
