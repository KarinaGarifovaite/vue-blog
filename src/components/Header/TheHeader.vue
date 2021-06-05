<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      SuperBlog`as.
    </router-link>

    <div class="header__burger" @click="activeBar">
      <i class="fas fa-bars"></i>
    </div>
    <the-navigation v-if="showBar"></the-navigation>
  </header>
</template>

<script>
import TheNavigation from './TheNavigation.vue';
export default {
  components: { TheNavigation },
  data() {
    return {
      showBar: false,
    };
  },
  methods: {
    activeBar() {
      this.showBar = !this.showBar;
    },
  },
  mounted() {
    if (window.innerWidth >= 1024) {
      this.showBar = true;
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.header__logo {
  font-size: 25px;
  font-weight: 400;
  background: linear-gradient(to right bottom, #a47e1b, #b69121, #dbb42c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header__burger {
  font-size: 25px;
  background: linear-gradient(to right bottom, #a47e1b, #b69121, #dbb42c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

@media screen and (min-width: 1024px) {
  .header {
    flex-wrap: nowrap;
    padding: 0;
  }
  .header__logo {
    margin-left: 25px;
  }
  .header__burger {
    display: none;
  }
}
</style>
