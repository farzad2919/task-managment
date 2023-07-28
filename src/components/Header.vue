<template>
  <div class="header">
      <div class="header__left" >
          <h3>Your <i>ToDo</i> List</h3>
          <router-link to="/"> Home </router-link>
          <router-link to="/Tasks"> Tasks </router-link>
          <router-link to="/"> Products </router-link>
      </div>
      <div class="header__right" >
        <i class='bx bx-basket'></i>
      </div>
  </div>
  </template>
  
  <script>
  import { RouterLink } from "vue-router";
  export default{
      name: "Header",
  
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/scss/_mixins.scss';
  @import '../assets/scss/_vars.scss';
  .header{
      background-color: $mainHeader;
      height: 80px;
      width: 100%;
      display: flex;
      @include flex-direction();
      justify-content: space-between;
      align-items: center;
  
      &__left{
          @include flex-direction();
          justify-content: space-evenly;
          align-items: center;
          height: 100%;
          width: fit-content;
          gap: 15px;
          margin-left: 20px;
          h3{
              margin-right: 20px;
              font-style: oblique;
          }
      }
      
      &__right{
        @include flex-direction();
        height: 100%;
        width: fit-content;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 20px;
        i{
            font-size: 26px;
        }
    }
  }
  .router-link-active{
    border-bottom: 2px solid blue !important;
    color: blue; 
  }
  </style>