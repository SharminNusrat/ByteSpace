// All Home page copy, kept out of the markup so components stay presentational.

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '#courses' },
  { label: 'Creators', href: '#creators' },
]

// Three hand-centred rows in the design, so they stay three rows here too.
export const categoryRows = [
  [
    { label: 'Featured', width: 96 },
    { label: 'Music', width: 75 },
    { label: 'Drawing & Painting', width: 170 },
    { label: 'Marketing', width: 105 },
    { label: 'Animation', width: 105 },
    { label: 'Social Media', width: 124 },
    { label: 'UI/UX Design', width: 130 },
    { label: 'Creative Marketing', width: 169 },
  ],
  [
    { label: 'Digital Illustration', width: 157 },
    { label: 'Film & Video', width: 123 },
    { label: 'Crafts', width: 76 },
    { label: 'Freelance & Entrepreneurship', width: 246 },
    { label: 'Graphic Design', width: 144 },
    { label: 'Photography', width: 126 },
  ],
  [
    { label: 'Productivity', width: 118 },
    { label: 'Web Development', width: 166 },
    { label: 'Data Science', width: 127 },
    { label: 'Cooking', width: 94 },
  ],
]

const courseDefaults = {
  author: 'purepearl studio',
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  level: 'Beginner',
  rating: '4.5',
  extraStudents: '26+',
  price: '$25',
  period: '/lifetime',
  // Order matters - every card shows these faces in this order.
  students: [
    '/assets/images/home-hero-03.webp',
    '/assets/images/home-8-02.webp',
    '/assets/images/home-8-03.webp',
    '/assets/images/home-8-04.webp',
  ],
}

export const courses = [
  { ...courseDefaults, title: 'Learn Figma from Basic', thumbnail: '/assets/images/home-8-01.webp' },
  { ...courseDefaults, title: 'Build Digital Asset', thumbnail: '/assets/images/home-8-05.webp' },
  { ...courseDefaults, title: 'the Power of Big Data', thumbnail: '/assets/images/home-8-06.webp' },
  { ...courseDefaults, title: 'Balancing Productivity and Self-Care', thumbnail: '/assets/images/home-8-07.webp' },
  { ...courseDefaults, title: 'Mastering Money Management', thumbnail: '/assets/images/home-8-08.webp' },
  { ...courseDefaults, title: 'From Idea to Startup Success', thumbnail: '/assets/images/home-8-09.webp' },
]

export const learningPaths = [
  { label: 'Design', icon: '/assets/icons/design.svg' },
  { label: 'Development', icon: '/assets/icons/development.svg' },
  { label: 'IT & Software', icon: '/assets/icons/it-software.svg' },
  { label: 'Business', icon: '/assets/icons/business.svg' },
  { label: 'Marketing', icon: '/assets/icons/marketing.svg' },
  { label: 'Photography', icon: '/assets/icons/photography.svg' },
]

export const growthStats = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export const creatorBenefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: '/assets/images/home-8-03.webp',
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: '/assets/images/home-testimonials-01.webp',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: '/assets/images/home-testimonials-02.webp',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

export const footerColumns = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]

export const footerLegal = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']


export const heroAvatars = [
  '/assets/images/home-hero-02.webp',
  '/assets/images/home-hero-03.webp',
  '/assets/images/home-hero-04.webp',
  '/assets/images/home-hero-05.webp',
  '/assets/images/home-hero-06.webp',
  '/assets/images/home-hero-07.webp',
  '/assets/images/home-hero-08.webp',
]
