<script setup lang="ts">
import router from '@/router';
</script>

<template>
  <header class="navbar">
    <div class="logo-container">
      <img src="@/assets/CCS.png" alt="CCS Logo" class="logo-img" />
      <div class="logo-text">
      </div>
    </div>
    
    <nav class="nav-links">
      <router-link to="/#home" class="nav-item">HOME</router-link>
      <router-link to="/#programs" class="nav-item">PROGRAMS</router-link>
      <router-link to="/#faculty" class="nav-item">FACULTY AND STAFF</router-link>
      <router-link to="/#partnership" class="nav-item">PARTNERSHIP</router-link>
      <router-link to="/login" class="portal-btn">Portal</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #0d2326;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-img {
  width: 45px;
  height: auto;
}

.brand-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
}

.brand-motto {
  color: #f59e0b;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 1px;
  font-weight: 600;
  margin: 2px 0 0 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  border-bottom: none !important;
  transition: color 0.2s ease;
}


.nav-item.router-link-exact-active {
  color: #f59e0b;
  font-weight: 600;
}


.nav-item:hover {
  color: #10b981; 
}

.portal-btn {
  background-color: #f59e0b; 
  color: #0d2326;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;
}

.portal-btn:hover {
  background-color: #d97706;
}
</style>