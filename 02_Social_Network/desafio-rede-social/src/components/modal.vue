<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <slot name="image"></slot>
        <div class="modal-footer">
          <button class="btn is-close" @click="$emit('close')">
            X
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  margin: 0 auto;
  padding: 0rem;
  border-radius: 2px;
  box-shadow: $box-shadow-sm;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}

.btn {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
}
</style>
