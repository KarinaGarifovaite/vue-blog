<template>
  <section class="main">
    <h2 class="main__title">
      My posts &darr;
    </h2>
    <section v-for="post in authorPosts" :key="post.id" class="post ">
      <img :src="post.image" class="post__img" />
      <div class="post__content">
        <h4 class="post__date">
          <strong>{{ getPostDate(post.timestamp) }}</strong> /
          <span>{{ post.username }}</span>
        </h4>
        <h3 class="post__title">{{ post.title }}</h3>

        <router-link :to="`/${post.username}/${post.id}`"
          >Read more &rarr;</router-link
        >
      </div>
    </section>
  </section>
</template>

<script>
export default {
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
