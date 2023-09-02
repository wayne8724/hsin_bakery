<template>
  <div class="footer">
    <div class="top">
      <div class="container">
        <div class="subscribe d-flex justify-content-center align-items-center">
          <p>訂閱我們讓你大呼過癮</p>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-envelope-fill"></i>
            </span>
            <input type="email" aria-label="email" class="form-control inputEmail">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <div class="connect d-flex justify-content-between">
          <div class="connectLeft d-flex flex-column">
            <div class="logo">
              <img src="../assets/logo.png" alt="logo">
            </div>
            <div class="contactInformation">
              <p>07-1234-5678<br>sweetaste@email.com <br>800&ensp;高雄市新興區幸福路 520 號</p>
            </div>
            <div class="social">
              <a href="#"><i class="bi bi-facebook"></i>1</a>
              <a href="#"><i class="bi bi-instagram"></i>2</a>
            </div>
          </div>
          <div class="connectRight d-flex flex-column justify-content-between">
            <div class="title ms-auto">
              <p>今天是個，</p>
              <p>大呼過癮的好日子。</p>
            </div>
            <div class="copyRight">© 2023 Hsin's Bakery* All Rights Reserved (練習用)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/Footer.scss';
</style>
