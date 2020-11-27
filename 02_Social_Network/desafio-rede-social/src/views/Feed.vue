<template>
  <div class="feed">
    <navbar></navbar>
    <h2 class="fw-normal ta-center">Feed de Postagens</h2>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss" scoped>
.feed {
  h2 {
    margin: 1rem 0;
    color: $primary;
  }
}
</style>
