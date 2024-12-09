export interface Image {
  id: string
  src: string
  title: string
  description: string
  categories: string[]
  level: string
  uses: string[]
  details: string[]
  type: 'square' | 'rectangular'
}

export const images: Image[] = [
  {
    id: '1',
    src: 'src/assets/flutter-logo-aurestic.jpg',
    title: 'Flutter',
    description: 'Framework multiplataforma para desarrollo móvil',
    categories: ['Desarrollo móvil'],
    level: 'Habilidoso',
    uses: ['Creación de aplicaciones móviles para Android e iOS con una sola base de código'],
    details: [
      'Interfaces dinámicas y responsivas',
      'Desarrollo rápido con “Hot Reload”',
      'Soporte para diseños personalizados',
    ],
    type: 'rectangular',
  },
  {
    id: '2',
    src: 'src/assets/8B35959E-36E7-4A98-8138-B7A1F7A7F34D 2.jpg',
    title: 'Swift',
    description: 'Lenguaje de programación para aplicaciones iOS',
    categories: ['Desarrollo móvil'],
    level: 'Habilidoso',
    uses: ['Creación de aplicaciones para dispositivos Apple'],
    details: [
      'Código limpio y seguro',
      'Alto rendimiento en plataformas iOS y macOS',
      'Integración profunda con el ecosistema Apple',
    ],
    type: 'square',
  },
  {
    id: '3',
    src: 'src/assets/Googol.svg',
    title: 'JavaScript',
    description: 'Lenguaje de programación para la web',
    categories: ['Desarrollo frontend y backend'],
    level: 'Habilidoso',
    uses: ['Añadir interactividad a páginas web y lógica en el servidor con Node.js'],
    details: [
      'Validación de formularios',
      'Creación de experiencias interactivas en el navegador',
      'Uso en frameworks modernos como Vue.js',
    ],
    type: 'rectangular',
  },
  {
    id: '4',
    src: 'src/assets/8B35959E-36E7-4A98-8138-B7A1F7A7F34D 2.jpg',
    title: 'Git',
    description: 'Sistema de control de versiones distribuido.',
    categories: ['Herramientas de desarrollo'],
    level: 'Principiante',
    uses: ['Gestión de versiones en proyectos de software'],
    details: [
      'Seguimiento de cambios en el código fuente',
      'Colaboración en proyectos con equipos de desarrollo',
      'Soporte para plataformas como GitHub y GitLab',
    ],
    type: 'square',
  },
  {
    id: '5',
    src: 'src/assets/Googol.svg',
    title: 'Swift',
    description: 'Lenguaje de programación para aplicaciones iOS',
    categories: ['sa'],
    level: 's',
    uses: ['s'],
    details: ['s'],
    type: 'rectangular',
  },
]
