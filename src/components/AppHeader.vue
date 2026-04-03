<template>
  <header class="header">
    <div class="header__glow" aria-hidden="true"></div>
    <div class="header__content">
      <div class="header__badge">
        <span class="header__badge-dot"></span>
        Available for work
      </div>
      <h1 class="header__title">
        <span class="header__title-name">PersonaUA</span>
      </h1>
      <p class="header__subtitle">Full Stack Web Developer</p>
      <p class="header__description">
        Создаю интерактивные веб-приложения и игры.
        Ниже — мои проекты, можно запустить прямо в браузере.
      </p>
      <div class="header__links">
        <a
          href="https://github.com/personaua"
          target="_blank"
          rel="noopener noreferrer"
          class="header__link"
          aria-label="GitHub профиль"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
// Принцип Single Responsibility: компонент отвечает только за шапку страницы
</script>

<style scoped>
.header {
  position: relative;
  text-align: center;
  padding: 80px 24px 60px;
  overflow: hidden;
}

.header__glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(0, 212, 255, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.header__content {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
}

.header__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 13px;
  color: var(--color-accent);
  margin-bottom: 24px;
  background: rgba(0, 212, 255, 0.05);
}

.header__badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 6px #22c55e;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.header__title {
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 12px;
  letter-spacing: -2px;
}

.header__title-name {
  background: linear-gradient(135deg, #ffffff 0%, var(--color-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header__subtitle {
  font-size: 18px;
  color: var(--color-accent);
  font-family: 'JetBrains Mono', monospace;
  margin: 0 0 20px;
  font-weight: 400;
  letter-spacing: 1px;
}

.header__description {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin: 0 0 32px;
}

.header__links {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.header__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}

.header__link:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: rgba(0, 212, 255, 0.05);
}
</style>
