<template>
  <form @submit.prevent="submitLogin" class="form">
    <form-control
      labelText="Username:"
      inputId="username"
      inputType="text"
      v-model="user.username"
    ></form-control>
    <form-control
      labelText="Password:"
      inputId="user-password"
      inputType="password"
      v-model="user.password"
    ></form-control>
    <the-button class="form__submit" type="submit">Login</the-button>
    <p v-if="errorMsg" class="form__error-message">{{ errorMsg }}</p>
    <p class="form__additional-text">Don't have an account?</p>
    <router-link to="/register" class="form__redirect">Register</router-link>
  </form>
</template>

<script>
import TheButton from '../Button/TheButton.vue';
import FormControl from '../FormControl/FormControl.vue';
export default {
  components: { FormControl, TheButton },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      errorMsg: '',
    };
  },
  methods: {
    submitLogin() {
      if (!this.user.username || !this.user.password) {
        return (this.errorMsg = 'Please enter username and password.');
      } else {
        fetch('http://167.99.138.67:1111/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.user.username,
            password: this.user.password,
          }),
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            }
          })
          .then((data) => {
            const { secretKey } = data;
            localStorage.setItem('secret-key', secretKey);
            this.$router.push('/user-profile');
          });
      }
    },
  },
};
</script>

