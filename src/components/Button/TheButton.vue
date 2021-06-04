<template>
  <button :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
