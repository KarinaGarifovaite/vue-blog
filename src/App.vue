<template>
  <div>
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from './components/Footer/TheFooter.vue';
import TheHeader from './components/Header/TheHeader.vue';
export default {
  components: { TheHeader, TheFooter },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
</style>
