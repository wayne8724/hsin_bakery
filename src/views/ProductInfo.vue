<template>
  <NavBar></NavBar>
  <div class="productInfo">
    <div class="container p-5">
      <div class="row">
        <div class="path">
          <router-link to="/" class="pathA">首頁</router-link>
          <span> > </span>
          <router-link to="/products" class="pathA">商品列表</router-link>
          <span> > </span>
          <span class="productSpan">大麻麵包</span>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="infoLeft col-lg-6 col-md-12 d-flex justify-content-center">
          <img src="../assets/recommend-middle.jpg" alt="" class="img-fluid mb-3">
        </div>
        <div class="infoRight col-lg-6 col-md-12">
          <h3 class="mb-3">
            大麻麵包
            <span class="favorite">
              <i class="bi bi-heart"></i>
            </span>
          </h3>
          <p class="px-2 mb-3">綠豆椪，是一道古老而珍貴的中式點心。
            它以綠豆為主要成分，經過精細磨製、糖調製和製作而成。
            綠豆椪有著柔軟的口感和清香的味道，是一種兼具甜美和營養的美食。這道點心適合作為下午茶點，也是慶祝節日或特殊場合的佳品。</p>
          <div class="countBox d-flex align-items-center">
            <div class="priceBox text-center">
              <span class="category">麵包</span>
              <p class="price">售價：150元</p>
            </div>
            <div class="addCart text-center">
              <div class="count">
                <label for="count">數量：
                  <select name="count" id="count">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  個
                </label>
              </div>
              <button type="button" class="addCartBtn btn">
                加到購物車
              </button>
            </div>
          </div>
          <p class="total mb-3 text-end">
            總計：
            <span>100元</span>
          </p>
        </div>
      </div>
    </div>
  </div>
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
};
</script>

<style lang="scss" scoped>
@import '../scss/_ProductInfo.scss'
</style>
