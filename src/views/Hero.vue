<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="hero-top-text">the CCS core practices that build bridges between gaps</p>
      
      <h1 class="hero-title">
        REMEMBER<br>
        CONNECT<br>
        ENGAGE<br>
        BUILD<br>
        SHARE
      </h1>
      
      <p class="hero-tagline">different PEOPLE, ONE goal</p>
      

    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  padding: 6rem 8%;
  background-color: #0d2326; 
  background-image: linear-gradient(to right, rgba(13, 35, 38, 0.95) 40%, rgba(13, 35, 38, 0.4) 100%), url('@/assets/ccsblack.jpg');
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 80px);
}

.hero-content {
  max-width: 600px;
  z-index: 2;
}

.hero-top-text {
  color: #94a3b8;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
}

.hero-tagline {
  color: #f59e0b; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  letter-spacing: 0.5px;
}




</style>