<template>
  <NavBar></NavBar>
  <buyProcess :activeStep="activeStep"></buyProcess>
  <div class="checkoutPage">
    <div class="container d-flex justify-content-center">
      <div class="checkoutPageLeft">
        <div class="form">
          <div class="title d-flex justify-content-between">
            <div class="titleText">訂單資訊</div>
          </div>
          <div class="name">
            <label for="name">姓名
              <input type="text" class="form-control"
              placeholder="朱小新" aria-label="Username" aria-describedby="Username"
                id="name">
            </label>
          </div>
          <div class="phone">
            <label for="tel">電話
              <input type="tel"
              class="form-control" placeholder="0912345678" aria-label="tel" aria-describedby="tel"
                id="tel">
            </label>
          </div>
          <div class="email">
            <label for="email">電子信箱
              <input type="email"
              class="form-control" placeholder="bread@gmail.com" aria-label="email"
                aria-describedby="email" id="email">
            </label>
          </div>
          <div class="address">
            <label for="address">地址
              <input type="text"
              class="form-control" placeholder="100台北市中正區重慶南路一段122號" aria-label="address"
                aria-describedby="address" id="address">
            </label>
          </div>
          <div class="pay">
            <label for="pay" class="d-flex flex-column">付款方式
              <select class="pay" aria-label="pay" id="pay" name="pay">
                <option selected>請選擇付款方式</option>
                <option value="1">WebATM</option>
                <option value="2">ATM</option>
                <option value="3">信用卡</option>
                <option value="4">LinePay</option>
                <option value="5">ApplePay</option>
                <option value="6">GooglePay</option>
              </select>
            </label>
          </div>
          <div class="message">
            <label for="message">備註
              <textarea name="message" class="form-control" id="message"></textarea>
            </label>
          </div>
        </div>
        <router-link to="/result" class="nextStep">
          確認付款
        </router-link>
      </div>
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
import buyProcess from '@/components/buyProcess.vue';

export default {
  data() {
    return {
      activeStep: 2,
    };
  },
  components: {
    NavBar,
    Footer,
    buyProcess,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/checkoutPage';
</style>
