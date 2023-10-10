<template> 
<div v-if="keranjangs.length != 0">
<div  class="table-responsive mt-3 d-none d-md-block">
  <div style="color:black;" class="d-flex justify-content-end  align-items-center bg-white">
    <VueFeather style="width:32px;" type="shopping-bag"></VueFeather>
    <span class="me-4"><strong>{{keranjangs.length}}</strong></span>
    </div>
<table class="table">
  <thead>
    <tr>
    <th>#</th>
    <th>Product</th>
    <th>Name</th>
    <th>Price</th>
    <th>Amount</th>
    <th>Caption</th>
    <th>Total Price</th>
    <th>Delete</th>
    </tr>
  </thead>
  <tbody >
    <tr class="" v-for="(keranjang,index) in keranjangs" :key="keranjang.id">
      <th scope="row">{{index+1}}</th>
      <td><img 
      class="rounded"
      style="width:150px; object-fit:contain;"
      :src="'../assets/img/'+keranjang.allproducts.gambar" ></td>
      <td>{{keranjang.allproducts.nama}}</td>
      <td>{{keranjang.order}}</td>
      <td>{{keranjang.allproducts.harga}}</td>
      <td>{{keranjang.caption ? keranjang.caption :"-"}}</td>
      <td>{{keranjang.allproducts.harga*keranjang.order}}</td>
      <td><button @click="deleteCart(keranjang.id)" type="button" class="btn btn-danger d-flex align-items-center"><VueFeather type="trash-2"></VueFeather></button></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><strong>Total Price:</strong></td>
      <td>Rp. {{totalHarga}}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><button class="btn btn-success" @click="ChecoutDiv()">Checkout</button></td>
    </tr>
  </tbody>
</table>

</div>
<!-- Handphone -->
<div  class=" mt-3 d-md-none d-sm-block">
  <div style="color:black;" class="d-flex justify-content-end  align-items-center ">
    <VueFeather style="width:32px;" type="shopping-bag"></VueFeather>
    <span class="me-4"><strong>{{keranjangs.length}}</strong></span>
    </div>
<table >
  <tbody >
    <div class="row" v-for="(keranjang,index) in keranjangs" :key="keranjang.id">
      <div class="d-flex mt-4">
      <h3 class="me-3">{{index+1}}.</h3>
      <img style="width:120px;object-fit:contain;" class="rounded rounded-3" :src="'../assets/img/'+keranjang.allproducts.gambar">
      <div class="ms-2">
        <h5 class="">{{keranjang.allproducts.nama}}</h5>
        <p>Amount: {{keranjang.order}}</p> <span>Total Price: {{keranjang.allproducts.harga*keranjang.order}}</span>
        <button @click="deleteCart(keranjang.id)" type="button" class="btn btn-danger d-flex align-items-center"><VueFeather type="trash-2"></VueFeather></button>
      </div>
      </div>
      <p>Caption: {{keranjang.caption ? keranjang.caption : '-' }}</p>
    </div>
    <button class="btn btn-success" @click="ChecoutDiv()">Checkout</button>
  </tbody>
</table>

</div>
<div v-if="!isHidden" class="position-absolute d-md-none d-sm-block" style="overflow:scrolll; left:0;;top:0;width:200%;height:100vh;background-color:rgba(48, 46, 47, 0.51);">

<div  style= "color:black; z-index:10; border-radius:10px; width:;height:40vh;border:2px solid wheat;  background-color:white;top:40%;right:50%;" class="position-absolute">
<div class="text-end  text-danger me-4 mt-2">
  <VueFeather @click="ChecoutDiv()" type="x"></VueFeather>
</div>
<div style="width:250px;" class=" d-flex align-items-center input-group mt-2 mb-3">
  <VueFeather type="users" class="me-1"></VueFeather><input type="text" v-model="pesan.nama" class="rounded form-control" placeholder="Enter Your Name" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div style="width:250px;" class=" d-flex align-items-center input-group mb-3">
  <VueFeather type="clipboard" class="me-1"></VueFeather><input v-model="pesan.meja" type="text" class="rounded form-control" placeholder="Input Table Number" aria-label="Recipient's username" aria-describedby="basic-addon2">
</div>
<div class=" text-dark">
   <p><strong>Total Price:Rp {{totalHarga}}</strong></p>
   <p><strong>Total number of items:{{keranjangs.length}}</strong></p>
</div>
<div class="d-flex justify-content-end me-2">
   <button class="btn btn-success" @click="Checkout()">Checkout</button>
</div>
</div>
</div>
<!-- !ChecoutDiv Actiom desktop-->
<div v-if="!isHidden" class="position-absolute d-none d-md-block" style="left:0;;top:0;width:200%;height:100vh;background-color:rgba(48, 46, 47, 0.51);">
<div  style= "color:black; z-index:10; border-radius:10px; width:125vh;height:100%auto;border:2px solid wheat;  background-color:white;top:40%;right:60%;" class="position-absolute">
<div class="text-end  text-danger me-4 mt-2">
  <VueFeather @click="ChecoutDiv()" type="x"></VueFeather>
</div>
<div style="width:400px;" class=" d-flex align-items-center input-group mt-2 mb-3">
  <VueFeather type="users" class="me-1"></VueFeather><input type="text" v-model="pesan.nama" class="rounded form-control" placeholder="Enter Your Name" aria-label="Username" aria-describedby="basic-addon1">
</div>

<div style="width:400px;" class=" d-flex align-items-center input-group mb-3">
  <VueFeather type="clipboard" class="me-1"></VueFeather><input v-model="pesan.meja" type="text" class="rounded form-control" placeholder="Input Table Number" aria-label="Recipient's username" aria-describedby="basic-addon2">
</div>
<div class=" text-dark">
   <p><strong>Total Price:Rp {{totalHarga}}</strong></p>
   <p><strong>Total number of items:{{keranjangs.length}}</strong></p>
</div>
<div class="d-flex justify-content-end me-2">
   <button class="btn btn-success" @click="Checkout()">Checkout</button>
</div>
</div>
</div>
</div>
<div v-else class="text-center">
  <h1>Please order something</h1>
  <img style="width:250px;border-radius:50px;" :src="'../assets/img/'+this.gambar">
</div>
</template>

<script>
import VueFeather from "vue-feather";
import axios from 'axios'
export default {
  data(){
    return{
      gambar:'animeorder.jpg',
      pesan:{},
      keranjangs:[],
      isHidden:true,
    }
  },

  components:{
    VueFeather,
  },
  methods: {
    keranjangsAmount(data){
      this.keranjangs = data
    },
   CartData(){
          this.$emit('CartUpdate',this.keranjangs)
        },
    deleteCart(id){
        axios
      .delete("http://localhost:3000/keranjangs/"+id)
      .then(() => {
        alert("Product Successfully deleted")
            axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        this.keranjangsAmount(response.data)
        this.$emit('GoData',this.keranjangs)
      })  
      .catch(function (error) {
        console.log(error);
      });
      })
            .catch(function (error) {
        console.log(error);
      });
    },
   ChecoutDiv(){
    this.isHidden =!this.isHidden

    },
    Checkout(){
    

    
      if(this.pesan.nama && this.pesan.meja ){
          this.pesan.keranjangs = this.keranjangs;
       axios
      .post("http://localhost:3000/pesanans",this.pesan)
      .then(() => {
        this.keranjangs.map(function(item){
          return axios
          .delete("http://localhost:3000/keranjangs/"+ item.id)
          .catch(function (error) {
        console.log(error)})
        });
        this.$router.push({path:'/success'})
        alert('Your order was successfully placed')
      })  
      .catch(function (error) {
        console.log(error);
      });
      }
      else
        alert('Please enter the correct name and table number or order something')
    }
    }
  ,
  mounted(){
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        this.keranjangsAmount(response.data)
      })  
      .catch(function (error) {
        console.log(error);
      });
 
    },
    computed:{
      totalHarga(){
        return this.keranjangs.reduce(function(items,data){
          return items+data.allproducts.harga*data.order
        },0)
      }
      

          },
}
    


</script>

<style>

</style>