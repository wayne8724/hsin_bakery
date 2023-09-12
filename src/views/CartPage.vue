<template>
  <NavBar></NavBar>
  <buyProcess :activeStep="activeStep"></buyProcess>
  <div class="cart">
    <div class="container d-flex justify-content-between">
      <div class="leftCart">
        <div class="leftCartTitle">您的購物車</div>
        <div class="leftCartProduct d-flex align-items-center
        justify-content-between">
          <div class="pic">
            <img src="../assets/recommend-left.jpg" alt="pic">
          </div>
          <div class="productInfo">
            <div class="name">焦糖瑪卡龍</div>
            <div class="price">NT$ 450</div>
          </div>
          <div class="btn-group amountGroup" role="group" aria-label="btn">
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-dash"></i>
            </button>
            <div class="amount d-flex align-items-center">
              <span class="amountText">1</span>
            </div>
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-plus"></i>
            </button>
          </div>
          <div class="total">NT$ 900</div>
          <button type="button" class="delete
          btn btn-outline-secondary">
            <i class="bi bi-trash"></i>
          </button>
        </div>
        <div class="leftCartProduct d-flex align-items-center
        justify-content-between">
          <div class="pic">
            <img src="../assets/recommend-left.jpg" alt="pic">
          </div>
          <div class="productInfo">
            <div class="name">焦糖瑪卡龍</div>
            <div class="price">NT$ 450</div>
          </div>
          <div class="btn-group amountGroup" role="group" aria-label="btn">
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-dash"></i>
            </button>
            <div class="amount d-flex align-items-center">
              <span class="amountText">1</span>
            </div>
            <button type="button" class="btn btn-outline-secondary">
              <i class="bi bi-plus"></i>
            </button>
          </div>
          <div class="total">NT$ 900</div>
          <button type="button" class="delete
          btn btn-outline-secondary">
            <i class="bi bi-trash"></i>
          </button>
        </div>

      </div>
      <div class="rightCart">
        <div class="rightCartBgc">
          <div class="rightCartTitle">訂單摘要</div>
          <div class="rightCartDetail d-flex justify-content-between pt-3">
            <span class="rightCartPrice">小計</span>
            <span class="rightCartPrice">NT$ 2700</span>
          </div>
          <div class="rightCartDetail d-flex justify-content-between pt-2">
            <span class="rightCartCoupon">折扣</span>
            <span class="rightCartCoupon">80%</span>
          </div>
          <div class="rightCartDetail d-flex justify-content-between pt-3 pb-3">
            <span class="rightCartTotal">總計</span>
            <span class="rightCartTotal">NT$ 2000</span>
          </div>
          <div class="checkOutBtn">
            <button type="button" class=" checkoutBtn btn" @click="checkoutPage()">結帳</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import buyProcess from '@/components/buyProcess.vue';

export default {
  data() {
    return {
      activeStep: 1,
    };
  },
  components: {
    NavBar,
    Footer,
    buyProcess,
  },
  methods: {
    checkoutPage() {
      this.$router.push('/checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/CartPage.scss';
</style>
