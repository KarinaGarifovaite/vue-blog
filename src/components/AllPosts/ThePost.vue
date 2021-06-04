<template>
  <section>
    <img :src="post.image" />
    <div>
      <h4>
        <strong>{{ getPostDate(post.timestamp) }}</strong> /
        <span>{{ post.username }}</span>
      </h4>
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
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
