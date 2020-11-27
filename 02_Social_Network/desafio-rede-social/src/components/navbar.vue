<template>
  <nav class="navbar">
    <div class="profile">
      <img src="../assets/images/profile.jpg" alt="Profile Picture" />
    </div>
    <div class="profile__name">
      <span>John Doe</span>
    </div>

    <div class="navbar__actions">
      <router-link to="/">
        <img src="../assets/icons/log-out.svg" alt="" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 65px;
  background-color: $primary;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  box-shadow: $box-shadow-sm;

  .profile {
    display: flex;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .profile__name {
    color: white;
    margin-left: 1rem;
    font-size: 1.25rem;
  }

  .navbar__actions {
    margin-left: auto;
  }
}
</style>
