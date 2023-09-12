<template>
  <NavBar />

  <body>
    <!-- Banner -->
    <div class="banner">
      <div class="innerBanner container">
        <div class="HomeBannerTitle">
          <img src="../assets/logo.png" alt="logo">
          <p>快來買魔幻麵包</p>
          <p>深入海馬迴的美味</p>
        </div>
        <div id="HomeBanner" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src="../assets/banner-1.jpg" class="d-block w-100" alt="Banner-1">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="../assets/banner-2.jpg" class="d-block w-100" alt="Banner-2">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="../assets/banner-3.jpg" class="d-block w-100" alt="Banner-3">
            </div>
          </div>
          <button class="carousel-control-prev"
          type="button" data-bs-target="#HomeBanner" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next"
          type="button" data-bs-target="#HomeBanner" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <!-- banner下面三個推薦格 -->
        <div class="HomeBannerRecommend d-flex justify-content-center align-items-center">
          <div class="innerRecommend left">
            <p @click="goAnchor('#selection')"
            @keydown="goAnchor('#selection')">本日精選</p>
          </div>
          <div class="innerRecommend middle">
            <router-link to="/products" class="selectionLink">商品一欄</router-link>
          </div>
          <div class="innerRecommend right" @click="openCouponModal"
          @keydown="openCouponModal"><p>優惠領取</p></div>
        </div>
      </div>
    </div>
    <!-- intro -->
    <div class="intro">
      <div class="introTop">
        <div class="introBGC">
          <div class="container">
            <div class="row d-flex justify-content-evenly rowNoMargin">
              <div class="col-lg-6 d-flex mx-auto">
                <img src="../assets/intro-top.jpg" alt="">
              </div>
              <div class="col-lg-6
              introContent d-flex justify-content-between flex-lg-row-reverse">
                <div class="introTitle d-flex flex-column">
                  <p>為什麼，</p>
                  <p class="titleFix">要買我們的產品？</p>
                </div>
                <div class="introRwdPic"></div>
                <div class="introText d-flex flex-row
                justify-content-center mx-auto">
                  <p>因為便宜，<br>因為多樣，<br>因為美味，
                    <br>因為上癮。<br class="space"><br class="space">第一口好吃，
                    <br>第二口繼續吃。<br>第三口我還要吃。<br>第四口快買給我吃。<br>第五口快讓我不停地吃。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="introMiddle">
        <div class="introBGC">
          <div class="container">
            <div class="row d-flex justify-content-evenly rowNoMargin">
              <div class="col-lg-6
              introContent d-flex justify-content-between flex-lg-row-reverse">
                <div class="introTitle d-flex flex-column">
                  <p>為什麼，</p>
                  <p class="titleFix">我們的產品受歡迎？</p>
                </div>
                <div class="introRwdPic"></div>
                <div class="introText middleIntroTextMargin d-flex flex-row
                justify-content-center">
                  <p>因為，<br><br><br>我們，<br><br><br>加了<span>大麻</span>。</p>
                </div>
              </div>
              <div class="col-lg-6 d-flex mx-auto mt-1">
                <img src="../assets/intro-middle.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="introBottom">
        <div class="container">
          <div class="introBottomTitle mx-auto">
            <p class="introTitle">所以，</p>
            <p class=" introTitle titleFix">快來買魔幻麵包。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- selection -->
    <div class="selection" id="selection">
      <div class="container">
        <div class="row selectionCardGap d-flex justify-content-between">
          <div class="selectionCard selectionLeft col-lg-4 d-flex
          flex-column justify-content-between align-items-center">
            <div class="selectionPic left">
              <i class="bi bi-heart"></i>
            </div>
            <div class="selectionNamePrice d-flex
            flex-row justify-content-between align-items-center">
              <p class="name">焦糖馬卡龍</p>
              <p class="price">NT$450</p>
            </div>
            <div class="selectionAddToCart">
              <a href="#">加入購物車</a>
            </div>
          </div>
          <div class="selectionCard selectionMiddle col-lg-4 d-flex
          flex-column justify-content-between align-items-center">
            <div class="selectionPic middle">
              <i class="bi bi-heart"></i>
            </div>
            <div class="selectionNamePrice">
              <div class="selectionName d-flex
            flex-row justify-content-between align-items-center">
              <p class="name">焦糖馬卡龍</p>
              <p class="price">NT$450</p>
              </div>
            </div>
            <div class="selectionAddToCart">
              <a href="#">加入購物車</a>
            </div>
          </div>
          <div class="selectionCard selectionRight col-lg-4 d-flex
          flex-column justify-content-between align-items-center">
            <div class="selectionPic right">
              <i class="bi bi-heart"></i>
            </div>
            <div class="selectionNamePrice">
              <div class="selectionName d-flex
            flex-row justify-content-between align-items-center">
              <p class="name">焦糖馬卡龍</p>
              <p class="price">NT$450</p>
              </div>
            </div>
            <div class="selectionAddToCart">
              <a href="#">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

  <Footer></Footer>

  <couponModal ref="couponModal"></couponModal>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import couponModal from '@/components/couponModal.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    couponModal,
  },
  methods: {
    goAnchor(selector) {
      document.querySelector(selector).scrollIntoView({
        behavior: 'smooth',
      });
    },
    openCouponModal() {
      this.$refs.couponModal.showModal();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_Home.scss';
</style>
