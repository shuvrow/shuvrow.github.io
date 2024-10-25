<template>
  <section id="technologies" class="py-16 bg-gray-100">
    <h2 class="text-3xl font-bold text-center mb-8">Technologies We Work With</h2>
    <div class="flex justify-center space-x-8">
      <i class="fab fa-laravel text-4xl"></i>
      <i class="fab fa-vuejs text-4xl"></i>
      <i class="fas fa-node-js text-4xl"></i>
      <i class="fas fa-database text-4xl"></i>
      <font-awesome-icon :icon="['fab', 'laravel']" />


      <!-- Add other technology icons -->
    </div>
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

library.add(fab); // Add brand icons to the library
export default {
  FontAwesomeIcon
};
</script>
