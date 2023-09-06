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
        <ul class="menu navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">登入</router-link>
          </li>
        </ul>
        <ul class="icon navbar-nav ">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">
              <i class="bi bi-cart4"></i>
            </router-link>
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
