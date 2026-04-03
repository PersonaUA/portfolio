/**
 * Конфиг проектов портфолио.
 *
 * Принцип Open/Closed (SOLID):
 * Чтобы добавить новый проект — просто добавь объект в массив.
 * Никакой другой код менять не нужно.
 *
 * @typedef {Object} Project
 * @property {string} id        — уникальный идентификатор
 * @property {string} title     — название проекта
 * @property {string} description — краткое описание
 * @property {string} url       — ссылка на задеплоенный проект
 * @property {string} icon      — emoji-иконка
 * @property {string[]} tags    — теги технологий
 * @property {'active'|'soon'} status — статус проекта
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'laser-game',
    title: 'Laser Game',
    description: 'Интерактивная головоломка с лазерными лучами. Направляй лучи зеркалами, чтобы зажечь мишени.',
    url: 'https://personaua.github.io/laser-game/',
    icon: '🎯',
    tags: ['Game', 'Canvas', 'JavaScript'],
    status: 'active'
  },
  {
    id: '3d-game',
    title: '3D Game',
    description: 'Браузерная 3D-игра с иммерсивным геймплеем прямо в окне браузера без плагинов.',
    url: 'https://personaua.github.io/3d-game/',
    icon: '🎮',
    tags: ['3D', 'WebGL', 'Three.js'],
    status: 'active'
  },
  {
    id: 'neon-pong',
    title: 'Neon Pong',
    description: 'Классический 2D пинг-понг, как в детстве.',
    url: 'https://personaua.github.io/neon-pong/',
    icon: '🏓',
    tags: ['Pong', 'Neon'],
    status: 'active'
  },
  {
    id: 'project4',
    title: 'Project 4',
    description: 'В разработке. Новый интересный проект уже в пути.',
    url: 'https://personaua.github.io/project4/',
    icon: '⚙️',
    tags: ['Coming Soon'],
    status: 'soon'
  },
  {
    id: 'project5',
    title: 'Project 5',
    description: 'Следующий проект находится на стадии планирования.',
    url: 'https://personaua.github.io/project5/',
    icon: '🛠️',
    tags: ['Coming Soon'],
    status: 'soon'
  }
]
