<template>
  <section v-if="isLoading" class="text-center py-8">
    <p>Loading...</p>
  </section>
  <section v-else class="bg-gray-100 mt-20 h-full flex flex-col">
    <div id="featured-post" class="featured py-8 flex-grow">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row mx-auto items-center">
          <div class="w-full md:w-2/3 mb-6 md:mb-0">
            <router-link :to="`/posts/${sortedPosts[0].id}`">
              <FeaturedImage :post="sortedPosts[0]" />
            </router-link>
          </div>
          <div class="featured__text-wrapper w-full md:w-1/3 flex flex-col justify-center items-start px-4 md:px-8">
            <div class="text-sm text-gray-500 mb-2">
              {{ sortedPosts[0].date }} &middot; {{ sortedPosts[0].category }}
            </div>
            <router-link :to="`/posts/${sortedPosts[0].id}`" class="text-2xl font-semibold text-gray-800 mb-2 no-underline">
              {{ sortedPosts[0].title }}
            </router-link>
            <p class="text-gray-600">{{ sortedPosts[0].excerpt }}</p>
            <div class="mt-4">
              <PostInfo :post="sortedPosts[0]" />
            </div>
            <div class="mt-4">
              <AuthorInfo :author="sortedPosts[0].author" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto items-start">
        <div v-for="(post) in sortedPosts.slice(1)" :key="post.id">
          <router-link :to="`/posts/${post.id}`">
            <FeaturedImage :post="post" />
          </router-link>
          <div class="pt-4">
            <div class="text-sm text-gray-500 mb-2">
              {{ post.date }} &middot; {{ post.category }}
            </div>
            <router-link :to="`/posts/${post.id}`" class="text-xl font-semibold text-gray-800 mb-2 no-underline">
              {{ post.title }}
            </router-link>
            <p class="text-gray-600">{{ post.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-100">
    <Footer></Footer>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import Footer from '../components/Footer.vue';
import FeaturedImage from '../components/FeaturedImage.vue';
import PostInfo from '../components/PostInfo.vue';
import AuthorInfo from '../components/AuthorInfo.vue';

const posts = ref([]);
const isLoading = ref(true);

const fetchPosts = async () => {
  try {
    const response = await axios.get('/blogData.json');
    posts.value = response.data.posts;
    isLoading.value = false;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});

const sortedPosts = computed(() => {
  return posts.value.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
});
</script>