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
/* --- your existing desktop styles --- */
.hero-section {
  height: 83vh;
  display: flex;
  padding: 2rem 8%;
  gap: 3rem;
  background: #000000; 
  color: #ffffff;
}

/* ... all your current styles ... */

/* --- add this at the very bottom --- */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;   /* stack left & right vertically */
    height: auto;
    padding: 1.2rem;
    gap: 2rem;
    text-align: center;
  }

  .hero-left, .hero-right {
    flex: none;
    width: 100%;
    align-items: center;
  }

  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 0.9rem;
    max-width: 100%;
  }

  .cta-buttons {
    flex-direction: column;
    width: 100%;
    gap: 0.8rem;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .stats-card {
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
    max-width: 100%;
  }

  .graphic-card {
    width: 100%;
    max-width: 350px;
    padding: 1rem;
  }

  .hero-seal {
    width: 200px;
    height: auto;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-motto {
    font-size: 0.75rem;
  }

  .quote {
    font-size: 0.8rem;
  }
}
</style>

