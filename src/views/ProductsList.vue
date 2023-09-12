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
          <div class="card">
            <button @click="productInfo" class="imgBtn">
              <img src="../assets/selection-left.jpg" class="card-img-top" alt="...">
            </button>
            <div class="card-body">
              <div class="card-title d-flex">
                <p class="name">焦糖瑪卡龍</p>
                <p class="price">NT$ 450</p>
              </div>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
          <div class="card">
            <button @click="productInfo" class="imgBtn">
              <img src="../assets/selection-left.jpg" class="card-img-top" alt="...">
            </button>
            <div class="card-body">
              <div class="card-title d-flex">
                <p class="name">焦糖瑪卡龍</p>
                <p class="price">NT$ 450</p>
              </div>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
          <div class="card">
            <button @click="productInfo" class="imgBtn">
              <img src="../assets/selection-left.jpg" class="card-img-top" alt="...">
            </button>
            <div class="card-body">
              <div class="card-title d-flex">
                <p class="name">焦糖瑪卡龍</p>
                <p class="price">NT$ 450</p>
              </div>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
          <div class="card">
            <button @click="productInfo" class="imgBtn">
              <img src="../assets/selection-left.jpg" class="card-img-top" alt="...">
            </button>
            <div class="card-body">
              <div class="card-title d-flex">
                <p class="name">焦糖瑪卡龍</p>
                <p class="price">NT$ 450</p>
              </div>
              <a href="#" class="btn btn-primary">加入購物車</a>
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
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_ProductsList.scss'
</style>
