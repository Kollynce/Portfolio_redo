<template>
  <div class="bg-gray-100 min-h-screen py-12">
    <div class="banner flex flex-col items-center justify-center text-white" style="height: 45%; background-image: url('https://res.cloudinary.com/duzntb8tw/image/upload/v1681973869/Portfolio/pexels-picjumbocom-196644_vboymg.jpg'); background-size: cover; background-position: center;">
      <h2 class="text-4xl text-gray-600 font-semibold mb-2" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);">Now, the good stuff</h2>
      <h1 class="text-6xl text-purple-600 font-bold" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);">My Work</h1>
    </div>
    <div class="container mx-auto mt-20">
      <div v-for="item in workItems" :key="item.id" class="card flex flex-col md:flex-row bg-gradient-to-r from-purple-800 to-[#7743DB] shadow-lg squircle mb-8 mx-auto">
        <div class="w-full md:w-2/3 flex-shrink-0">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover squircle" />
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col justify-center">
          <h3 class="text-3xl font-bold text-white mb-3">{{ item.title }}</h3>
          <p class="text-gray-300 text-lg mb-6">{{ item.description }}</p>
          <a href="#" class="bg-white text-purple-600 font-semibold py-4 px-4 rounded-full text-center text-lg hover:bg-purple-100 transition-colors duration-200 hover:shadow-lg" style="transition: all 0.2s;">Go to Project</a>
        </div>
      </div>
    </div>
  </div>
  <section class="mb-8 md:mb-0">
      <Footer></Footer>
    </section>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import Footer from '../components/Footer.vue';

export default defineComponent({
  components: {
    Footer,
  },
  setup() {
    const workItems = reactive([
      {
        id: 1,
        title: "Ntemata School",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://res.cloudinary.com/duzntb8tw/image/upload/v1681969037/Portfolio/thumbnail_variants_uixybm.png",
      },
      {
        id: 2,
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://res.cloudinary.com/duzntb8tw/image/upload/v1681969035/Portfolio/thumbnail_redo_utcy1f.png",
      },
      {
        id: 3,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://res.cloudinary.com/duzntb8tw/image/upload/v1681969012/Portfolio/maxresdefault_1_ifuosg.jpg",
      },
      // Add more items as needed
    ]);

    return {
      workItems,
    };
  },
});
</script>


<style>
.banner {
  background: linear-gradient(to right, #6D5BBA, #8B5FBF);
  width: 100%;
  padding: 100px 20px;
  text-align: center;
}
.card {
  width: calc(100% - 16px);
  height: auto;
}
@media (min-width: 768px) {
  .card {
    width: calc(66.66% - 16px);
    height: 400px;
    padding: 20px;
  }
}
.squircle {
  border-radius: 30px;
  background-clip: padding-box;
  overflow: hidden;
  position: relative;
}
.squircle::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 45px;
  background: inherit;
  z-index: -1;
  clip-path: inset(0 round 45px);
}
</style>
