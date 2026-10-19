<script setup>
import { ref, computed } from 'vue'

// Import faculty images (Make sure your dean's image file name matches what you have in assets, e.g., dean.jpg)
import deanImg from '@/assets/QUEJANO.png' // Replace with your actual dean image import if different
import beldiaImg from '@/assets/beldia.jpg'
import cambroneroImg from '@/assets/cambronero.jpg'
import ojacastroImg from '@/assets/ojacastro.jpg'
import montanoImg from '@/assets/montano.jpg'

// Dean Data
const dean = {
  name: 'MA. CHRISTINA A. QUIJANO, MSCS',
  title: 'Dean',
  image: deanImg 
}

// Selected filter state
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
  }
  


])

// Filter faculty based on selected tab
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
      <span class="subtitle">Teaching as a Way of Life</span>
      <h2>Faculty & Staff</h2>
    </div>

    <!-- Dean Section -->
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

    <!-- Category Filter Tabs -->
    <div class="filter-tabs">
      <button 
        v-for="cat in categories" 
        :key="cat"
        :class="['tab-btn', { active: activeTab === cat }]"
        @click="activeTab = cat"
      >
        {{ cat === 'ALL' ? 'All Faculty' : cat }}
      </button>
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

    <!-- Empty state notice when a program tab has no listed faculty -->
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
}

.header-container {
  text-align: center;
  margin-bottom: 2rem;
}

.subtitle {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  display: block;
  margin-bottom: 0.5rem;
}

.header-container h2 {
  font-size: 2.2rem;
  color: #2c4a3e;
  font-weight: normal;
}

/* Dean Section Styling */
.dean-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
}

.dean-heading {
  font-size: 1.5rem;
  color: #2c4a3e;
  margin-bottom: 1rem;
  font-weight: normal;
}

.dean-card {
  width: 260px;
}

/* Category Filter Styling */
.filter-tabs {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tab-btn {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  background: #e2e8f0;
}

.tab-btn.active {
  background: #2a3b32;
  color: #131212;
  border-color: #2a3b32;
}

/* Faculty Grid */
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
  font-size: 0.95rem;
  font-weight: bold;
  color: #f4a261; 
  margin: 0;
  letter-spacing: 0.5px;
}

.title {
  font-size: 0.8rem;
  color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-line {
  height: 4px;
  background-color: #fafafa; 
  width: 100%;
}

.no-faculty-msg {
  color: #64748b;
  font-style: italic;
  margin-top: 2rem;
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