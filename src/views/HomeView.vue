<template>
  <section class="hero-section">
    <div class="hero-left">
      <div class="tagline-header">
        <span class="line"></span>
        <span class="established-text">ESTABLISHED 1948</span>
      </div>

      <h1 class="hero-title">
        Driven by <span class="highlight-italic">Excellence</span><br />
        Engineered for Passion.
      </h1>

      <p class="hero-description">
        For over 75 years, Porsche has redefined performance and luxury —
        blending timeless design with cutting‑edge innovation to create
        the ultimate driving experience.
      </p>

      <div class="cta-buttons">
        <button class="btn btn-primary">Explore Models</button>
        <button class="btn btn-secondary">Book a Test Drive</button>
      </div>

      <div class="stats-card">
        <div class="stat-item">
          <h3>75+</h3>
          <p>Years of Innovation</p>
        </div>
        <div class="stat-item">
          <h3>30+</h3>
          <p>Global Models</p>
        </div>
        <div class="stat-item">
          <h3>1M+</h3>
          <p>Enthusiasts Worldwide</p>
        </div>
        <div class="stat-item">
          <h3>100+</h3>
          <p>Motorsport Titles</p>
        </div>
      </div>
    </div>

    <div class="hero-right">
  <div class="graphic-card">
    <img src="@/assets/porsche.png" alt="Porsche Car" class="hero-seal" />
    <h2 class="card-title">Porsche</h2>
    <p class="card-motto">Precision. Performance. Porsche.</p>
    <p class="quote">“There is no substitute.”</p>
  </div>
</div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 83vh;
  display: flex;
  padding: 2rem 8%;
  gap: 3rem;
  background: #000000; 
  color: #ffffff;
}

.hero-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tagline-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
}

.line {
  width: 24px;
  height: 2px;
  background-color: #e30613; 
}

.established-text {
  color: #cccccc; 
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 2px;
}

.hero-title {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1rem 0;
  color: #ffffff;
}

.highlight-italic {
  color: #e30613;
  font-style: italic;
}

.hero-description {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 90%;
  margin: 0 0 2rem 0;
  color: #cccccc;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #e30613;
  color: #ffffff;
  border: none;
}

.btn-secondary {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #e30613;
}

.stats-card {
  display: flex;
  justify-content: center;
  background-color: #111111;
  border-radius: 10px;
  padding: 1rem;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  color: #e30613;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}

.stat-item p {
  color: #cccccc;
  font-size: 0.75rem;
  margin: 0.2rem 0 0 0;
}

.hero-right {
  flex: 1;
  display: flex;
}

.graphic-card {
  width: 50%;
  height: 50%;
  background: linear-gradient(135deg, #111111 20%, #240303 50%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  text-align: center;
  padding: 2rem;
}

.hero-seal {
  width: 400px;
  height: auto;
  margin-bottom: 1.2rem;
}

.card-title {
  color: #ffffff;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.65rem;
  font-weight: 700;
  margin: 0;
}

.card-motto {
  color: #e30613;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.85rem;
  letter-spacing: 2px;
  font-weight: 600;
  margin: 0.6rem 0 0.8rem 0;
}

.quote {
  color: #cccccc;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-style: italic;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.35;
  font-weight: 400;
}
</style>