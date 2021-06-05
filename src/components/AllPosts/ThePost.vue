<template>
  <section class="post single">
    <img :src="post.image" class="post__img" />
    <div class="post__content">
      <h4 class="post__date">
        <strong>{{ getPostDate(post.timestamp) }}</strong> /
        <span>{{ post.username }}</span>
      </h4>
      <h3 class="post__title">{{ post.title }}</h3>
      <p class="post__text">{{ post.description }}</p>
      <router-link :to="`/${post.username}`"
        >Read more author's posts</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    fetch(
      `http://167.99.138.67:1111/getsinglepost/${this.$route.params.name}/${this.$route.params.id}`
    )
      .then((res) => res.json())
      .then((data) => (this.post = data.data));
  },
  methods: {
    getPostDate(timestamp) {
      let newDate = new Date(timestamp).toLocaleDateString('lt');
      return newDate;
    },
  },
};
</script>

<style scoped>
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
