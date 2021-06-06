<template>
  <div>
    <base-modal v-if="showModal" @close="hideModal">
      <h4>Are you sure you want to logout?</h4>
      <div class="buttons-wrapper">
        <button class="cancel" @click="hideModal">Cancel</button>
        <button class="submit" @click="logout">Log out</button>
      </div>
    </base-modal>
    <section class="user-profile__greeting">
      <div class="user-profile__greeting--img">
        <h2>{{ greeting() }}</h2>
      </div>
      <button @click="confirmLogout">
        Log out <i class="fas fa-sign-out-alt"></i>
      </button>
    </section>
    <new-post></new-post>
  </div>
</template>

<script>
import NewPost from './NewPost.vue';
import BaseModal from '../Modal/BaseModal.vue';

export default {
  components: {
    NewPost,
    BaseModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  // Scroll to top then mounted
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    // Greeting message depending on day time
    greeting() {
      // Getting curent time and users name from local storage
      const time = new Date().getHours();
      const { name } = JSON.parse(localStorage.getItem('user'));

      if (time <= 12) {
        return `Good morning, ${name}!`;
      } else if (time < 17) {
        return `Good afternoon, ${name}!`;
      } else {
        return `Good evening, ${name}!`;
      }
    },
    // Logout confirmation modal
    confirmLogout() {
      this.showModal = true;
    },
    // Logout function
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/');
    },
    // Hide modal if canceled
    hideModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.user-profile__greeting {
  display: flex;
  flex-direction: column;
}

.user-profile__greeting button {
  margin: 20px;
  border: none;
  background: transparent;
  text-transform: uppercase;
  border-bottom: 1px solid #ba181b;
  align-self: flex-end;
  cursor: pointer;
}
.user-profile__greeting button:hover {
  opacity: 0.7;
}
.user-profile__greeting button i {
  color: #ba181b;
}

.user-profile__greeting--img {
  background-image: url(../../assets/office.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-profile__greeting--img h2 {
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  text-align: center;
  color: #a47e1b;
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  .user-profile__greeting--img h2 {
    font-size: 35px;
  }

  .user-profile__greeting button {
    font-size: 20px;
  }
}
</style>
