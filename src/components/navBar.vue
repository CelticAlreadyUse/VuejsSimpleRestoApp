<template>
  <nav class="navbar navbar-expand-lg d-none d-md-block">
  <div class="container-fluid">
    <a class="navbar-brand fs-3" href="#">Kafe Kita</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-between" id="navbarNav">
      <div>
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link to="/" class="nav-link fs-5 " aria-current="page"  href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-5" to="/product">Product</router-link>
        </li>
      </ul>
      </div>
      <ul>
        <div class="d-flex">
          <router-link class="nav-link me-2" to="/cart"><i data-feather="shopping-cart"></i></router-link> 
        </div>
      </ul>
    </div>
  </div>
</nav>
<nav class=" d-sm-block d-md-none align-items-center">
  <div class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand fs-3" href="#">Kafe Kita</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-between" id="navbarNav">
      <div>
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link to="/" class="nav-link fs-5 " aria-current="page"  >Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link fs-5" to="/product">Product</router-link>
          <router-link class="nav-link" to="/cart"><i  class="me-2" data-feather="shopping-cart"></i>Cart</router-link> 
        </li>
      </ul>
      </div>
      <ul>
      </ul>
    </div>
  </div>
</div>
  <div>
        </div>
        </nav>
</template>
<script>
import axios from 'axios'
export default {
 name:'navbar',
  data(){
    return{
      order:[] 
    }
  },
  props:["GoData"],
  methods:{
    


    amountProduct(data){
      this.order=data
    },
  },
 mounted(){
   axios
        .get('http://localhost:3000/keranjangs')
        .then((response)=>{    
        this.amountProduct(response.data)
        })
        .catch(function(error){
            console.log(error)
        })

 }
}
</script>

<style>
a.router-link-active{

  color: wheat !important;
}
a.nav-link{
  color: rgba(255, 255, 255, 0.479);
}
nav .navbar-brand{
  color: wheat;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Allerta Stencil', sans-serif;
  
}
nav{
  color:white;
  font-family: 'Righteous', cursive;
}
</style>