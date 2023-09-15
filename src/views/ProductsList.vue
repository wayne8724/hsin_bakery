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
            placeholder="請輸入商品名稱或關鍵字" aria-label="Search" aria-describedby="search-button"
            v-model="searchValue"
            @input="updateProducts"
            @keydown.enter.prevent="updateProducts">
            <button class="btn searchBtn"
            type="button" id="search-button"
            @click.prevent="updateProducts"
            >搜尋</button>
          </div>
          <div class="btn-group-vertical" role="group" aria-label="Basic example">
            <span class="btn-group-text">甜點類別</span>
            <button type="button" class="btn btn-primary"
            @click.prevent="getProducts(0)"
            :class="{'active': this.categoryStatus === 0}">所有商品</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterBread(1)"
            :class="{'active': this.categoryStatus === 1}">麵包</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterToast(2)"
            :class="{'active': this.categoryStatus === 2}">吐司</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterCake(3)"
            :class="{'active': this.categoryStatus === 3}">蛋糕</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterMoonCake(4)"
            :class="{'active': this.categoryStatus === 4}">月餅</button>
          </div>
        </div>
        <div class="rightList d-flex align-items-start">
          <div class="card" v-for="item in temProducts" :key="item.id">
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
              <a class="page-link" href="#" aria-label="previous"
              @click.prevent="getProducts(pagination.current_page - 1)"
              :class="{'paginationDisable': pagination.current_page = 1}">
                <i class="bi bi-caret-left-fill"></i>
              </a>
            </li>
            <li class="page-item" v-for="page in pagination.total_pages" :key="page">
              <a class="page-link middle" href="#" @click.prevent="getProducts(page)"
              :class="{'paginationActive': page === pagination.current_page }">{{ page }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="previous"
              @click.prevent="getProducts(pagination.current_page + 1)"
              :class="{'paginationDisable': pagination.current_page = pagination.total_pages}">
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
      searchValue: '',
      temProducts: {},
      categoryStatus: 0,
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
    async getProducts(categoryStatus, page = 1) {
      try {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
        const response = await this.$http.get(url);
        console.log(response.data);
        this.allProducts = response.data.products;
        this.pagination = response.data.pagination;
        this.temProducts = response.data.products;
        this.categoryStatus = categoryStatus;
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
    updateProducts() {
      const filterData = this.allProducts.filter((item) => item.title.includes(this.searchValue));
      console.log(filterData);
      this.temProducts = filterData;
    },
    filterBread(categoryStatus) {
      const filterData = this.allProducts.filter((item) => item.category.includes('麵包'));
      console.log(filterData);
      this.temProducts = filterData;
      this.categoryStatus = categoryStatus;
    },
    filterToast(categoryStatus) {
      const filterData = this.allProducts.filter((item) => item.category.includes('吐司'));
      console.log(filterData);
      this.temProducts = filterData;
      this.categoryStatus = categoryStatus;
    },
    filterMoonCake(categoryStatus) {
      const filterData = this.allProducts.filter((item) => item.category.includes('月餅'));
      console.log(filterData);
      this.temProducts = filterData;
      this.categoryStatus = categoryStatus;
    },
    filterCake(categoryStatus) {
      const filterData = this.allProducts.filter((item) => item.category.includes('蛋糕'));
      console.log(filterData);
      this.temProducts = filterData;
      this.categoryStatus = categoryStatus;
    },
  },
  created() {
    this.getProducts(0);
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_ProductsList.scss'
</style>
