//src/data/projects.js
import EvadegptImage from '../assets/evadegpt.jpg'
//import AkaImage from '../assets/aka-color.jpg'
//import FireRobotImage from '../assets/fire-robot.jpg'
//import JobAnalyticsImage from '../assets/job-analytics.jpg'
//import CvDetectImage from '../assets/cv-detect.jpg'
//import FakeStoreImage from '../assets/fake-store.jpg'
//import LaravelImage from '../assets/laravel.jpg'
//import P5Image from '../assets/p5.jpg'

const GH = 'https://github.com/VaibhavJha-github';

const projects = [
  {
    id: 'eluragpt',
    title: 'EluraGPT — AI Humanizer',
    description: 'Subscription SaaS that humanizes LLM text for natural style while preserving meaning.',
    bullets: [
      'Auth + billing + usage limits',
      'Mobile-first UI with matte blue styling',
      'Meta Pixel + CAPI funnel analytics'
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'OpenAI/GPT'],
    image: EvadegptImage,
    github: `${GH}`,               // replace with repo when public
    demo: 'https://www.evadegpt.ai/',
    featured: true
  },
  {
    id: 'aka-color',
    title: 'AI Colour Management System (WIL, AKA Studio)',
    description: 'Python/OpenCV pipeline to automate colour accuracy across devices.',
    bullets: ['~40% reduction in manual adjustments', 'Profile prediction for multiple resolutions'],
    tags: ['Python', 'OpenCV', 'Machine Learning'],
    image: AkaImage,
    github: `${GH}`,               // point to specific repo if public
    demo: '',
    featured: true
  },
  {
    id: 'fire-robot',
    title: 'Multi-Robot Fire Response',
    description: 'ROS Noetic + CSP (PAT) planning; refill-aware task execution.',
    bullets: ['3 fires/tank; auto-refill & resume', 'Gazebo simulation + obstacle avoidance'],
    tags: ['ROS', 'C++', 'Python', 'CSP', 'Gazebo'],
    image: FireRobotImage,
    github: `${GH}`,
    demo: ''
  },
  {
    id: 'job-analytics',
    title: 'Job Market Analytics',
    description: 'EDA + dashboards with sectoral salary comparisons and diffusion patterns.',
    bullets: ['Interactive Plotly charts', 'Notebook + report'],
    tags: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Seaborn'],
    image: JobAnalyticsImage,
    github: `${GH}`,
    demo: ''
  },
  {
    id: 'cv-detect',
    title: 'CV: Fashion-MNIST + Detectron2',
    description: 'Image classifiers (MLP/CNN) and object detection experimentation.',
    bullets: ['Training/validation reporting', 'Model comparison'],
    tags: ['TensorFlow/PyTorch', 'Detectron2', 'OpenCV'],
    image: CvDetectImage,
    github: `${GH}`,
    demo: ''
  },
  {
    id: 'fake-store',
    title: '“Fake Store” Mobile App',
    description: 'React Native app consuming Fake Store API with cart flows.',
    bullets: ['API integration', 'State management', 'Responsive UI'],
    tags: ['React Native', 'JavaScript', 'API'],
    image: FakeStoreImage,
    github: `${GH}`,
    demo: ''
  },
  {
    id: 'laravel-webapp',
    title: 'Secure Laravel Web Application',
    description: 'Dynamic app with secure SDLC practices and OWASP awareness.',
    bullets: ['Auth patterns, form security', 'Data CRUD + MySQL'],
    tags: ['PHP', 'Laravel', 'MySQL', 'Cybersecurity'],
    image: LaravelImage,
    github: `${GH}`,
    demo: ''
  },
  {
    id: 'creative-p5',
    title: 'Creative Coding (p5.js + p5Play)',
    description: 'Interactive visual sketches and mini-experiences.',
    bullets: ['2D graphics via code', 'Playable demos'],
    tags: ['JavaScript', 'p5.js'],
    image: P5Image,
    github: `${GH}`,
    demo: ''
  }
]

export default projects
