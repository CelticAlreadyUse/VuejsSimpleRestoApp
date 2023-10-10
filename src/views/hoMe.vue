<template>
  <div class="d-none d-md-block">
    <Hero/>
    <h1 class="title fs-3 mt-2">Favorite Product</h1>
    <div class="d-flex mt-2 flex-wrap" >
    <div class="ms-4 mt-3"   v-for="items in productFavorite" :key="items">
      <div class="card" style="width: auto;height:20rem;">
  <img :src="'../assets/img/'+ items.gambar"  class="card-img-top" style="width:250px; object-fit:contain;">
  <div class="card-body">
    <h5 class="card-title fs-4">{{items.nama}}</h5>
    <p class="card-text fs-5">Rp.{{items.harga}}</p>
    <div class="text-end ">
    <router-link :to="'/product/'+items.id" class="btn btn-success ">Add to card</router-link>
    </div>
    </div>
  </div>
</div>
    </div>
  </div>
  <!-- ANDORID RESPONSIVE   -->
   <div class="d-sm-block d-md-none">
    <div class="  justify-content-center text-center ">
    <Hero/>
    <div>
    <h1 class="title fs-3 mt-2">Favorite Product</h1>
    <div class="d-flex flex-wrap justify-content-center" >
    <div class=" mt-4"   v-for="items in productFavorite" :key="items">
      <div class="card" style="width: 12;height:18rem;">
  <img :src="'../assets/img/'+ items.gambar"  class="card-img-top" style="width:250px; object-fit:contain;">
  <div class="card-body">
    <h5 class="card-title fs-4">{{items.nama}}</h5>
    <p class="card-text fs-5">Rp.{{items.harga}}</p>
    <div class="text-end ">
    <router-link :to="'/product/'+items.id" class="btn btn-success ">Add to card</router-link>
    </div>
    </div>
    </div>
  </div>
</div>
    </div>
    </div>
  </div>
</template>
<script>
import Hero from '@/components/hero.vue'
import axios from 'axios'
export default {
    name:'home',
  components:{
        Hero,

    },
  data(){
    return{
      productFavorite : [],
    }
    },

  methods:{
    products(data){
        this.productFavorite =data
    },
},
    mounted(){
      axios
        .get('http://localhost:3000/best-products')
        .then((response)=>{    
        this.products(response.data) 
        })
        .catch(function(error){
            console.log(error)
        })
        console.log(this.GoData)
}

    }
  

</script>

<style>
.title {
  font-family: 'Poppins', sans-serif;
}
</style>