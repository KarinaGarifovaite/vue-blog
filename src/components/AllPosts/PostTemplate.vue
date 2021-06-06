<template>
  <section class="post">
    <img :src="image" class="post__img" />
    <div class="post__content">
      <h4 class="post__date">
        <strong>{{ date }}</strong> /
        <span>{{ username }}</span>
      </h4>
      <h3 class="post__title">{{ title }}</h3>
      <p class="post__text" ref="editText">{{ description }}</p>
      <router-link :to="`/${link}`">{{ linkText }} &rarr;</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
};
</script>
