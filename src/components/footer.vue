<template>
<div class="row mt-4 d-none d-md-block">
  <div class="col">
    <h3 >Contac Us</h3>  
      <div >
      <i class="m-1" data-feather="mail"></i>
      <i class="m-1" data-feather="map-pin"></i>
      <i class="m-1" data-feather="phone"></i>
      </div>
      </div>
  <div class="col">
    <h3>About This Website</h3> 
    <p>This web was created to facilitate restaurant services to customers. As a means that is easier and more organized in ordering and tracking orders that are more organized.</p>
  </div>
</div>
<div class="d-flex justify-content-center mt-5  flex-wrap mt-4 d-md-none text-center d-sm-block">
  <div class="text-center">
    <h3 >Contac Us</h3>  
      <div  class="d-flex">
      <i class="m-1" data-feather="mail"></i>
      <i class="m-1" data-feather="map-pin"></i>
      <i class="m-1" data-feather="phone"></i>
      </div>
      </div>
  <div class="">
    <h3>About This Website</h3> 
    <p class="fs-7">This web was created to facilitate restaurant services to customers. As a means that is easier and more organized in ordering and tracking orders that are more organized.</p>
  </div>
</div>
</template>
<script>
import feather from 'feather-icons'
export default {
    name:'Footer',


    mounted(){
          feather.replace();
    }
}
</script>

<style>
.m-1{
  cursor: pointer;
}
.m-1                                                                                  :hover{

  color: cadetblue;
}
</style>