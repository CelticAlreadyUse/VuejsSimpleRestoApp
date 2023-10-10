<template>
<div class="input-group flex-nowrap d-flex text-align-center">
  <VueFeather type="search" />
  <input v-model="search" @keyup="searchProduct" type="text" class="form-control rounded" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
</div>
  <div class="d-none d-md-block">
    <h1>Product Page</h1>
   <div class="row col  justify-content-center">
    <div class="ms-4 col col-3 align-items-center justify-content-center " v-for="items in product" :key="items">
      <div class="card col mt-4" style="width:200px;height:250;">
  <img style="width:100%; height:12rem; object-fit:cover;" :src="'../assets/img/'+ items.gambar"  class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-title fs-7 fw-bold">{{items.nama}}</p>
    <p class=" fs-5">Rp.{{items.harga}}</p>
    <div class="text-end ">
    <router-link :to="'/product/'+items.id" class="btn btn-success ">Add to card</router-link>
    </div>
    </div>
  </div>
</div>
    </div>
  </div>
   <div class="d-sm-block d-md-none ">
    <div class="d-flex flex-wrap justify-content-center">
    <div class="align-items-center " v-for="items in product" :key="items">
      <div class="card col mt-4" style="width:200px;height:250;">
  <img style="width:100%; height:12rem; object-fit:cover;" :src="'../assets/img/'+ items.gambar"  class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-title fs-7 fw-bold">{{items.nama}}</p>
    <p class=" fs-5">Rp.{{items.harga}}</p>
    <div class="text-end ">
    <router-link :to="'/product/'+items.id" class="btn btn-success ">Add to card</router-link>
    </div>
    </div>
  </div>
</div>
    </div>
    </div>
</template>

<script>
import VueFeather from "vue-feather";
import axios from 'axios'
export default {
name:'Product',

data(){
    return{
        product:[],
        search:[]
    }
},
components:{
  VueFeather
},
methods:{
    productsData(data){
        this.product = data
    },
    searchProduct(){
        axios
        .get('http://localhost:3000/products?q='+this.search)
        .then((response)=>{    
          this.productsData(response.data)
        })
        .catch(function(error){
            console.log(error)
        })

    }
},
mounted(){
    axios
        .get('http://localhost:3000/products/')
        .then((response)=>{    
        this.productsData(response.data) 
        })
        .catch(function(error){
            console.log(error)
        })


}
}




</script>

<style>

</style>