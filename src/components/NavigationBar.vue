<template>
  <header class="navbar">
    <div class="logo-container">
      <img src="@/assets/plogo.png" alt="PORSCHE Logo" class="logo-img" />
      <div class="logo-text">
        <h1 class="brand-title">PORSCHE</h1>
        <p class="brand-motto">Driven by Excellence, Engineered for Passion</p>
      </div>
    </div>
    
    
<nav class="nav-links">
  <router-link to="/" class="nav-item">Home</router-link>
  <router-link to="/models" class="nav-item">Models</router-link>
  <router-link to="/admissions" class="nav-item">Admissions</router-link>
  <router-link to="/experience" class="nav-item">Experience</router-link>
  <router-link to="/motorsport" class="nav-item">Motorsport</router-link>
  <router-link to="/news" class="nav-item">News</router-link>
  <router-link to="/contact" class="nav-item">Contact</router-link>
  <router-link to="/login" class="portal-btn">My Porsche</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5%;
  background-color: #000000; /* Porsche black */
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo-img {
  width: 60px;
  height: auto;
}

.brand-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;
}

.brand-motto {
  color: #cccccc; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 500;
  margin: 4px 0 0 0;
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
  font-size: 0.9rem;
  transition: color 0.2s ease, border-bottom 0.2s ease;
}

.nav-item.router-link-exact-active {
  color: #e30613; /* Porsche red */
  font-weight: 600;
  border-bottom: 2px solid #e30613;
}

.nav-item:hover {
  color: #e30613;
}

.portal-btn {
  background-color: #e30613; /* Porsche red */
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 0.65rem 1.4rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  transition: background-color 0.2s ease;
}

.portal-btn:hover {
  background-color: #b0000f; /* darker red hover */
}
</style>
