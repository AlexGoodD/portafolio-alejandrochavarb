export interface Project {
  title: string
  year: number
  description: string
  technologies: string[]
  tags: string[]
  smallImage: string
  largeImage: string
  repoURL: string
  isOnline?: boolean
}
const projects: Project[] = [
  {
    title: 'CowTrack',
    year: 2024,
    description:
      'Aplicación móvil para gestionar ganado mediante códigos QR, permitiendo registrar datos clave y generar identificadores únicos para trazabilidad eficiente.',
    technologies: ['Swift', 'Firebase', 'Figma', 'Xcode'],
    tags: ['iOS', 'Desarrollo móvil', 'Ecosistema Apple'],
    smallImage: 'https://i.ibb.co/ZLpKLd2/CowTrack.png',
    largeImage: 'path/to/large-image1.jpg',
    repoURL: 'https://github.com/AlexGoodD/CowTrack',
  },
  {
    title: 'MoonHike',
    year: 2024,
    description:
      'Aplicación móvil para peatones que analiza datos de incidentes delictivos, condiciones de iluminación y reportes comunitarios para sugerir rutas alternativas más seguras. Ofrece información actualizada en tiempo real para garantizar seguridad.',
    technologies: ['Flutter', 'Android Studio', 'Firebase', 'Google Maps API', 'Figma', 'Git'],
    tags: ['Desarrollo móvil', 'Seguridad', 'Android'],
    smallImage: 'https://i.ibb.co/2yrf1yG/MoonHike.jpg',
    largeImage: 'path/to/large-image2.jpg',
    repoURL: 'https://github.com/AlexGoodD/moonhike',
  },
  {
    title: 'UanLog',
    year: 2024,
    description:
      'Sitio web para creación de entradas/blogs, con sistema de autenticación. Diseño responsive y funcionalidades de CRUD.',
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Git', 'Firebase'],
    tags: ['Desarrollo web'],
    smallImage: 'https://i.ibb.co/JyMHkT2/Pocket-Pal.jpg',
    largeImage: 'path/to/large-image5.jpg',
    repoURL: 'https://github.com/AlexGoodD/blog-vue',
    isOnline: true,
  },
  {
    title: 'PC Controller',
    year: 2024,
    description:
      'Aplicación móvil que sirve como controlador para computadora, permitiendo gestionar navegación web, reproducción multimedia y presentaciones de PowerPoint.',
    technologies: ['Flutter', 'Android Studio', 'Figma'],
    tags: ['Desarrollo móvil', 'Windows', 'Android'],
    smallImage: 'https://i.ibb.co/Sx1vsXv/PC-Controller.png',
    largeImage: 'path/to/large-image3.jpg',
    repoURL: 'https://github.com/AlexGoodD/PC_Controller',
  },
  {
    title: 'Pomodoro Clock',
    year: 2024,
    description:
      'Aplicación sencilla diseñada para optimizar la productividad utilizando el método Pomodoro.',
    technologies: ['Swift', 'Figma', 'Xcode'],
    tags: ['Apple Watch', 'macOS', 'iOS', 'Swift', 'watchOS'],
    smallImage: 'https://i.ibb.co/5jBFJwr/Pomodo-Clock.png',
    largeImage: 'path/to/large-image4.jpg',
    repoURL: 'https://github.com/AlexGoodD/Pomodoro-Clock-WatchOS',
  },
  {
    title: 'PocketPal',
    year: 2023,
    description:
      'Aplicación web para gestionar presupuestos y gastos personales, ofreciendo historial financiero, reportes detallados y herramientas para control económico.',
    technologies: ['C#', 'MySQL', 'Visual Studio', 'Git', 'SQL'],
    tags: ['Desarrollo web'],
    smallImage: 'https://i.ibb.co/JyMHkT2/Pocket-Pal.jpg',
    largeImage: 'path/to/large-image5.jpg',
    repoURL: 'https://github.com/AlexGoodD/PocketPal',
  },
]
export default projects
