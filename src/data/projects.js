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
    id: 'tetris-game',
    title: 'Tetris',
    description: 'Классическая игра ТЕТРИС.',
    url: 'https://personaua.github.io/tetris-game/',
    icon: '🧩',
    tags: ['Tetris'],
    status: 'active'
  },
  {
    id: 'arkanoid-game',
    title: 'Arkanoid',
    description: 'Старый добрый Арканоид',
    url: 'https://personaua.github.io/arkanoid-game/',
    icon: '🧱',
    tags: ['Coming Soon'],
    status: 'soon'
  },
  {
    id: 'project',
    title: 'Project',
    description: 'Следующий проект находится на стадии планирования.',
    url: 'https://personaua.github.io/project/',
    icon: '🛠️',
    tags: ['Coming Soon'],
    status: 'soon'
  }
]
