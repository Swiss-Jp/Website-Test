<script setup lang="ts">
import { ref } from 'vue';

// Import your default placeholder picture once
import defaultPic from '@/assets/QUEJANO.png';

const coordinators = ref([
  { name: 'Coordinator Name 1', role: 'Program Coordinator', image: defaultPic },
  { name: 'Coordinator Name 2', role: 'Program Coordinator', image: defaultPic },
  { name: 'Coordinator Name 3', role: 'Program Coordinator', image: defaultPic },
  { name: 'Coordinator Name 4', role: 'Program Coordinator', image: defaultPic },
]);

const facultyMembers = ref([
  { name: 'Faculty Member 1', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 2', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 3', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 4', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 5', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 6', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 7', role: 'Instructor / Professor', image: defaultPic },
  { name: 'Faculty Member 8', role: 'Instructor / Professor', image: defaultPic },
]);

const staffMembers = ref([
  { name: 'Staff Member 1', role: 'Administrative Staff', image: defaultPic },
  { name: 'Staff Member 2', role: 'Administrative Staff', image: defaultPic },
  { name: 'Staff Member 3', role: 'Administrative Staff', image: defaultPic },
  { name: 'Staff Member 4', role: 'Administrative Staff', image: defaultPic },
]);
</script>

<template>
  <section class="faculty-section">
    
    <!-- DEAN SECTION -->
    <div class="category-container">
      <h2 class="category-title">Dean</h2>
      <div class="dean-card">
        <div class="logo-wrapper">
          <img :src="defaultPic" alt="College Dean" class="org-logo" />
        </div>
        <h3>Ma. Christina Quejano, MSCS</h3>
        <p class="role-text">College Dean</p>
      </div>
    </div>

    <!-- DEPARTMENT HEAD AND COORDINATORS -->
    <div class="category-container">
      <h2 class="category-title">Department Head and Coordinators</h2>
      <div class="grid-layout">
        <div class="member-card" v-for="(coord, index) in coordinators" :key="'coord-' + index">
          <div class="logo-wrapper">
            <img :src="coord.image" alt="Coordinator" class="org-logo" />
          </div>
          <h3>{{ coord.name }}</h3>
          <p class="role-text">{{ coord.role }}</p>
        </div>
      </div>
    </div>

    <!-- FACULTY -->
    <div class="category-container">
      <h2 class="category-title">Faculty</h2>
      <div class="grid-layout">
        <div class="member-card" v-for="(faculty, index) in facultyMembers" :key="'faculty-' + index">
          <div class="logo-wrapper">
            <img :src="faculty.image" alt="Faculty Member" class="org-logo" />
          </div>
          <h3>{{ faculty.name }}</h3>
          <p class="role-text">{{ faculty.role }}</p>
        </div>
      </div>
    </div>

    <!-- STAFF -->
    <div class="category-container">
      <h2 class="category-title">Staff</h2>
      <div class="grid-layout">
        <div class="member-card" v-for="(staff, index) in staffMembers" :key="'staff-' + index">
          <div class="logo-wrapper">
            <img :src="staff.image" alt="Staff Member" class="org-logo" />
          </div>
          <h3>{{ staff.name }}</h3>
          <p class="role-text">{{ staff.role }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.faculty-section {
  padding: 6rem 5%;
  background-color: #0d2326;
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.category-container {
  max-width: 1200px;
  margin: 0 auto 5rem auto;
  text-align: center;
}

.category-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #f59e0b;
  margin-bottom: 2.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.dean-card {
  background-color: #ffffff;
  color: #0d2326;
  max-width: 400px;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.dean-card:hover {
  transform: translateY(-5px);
}

.logo-wrapper {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 6px;
  background-color: #f8fafc;
}

.org-logo {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dean-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.member-card {
  background-color: #ffffff;
  color: #0d2326;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
}

.member-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.role-text {
  color: #d97706;
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0;
}
</style>