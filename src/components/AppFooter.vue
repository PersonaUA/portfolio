<template>
  <footer class="footer">
    <div class="footer__divider" aria-hidden="true"></div>
    <div class="footer__content">
      <p class="footer__text">
        <span class="footer__mono">© {{ year }}</span>
        PersonaUA — Сделано с ❤️ на Vue 3
      </p>
      <a
        href="https://github.com/personaua/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        class="footer__source"
      >
        Исходный код
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 0 24px 40px;
}

.footer__divider {
  max-width: 1100px;
  margin: 0 auto 32px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-border), transparent);
}

.footer__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__text {
  font-size: 13px;
  color: var(--color-text-muted);
  margin: 0;
}

.footer__mono {
  font-family: 'JetBrains Mono', monospace;
}

.footer__source {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.footer__source:hover {
  color: var(--color-accent);
}
</style>
