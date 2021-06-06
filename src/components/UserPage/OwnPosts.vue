<template>
  <section class="main">
    <h2 class="main__title">
      My posts &darr;
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
  </section>
</template>

<script>
import PostTemplate from '../AllPosts/PostTemplate.vue';
export default {
  components: { PostTemplate },
  data() {
    return {
      authorPosts: [],
    };
  },
  mounted() {
    // Getting user's name from local storage so I can use it then fetching his posts
    let { name } = JSON.parse(localStorage.getItem('user'));

    fetch(`http://167.99.138.67:1111/getuserposts/${name}`)
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
