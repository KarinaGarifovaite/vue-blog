<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      SuperBlog`as.
    </router-link>

    <div class="header__burger" @click="activeBar($event)">
      <i class="fas fa-bars"></i>
    </div>
    <the-navigation @hide="hideBar($event)"></the-navigation>
  </header>
</template>

<script>
import TheNavigation from './TheNavigation.vue';
export default {
  components: { TheNavigation },

  methods: {
    // Open navigation by event bubbling
    activeBar(e) {
      e.target.parentElement.nextElementSibling.classList.toggle('hidden');
    },
    // Hiding nav everytime new link is clicked
    hideBar(e) {
      e.target.closest('nav').classList.add('hidden');
    },
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
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header__burger {
  font-size: 25px;
  background: linear-gradient(to right bottom, #a47e1b, #b69121, #dbb42c);
  -webkit-background-clip: text;
  background-clip: text;
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
