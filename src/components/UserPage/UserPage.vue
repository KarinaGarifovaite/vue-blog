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
  methods: {
    greeting() {
      const time = new Date().getHours();

      if (time <= 12) {
        return `Labas rytas!`;
      } else if (time < 17) {
        return `Labà dienà!`;
      } else {
        return `Labas vakaras!`;
      }
    },
    confirmLogout() {
      this.showModal = true;
    },
    logout() {
      localStorage.removeItem('secret-key');
      this.$router.push('/');
    },
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
</style>
