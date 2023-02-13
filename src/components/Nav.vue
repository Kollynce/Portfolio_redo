<template>
    <nav class="sticky flex items-center justify-between py-4 px-8 w-full shadow-lg bg-white shadow-none">
        <div class="container mx-auto flex items-center justify-between">
            <router-link to="/" class="font-sans font-bold text-2xl">Collins Kreation</router-link>
            <div class="flex items-center">
                <router-link to="/about" class="font-sans text-sm font-medium px-8 hover:text-primary">About</router-link>
              <router-link to="/work" class="font-sans text-sm font-medium px-8 hover:text-primary">Work</router-link>
                <button
                    class="font-sans text-sm font-medium px-4 py-2 rounded-full w-full flex justify-between items-center hover:shadow-lg hover:shadow-purple-200 bg-primary text-white">
                    <span class="pr-2">Say Hi!</span>
                    <img src="../assets/hi.png" class="w-8 h-8" />
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.sticky');
            if (window.scrollY > 0) {
                nav.classList.add('shadow');
            } else {
                nav.classList.remove('shadow');
            }
        });
    },

}
</script>

<style>
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
