<template>
  <div class="feed">
    <navbar></navbar>
    <h2 class="fw-normal ta-center">Feed de Postagens</h2>

    <div class="posts d-flex fd-column ai-center">
      <post
        v-for="(post, index) in posts"
        :post="post"
        :key="post.id"
        @comment="addComment($event, index)"
      ></post>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import post from '@/components/post.vue'
import posts from '../posts'
export default {
  components: {
    navbar,
    post
  },
  data: () => ({
    posts
  }),
  methods: {
    addComment(comment, index) {
      this.posts[index].comments.push(comment)
    }
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
