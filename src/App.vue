<template>
  <div>
    <the-header></the-header>
    <transition name="fade" mode="out-in">
      <router-view> </router-view>
    </transition>

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
*:focus {
  outline-color: #a47e1b;
}
.hero__img {
  background-image: url(./assets/office.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

.hero__img h1 {
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
  color: #a47e1b;
  font-weight: 400;
}

.main {
  min-height: calc(100vh - 200px);
}

.main__title {
  text-align: center;
  width: 100%;
  font-weight: 300;
}

.fade-enter-active {
  animation: fade 1.2s ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (min-width: 768px) {
  .hero__img h1 {
    padding: 25px;
  }
  .main__title {
    margin-top: 20px;
    font-size: 30px;
  }
}
</style>
