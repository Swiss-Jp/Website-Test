<template>
  <section class="partnership-section">
    
    <div class="section-header">
      <h2 class="section-title">OUR PARTNERSHIP</h2>
      <p class="section-subtitle">Collaborating with industry leaders to drive technological innovation and student excellence.</p>
    </div>

    <div class="partners-grid">
      
      <!-- Card 1 -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">A</span>
          <h3>AURA GRAPHICS</h3>
        </div>
        <p class="category-subtitle">Advanced Rendering Solutions</p>
        <ul class="features-list">
          <li>Real-time global illumination</li>
          <li>High-fidelity textures</li>
          <li>Scalable rendering pipelines</li>
        </ul>
      </div>

      <!-- Card 2 -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">☁</span>
          <h3>DATASTREAM CLOUD</h3>
        </div>
        <p class="category-subtitle">Scalable Infrastructure</p>
        <ul class="features-list">
          <li>Compute orchestration</li>
          <li>Distributed rendering nodes</li>
          <li>Secure data management</li>
        </ul>
      </div>

      <!-- Card 3 -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">🧠</span>
          <h3>NEURAL RENDER LABS</h3>
        </div>
        <p class="category-subtitle">AI-Powered Visualization</p>
        <ul class="features-list">
          <li>Deep learning based denoising</li>
          <li>Real-time upscaling</li>
          <li>Content generation tools</li>
        </ul>
      </div>

      <!-- Card 4 -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">V</span>
          <h3>VERTEX SOFTWARE INC.</h3>
        </div>
        <p class="category-subtitle">Leading Creative Tools</p>
        <ul class="features-list">
          <li>Integration of professional creative applications</li>
          <li>Workflow optimization plugins</li>
          <li>Educational licenses</li>
        </ul>
      </div>

      <!-- Card 5 -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">🎮</span>
          <h3>PIXEL FORCE GAMING</h3>
        </div>
        <p class="category-subtitle">Next-Gen Interactive Graphics</p>
        <ul class="features-list">
          <li>Optimizing game engine performance</li>
          <li>Virtual reality integration</li>
          <li>Esports and competitive play support</li>
        </ul>
      </div>

      <!-- Card 6 -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">⚙</span>
          <h3>STATE TECH INNOVATIONS</h3>
        </div>
        <p class="category-subtitle">Regional Development & Grants</p>
        <ul class="features-list">
          <li>Funding for local research projects</li>
          <li>Student internships</li>
          <li>Technology transfer initiatives</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<style scoped>
.partnership-section {
  padding: 6rem 5%;
  background-color: #0d2326; /* Dark teal background matching your theme */
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #f59e0b; /* Gold/Orange accent */
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1rem;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.partner-card {
  background: linear-gradient(135deg, rgba(13, 35, 38, 0.9) 0%, rgba(5, 15, 17, 0.95) 100%);
  border: 1px solid rgba(20, 184, 166, 0.3);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-5px);
  border-color: #f59e0b;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 0.75rem;
}

.partner-badge {
  width: 36px;
  height: 36px;
  background-color: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.card-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #ffffff;
  margin: 0;
}

.category-subtitle {
  color: #38bdf8; /* Cyan/Teal accent tone */
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.features-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: #cbd5e1;
  font-size: 0.85rem;
  padding: 0.35rem 0;
  position: relative;
  padding-left: 1rem;
}

.features-list li::before {
  content: "•";
  color: #f59e0b;
  position: absolute;
  left: 0;
  font-weight: bold;
}
</style>