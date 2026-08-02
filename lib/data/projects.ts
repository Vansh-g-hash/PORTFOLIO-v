export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  github?: string
  demo?: string
  technologies: string[]
  category: 'ai' | 'web' | 'ml'
  featured: boolean
  status: 'completed' | 'in-progress'
  features: string[]
  challenges: string[]
  lessons: string[]
}

export const projectsData: Project[] = [
  {
    id: 'healthguard-ai',
    title: 'HealthGuard AI',
    description: 'AI-powered health monitoring system using computer vision for real-time vital signs detection.',
    longDescription: 'An intelligent health monitoring application that uses advanced computer vision and AI algorithms to detect and monitor vital signs in real-time.',
    image: '/projects/healthguard.png',
    github: 'https://github.com/VANSH-G-HASH/HealthGuard-AI',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Flask'],
    category: 'ai',
    featured: true,
    status: 'completed',
    features: [
      'Real-time vital signs detection using computer vision',
      'Heart rate and respiration monitoring',
      'Health data visualization dashboard',
      'Data logging and historical analysis',
      'Alert system for anomalies',
    ],
    challenges: [
      'Achieving accurate computer vision detection in varying lighting conditions',
      'Optimizing ML model for real-time inference',
      'Handling edge cases in health data',
    ],
    lessons: [
      'Advanced computer vision techniques',
      'Real-time ML inference optimization',
      'Health data privacy and security',
    ],
  },
  {
    id: 'furnivision-ai',
    title: 'FurniVision AI',
    description: 'Furniture detection and classification system using YOLOv8 for object recognition.',
    longDescription: 'A sophisticated computer vision system that detects, classifies, and analyzes furniture in images and video streams.',
    image: '/projects/furnivision.png',
    github: 'https://github.com/VANSH-G-HASH/FurniVision-AI',
    demo: 'https://huggingface.co/spaces/VANSH-G-HASH/FurniVision-AI',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Streamlit', 'PyTorch'],
    category: 'ai',
    featured: true,
    status: 'completed',
    features: [
      'Real-time furniture detection with YOLOv8',
      'Multi-class furniture classification',
      'Image and video processing',
      'Interactive Streamlit interface',
      'Performance metrics and confidence scores',
    ],
    challenges: [
      'Training custom furniture detection model',
      'Achieving real-time performance',
      'Handling diverse furniture styles and angles',
    ],
    lessons: [
      'Object detection with YOLO architecture',
      'Model fine-tuning and optimization',
      'Computer vision best practices',
    ],
  },
  {
    id: 'aura-ai-chatbot',
    title: 'Aura AI Chatbot',
    description: 'Advanced AI chatbot with natural language understanding and context awareness.',
    longDescription: 'A sophisticated AI chatbot powered by state-of-the-art language models, featuring context awareness and intelligent conversation flow.',
    image: '/projects/aura-ai.png',
    github: 'https://github.com/VANSH-G-HASH/Aura-AI',
    demo: 'https://aura-ai-chatbot.vercel.app',
    technologies: ['Python', 'NLP', 'API Integration', 'JavaScript', 'React'],
    category: 'ai',
    featured: true,
    status: 'completed',
    features: [
      'Natural language understanding',
      'Context-aware responses',
      'Multi-turn conversations',
      'Real-time streaming responses',
      'Web interface with React',
    ],
    challenges: [
      'Implementing context management',
      'Ensuring response accuracy and relevance',
      'Handling edge cases in conversations',
    ],
    lessons: [
      'NLP and language model integration',
      'Real-time API communication',
      'Conversational AI design',
    ],
  },
  {
    id: 'nebula-platform',
    title: 'NEBULA Platform',
    description: 'Enterprise facility management system built during internship at OfficeBanao.',
    longDescription: 'A comprehensive enterprise platform for managing facilities, visitor access, asset tracking, and resource booking across organizations.',
    image: '/projects/nebula.png',
    github: 'https://github.com/VANSH-G-HASH/nebula-platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs', 'QR Integration'],
    category: 'web',
    featured: true,
    status: 'completed',
    features: [
      'Visitor management with QR-based check-in',
      'Facility booking system with calendar',
      'Asset tracking and management',
      'Admin dashboard with analytics',
      'Mobile-responsive interface',
      'Real-time notifications',
    ],
    challenges: [
      'Handling concurrent user requests',
      'Complex permission and role management',
      'Real-time data synchronization',
      'QR code integration and verification',
    ],
    lessons: [
      'Enterprise application architecture',
      'Database optimization and scaling',
      'Real-time system design',
      'QR code technology integration',
    ],
  },
  {
    id: 'handwritten-digit-classifier',
    title: 'Handwritten Digit Classifier',
    description: 'Machine learning model for recognizing handwritten digits using neural networks.',
    longDescription: 'A neural network model trained to classify handwritten digits with high accuracy, featuring interactive web interface.',
    image: '/projects/digit-classifier.png',
    github: 'https://github.com/VANSH-G-HASH/Handwritten-Digit-Classifier',
    demo: 'https://huggingface.co/spaces/VANSH-G-HASH/Digit-Classifier',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Streamlit', 'NumPy'],
    category: 'ml',
    featured: false,
    status: 'completed',
    features: [
      'Trained on MNIST dataset',
      'Neural network architecture',
      'Real-time prediction',
      'Interactive canvas for drawing',
      'Accuracy metrics display',
    ],
    challenges: [
      'Model optimization for accuracy',
      'Handling image preprocessing',
      'Edge case predictions',
    ],
    lessons: [
      'Neural network fundamentals',
      'Image preprocessing techniques',
      'Model training and evaluation',
    ],
  },
  {
    id: 'spam-detector',
    title: 'Spam Email Detector',
    description: 'NLP-based system for detecting and classifying spam emails with machine learning.',
    longDescription: 'An intelligent spam detection system using NLP techniques to filter unwanted emails with high accuracy.',
    image: '/projects/spam-detector.png',
    github: 'https://github.com/VANSH-G-HASH/Spam-Detector',
    technologies: ['Python', 'NLP', 'Scikit-learn', 'Pandas', 'NLTK'],
    category: 'ml',
    featured: false,
    status: 'completed',
    features: [
      'Text preprocessing and tokenization',
      'TF-IDF vectorization',
      'Naive Bayes classifier',
      'Accuracy and precision metrics',
      'Email text analysis',
    ],
    challenges: [
      'Feature extraction optimization',
      'Handling diverse email formats',
      'Reducing false positives',
    ],
    lessons: [
      'NLP preprocessing techniques',
      'Text classification',
      'Model evaluation and validation',
    ],
  },
  {
    id: 'album-finder',
    title: 'Album Finder',
    description: 'Music discovery application for searching albums and artists.',
    longDescription: 'A web application for discovering and exploring music albums, featuring search and detailed information display.',
    image: '/projects/album-finder.png',
    github: 'https://github.com/VANSH-G-HASH/Album-Finder',
    demo: 'https://album-finder.vercel.app',
    technologies: ['React', 'JavaScript', 'CSS', 'API Integration', 'Responsive Design'],
    category: 'web',
    featured: false,
    status: 'completed',
    features: [
      'Album search functionality',
      'Artist discovery',
      'Album details display',
      'Responsive UI',
      'Real-time search',
    ],
    challenges: [
      'API integration and rate limiting',
      'User interface responsiveness',
      'Search optimization',
    ],
    lessons: [
      'Web API integration',
      'React state management',
      'UI/UX design principles',
    ],
  },
]
