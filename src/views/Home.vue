<template>
  <section class="mb-8 md:mb-0">
    <Hero></Hero>
  </section>
  <section class="mb-8 md:mb-0 bg-gray-50">
    <Service></Service>
  </section>
  <section class="mb-8 md:mb-0">
    <Experience></Experience>
  </section>
  <section class="mb-8 md:mb-0 bg-gray-50">
    <Projects></Projects>
  </section>
  <section class="mb-8 md:mb-0">
    <Footer></Footer>
  </section>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Service from '../components/Service.vue'
import Experience from '../components/Experience.vue'
import Projects from '../components/Projects.vue'
import Footer from '../components/Footer.vue'
</script>
