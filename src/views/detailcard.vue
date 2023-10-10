<template>
  <div class="d-none d-md-block">
    <div class="d-flex ms-2">
      <div>
        <img
          class="rounded"
          :src="'../assets/img/' + product.gambar"
          style="width: 450px; height: 350px; object-fit: cover"
        />
      </div>
      <div class="ms-4" style="width: 100%">
        <h2 class="">
          {{ product.nama }}
        </h2>
        <h3><strong class="fs-3">Price: </strong>Rp.{{ product.harga }}</h3>
        <div>
          <form v-on:submit.prevent>
            <p style="" class="fw-bold">Jumlah Pesanan</p>
            <div class="input-group flex-nowrap align-items-center">
              <vue-feather type="user-check" class="me-2"></vue-feather>
              <input
                v-model="pesan.order"
                style="width: 250px"
                type="number"
                class="rounded form-control"
                placeholder="Jumlah Pesanan"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <label class="form-label" for="textAreaExample">Caption</label>
            <h1></h1>
            <textarea
              style="height: 100%"
              v-model="pesan.caption"
              class="form-control"
              placeholder="Example: no spicy,does not use mustard"
              id="textAreaExample"
              rows="4"
            ></textarea>
            <div class="">
              <div
                @click="addCard"
                style="width: 100%"
                class="text-center justify-content-center align-items-center d-flex btn btn-success mt-2 me-2"
              >
                <VueFeather type="shopping-cart"></VueFeather>
                <button
                  style="
                    border: none;
                    background-color: transparent;
                    color: white;
                  "
                  class="fw-bold"
                >
                  Add To Card
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4 d-md-none d-sm-block float-center">
    <div class="d-flex justify-content-center">
      <img
        class="rounded justify-content-center"
        :src="'../assets/img/' + product.gambar"
        style="width: 80%; height: 60%; object-fit: cover"
      />
    </div>
    <div class="">
      <h2 class="mt-3 fs-2">
        {{ product.nama }}
      </h2>
      <div>
        <form>
          <p class="fw-bold">Jumlah Pesanan</p>
          <div class="input-group flex-nowrap align-items-center">
            <vue-feather type="user-check" class="me-2"></vue-feather>
            <input
              type="number"
              v-model="pesan.order"
              class="rounded form-control"
              placeholder="Jumlah Pesanan"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <h3><strong>Price: </strong>Rp.{{ product.harga }}</h3>
          <label class="form-label" for="textAreaExample">Caption</label>

          <textarea
            class="form-control"
            v-model="pesan.caption"
            placeholder="Example: no spicy,does not use mustard"
            id="textAreaExample"
            rows="4"
          ></textarea>
        </form>
        <div class="text-end">
          <button @click="addCard" class="btn btn-success mt-2 me-2">
            <VueFeather type="shopping-cart"></VueFeather> Add To Card
          </button>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import 'vue3-toastify/dist/index.css';
import VueFeather from "vue-feather";
import axios from "axios";
export default {
  components: {
    VueFeather,
  },
  data() {
    return {
      product:{},
      pesan: {},
    }
  },
  methods: {
    products(data) {
      this.product = data;
    },
    addCard() {
      if(this.pesan.order){

        this.pesan.allproducts=this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({path:`/cart`}),
            console.log('berhasil')
            alert("Product successfully added to cart")
          })
          .catch((error) => console.log(error));
      }else{
        alert("Please enter the correct input")
      }
    
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => {
        this.products(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>

</style>