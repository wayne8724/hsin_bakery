<template>
  <NavBar></NavBar>
  <buyProcess :activeStep="activeStep"></buyProcess>
  <div class="checkoutResult">
    <div class="container d-flex flex-column align-items-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">商品圖</th>
            <th scope="col">商品名稱</th>
            <th scope="col" class="text-center">數量</th>
            <th scope="col" class="text-end">單價</th>
            <th scope="col" class="text-end">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="resultPic">
              <img src="../assets/recommend-left.jpg" alt="">
            </td>
            <td>Mark</td>
            <td class="text-center">Mark</td>
            <td class="text-end">500</td>
            <td class="text-end">500</td>
          </tr>
          <tr>
            <td class="resultPic">
              <img src="../assets/recommend-left.jpg" alt="">
            </td>
            <td>Mark</td>
            <td class="text-center">Mark</td>
            <td class="text-end">500</td>
            <td class="text-end">500</td>
          </tr>
          <tr>
            <td class="resultPic">
              <img src="../assets/recommend-left.jpg" alt="">
            </td>
            <td>Mark</td>
            <td class="text-center">Mark</td>
            <td class="text-end">500</td>
            <td class="text-end">500</td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <div class="d-flex justify-content-end">
          <span>小計</span>
          <p>NT$ 300</p>
        </div>
        <div class="d-flex justify-content-end">
          <span>折扣</span>
          <p>80%</p>
        </div>
        <div class="d-flex justify-content-end">
          <span>應付</span>
          <p>NT$ 200</p>
        </div>
      </div>
      <div class="orderInfo">
        <div class="title">訂單資訊</div>
        <div class="content">
          <p>訂單日期： 2023-09-08 13:56:28</p>
          <p>訂單狀態： 未付款</p>
          <p>付款方式：ATM</p>
        </div>
      </div>
      <div class="userInfo">
        <div class="title">送貨資訊</div>
        <div class="content">
          <p>收件人姓名：Wayne</p>
          <p>E-mail： bread@gmail.com</p>
          <p>聯絡電話：0912345788</p>
          <p>收件地址：南投</p>
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
      activeStep: 3,
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
@import '../scss/checkoutResult';
</style>
