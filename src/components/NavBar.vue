<template>
  <nav class="navbar navbar-expand-md navbar-light bg-primary">
    <div class="container">
      <a class="navbar-brand mx-auto" href="#" aria-label="前往首面">
        <img src="../assets/logo.png" alt="logo" class="logo-image">
      </a>
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse"
      id="navbarNav">
      <!-- d-md-flex justify-content-md-end -->
        <ul class="menu navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">商品</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">登入</a>
          </li>
        </ul>
        <ul class="icon navbar-nav ">
          <li class="nav-item">
            <a class="nav-link" href="" aria-label="購物車">
              <i class="bi bi-cart4"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../scss/_NavBar.scss';
</style>
