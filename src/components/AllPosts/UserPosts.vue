<template>
  <div>
    <section v-for="post in authorPosts" :key="post.id">
      <img :src="post.image" />
      <div>
        <h4>
          <strong>{{ getPostDate(post.timestamp) }}</strong> /
          <span>{{ post.username }}</span>
        </h4>
        <h3>{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authorPosts: [],
    };
  },
  mounted() {
    fetch(`http://167.99.138.67:1111/getuserposts/${this.$route.params.name}`)
      .then((res) => res.json())
      .then((data) => (this.authorPosts = data.data));
  },
  methods: {
    getPostDate(timestamp) {
      let newDate = new Date(timestamp).toLocaleDateString('lt');
      return newDate;
    },
  },
};
</script>
