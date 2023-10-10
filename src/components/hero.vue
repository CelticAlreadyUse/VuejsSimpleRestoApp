<template>
<div class="d-none d-md-block ">
<div class="d-flex mt-1 align-items-center ">
 <h1 class="fs-1">More menus with flavors.<br><strong>Together coloring the world</strong></h1>
 <img class="ms-5" style="width:300px;" :src='Img'>
</div>
<div class="text-center" style="margin-top:-40px;">
    <VueFeather  type="corner-down-right" class="" style="width:32px; height:24px;"></VueFeather>
<router-link class="text-white btn btn-success" to="/product" >Order Now</router-link>
</div>
</div>
<div class="d-sm-block d-md-none">
    <div class="mt-3 align-items-center">
 <h1 class="fs-1">More menus with flavors.<br><strong>Together coloring the world</strong></h1>
 <img class="" style="width:300px;" :src='Img'>
</div>
<div class="" style="">
      <VueFeather  type="corner-down-right" class="" style="width:32px; height:24px;"></VueFeather>
<router-link class="text-white btn btn-success" to="/product" >Order Now</router-link>
</div>
</div>
</template>
<script>
import VueFeather from 'vue-feather';
export default {
    name:'hero',
    data(){
        return{
            Img:require('@/assets/undraw_booking_re_gw4j.svg'),
            }
    },
    components:{
        VueFeather
    }
}
</script>

<style>

</style>