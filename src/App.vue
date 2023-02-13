<template>
  <div class="container mx-auto">
    <section>
      <Nav></Nav>
    </section>
    <router-view/>
  </div>

</template>

<script setup>

import Nav from './components/Nav.vue'

</script>

