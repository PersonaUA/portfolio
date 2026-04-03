<template>
  <article
    class="card"
    :class="{ 'card--soon': isSoon }"
    :aria-label="`Проект: ${project.title}`"
  >
    <div class="card__glow" aria-hidden="true"></div>

    <div class="card__icon" aria-hidden="true">{{ project.icon }}</div>

    <div class="card__body">
      <h3 class="card__title">{{ project.title }}</h3>
      <p class="card__description">{{ project.description }}</p>

      <div class="card__tags" aria-label="Технологии">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="card__tag"
        >{{ tag }}</span>
      </div>
    </div>

    <div class="card__footer">
      <a
        v-if="!isSoon"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="card__btn card__btn--active"
        :aria-label="`Открыть ${project.title}`"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        Запустить
      </a>

      <button
        v-else
        class="card__btn card__btn--soon"
        disabled
        aria-disabled="true"
        aria-label="Проект в разработке"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        Скоро
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

/**
 * Принцип Single Responsibility: карточка отвечает только за отображение одного проекта.
 * Принцип Interface Segregation: получает только нужные props (не весь store).
 */

/** @type {{ project: import('../data/projects.js').Project }} */
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const isSoon = computed(() => props.project.status === 'soon')
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 28px;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  cursor: default;
}

.card:not(.card--soon):hover {
  transform: translateY(-4px);
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1), 0 0 0 1px rgba(0, 212, 255, 0.1);
}

.card--soon {
  opacity: 0.55;
}

.card__glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.4), transparent);
  opacity: 0;
  transition: opacity 0.25s;
}

.card:not(.card--soon):hover .card__glow {
  opacity: 1;
}

.card__icon {
  font-size: 36px;
  margin-bottom: 16px;
  line-height: 1;
}

.card__body {
  flex: 1;
}

.card__title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0 0 10px;
  letter-spacing: -0.3px;
}

.card__description {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0 0 16px;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
}

.card__tag {
  font-size: 11px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(0, 212, 255, 0.08);
  color: var(--color-accent);
  border: 1px solid rgba(0, 212, 255, 0.15);
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.card--soon .card__tag {
  background: rgba(148, 163, 184, 0.08);
  color: var(--color-text-muted);
  border-color: rgba(148, 163, 184, 0.15);
}

.card__footer {
  margin-top: auto;
}

.card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, box-shadow 0.2s, transform 0.1s;
  cursor: pointer;
  border: none;
  font-family: inherit;
  width: 100%;
  justify-content: center;
}

.card__btn--active {
  background: var(--color-accent);
  color: #000;
}

.card__btn--active:hover {
  background: #33ddff;
  box-shadow: 0 4px 16px rgba(0, 212, 255, 0.35);
  transform: translateY(-1px);
}

.card__btn--active:active {
  transform: translateY(0);
}

.card__btn--soon {
  background: rgba(148, 163, 184, 0.08);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  cursor: not-allowed;
}
</style>
