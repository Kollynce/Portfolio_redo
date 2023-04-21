<template>
    <div class="min-h-screen bg-gray-100 py-8 mt-20" v-if="post">
      <div class="blog-post container mx-auto px-4">
        <h1 class="content-title text-2xl mb-4">{{ post.title }}</h1>
        <div class="content-paragraph mb-4">{{ post.excerpt }}</div>
        <img class="content-image w-full mb-4" :src="post.image" :alt="post.imageAlt" />
        <div class="content mb-4" v-html="formattedContent"></div>
        <div class="social-share-comments flex justify-between items-center mb-4">
          <div class="social-share flex">
            <button class="bg-blue-600 text-white px-4 py-2 rounded mr-2">Share on Facebook</button>
            <button class="bg-blue-400 text-white px-4 py-2 rounded mr-2">Share on Twitter</button>
            <button class="bg-red-600 text-white px-4 py-2 rounded">Share on LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: null,
      };
    },
    computed: {
      formattedContent() {
        if (this.post) {
          return this.post.content.join('');
        }
        return '';
      },
    },
    async created() {
      try {
        const response = await axios.get('/blogData.json');
        this.post = response.data.posts.find((post) => post.id === 1); // You can replace 1 with the desired post ID
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
  