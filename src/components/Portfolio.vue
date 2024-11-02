<template>
  <section id="portfolio" class="py-16 bg-white">
    <h2 class="text-3xl font-bold text-center mb-12">Projects</h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 xsm:grid-cols-1 gap-8 px-8">
      <div v-for="project in projects" :key="project.id" class="relative h-80">
        <img :src=project.image alt="Project Image" class="rounded-lg" />
        <div class="absolute inset-0 bg-[#0F172A] bg-opacity-90 opacity-0 hover:opacity-100  transition-transform duration-500 hover:scale-105 rounded">
          <div class="flex items-center justify-center pb-4">
            <div class="text-center text-white">
              <h3 class="text-xl font-bold">{{ project.title }}</h3>
              <p class="text-justify p-2">{{ project.shortDescription }}</p>
              <div class="flex flex-wrap gap-2 m-2">
                <div v-for="technology in project.technologies" :key="technology.id">
                  <span class="bg-blue-500 text-white px-2 py-1 rounded-full text-justify">{{ technology }}</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import project1 from '@/assets/portfolio/project_1.png';
import project2 from '@/assets/portfolio/project_2.png';
import project3 from '@/assets/portfolio/project_3.png';
import project4 from '@/assets/portfolio/project_4.png';
import project5 from '@/assets/portfolio/project_5.png';
import project6 from '@/assets/portfolio/project_6.png';

export default {
  data() {
    return {
      projects: [
        { id: 1, title: "HVTL POS", shortDescription: "The HVTL POS system is a tool for modern restaurant management, providing a unique dashboard that integrates various business metrics for comprehensive oversight.", image: project1 , 
        technologies: [
          'NodeJS', 'React', 'Mongo', 'Vue', 'TailwindCSS'
        ]},
        { id: 2, title: "HV Sales App", shortDescription: "HV Sales App is a cutting-edge tool designed for retail businesses looking to optimize their sales tracking and field force management. With its unique dashboard and integrated features, it empowers managers and sales teams to make data-driven decisions", image: project2,
        technologies: [
          'Laravel', 'Mysql', 'REST API', 'Vue', 'TailwindCSS'
        ]},
        { id: 3, title: "Orko ERP", shortDescription: "The MyOrko CRM portal is a key advancement in healthcare management technology, functioning as both a CRM and CMS. Tailored for the Orko Health Care Center, it integrates features that enhance operational efficiency, improve patient care, and facilitate effective communication among stakeholders.", image: project3 , 
        technologies: [
          'Laravel', 'Mysql', 'REST API', 'Vue', 'TailwindCSS'
        ]},
        { id: 4, title: "Orko Customer Care Panel ", shortDescription: "OCC panel is a OPD service management app that revolutionized our approach to patient management and appointment scheduling. This app is a comprehensive tool designed to streamline the processes involved in managing both physical and virtual appointments for health care center’s patients", image: project4 , 
        technologies: [
          'Laravel', 'Mysql', 'REST API', 'Vue', 'TailwindCSS'
        ]},
        { id: 5, title: "Daktarbhai", shortDescription: "Daktarbhai.com is a robust online platform that centralizes a wide range of healthcare services, making it an invaluable resource for patients in Bangladesh. With offerings that include doctor appointments, ambulance services, blood bank access, and health insurance, Daktarbhai is committed to enhancing the healthcare experience for its users.", image: project5 ,
        technologies: [
          'Laravel', 'Mysql', 'REST API', 'Vue', 'TailwindCSS'
        ]},
        { id: 6, title: "HV ERP", shortDescription: "The HV ERP system integrates various processes, including Supply Chain Management, Accounts Application, Bill Management, and HRIS, into a cohesive framework. ", image: project6 , 
        technologies: [
          'Laravel', 'Mysql', 'REST API', 'Vue', 'TailwindCSS'
        ]}
      ],
    };
  },
};

</script>
