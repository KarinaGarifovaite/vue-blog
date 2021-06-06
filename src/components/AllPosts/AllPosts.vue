<template>
  <div>
    <spinner v-if="isLoading"></spinner>
    <main class="main" v-else>
      <div class="posts__filter">
        <select v-model="sort">
          <option disabled value="">Filter posts by</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <post-template
        v-for="post in posts"
        :key="post.id"
        :image="post.image"
        :date="getPostDate(post.timestamp)"
        :username="post.username"
        :title="post.title"
        :link="`${post.username}/${post.id}`"
        linkText="Read More"
      ></post-template>
    </main>
  </div>
</template>

<script>
import Spinner from '../Spinner/Spinner.vue';
import PostTemplate from './PostTemplate.vue';
export default {
  components: {
    Spinner,
    PostTemplate,
  },
  data() {
    return {
      posts: [],
      sort: '',
      isLoading: true,
    };
  },
  mounted() {
    // Scroll to top
    window.scrollTo(0, 0);

    // Fetched all posts
    fetch('http://167.99.138.67:1111/getallposts')
      .then((res) => res.json())
      .then((data) => {
        this.posts = data.data;
        this.isLoading = false;
      });
  },
  watch: {
    // Watching this.sort changes to sort by date
    sort() {
      if (this.sort === 'newest') {
        this.posts.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
      } else {
        this.posts.sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1));
      }
    },
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

<style>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.post {
  margin: 20px 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-top: 1px solid #a47e1b;
  width: 100%;
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
.post__title {
  margin: 10px 0;
}
.post__text {
  margin: 10px 0;
  font-weight: 300;
  line-height: 1.5;
}

.post__content a {
  padding: 10px 0;
  text-decoration: none;
  text-transform: uppercase;
  color: #a47e1b;
}
.posts__filter {
  width: 100%;
  text-align: right;
}

.posts__filter select {
  border: 1px solid currentColor;
  padding: 10px;
  text-transform: uppercase;
  color: #a47e1b;
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  .main {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .post {
    width: 50%;
  }
}

@media screen and (min-width: 1024px) {
  .main {
    justify-content: center;
  }
  .post {
    width: 32%;
  }
}

@media screen and (min-width: 1280px) {
  .post {
    width: 25%;
  }
}
</style>
