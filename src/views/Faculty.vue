<script setup>
import { ref, computed } from 'vue'


import deanImg from '@/assets/QUEJANO.png' 
import beldiaImg from '@/assets/beldia.jpg'
import cambroneroImg from '@/assets/cambronero.jpg'
import ojacastroImg from '@/assets/ojacastro.jpg'
import montanoImg from '@/assets/montano.jpg'


const dean = {
  name: 'MA. CHRISTINA A. QUIJANO, MSCS',
  title: 'Dean',
  image: deanImg 
}


const activeTab = ref('ALL')



const facultyList = ref([
  {
    id: 1,
    name: 'LEO PAULO B. BELDIA',
    designation: 'Faculty Member',
    program: 'BSIT',
    programsList: ['BSIT'],
    image: beldiaImg
  },
  {
    id: 2,
    name: 'Pedro Peter Rhys B. Cambronero, MSCS',
    designation: 'Faculty Member',
    program: 'BSCS',
    programsList: ['BSCS'],
    image: cambroneroImg
  },
  {
    id: 3,
    name: 'Rose Leah Joy A. Ojacastro, MSCS',
    designation: 'Faculty Member',
    program: 'BSIT',
    programsList: ['BSIT'],
    image: ojacastroImg
  },
  {
    id: 4,
    name: 'Antonio M. Montaño, Jr.',
    designation: 'Faculty Member',
    program: 'BSIT',
    programsList: ['BSIT'],
    image: montanoImg
  },
  {
    id: 5,
    name: 'John Doe',
    designation: 'Faculty Member',
    program: 'BSCS',
    programsList: ['BSCS'],
    image: '' 
  },
  {
    id: 6,
    name: 'Jane Smith',
    designation: 'Faculty Member',
    program: 'BSIT',
    programsList: ['BSIT'],
    image: '' 
  },
  {
    id: 7,
    name: 'John Doe',
    designation: 'Faculty Member',
    program: 'BSCS',
    programsList: ['BSCS'],
    image: '' 
  },
  {
    id: '8',
    name: 'John Doe',
    designation: 'Faculty Member',
    program: 'BSCS',
    programsList: ['BSCS'],
    image: '' 
  }
])


const filteredFaculty = computed(() => {
  if (activeTab.value === 'ALL') {
    return facultyList.value
  }
  return facultyList.value.filter(member =>
    member.programsList.includes(activeTab.value)
  )
})
</script>

<template>
  <section id="faculty" class="section faculty-section">
    <div class="header-container">
      <h2>Faculty & Staff</h2>
    </div>


    <div class="dean-section">
      <h3 class="dean-heading">Dean</h3>
      <div class="faculty-card dean-card">
        <div class="image-wrapper">
          <img :src="dean.image" :alt="dean.name" />
        </div>
        <div class="info-container">
          <h3>{{ dean.name }}</h3>
          <p class="title">{{ dean.title }}</p>
        </div>
        <div class="card-line"></div>
      </div>
    </div>


    <!-- Faculty Cards Grid -->
    <div class="faculty-grid">
      <div 
        v-for="member in filteredFaculty" 
        :key="member.id" 
        class="faculty-card"
      >
        <div class="image-wrapper">
          <img :src="member.image" :alt="member.name" />
        </div>
        <div class="info-container">
          <h3>{{ member.name }}</h3>
          <p class="title">{{ member.program }} Program</p>
        </div>
        <div class="card-line"></div>
      </div>
    </div>

    <p v-if="filteredFaculty.length === 0" class="no-faculty-msg">
      Faculty information for {{ activeTab }} program is being updated.
    </p>
  </section>
</template>

<style scoped>
.section {
  min-height: 100vh;
  padding: 6rem 2rem 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header-container {
  text-align: center;
  margin-bottom: 2rem;
}


.header-container h2 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #f59e0b; 
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
}


.dean-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
}

.dean-heading {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.5rem;
  color: #ffc400;
  margin-bottom: 1rem;
  font-weight: normal;
}

.dean-card {
  width: 260px;
}



.faculty-grid {
  display: grid;
  grid-template-columns: repeat(4, 240px);
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.faculty-card {
  background: #2a3b32; 
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: left;
}

.image-wrapper {
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.info-container {
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex-grow: 1;
}

.info-container h3 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: bold;
  color: #ff9e0c; 
  margin: 0;
  letter-spacing: 0.5px;
}

.title {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.8rem;
  color: #fffefe;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-line {
  height: 4px;
  background-color: #fd8f00; 
  width: 100%;
}


@media (max-width: 1024px) {
  .faculty-grid {
    grid-template-columns: repeat(2, 240px);
  }
}

@media (max-width: 600px) {
  .faculty-grid {
    grid-template-columns: 240px;
  }
}
</style>