<template>
  <div class="container mx-auto">
    <section>
      <Nav></Nav>
    </section>
    <section>
      <Hero></Hero>
    </section>
    <section>
      <Service></Service>
    </section>
    <section>
      <Experience></Experience>
    </section>
    <section>
      <Projects></Projects>
    </section>
    <section>
      <Footer></Footer>
    </section>
  </div>
  <!-- <div class="text-xl font-sans">This text will be displayed in Poppins</div>
  <div class="text-xl font-serif">This text will be displayed in Lora</div> -->
</template>

<script setup>

import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Service from './components/Service.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

</script>

<style scoped>

</style>
