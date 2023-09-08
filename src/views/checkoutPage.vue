<template>
  <NavBar></NavBar>
  <div class="checkoutPage">
    <div class="container d-flex justify-content-center">
      <checkoutList></checkoutList>
      <div class="checkoutPageRight">
        <div class="orderSummary">
          <div class="orderSummaryTitle">訂單摘要</div>
          <div class="orderSummaryDetail d-flex justify-content-between pt-3">
            <span class="orderSummaryPrice">小計</span>
            <span class="orderSummaryPrice">NT$ 2700</span>
          </div>
          <div class="orderSummaryDetail d-flex justify-content-between pt-2">
            <span class="orderSummaryCoupon">折扣</span>
            <span class="orderSummaryCoupon">80%</span>
          </div>
          <div class="orderSummaryDetail d-flex justify-content-between pt-3 pb-3">
            <span class="orderSummaryTotal">總計</span>
            <span class="orderSummaryTotal">NT$ 2000</span>
          </div>
        </div>
        <div class="shoppingList">
          <div class="shoppingListTitle">購物清單</div>
          <div class="product d-flex align-items-center">
            <div class="productImg">
              <img src="../assets/recommend-middle.jpg" alt="">
            </div>
            <div class="shoppingListDetail d-flex flex-column justify-content-start">
              <span class="shoppingListName">焦糖瑪卡龍(2)</span>
              <span class="shoppingListPrice">NT$ 2700</span>
            </div>
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
import checkoutList from '@/components/checkoutList.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    NavBar,
    Footer,
    checkoutList,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/checkoutPage';
</style>
