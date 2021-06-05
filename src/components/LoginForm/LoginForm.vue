<template>
  <form @submit.prevent="submitLogin" class="form">
    <h2>Login</h2>
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
    <p v-if="errorMsg" class="form__error-message">{{ errorMsg }}</p>
    <button class="form__submit">Login</button>

    <p class="form__additional-text">Don't have an account?</p>
    <router-link to="/register" class="form__redirect">Register</router-link>
  </form>
</template>

<script>
import FormControl from '../FormControl/FormControl.vue';
export default {
  components: { FormControl },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      errorMsg: '',
    };
  },
  // Scroll to top then mounted
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    // Login submision and validation
    submitLogin() {
      if (!this.user.username || !this.user.password) {
        this.errorMsg = 'Please enter username and password.';
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
            if (!data.success) {
              // error message depends on server's error message
              this.errorMsg = data.message;
            } else {
              const { secretKey } = data;
              // Setting user to local storage as an object, so later I can use his name and secret key
              localStorage.setItem(
                'user',
                JSON.stringify({
                  secretKey: secretKey,
                  name: this.user.username,
                })
              );
              // if success - redirecting to user profile
              this.$router.push('/user-profile');
            }
          });
      }
    },
  },
};
</script>
