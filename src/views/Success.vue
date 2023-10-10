<template>
  <div class="text-center"><strong class="fs-3">Order successful. Please wait for your order</strong>
  <img style="
  width:400px;
  " :src="SuccessImg" >
  </div>
</template>

<script>
export default {
    name:'Success',
    data(){
      return{
        SuccessImg : '../assets/img/ilustrasi.png'
      }
    }
}
</script>

<style>

</style>