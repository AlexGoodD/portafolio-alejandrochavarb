export interface Image {
  id: string
  src: string
  title: string
  description: string
  categories: string[]
  type: 'square' | 'rectangular'
}
export const images: Image[] = [
  {
    id: '1',
    src: 'https://static-00.iconduck.com/assets.00/flutter-icon-2048x2048-ufx4idi8.png',
    title: 'Flutter',
    description: 'Framework multiplataforma para desarrollo móvil',
    categories: ['Desarrollo móvil', 'Multiplataforma'],
    type: 'square',
  },
  {
    id: '2',
    src: 'https://crocoapps.com/upload/iblock/af8/preview.jpg',
    title: 'Swift',
    description:
      'Lenguaje moderno y optimizado para el desarrollo de aplicaciones en el ecosistema Apple',
    categories: ['Desarrollo móvil', 'Ecosistema Apple'],
    type: 'rectangular',
  },
  {
    id: '3',
    src: 'https://firebase.google.com/images/social.png',
    title: 'Firebase',
    description: 'Plataforma de desarrollo de aplicaciones móviles y web',
    categories: ['Bases de datos', 'Desarrollo Backend'],
    type: 'rectangular',
  },
  {
    id: '4',
    src: 'https://matiasarevalo.com/wp-content/uploads/2024/07/git.jpg',
    title: 'Git',
    description: 'Sistema de control de versiones distribuido',
    categories: ['Herramienta de desarrollo'],
    type: 'square',
  },
  {
    id: '5',
    src: 'https://cdn.prod.website-files.com/61ddd0b42c51f89b7de1e910/6697e5d740fe5643dd61fbbc_6697e36f9a2e61c3f9a3c850_SQL.jpeg',
    title: 'SQL',
    description: 'Lenguaje de consulta estructurado para bases de datos',
    categories: ['Bases de datos', 'Desarrollo Backend'],
    type: 'rectangular',
  },
  {
    id: '6',
    src: 'https://cdn-knihf.nitrocdn.com/ibKONdxVNJApfXYlVVFSuGXgWUgPJrvN/assets/images/optimized/rev-f36b800/kodigowebstorage.blob.core.windows.net/kodigowebsite/2023/08/csharp.png',
    title: 'C#',
    description: 'Lenguaje de programación orientado a objetos',
    categories: ['Desarrollo Backend'],
    type: 'square',
  },
  {
    id: '7',
    src: 'https://wptavern.com/wp-content/uploads/2018/11/Screen-Shot-2018-11-19-at-8.43.27-PM.png',
    title: 'Figma',
    description: 'Herramienta de diseño de interfaces y colaboración en tiempo real',
    categories: ['Diseño UX/UI', 'Colaboración'],
    type: 'rectangular',
  },
  {
    id: '8',
    src: 'https://thumbs.dreamstime.com/z/html-logo-editorial-ilustrativo-sobre-fondo-blanco-eps-descargar-vector-jpeg-banner-208329416.jpg',
    title: 'HTML',
    description: 'Lenguaje estándar para la estructura y contenido de páginas web',
    categories: ['Desarrollo Frontend', 'Web'],
    type: 'square',
  },
  {
    id: '9',
    src: 'https://logowik.com/content/uploads/images/123_css3.jpg',
    title: 'CSS',
    description: 'Estiliza páginas web con diseños responsivos y atractivos',
    categories: ['Desarrollo Frontend', 'Estilos web'],
    type: 'square',
  },
  {
    id: '10',
    src: 'https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg',
    title: 'JavaScript',
    description: 'Lenguaje versátil para añadir interactividad a páginas web y aplicaciones',
    categories: ['Desarrollo Frontend', 'Desarrollo Backend', 'Interactividad'],
    type: 'rectangular',
  },
  {
    id: '11',
    src: 'https://cms.rootstack.com/sites/default/files/inline-images/01-vuejs.jpg',
    title: 'Vue.js',
    description: 'Framework progresivo para construir interfaces de usuario dinámicas',
    categories: ['Desarrollo Frontend', 'Framework'],
    type: 'rectangular',
  },
  {
    id: '12',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58DYxWj7WBQUuApDSU-GRNUuD9u6e_v6Kuw&s',
    title: 'Dart',
    description: 'Lenguaje optimizado para aplicaciones móviles y web con alto rendimiento',
    categories: ['Desarrollo Frontend', 'Mutiplataforma'],
    type: 'square',
  },
]
