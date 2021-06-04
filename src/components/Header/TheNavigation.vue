<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list--item">
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="isLoggedIn" class="nav__list--item">
        <router-link to="/user-profile">Profile</router-link>
      </li>
      <li v-if="!isLoggedIn" class="nav__list--item login">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isLoggedIn" class="nav__list--item register">
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    if (localStorage.getItem('secret-key')) this.isLoggedIn = true;
  },
};
</script>

<style scoped>
.header .nav {
  width: 100%;
}

.header .nav__list {
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
.nav__list--item {
  margin: 10px;
  padding: 10px;
}

.header .nav__list--item.login {
  border: 1px solid #a47e1b;
  border-radius: 5px;
}

.header .nav__list--item.register a {
  background: linear-gradient(to right bottom, #a47e1b, #b69121, #dbb42c);
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
}
.header .nav__list--item a {
  color: #a47e1b;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px;
  margin: 10px;
  transition: all 0.5s;
}
.header .nav__list--item a:hover {
  opacity: 0.5;
}

.footer .nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

.footer .nav__list--item a {
  color: rgb(248, 248, 248);
  text-decoration: none;
  text-transform: uppercase;
}
.footer .nav__list--item a:hover {
  opacity: 0.7;
}
</style>
