export interface Contact {
  title: string
  description: string
  socialMedia: string
  userName: string
  month: string
  year: number
  smallImage: string
  largeImage: string
  URL: string
}
const contacts: Contact[] = [
  {
    title: 'Ve la trayectoría de Alejandro Chavarría',
    description: 'Plataforma dedicada a mi vida profesional y/o actualizaciones de trabajo.',
    socialMedia: 'LinkedIn',
    userName: 'Alejandro Chavarría',
    month: 'Noviembre',
    year: 2024,
    smallImage:
      'https://w7.pngwing.com/pngs/46/539/png-transparent-linkedin-logo-media-sns-social-social-links-icon.png',
    largeImage: 'path/to/large-image2.jpg',
    URL: 'https://www.linkedin.com/in/alejandro-chavarb/',
  },
  {
    title: 'Descubre los proyectos en los cuales ha trabajado',
    description: 'Plataforma en la cual subo mis proyectos.',
    socialMedia: 'GitHub',
    userName: 'AlexGoodD',
    month: 'Noviembre',
    year: 2024,
    smallImage: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png',
    largeImage: 'path/to/large-image2.jpg',
    URL: 'https://github.com/AlexGoodD',
  },
  {
    title: 'Ponte en contacto con Alejandro Chavarría',
    description: 'Mi correo electrónico para cualquier duda y/o sugerencia.',
    socialMedia: 'Gmail',
    userName: 'alejandrochavarb@gmail.com',
    month: 'Noviembre',
    year: 2024,
    smallImage:
      'https://img.freepik.com/vector-premium/iconos-google-iconos-gmail-ilustracion-vectorial-editable_981536-461.jpg?semt=ais_hybrid',
    largeImage: 'path/to/large-image2.jpg',
    URL: 'mailto:alejandrochavarb@gmail.com',
  },
]
export default contacts
