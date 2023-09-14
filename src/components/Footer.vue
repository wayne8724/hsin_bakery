<template>
  <div class="footer">
    <div class="top">
      <div class="container">
        <VForm class="subscribe d-flex
        justify-content-center align-items-center" v-slot="{ errors }"
        @submit="subscribe">
          <p>訂閱我們讓你大呼過癮</p>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-envelope-fill"></i>
            </span>
            <VField type="email"
            aria-label="email" class="form-control
            inputEmail" id="email" name="email"
            placeholder="請輸入 Email"
            rules="email" :class="{ 'is-invalid': errors['email']}"
            v-model="emailValue"
            ></VField>
            <button class="btn" type="button"
            @click="subscribe" :disabled="errors['email']||!emailValue" tabindex="auto">
              <i class="bi bi-arrow-right"></i>
            </button>
            <ErrorMessage class="invalid-feedback" name="email"></ErrorMessage>
          </div>
        </VForm>
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
              <p>049-2241041<br>timeless.smile@gmail.com <br>540&ensp;南投縣南投市祖祠路 3 號</p>
            </div>
            <div class="social">
              <a href="https://www.facebook.com/profile.php?id=100068239142124" target="_blank"><i class="bi bi-facebook"></i>1</a>
              <a href="https://www.instagram.com/weihsin24/" target="_blank"><i class="bi bi-instagram"></i>2</a>
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
  data() {
    return {
      emailValue: '',
    };
  },
  methods: {
    subscribe() {
      if (this.emailValue) {
        this.$toast.fire({
          title: '訂閱成功！',
          icon: 'success',
          position: 'center',
          width: 220,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/Footer.scss';
</style>
