<template>
  <NavBar></NavBar>

  <body>
    <div class="productsListBanner">
      <div class="container">
        <img src="../assets/banner-1.jpg" alt="banner">
      </div>
    </div>
    <div class="productsList">
      <div class="container d-flex justify-content-lg-between flex-lg-row flex-column">
        <div class="leftList">
          <div class="input-group mb-3">
            <input type="text"
            class="form-control searchInput"
            placeholder="搜尋" aria-label="Search" aria-describedby="search-button">
            <button class="btn searchBtn"
            type="button" id="search-button">搜尋</button>
          </div>
          <div class="btn-group-vertical" role="group" aria-label="Basic example">
            <span class="btn-group-text">甜點類別</span>
            <button type="button" class="btn btn-primary">所有商品</button>
            <button type="button" class="btn btn-primary">麵包</button>
            <button type="button" class="btn btn-primary">吐司</button>
            <button type="button" class="btn btn-primary">蛋糕</button>
            <button type="button" class="btn btn-primary">月餅</button>
          </div>
        </div>
        <div class="rightList d-flex flex-row justify-content-center">
          <div class="card" v-for="item in allProducts" :key="item.id">
            <button @click="productInfo" class="imgBtn">
              <img :src="item.imageUrl" class="card-img-top" alt="...">
            </button>
            <div class="card-body">
              <div class="card-title d-flex">
                <p class="name">{{ item.title }}</p>
                <p class="price">NT$ {{ item.price }}</p>
              </div>
              <button class="btn btn-primary"  @click="addToCart(item)">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="productsPagination">
      <div class="container">
        <nav aria-label="..." class="d-flex justify-content-lg-end justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="previous">
                <i class="bi bi-caret-left-fill"></i>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item" aria-current="page">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="previous">
                <i class="bi bi-caret-right-fill"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </body>
  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      allProducts: {},
      pagination: {},
    };
  },
  components: {
    NavBar,
    Footer,
  },
  methods: {
    productInfo() {
      this.$router.push('/product');
    },
    async getProducts() {
      try {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
        const response = await this.$http.get(url);
        console.log(response.data);
        this.allProducts = response.data.products;
        this.pagination = response.data.pagination;
      } catch (error) {
        console.log(error);
      }
    },
    async addToCart(item) {
      try {
        const cartData = {
          product_id: item.id,
          qty: 1,
        };
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
        const response = await this.$http.post(url, { data: cartData });
        if (response) {
          this.$toast.fire({
            title: `${item.title}已加入購物車！`,
            icon: 'success',
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_ProductsList.scss'
</style>
