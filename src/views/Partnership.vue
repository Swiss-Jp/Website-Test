<template>
  <section class="partnership-section">
    
    <div class="section-header">
      <h2 class="section-title">OUR PARTNERSHIP</h2>
      <p class="section-subtitle">Collaborating with industry leaders to drive technological innovation and student excellence.</p>
    </div>

    <div class="partners-grid">
      
      <!-- Central Philippine University -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">🎓</span>
          <h3>CENTRAL PHILIPPINE UNIVERSITY</h3>
        </div>
        <p class="category-subtitle">Academic Excellence & Leadership</p>
        <ul class="features-list">
          <li>Fostering exemplary academic standards</li>
          <li>Comprehensive student development programs</li>
          <li>Research and community extension initiatives</li>
        </ul>
      </div>

      <!-- College of Computer Studies -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">💻</span>
          <h3>COLLEGE OF COMPUTER STUDIES</h3>
        </div>
        <p class="category-subtitle">Computing & IT Innovation</p>
        <ul class="features-list">
          <li>Advanced software engineering curriculum</li>
          <li>Hands-on technological specialization</li>
          <li>Student tech community and research labs</li>
        </ul>
      </div>

      <!-- Cisco -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">🌐</span>
          <h3>CISCO</h3>
        </div>
        <p class="category-subtitle">Networking & Cybersecurity</p>
        <ul class="features-list">
          <li>Networking Academy certifications</li>
          <li>Enterprise-grade infrastructure training</li>
          <li>Cybersecurity essentials and hands-on labs</li>
        </ul>
      </div>

      <!-- Discord -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">💬</span>
          <h3>DISCORD</h3>
        </div>
        <p class="category-subtitle">Community & Collaboration</p>
        <ul class="features-list">
          <li>Real-time developer communication platforms</li>
          <li>Community bot development and integrations</li>
          <li>Collaborative study and interest groups</li>
        </ul>
      </div>

      <!-- Facebook -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">👥</span>
          <h3>FACEBOOK</h3>
        </div>
        <p class="category-subtitle">Social Technology & Connectivity</p>
        <ul class="features-list">
          <li>Developer ecosystem and open-source tools</li>
          <li>Global outreach and digital connectivity</li>
          <li>Interactive platform integration</li>
        </ul>
      </div>

      <!-- VS Code -->
      <div class="partner-card">
        <div class="card-header">
          <span class="partner-badge">⚡</span>
          <h3>VS CODE</h3>
        </div>
        <p class="category-subtitle">Developer Tools & Environments</p>
        <ul class="features-list">
          <li>Modern code editing and debugging workflow</li>
          <li>Extensible plugin and extension ecosystem</li>
          <li>Integrated source control and remote development</li>
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
  color: #38bdf8; 
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