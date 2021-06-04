<template>
  <form @submit.prevent="submitRegistration" class="form">
    <form-control
      labelText="Enter your name:"
      inputId="name"
      inputType="text"
      v-model="user.name"
    ></form-control>
    <form-control
      labelText="Enter your password:"
      inputId="password"
      inputType="password"
      v-model="user.password"
    ></form-control>
    <form-control
      labelText="Repeat your password:"
      inputId="passwordTwo"
      inputType="password"
      v-model="user.passwordTwo"
    ></form-control>
    <p v-if="errorMsg" class="form__error-message">{{ errorMsg }}</p>
    <the-button class="form__submit" type="submit">Submit</the-button>
    <p class="form__additional-text">Already have an account?</p>
    <router-link to="/login" class="form__redirect">Login</router-link>
  </form>
</template>

<script>
import TheButton from '../Button/TheButton';
import FormControl from '../FormControl/FormControl.vue';
export default {
  components: { FormControl, TheButton },
  data() {
    return {
      user: {
        name: '',
        password: null,
        passwordTwo: null,
      },
      errorMsg: '',
    };
  },
  methods: {
    submitRegistration() {
      if (!this.user.name || !this.user.password || !this.user.passwordTwo) {
        this.errorMsg = 'All fields are required!';
      } else if (
        this.user.name &&
        this.user.password !== this.user.passwordTwo
      ) {
        this.errorMsg = 'Passwords does not match.';
      } else {
        fetch('http://167.99.138.67:1111/createaccount', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.user.name,
            passwordOne: this.user.password,
            passwordTwo: this.user.passwordTwo,
          }),
        }).then((res) => {
          if (res.ok) {
            this.$router.push('/login');
          }
        });
      }
    },
  },
};
</script>

<style>
.form {
  min-height: calc(100vh - 200px);
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form__submit {
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(to right bottom, #a47e1b, #b69121, #dbb42c);
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  transition: opacity 0.5s;
}

.form__submit:hover {
  opacity: 0.7;
}

.form__error-message {
  margin-bottom: 15px;
  font-size: 12px;
  color: #ba181b;
}

.form__additional-text {
  margin: 25px;
}

.form__redirect {
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #a47e1b;
  border-radius: 5px;
  padding: 10px 15px;
  transition: opacity 0.5s;
  color: #a47e1b;
  text-decoration: none;
}
</style>
