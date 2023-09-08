<template>
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
          <input type="tel" class="form-control" placeholder="0912345678" aria-label="tel"
            aria-describedby="tel" id="tel">
        </label>
      </div>
      <div class="email">
        <label for="email">電子信箱
          <input type="email" class="form-control" placeholder="bread@gmail.com" aria-label="email"
            aria-describedby="email" id="email">
        </label>
      </div>
      <div class="address">
        <label for="address">地址
          <input type="text" class="form-control"
          placeholder="100台北市中正區重慶南路一段122號" aria-label="address"
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
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/checkoutList.scss';
</style>
