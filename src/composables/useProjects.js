/**
 * Composable для управления проектами.
 *
 * Принцип Dependency Inversion (SOLID):
 * Компоненты зависят от этого интерфейса, а не от конкретного источника данных.
 * При необходимости данные можно загружать из API — компоненты не изменятся.
 *
 * Принцип Single Responsibility (SOLID):
 * Только логика фильтрации и работы с данными проектов.
 */
import { computed, ref } from 'vue'
import { projects } from '../data/projects.js'

/**
 * @returns {{
 *   activeProjects: import('vue').ComputedRef,
 *   soonProjects: import('vue').ComputedRef,
 *   allProjects: import('vue').ComputedRef,
 *   filter: import('vue').Ref<string>,
 *   filteredProjects: import('vue').ComputedRef
 * }}
 */
export function useProjects() {
  const filter = ref('all')

  const allProjects = computed(() => projects)
  const activeProjects = computed(() => projects.filter(p => p.status === 'active'))
  const soonProjects = computed(() => projects.filter(p => p.status === 'soon'))

  const filteredProjects = computed(() => {
    if (filter.value === 'active') return activeProjects.value
    if (filter.value === 'soon') return soonProjects.value
    return allProjects.value
  })

  return { allProjects, activeProjects, soonProjects, filteredProjects, filter }
}
