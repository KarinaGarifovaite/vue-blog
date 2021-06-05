<template>
  <section class="post single">
    <img :src="post.image" class="post__img" />

    <div class="post__content">
      <h4 class="post__date">
        <strong>{{ getPostDate(post.timestamp) }}</strong> /
        <span>{{ post.username }}</span>
      </h4>
      <p v-if="errorMsg" class="form__error-message">{{ errorMsg }}</p>
      <div class="post__controls" v-if="isAuth">
        <button v-if="showSaveBtn" @click="confirmPostChanges" class="save">
          <i class="far fa-save"></i>
        </button>
        <button @click="editPost(post.id)">
          <i class="fas fa-edit"></i>
        </button>
        <button @click="confirmPostDelete" class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>

      <h3 class="post__title" ref="editTitle">{{ post.title }}</h3>
      <p class="post__text" ref="editText">{{ post.description }}</p>
      <router-link :to="`/${post.username}`"
        >Read more author's posts</router-link
      >
    </div>
    <base-modal v-if="showDeleteModal" @close="hideModal">
      <h4>Are you sure you want to delete this post?</h4>
      <div class="buttons-wrapper">
        <button class="cancel" @click="hideModal">Cancel</button>
        <button class="submit" @click="removePost(post.id)">Delete</button>
      </div>
    </base-modal>
    <base-modal v-if="showUpdateModal" @close="hideModal">
      <h4>Is this your final changes?</h4>

      <div class="buttons-wrapper">
        <button class="cancel" @click="hideModal">Cancel</button>
        <button class="submit" @click="savePostChanges(post.id)">Yes</button>
      </div>
    </base-modal>
  </section>
</template>

<script>
import BaseModal from '../Modal/BaseModal.vue';
export default {
  components: { BaseModal },
  data() {
    return {
      post: {},
      isAuth: false,
      showDeleteModal: false,
      showUpdateModal: false,
      showSaveBtn: false,
      errorMsg: '',
    };
  },
  mounted() {
    // Fetching particular post
    fetch(
      `http://167.99.138.67:1111/getsinglepost/${this.$route.params.name}/${this.$route.params.id}`
    )
      .then((res) => res.json())
      .then((data) => (this.post = data.data));

    // Checking if user is logged in, if so - post controls appears and user can update his posts.
    if (JSON.parse(localStorage.getItem('user'))) {
      let { name } = JSON.parse(localStorage.getItem('user'));
      if (name === this.$route.params.name) {
        this.isAuth = true;
      }
    }
  },
  methods: {
    // Converting date from timestamp to normal date
    getPostDate(timestamp) {
      let newDate = new Date(timestamp).toLocaleDateString('lt');
      return newDate;
    },
    // Confirmation modal for update
    confirmPostChanges() {
      this.showUpdateModal = true;
    },
    // Confirmation modal for delete
    confirmPostDelete() {
      this.showDeleteModal = true;
    },
    // Remove post by id
    removePost(id) {
      // Getting secret key from local storage
      let { secretKey } = JSON.parse(localStorage.getItem('user'));

      fetch('http://167.99.138.67:1111/deletepost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secretKey: secretKey,
          id: id,
        }),
      });
      this.$router.push('/user-profile');
    },

    // Making tags editable thru refs
    editPost() {
      this.showSaveBtn = true;
      this.$refs.editTitle.contentEditable = true;
      this.$refs.editTitle.focus();
      this.$refs.editText.contentEditable = true;
    },

    // Saving post changes
    savePostChanges(id) {
      // Getting secret key from local storage
      let { secretKey } = JSON.parse(localStorage.getItem('user'));

      // Validation
      if (
        !this.$refs.editTitle.textContent ||
        !this.$refs.editText.textContent ||
        !this.post.image
      ) {
        this.errorMsg =
          'Please make sure all fields has at least few characters!';
      } else if (this.$refs.editTitle.textContent.length < 20) {
        this.errorMsg = 'Title must be at least 20 symbols length!';
      } else if (this.$refs.editText.textContent.length < 50) {
        this.errorMsg = 'Description must be at least 50 symbols length!';
      } else {
        fetch('http://167.99.138.67:1111/updatepost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: this.$refs.editTitle.textContent,
            description: this.$refs.editText.textContent,
            image: this.post.image,
            secretKey: secretKey,
            id: id,
          }),
        }).then((res) => {
          if (res.ok) {
            this.$refs.editTitle.contentEditable = false;
            this.$refs.editText.contentEditable = false;
            this.showSaveBtn = false;
            return res.json();
          }
        });
      }
    },
    // Hide Modal if canceled
    hideModal() {
      this.showDeleteModal = false;
      this.showUpdateModal = false;
    },
  },
};
</script>

<style scoped>
.post__controls {
  display: flex;
  justify-content: flex-end;
}

.post__controls button {
  border: 1px solid currentColor;
  color: #a47e1b;
  background: transparent;
  padding: 5px;
  margin: 5px;
  display: flex;
  cursor: pointer;
}

.post__controls button.save {
  color: green;
}
.post__controls button.delete {
  color: #ba181b;
}
.post.single .post__title:focus,
.post.single .post__text:focus {
  padding: 10px;
}

@media screen and (min-width: 768px) {
  .post.single {
    width: 100%;
  }
  .post.single img {
    max-width: 90%;
  }
  .post.single .post__content {
    max-width: 90%;
  }
}
</style>
