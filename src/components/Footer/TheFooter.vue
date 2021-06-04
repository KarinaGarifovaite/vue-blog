<template>
  <div class="footer">
    <p class="footer__copyrights">
      {{ currentDate }} &copy; All rights reserved
    </p>
    <p class="footer__logo">SuperBlog`as</p>
    <the-navigation></the-navigation>
  </div>
</template>

<script>
import TheNavigation from '../Header/TheNavigation.vue';
export default {
  components: { TheNavigation },
  data() {
    return {
      currentDate: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  min-height: 200px;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #a47e1b;
  color: rgb(248, 248, 248);
  font-size: 15px;
  font-weight: 300;
}
.footer__copyrights {
  padding: 10px;
  border-bottom: 1px solid currentColor;
}

.footer__logo {
  margin: 20px 0 15px 0;
  font-size: 30px;
  opacity: 0.7;
}
</style>
