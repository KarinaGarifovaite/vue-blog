<template>
  <main class="main">
    <h2 class="main__title">
      This is all {{ this.$route.params.name }} posts &darr;
    </h2>
    <post-template
      v-for="post in authorPosts"
      :key="post.id"
      :image="post.image"
      :date="getPostDate(post.timestamp)"
      :username="post.username"
      :title="post.title"
      :link="`${post.username}/${post.id}`"
      linkText="Read More"
    ></post-template>
  </main>
</template>

<script>
import PostTemplate from './PostTemplate.vue';
export default {
  components: { PostTemplate },
  data() {
    return {
      authorPosts: [],
    };
  },
  mounted() {
    //Scroll to top
    window.scrollTo(0, 0);

    // Getting particular user posts
    fetch(`http://167.99.138.67:1111/getuserposts/${this.$route.params.name}`)
      .then((res) => res.json())
      .then((data) => (this.authorPosts = data.data));
  },
  methods: {
    // Converting date from timestamp to normal date
    getPostDate(timestamp) {
      let newDate = new Date(timestamp).toLocaleDateString('lt');
      return newDate;
    },
  },
};
</script>
