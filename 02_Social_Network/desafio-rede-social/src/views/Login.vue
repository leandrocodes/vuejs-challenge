<template>
  <div class="login__page">
    <h1>Login</h1>
    <form class="login__form d-flex fd-column" @submit.prevent="login">
      <label for="email-input">Email: </label>
      <input id="email-input" type="email" placeholder="joao@email.com" />

      <label for="pass-input">Senha: </label>
      <input id="pass-input" type="password" placeholder="******" />

      <button class="btn is-success" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/feed')
    }
  }
}
</script>

<style lang="scss" scoped>
.login__page {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #f39237,
    #f27848,
    #ea6159,
    #d94e69,
    #c14377,
    #a94482,
    #8d4789,
    #6f4989,
    #524d84,
    #3b4e79,
    #2f4c69,
    #2f4858
  );

  h1 {
    font-weight: 300;
    color: white;
    font-size: 4rem;
    text-align: center;
  }

  .login__form {
    background: #ffeacf1a;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    width: 80%;
    margin: 0 auto;
    padding: 1rem 1rem;
    box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 100px 80px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    transform: translateY(-50%);
    label {
      color: white;
      font-size: 1.5rem;
      font-weight: 300;
      &:last-of-type {
        margin-top: 1.5rem;
      }
    }
    input {
      height: 45px;
      padding: 0 0.5rem;
      border-radius: 4px;
      background-color: white;
      border: 2px solid white;
      &::placeholder {
        color: rgba(0, 0, 0, 0.575);
      }
      &:focus {
        outline: none;
      }
      &:-webkit-autofill {
        box-shadow: 0 0 0 30px white inset !important;
      }
    }

    button {
      margin-top: 1.5rem;
      margin-left: auto;
    }
  }
}
</style>
