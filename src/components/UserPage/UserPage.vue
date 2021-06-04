<template>
  <div>
    <h2>{{ greeting() }}</h2>
    <button @click="logout">Log out</button>
  </div>
</template>

<script>
export default {
  methods: {
    greeting() {
      const time = new Date().getHours();

      if (time <= 12) {
        return `Labas rytas!`;
      } else if (time < 17) {
        return `Laba diena!`;
      } else {
        return `Labas vakaras!`;
      }
    },
    logout() {
      localStorage.removeItem('secret-key');
      this.$router.push('/');
    },
  },
};
</script>
