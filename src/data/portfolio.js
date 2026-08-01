import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCss3Alt,
  FaCode,
  FaAndroid,
  FaRocket,
  FaPalette,
  FaServer,
} from 'react-icons/fa'
import {
  SiPhp,
  SiDart,
  SiJavascript,
  SiPython,
  SiMysql,
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import {
  MdOutlineDesignServices,
  MdOutlineArchitecture,
  MdOutlineBugReport,
  MdOutlineFactCheck,
  MdOutlineSchema,
} from 'react-icons/md'

export const profile = {
  name: 'Azhar Ridho Rahmatillah',
  initials: 'AR',
  role: ['Informatics Undergraduate Student', 'Software Engineering Enthusiast'],
  tagline:
    'Saya adalah mahasiswa Informatika yang memiliki minat pada Software Engineering, Web Development, dan Mobile Development menggunakan Flutter.',
  resumeUrl: '/Resume_Azhar_Ridho_Rahmatillah.pdf',
  resumeImageUrl: '/cv-image.png',
  photo: '/profile-photo.png',
  contact: {
    phone: '082116208929',
    email: 'azharridhor@gmail.com',
    location: 'Yogyakarta, Indonesia',
    github: 'https://github.com/azharridhor',
    linkedin: 'https://www.linkedin.com/in/azharridhor/',
  },
}

export const contactItems = [
  { icon: FaPhone, label: 'Phone', value: profile.contact.phone, href: `tel:${profile.contact.phone}` },
  { icon: FaEnvelope, label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}` },
  { icon: FaMapMarkerAlt, label: 'Location', value: profile.contact.location, href: null },
]

export const socialLinks = [
  { icon: FaGithub, label: 'Github', href: profile.contact.github },
  { icon: FaLinkedin, label: 'LinkedIn', href: profile.contact.linkedin },
]

export const about = {
  title: 'Profile',
  paragraphs: [
    'Mahasiswa S1 Informatika yang berfokus pada Software Engineering dan Full-Stack Web Development. Memiliki pemahaman dalam pengembangan aplikasi menggunakan Laravel, React, PHP, MySQL, HTML, CSS, JavaScript, serta Flutter. Terbiasa mengembangkan aplikasi mulai dari analisis kebutuhan, perancangan sistem, implementasi, hingga pengujian. Memiliki semangat belajar yang tinggi, kemampuan problem solving, serta siap berkontribusi dan berkembang melalui program magang maupun proyek pengembangan perangkat lunak.',
    'Mampu mempelajari teknologi baru dengan cepat serta memiliki kemampuan komunikasi, pemecahan masalah, dan kerja sama tim yang baik.',
  ],
}

export const education = [
  {
    institution: 'Universitas Alma Ata',
    degree: 'S1 Informatika',
    period: '2022 - Sekarang',
  },
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'PHP', icon: SiPhp },
      { name: 'Dart', icon: SiDart },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: SiMysql },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'PHP Native', icon: SiPhp },
      { name: 'ReactJS', icon: SiReact },
      { name: 'REST API', icon: TbApi },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'ERD', icon: MdOutlineSchema },
    ],
  },
  {
    title: 'Software Engineering',
    skills: [
      { name: 'OOP', icon: MdOutlineArchitecture },
      { name: 'SDLC', icon: MdOutlineFactCheck },
      { name: 'UML', icon: MdOutlineDesignServices },
      { name: 'Requirement Analysis', icon: MdOutlineFactCheck },
      { name: 'Software Testing', icon: MdOutlineFactCheck },
      { name: 'Debugging', icon: MdOutlineBugReport },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: FaCode },
      { name: 'Android Studio', icon: FaAndroid },
      { name: 'Postman', icon: FaRocket },
      { name: 'Figma', icon: FaPalette },
      { name: 'XAMPP', icon: FaServer },
    ],
  },
]

export const projects = [
  {
    title: 'Sistem Informasi Padukuhan',
    context: 'KKN',
    stack: ['Flutter', 'Firebase'],
    description:
      'Aplikasi sistem informasi padukuhan yang dikembangkan selama program Kuliah Kerja Nyata, mencakup analisis kebutuhan warga hingga peluncuran aplikasi.',
    features: ['Analisis kebutuhan', 'Perancangan UI', 'Implementasi', 'Pengujian'],
    liveDemo: null,
    github: 'https://github.com/azharridhor',
  },
  {
    title: 'Sistem Informasi Laundry',
    context: 'Web App',
    stack: ['PHP', 'MySQL'],
    description:
      'Aplikasi manajemen laundry berbasis web dengan dashboard admin, pengelolaan transaksi, dan notifikasi otomatis ke pelanggan.',
    features: ['Dashboard', 'CRUD', 'WhatsApp Notification', 'Admin'],
    liveDemo: null,
    github: 'https://github.com/azharridhor',
  },
  {
    title: 'Aplikasi CRUD',
    context: 'Web App',
    stack: ['PHP Native', 'MySQL'],
    description:
      'Aplikasi manajemen data dasar dengan autentikasi pengguna dan operasi CRUD lengkap beserta validasi input pada setiap form.',
    features: ['Login', 'CRUD', 'Database', 'Validation'],
    liveDemo: null,
    github: 'https://github.com/azharridhor',
  },
]

export const experience = [
  {
    title: 'Kuliah Kerja Nyata (KKN)',
    organization: 'Universitas Alma Ata',
    points: [
      'Mengembangkan Sistem Informasi Padukuhan berbasis aplikasi.',
      'Melakukan analisis kebutuhan pengguna.',
      'Berkolaborasi dalam tim multidisiplin.',
      'Mengimplementasikan aplikasi.',
      'Melakukan dokumentasi proyek.',
    ],
  },
]

export const softSkills = [
  'Problem Solving',
  'Teamwork',
  'Communication',
  'Critical Thinking',
  'Fast Learner',
  'Adaptability',
  'Analytical Thinking',
  'Time Management',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
