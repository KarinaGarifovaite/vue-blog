<template>
  <form class="form" @submit.prevent="submitPost">
    <h2>Write a Post!</h2>
    <form-control
      labelText="Post Title:"
      inputType="text"
      inputId="title"
      v-model="post.title"
    ></form-control>

    <textarea
      cols="30"
      rows="10"
      placeholder="Post text goes here..."
      v-model="post.text"
    ></textarea>
    <form-control
      labelText="Image Url:"
      inputType="url"
      inputId="imgUrl"
      v-model="post.imgUrl"
    ></form-control>
    <p v-if="errorMsg" class="form__error-message">{{ errorMsg }}</p>
    <the-button class="form__submit" type="submit">Post!</the-button>
  </form>
</template>

<script>
import TheButton from '../Button/TheButton.vue';
import FormControl from '../FormControl/FormControl.vue';

export default {
  components: { FormControl, TheButton },
  data() {
    return {
      post: {
        title: '',
        text: '',
        imgUrl: '',
      },
      errorMsg: '',
    };
  },
  methods: {
    submitPost() {
      let secretKey = localStorage.getItem('secret-key');
      if (!this.post.title || !this.post.text || !this.post.imgUrl) {
        this.errorMsg =
          'Please make sure all fields has at least few characters!';
      } else if (this.post.title.length < 20) {
        this.errorMsg = 'Title must be at least 20 symbols length!';
      } else if (this.post.text.length < 50) {
        this.errorMsg = 'Description must be at least 50 symbols length!';
      } else {
        fetch('http://167.99.138.67:1111/createpost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.post.title,
            description: this.post.text,
            image: this.post.imgUrl,
            secretKey: secretKey,
          }),
        })
          .then((res) => {
            if (res.ok) {
              this.errorMsg = 'Post successfully created!';
            }
          })
          .then((data) => console.log(data));
      }

      this.post.title = '';
      this.post.text = '';
      this.post.imgUrl = '';
      this.errorMsg = '';
    },
  },
};
</script>

<style scoped>
textarea {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #a47e1b;
  font-family: inherit;
}
</style>
