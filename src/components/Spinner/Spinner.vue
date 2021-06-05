<template>
  <div class="loader-wrapper">
    <div class="loader first"></div>
    <div class="loader second"></div>
    <div class="loader third"></div>
  </div>
</template>

<style scoped>
.loader-wrapper {
  width: 100%;
  padding-top: 30%;
  height: 60vh;
  text-align: center;
  justify-content: center;

  display: flex;
}

.loader {
  margin: 10px;
  width: 20px;
  height: 20px;
  animation: animation 2s infinite;
  transition: all 0.8s;
  border-radius: 50%;
}

.second {
  animation-delay: 0.3s;
}

.third {
  animation-delay: 0.4s;
}

@keyframes animation {
  0% {
    opacity: 0;
    transform: translateY(-50px);
    background: #a47e1b;
  }

  50% {
    opacity: 0.5;
    transform: translateY(0);
    background: #dbb42c;
  }

  100% {
    opacity: 1;
    transform: translateY(-50px);
    background: #a47e1b;
  }
}
</style>
