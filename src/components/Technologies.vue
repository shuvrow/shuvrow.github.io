<template>
  <section id="technologies" class="py-16 bg-gray-100">
    <h2 class="text-3xl font-bold text-center mb-8">Technologies I Frequently Use</h2>
    <div class="flex flex-wrap space-x-2 p-24" >
      <button v-for="tech in tech_stacks" :key="tech.id" class="mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"> {{tech}} </button>
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
  FontAwesomeIcon,
  data() {
    return {
      tech_stacks: [
        "PHP", "Laravel", "JavaScript" , "NodeJS", "ExpressJs", "VueJS", "Mysql", "MongoDB", "Git", "Redis", "RabbitMQ", "DigitalOcean", "Docker"
      ]
      }
    }
};
</script>
