<template>
  <NavBar></NavBar>
  <div class="login">
    <div class="container d-flex justify-content-center">
      <form class="d-flex justify-content-center flex-column
      align-items-start">
        <div class="loginTitle mx-auto">
          管理系統登入
        </div>
        <div class="email mb-3 mx-auto">
          <label for="email" class="form-label">
            <i class="bi bi-person-fill"></i>
            <input type="email" class="form-control"
            id="email" aria-describedby="emailHelp" name="email" placeholder="電子信箱">
          </label>
        </div>
        <div class="password mb-3 mx-auto">
          <label for="password" class="form-label">
            <i class="bi bi-key-fill"></i>
            <input type="password" class="form-control " id="password" name="password"
            placeholder="請輸入使用者密碼">
          </label>
        </div>
        <div class="form-check mx-auto">
          <label class="form-check-label" for="checkbox">記住我
            <input type="checkbox" class="form-check-input" id="checkbox" name="checkbox">
          </label>
        </div>
        <button type="submit" class="btn btn-primary loginBtn">登入</button>
      </form>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/LoginPage';
</style>
