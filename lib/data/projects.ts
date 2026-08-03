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
    description: 'AI-powered diabetes risk prediction system using machine learning.',
    longDescription: 'An intelligent health monitoring application that uses machine learning to predict diabetes risk with individual input and batch CSV processing.',
    image: '/projects/healthguard.png',
    github: 'https://github.com/guptavansh/HealthGuard-AI',
    demo: 'https://healthguard-ai-bu8lhwue93ko5ajalr6cft.streamlit.app/',
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Scikit-learn', 'NumPy'],
    category: 'ai',
    featured: true,
    status: 'completed',
    features: [
      'Diabetes risk prediction using ML',
      'Individual input processing',
      'Batch CSV processing',
      'Feature importance visualization',
      'Prediction confidence scoring',
    ],
    challenges: [
      'Accurate disease risk prediction',
      'Handling missing data values',
      'Feature engineering and selection',
    ],
    lessons: [
      'Healthcare data science',
      'ML model development',
      'Data visualization and insights',
    ],
  },
  {
    id: 'furnivision-ai',
    title: 'FurniVision AI',
    description: 'Furniture detection and classification system using YOLO and SAM for object recognition.',
    longDescription: 'A sophisticated computer vision system that detects, classifies, and analyzes furniture in images with bounding boxes and segmentation masks.',
    image: '/projects/furnivision.png',
    github: 'https://github.com/guptavansh/Furnvision-ai',
    demo: 'https://huggingface.co/spaces/guptavansh/Furnvision-ai',
    technologies: ['Python', 'OpenCV', 'YOLO', 'SAM', 'Hugging Face'],
    category: 'ai',
    featured: true,
    status: 'completed',
    features: [
      'Real-time furniture detection with YOLO',
      'Segmentation masks using Segment Anything Model',
      'Bounding box annotations with labels',
      'Amazon buying links integration',
      'Deployed on Hugging Face Spaces',
    ],
    challenges: [
      'Accurate multi-class furniture detection',
      'Segmentation mask quality',
      'Real-time inference optimization',
    ],
    lessons: [
      'Object detection with YOLO',
      'Image segmentation techniques',
      'Model deployment on cloud platforms',
    ],
  },
  {
    id: 'aura-ai-chatbot',
    title: 'Aura AI Chatbot',
    description: 'Advanced AI chatbot with natural language understanding and context awareness.',
    longDescription: 'A sophisticated AI chatbot powered by state-of-the-art language models, featuring context awareness and intelligent conversation flow.',
    image: '/projects/aura-ai.png',
    github: 'https://github.com/guptavansh/Aura-AI',
    demo: 'https://ai-chatbot-nu-dun-46.vercel.app/',
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
    id: 'handwritten-digit-classifier',
    title: 'Handwritten Digit Classifier',
    description: 'Machine learning model for recognizing handwritten digits using neural networks.',
    longDescription: 'A neural network model trained to classify handwritten digits with high accuracy, featuring interactive web interface.',
    image: '/projects/digit-classifier.png',
    github: 'https://github.com/guptavansh/Handwritten-Digit-Classifier',
    demo: 'https://handwritten-digit-classifier-kaadh8vwe3lh8aa84cfwby.streamlit.app/',
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
    github: 'https://github.com/guptavansh/Spam-Email-Detector',
    demo: 'https://spam-email-detector-qftsm5zpzudnll3vaaw2n3.streamlit.app/',
    technologies: ['Python', 'NLP', 'Scikit-learn', 'Pandas', 'NLTK', 'Streamlit'],
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
    github: 'https://github.com/guptavansh/Album-Finder',
    demo: 'https://v0-album-finder-app-ten.vercel.app/',
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
