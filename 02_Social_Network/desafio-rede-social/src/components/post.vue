<template>
  <div class="post">
    <div class="post__header fw-normal">
      <h3 class="post__owner">{{ post.owner }}</h3>
      <div class="post__timestamp d-flex">
        <img src="../assets/icons/clock.svg" alt="Clock" width="16px" />
        <p>{{ post.timestamp }}</p>
      </div>
    </div>
    <div class="post__body">
      <p class="post__description">
        {{ post.description }}
      </p>
      <img @click="showModal = true" :src="post.image" class="post__picture" />
    </div>

    <div class="post__actions">
      <button>
        <img src="../assets/icons/heart.svg" alt="Like Button" />
      </button>
      <button>
        <img src="../assets/icons/send.svg" alt="Send Button" />
      </button>

      <div class="comments" v-if="post.comments.length > 0">
        <comment
          v-for="(comment, index) in post.comments"
          :key="index"
          :comment="comment"
        ></comment>
      </div>

      <div class="comment">
        <input type="text" placeholder="Comment..." v-model="comment" />
        <button @click="addComment">Comment</button>
      </div>
    </div>

    <div class="post__comments"></div>

    <transition name="modal">
      <modal v-if="showModal" @close="showModal = false">
        <img slot="image" width="100%" :src="post.image" />
      </modal>
    </transition>
  </div>
</template>

<script>
import comment from './comment'
import modal from './modal'
export default {
  components: {
    comment,
    modal
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    comment: '',
    showModal: false
  }),
  methods: {
    addComment() {
      const comment = {
        owner: 'johndoe',
        text: this.comment
      }
      this.$emit('comment', comment)
      this.comment = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  width: 80%;
  border-radius: 4px;
  box-shadow: $box-shadow-sm;
  background: white;
  margin-bottom: 1rem;
  color: $dark;
  padding: 1rem;
  .post__header {
    display: flex;
    align-items: center;
  }
  .post__owner {
    margin-right: 5px;
    color: $primary;
  }

  .post__timestamp {
    font-size: 0.75rem;
    img {
      margin-right: 2px;
    }
  }

  .post__body {
    margin-top: 1rem;
    .post__picture {
      margin-top: 1rem;
      width: 100%;
    }
  }

  .post__actions {
    margin-top: 1rem;
    button {
      margin-right: 0.5rem;
      background: none;
      border: none;
    }

    .comment {
      margin-top: 1rem;
      display: flex;
      input {
        width: 100%;
        border: 1px solid transparent;
        background: rgba(34, 34, 34, 0.2);
        border-radius: 2rem;
        height: 35px;
        padding: 1rem;
        margin-left: 5px;
      }
      button {
        width: 50px;
        font-size: 0.75rem;
        color: $blue;
        margin-left: 5px;
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}
</style>
