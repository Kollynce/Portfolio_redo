<template>
  <div class="featured-image">
    <img :src="post.image" :alt="post.title" class="featured-image__img" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.featured-image {
  position: relative;
}

.featured-image__img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 30px;
}

.featured-image__title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
