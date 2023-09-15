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
            @input="searchProducts"
            @keydown.enter.prevent="searchProducts">
            <button class="btn searchBtn"
            type="button" id="search-button"
            @click.prevent="searchProducts"
            >搜尋</button>
          </div>
          <div class="btn-group-vertical" role="group" aria-label="Basic example">
            <span class="btn-group-text">商品篩選</span>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterProducts(0)"
            :class="{'active': this.categoryStatus === 0}">所有商品</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterProducts(1, '麵包')"
            :class="{'active': this.categoryStatus === 1}">麵包</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterProducts(2, '吐司')"
            :class="{'active': this.categoryStatus === 2}">吐司</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterProducts(3, '蛋糕')"
            :class="{'active': this.categoryStatus === 3}">蛋糕</button>
            <button type="button" class="btn btn-primary"
            @click.prevent="filterProducts(4, '月餅')"
            :class="{'active': this.categoryStatus === 4}">月餅</button>
          </div>
        </div>
        <div class="rightList d-flex align-items-start" v-if="this.temProducts.length > 0">
          <div class="card" v-for="item in temProducts" :key="item.id"
          >
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
        <div v-else class="mx-auto fs-3">
            <p>您輸入之商品不存在，請重新搜尋。</p>
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
    async getProducts(page = 1) {
      try {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
        const response = await this.$http.get(url);
        console.log(response.data);
        this.allProducts = response.data.products;
        this.pagination = response.data.pagination;
        this.temProducts = response.data.products;
        this.searchValue = '';
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
    searchProducts() {
      const filterData = this.allProducts.filter((item) => item.title.includes(this.searchValue));
      this.temProducts = filterData;
      this.categoryStatus = '';
    },
    filterProducts(categoryStatus, category) {
      if (categoryStatus === 0) {
        this.temProducts = this.allProducts;
        this.categoryStatus = 0;
        this.searchValue = '';
      } else {
        const filterData = this.allProducts.filter((item) => item.category.includes(category));
        this.temProducts = filterData;
        this.categoryStatus = categoryStatus;
        this.searchValue = '';
      }
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
