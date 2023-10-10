<template>
<div id="app" class=" d-none d-md-block"> 
  <div class="row justify-content-center justify-content-md-center">
    <div class="col"></div>
    <div class="col col-9 ">
    <Navbar />
    <router-view />
    <Footer />
    </div>
    <div class="col"></div>
  </div>
</div>
<div id="app" class="d-md-none d-sm-block"> 
  <div class="row float-center justify-content-md-center ">
    <div class="">
    <Navbar />
  <router-view/>
  <Footer/>
    </div>
  </div>
</div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Navbar from '@/components/navBar.vue'
import feather from 'feather-icons'
export default {
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
    }
  },
  mounted() {
      feather.replace();
   
    },
 
}
</script>
<style>
::-webkit-scrollbar{
  display: none;
}
#app{
  color:wheat;
  background-color: black;
  height: 100vh;
  overflow-x: hidden;
}
</style>
