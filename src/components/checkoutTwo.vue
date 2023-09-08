<template>
  <div class="checkoutPageLeft">
    <div class="form">
      <div class="title d-flex justify-content-between">
        <div class="titleText">付款</div>
        <div class="titleBar d-flex align-items-center">
          <div class="circle first"></div>
          <div class="line"></div>
          <div class="circle second"></div>
          <div class="line"></div>
          <div class="circle third"></div>
        </div>
      </div>
      <div class="name">
        <label for="name">信用卡卡號
          <input type="text" class="form-control"
          placeholder="0000-0000-0000-0000" aria-label="cardNum" aria-describedby="cardNum"
            id="name">
        </label>
      </div>
      <div class="phone">
        <label for="tel">持卡人姓名
          <input type="tel" class="form-control" placeholder="0912345678" aria-label="Username"
            aria-describedby="basic-addon1" id="tel">
        </label>
      </div>
      <div class="address">
        <label for="address">有效期限
          <input type="text" class="form-control"
          placeholder="100台北市中正區重慶南路一段122號" aria-label="Username"
            aria-describedby="basic-addon1" id="address">
        </label>
      </div>
      <div class="address">
        <label for="address">背面末三碼
          <input type="text" class="form-control"
          placeholder="100台北市中正區重慶南路一段122號" aria-label="Username"
            aria-describedby="basic-addon1" id="address">
        </label>
      </div>
    </div>
    <button type="submit" class="nextStep">下一步</button>
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
@import '../scss/checkoutTwo';
</style>
