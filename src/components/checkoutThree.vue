<template>
  <div class="checkoutPageLeft">
    <div class="form">
      <div class="title d-flex justify-content-between">
        <div class="titleText">運送</div>
        <div class="titleBar d-flex align-items-center">
          <div class="circle first"></div>
          <div class="line"></div>
          <div class="circle second"></div>
          <div class="line"></div>
          <div class="circle third"></div>
        </div>
      </div>
      <div class="name">
        <label for="name">姓名
          <input type="text" class="form-control" placeholder="吳寶春" aria-label="Username" aria-describedby="basic-addon1"
            id="name">
        </label>
      </div>
      <div class="phone">
        <label for="tel">電話
          <input type="tel" class="form-control" placeholder="0912345678" aria-label="Username"
            aria-describedby="basic-addon1" id="tel">
        </label>
      </div>
      <div class="address">
        <label for="address">地址
          <input type="text" class="form-control" placeholder="100台北市中正區重慶南路一段122號" aria-label="Username"
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
@import '../scss/checkoutThree';
</style>
