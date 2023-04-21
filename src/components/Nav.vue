<template>
  <nav class="sticky flex items-center justify-between py-4 px-4 md:px-8 w-full shadow-lg bg-white">
    <div class="container mx-auto flex items-center justify-between">
      <router-link to="/" class="font-sans font-bold text-2xl">Collins Kreation</router-link>
      <div class="hidden md:flex items-center">
        <router-link v-slot="{ isActive }" to="/about" class="font-sans text-sm font-medium px-8 hover:text-primary" :class="{ 'text-primary': isActive }">About</router-link>
        <router-link v-slot="{ isActive }" to="/work" class="font-sans text-sm font-medium px-8 hover:text-primary" :class="{ 'text-primary': isActive }">Work</router-link>
        <router-link v-slot="{ isActive }" to="/blogs" class="font-sans text-sm font-medium px-8 hover:text-primary" :class="{ 'text-primary': isActive }">Blogs</router-link>
        <router-link v-slot="{ isActive }" to="/gpt" class="font-sans text-sm font-medium px-8 hover:text-primary" :class="{ 'text-primary': isActive }">GPT</router-link>
        <button
          class="font-sans text-sm font-medium px-4 py-2 rounded-full w-full flex justify-between items-center hover:shadow-lg hover:shadow-purple-200 bg-primary text-white">
          <span class="pr-2">Say Hi!</span>
          <img src="../assets/hi.png" class="w-8 h-8" />
        </button>
      </div>
      <button class="md:hidden flex items-center p-2 focus:outline-none" @click="toggleMenu">
        <img src="../assets/menu.svg" alt="menu" class="w-4 h-4" />
      </button>
    </div>
    <div class="md:hidden" v-if="menuOpen">
      <div class="mobile-menu p-4">
        <router-link v-slot="{ isActive }" to="/about" class="font-sans text-sm font-medium block mb-4 hover:text-primary" :class="{ 'text-primary': isActive }" @click="toggleMenu">About</router-link>
        <router-link v-slot="{ isActive }" to="/work" class="font-sans text-sm font-medium block mb-4 hover:text-primary" :class="{ 'text-primary': isActive }" @click="toggleMenu">Work</router-link>
        <router-link v-slot="{ isActive }" to="/blogs" class="font-sans text-sm font-medium block mb-4 hover:text-primary" :class="{ 'text-primary': isActive }" @click="toggleMenu">Blogs</router-link>
        <router-link v-slot="{ isActive }" to="/gpt" class="font-sans text-sm font-medium block mb-4 hover:text-primary" :class="{ 'text-primary': isActive }" @click="toggleMenu">GPT</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".sticky");
      if (window.scrollY > 0) {
        nav.classList.add("shadow");
      } else {
        nav.classList.remove("shadow");
      }
    });
  },
};
</script>

<style>
.mobile-menu {
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 2;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.hover:shadow-lg {
  transition: box-shadow 0.3s ease-in-out;
}

.hover:shadow-purple-200 {
  transition: background-color 0.3s ease-in-out;
}

.shadow {
  box-shadow: 0 1px 3px rgba(187, 0, 255, 0.12), 0 1px 3px rgba(187, 0, 255, 0.12);
}

</style>
