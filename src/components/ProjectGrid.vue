<template>
  <section class="grid-section" aria-label="Проекты">
    <div class="grid-section__header">
      <h2 class="grid-section__title">
        <span class="grid-section__title-accent">//</span> Проекты
      </h2>
      <p class="grid-section__count">
        {{ activeCount }} активных · {{ totalCount }} всего
      </p>
    </div>

    <!-- Фильтр -->
    <div class="grid-section__filters" role="group" aria-label="Фильтр проектов">
      <button
        v-for="opt in filterOptions"
        :key="opt.value"
        class="grid-section__filter"
        :class="{ 'grid-section__filter--active': currentFilter === opt.value }"
        @click="$emit('filter-change', opt.value)"
        :aria-pressed="currentFilter === opt.value"
      >
        {{ opt.label }}
      </button>
    </div>

    <!-- Сетка карточек -->
    <div class="grid-section__grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
/**
 * Принцип Single Responsibility: компонент отвечает только за раскладку и фильтрацию.
 * Принцип Interface Segregation: получает только нужные данные через props.
 */
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  activeCount: {
    type: Number,
    required: true
  },
  totalCount: {
    type: Number,
    required: true
  },
  currentFilter: {
    type: String,
    default: 'all'
  }
})

defineEmits(['filter-change'])

const filterOptions = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'soon', label: 'Скоро' }
]
</script>

<style scoped>
.grid-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 80px;
}

.grid-section__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
}

.grid-section__title {
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
}

.grid-section__title-accent {
  color: var(--color-accent);
  margin-right: 6px;
}

.grid-section__count {
  font-size: 13px;
  color: var(--color-text-muted);
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
}

.grid-section__filters {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
}

.grid-section__filter {
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  font-family: inherit;
}

.grid-section__filter:hover {
  color: var(--color-text);
  border-color: rgba(255, 255, 255, 0.2);
}

.grid-section__filter--active {
  background: rgba(0, 212, 255, 0.1);
  color: var(--color-accent);
  border-color: rgba(0, 212, 255, 0.3);
}

.grid-section__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 640px) {
  .grid-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
