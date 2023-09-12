<template>
  <div class="modal fade" id="couponModal"
  aria-hidden="true" aria-labelledby="couponModalLabel"
    tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="couponModalLabel1" v-if="this.copyStatus === true">恭喜！</h5>
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close"
          v-if="this.copyStatus === true"></button>
        </div>
        <div class="modal-body">
          <p v-if="this.copyStatus === true">恭喜您獲得優惠券，使用優惠券使商品打8折！ <br>
          優惠券代碼：<span class="couponCode" ref="codeToCopy">bakery123</span>
          </p>
          <p v-else>優惠碼 <span class="couponCode">bakery123</span> 複製成功！</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn
          btn-primary" @click="copyCode"
          v-if="this.copyStatus === true">複製優惠碼</button>
          <button type="button" class="btn
          btn-primary" data-bs-dismiss="modal"
          >關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
      copyStatus: true,
    };
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    async copyCode() {
      try {
        // 選優惠碼span標籤
        const spanElement = this.$refs.codeToCopy;
        // 取得span標籤裡的優惠碼
        const code = spanElement.textContent;
        // 將優惠碼複製到剪貼簿
        navigator.clipboard.writeText(code);
        this.copyStatus = 0;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};

</script>

<style lang="scss" scoped>
@import '../scss/couponModal.scss';
</style>
