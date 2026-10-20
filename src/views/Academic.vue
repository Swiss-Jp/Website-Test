<template>
  <section class="academic-section">
    <!-- SECTION TITLE -->
    <div class="section-header">
      <h2 class="section-title">PROGRAMS</h2>
    </div>

    <div class="cards-container">
      <div class="program-card">
        <div class="logo-wrapper">
          <img src="@/assets/CS.png" alt="CS Logo" class="org-logo" />
        </div>
        <h3 class="program-title">Computer Science</h3>
        <p class="program-desc">
          The Computer Science (CS) Program is designed for students who wants to study computing in depth, focusing in the software, the hardware
        </p>
      </div>

      <div class="program-card">
        <div class="logo-wrapper">
          <img src="@/assets/IT.png" alt="IT Logo" class="org-logo" />
        </div>
        <h3 class="program-title">Information Technology</h3>
        <p class="program-desc">
          The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.
        </p>
      </div>

      <div class="program-card">
        <div class="logo-wrapper">
          <img src="@/assets/midas.png" alt="MIDAS Logo" class="org-logo" />
        </div>
        <h3 class="program-title">Digital Media and Interactive Arts</h3>
        <p class="program-desc">
          The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.
        </p>
      </div>

      <div class="program-card">
        <div class="logo-wrapper">
          <img src="@/assets/lis.png" alt="Library Logo" class="org-logo" />
        </div>
        <h3 class="program-title">Library Information Science</h3>
        <p class="program-desc">
          The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.academic-section {
  padding: 6rem 5%;
  background-color: #0d2326; 
  display: flex;
  flex-direction: column; 
  align-items: center;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
}

.section-title {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  color: #f59e0b; 
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.program-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.program-card:hover {
  transform: translateY(-5px);
}

.logo-wrapper {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.org-logo {
  max-height: 150px;
  width: auto;
  object-fit: contain;
}

.program-title {
  color: #0d2326;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.2rem;
  min-height: 3.6rem; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.program-desc {
  color: #666666;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}
</style>