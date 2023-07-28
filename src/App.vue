<template>
  <RouterView />
</template>

<script>

import { RouterLink,RouterView } from "vue-router";

export default{
    name: "App",


    
}


</script>

<style lang="scss">
@import './assets/scss/_vars.scss';
// @import './assets/scss/_vars.scss';
// @import './assets/scss/_mixins.scss';
#app{
  background-color:$bodyColor;
}

// @include kalameh-font-face();
// @include kalameh-farsi-number-font-face();
// * {
//   font-family: 'Kalameh';
//   font-style: normal;
// }

</style>
