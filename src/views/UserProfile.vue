<template>
  <div>
    <user-page></user-page>
    <own-posts></own-posts>
  </div>
</template>

<script>
import OwnPosts from '../components/UserPage/OwnPosts.vue';
import UserPage from '../components/UserPage/UserPage.vue';
export default {
  components: { UserPage, OwnPosts },
};
</script>
