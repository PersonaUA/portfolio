<template>
  <div class="app">
    <AppHeader />
    <main>
      <ProjectGrid
        :projects="filteredProjects"
        :active-count="activeProjects.length"
        :total-count="allProjects.length"
        :current-filter="filter"
        @filter-change="filter = $event"
      />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
/**
 * App.vue — корневой компонент.
 * Принцип Dependency Inversion: зависит от composable, а не от конкретного источника данных.
 */
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import { useProjects } from './composables/useProjects.js'

const { filteredProjects, activeProjects, allProjects, filter } = useProjects()
</script>

<style>
/* ─── Глобальные CSS-переменные (дизайн-токены) ─── */
:root {
  --color-bg:          #070b10;
  --color-card:        #0d1320;
  --color-border:      rgba(255, 255, 255, 0.07);
  --color-text:        #e2e8f0;
  --color-text-muted:  #64748b;
  --color-accent:      #00d4ff;
}

/* ─── Сброс и базовые стили ─── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  /* Паттерн точек на фоне */
  background-image: radial-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* ─── Scrollbar ─── */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 212, 255, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 212, 255, 0.4);
}
</style>
