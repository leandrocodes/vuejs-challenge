<template>
  <div class="comment d-flex">
    <p class="comment__owner">{{ comment.owner }}:</p>
    <p class="comment__text fw-normal">{{ comment.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  .comment__text {
    margin-left: 4px;
  }
}
</style>
