<template>
    <div class="features__author-wrapper flex items-center">
      <img loading="lazy" :src="author.image" :alt="author.name" class="features__author-img w-12 h-12 rounded-full mr-3">
      <div class="features__author-info-wrapper">
        <div class="features__author-name text-xl font-semibold">{{ author.name }}</div>
        <div class="features__author-position text-sm text-gray-500">{{ author.position }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      author: Object,
    },
  };
  </script>
  