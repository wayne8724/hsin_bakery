<template>
  <NavBar></NavBar>

  <body>
    <div class="productsListBanner">
      <div class="container">
        <img src="../assets/banner-1.jpg" alt="banner">
      </div>
    </div>
    <div class="productsList">
      <div class="container d-flex justify-content-between">
        <div class="leftList">
          <div class="btn-group-vertical" role="group" aria-label="Basic example">
            <span class="btn-group-text">123</span>
            <button type="button" class="btn btn-primary">Left</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
            <button type="button" class="btn btn-primary">Right</button>
          </div>
        </div>
        <div class="rightList">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <img src="../assets/selection-middle.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../assets/selection-middle.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a l</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../assets/selection-middle.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is
                    content.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src="../assets/selection-middle.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
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

<style lang="scss" scoped>@import '../scss/_ProductsList.scss'</style>
