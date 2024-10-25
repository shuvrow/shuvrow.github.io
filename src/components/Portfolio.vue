<template>
  <section id="portfolio" class="py-16 bg-white">
    <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
    <div class="grid grid-cols-3 gap-8 px-8">
      <div v-for="project in projects" :key="project.id" class="relative">
        <img :src=project.image alt="Project Image" class="rounded-lg" />
        <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <h3 class="text-xl font-bold">{{ project.title }}</h3>
              <p>{{ project.shortDescription }}</p>
              <el-button type="primary" class="mt-2">Details</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import project1 from '@/assets/portfolio/project_1.png';
import project2 from '@/assets/portfolio/project_1.png';
import project3 from '@/assets/portfolio/project_1.png';
import project4 from '@/assets/portfolio/project_1.png';
import project5 from '@/assets/portfolio/project_1.png';
import project6 from '@/assets/portfolio/project_1.png';

export default {
  data() {
    return {
      projects: [
        { id: 1, title: "Project 1", shortDescription: "Description of project 1", image: project1 },
        { id: 2, title: "Project 2", shortDescription: "Description of project 2", image: project2 },
        { id: 3, title: "Project 3", shortDescription: "Description of project 3", image: project3 },
        { id: 4, title: "Project 4", shortDescription: "Description of project 4", image: project4 },
        { id: 5, title: "Project 5", shortDescription: "Description of project 5", image: project5 },
        { id: 6, title: "Project 6", shortDescription: "Description of project 6", image: project6 }
      ],
    };
  },
};

</script>
