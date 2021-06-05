<template>
  <div>
    <div class="hero__img">
      <h1>SuperBlog`as</h1>
    </div>
    <all-posts></all-posts>
  </div>
</template>

<script>
import AllPosts from '../components/AllPosts/AllPosts.vue';
export default {
  components: { AllPosts },
};
</script>
