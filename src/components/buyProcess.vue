<template>
  <div class="buyProcess">
      <div class="container d-flex justify-content-center p-5">
        <div class="step one">
          <span :class="{active: activeStep === 1}">1</span>
          <p>確認數量</p>
        </div>
        <div class="step two" :class="{active: activeStep === 2}">
          <span :class="{active: activeStep === 2}">2</span>
          <p>填寫購物資訊</p>
        </div>
        <div class="step three" :class="{active: activeStep === 3}">
          <span :class="{active: activeStep === 3}">3</span>
          <p>完成</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    activeStep: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/buyProcess.scss';
</style>
