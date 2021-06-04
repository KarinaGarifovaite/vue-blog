<template>
  <main class="main">
    <section v-for="post in posts" :key="post.id" class="post">
      <img :src="post.image" class="post__img" />
      <div class="post__content">
        <h4 class="post__date">
          <strong>{{ getPostDate(post.timestamp) }}</strong> /
          <span>{{ post.username }}</span>
        </h4>
        <h3 class="post__title">{{ post.title }}</h3>
        <p class="post__text">{{ post.description }}</p>
        <router-link :to="`/${post.username}/${post.id}`"
          >Read more &rarr;</router-link
        >
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch('http://167.99.138.67:1111/getallposts')
      .then((res) => res.json())
      .then((data) => {
        this.posts = data.data;
      });
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
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.post {
  margin: 20px 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid #a47e1b;
}

.post__img {
  width: 100%;
  max-width: 300px;
}

.post__content {
  margin-top: 20px;
  max-width: 300px;
}

.post__date {
  margin: 10px 0;
  font-size: 15px;
  font-weight: 300;
  color: #a47e1b;
}

.post__text {
  margin: 10px 0;
  font-weight: 300;
  line-height: 1.5;
}

.post__content a {
  padding: 10px 5px;
  text-decoration: none;
  text-transform: uppercase;
  color: #a47e1b;
}
</style>
