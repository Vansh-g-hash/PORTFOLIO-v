/* Your portfolio content lives here. Edit this file to update the website. */
window.PORTFOLIO = {
  name: 'Vansh Gupta',
  title: 'Software Engineer · Full Stack · AI/ML',
  location: 'New Delhi, India',
  email: 'guptavansh28@gmail.com',
  tagline: 'Building software with purpose. Exploring the intelligence behind it.',
  summary: 'Computer Science and Engineering graduate with hands-on experience in full-stack software development and projects in computer vision, natural language processing, and machine learning. I enjoy turning challenging ideas into thoughtful, working products.',
  social: {
    github: 'https://github.com/Vansh-g-hash',
    leetcode: 'https://leetcode.com/u/9iiNaN50z5/',
    linkedin: 'https://www.linkedin.com/in/vansh-gupta-62354432a',
    instagram: 'https://www.instagram.com/heyitsv28?igsh=MTlxaXBkOXVsYWg3YQ=='
  },
  resume: '/assets/Vansh_Gupta_Resume.pdf',
  education: {
    school: 'PDM University',
    degree: 'B.Tech in Computer Science & Engineering',
    dates: '2022 — 2026',
    location: 'Bahadurgarh, Haryana',
    grade: 'CGPA 7.78 / 10'
  },
  profiles: [
    { id:'recruiter', name:'Recruiter', icon:'◈', color:'blue', descriptor:'The professional story', kicker:'THE CAREER EDIT', headline:'Building products. Solving problems.', details:'A closer look at my experience, education, and the work I ship.' },
    { id:'developer', name:'Developer', icon:'</>', color:'red', descriptor:'Projects & source code', kicker:'THE DEVELOPER CUT', headline:'Code is where ideas begin.', details:'From full-stack applications to computer vision and machine learning.' },
    { id:'stalker', name:'Stalker', icon:'⌘', color:'green', descriptor:'Go down the rabbit hole', kicker:'ACCESS GRANTED', headline:'Curious? Good. Explore deeper.', details:'A behind-the-scenes look at my skills, GitHub, projects and interests.' },
    { id:'adventurer', name:'Adventurer', icon:'✦', color:'amber', descriptor:'The curious side', kicker:'OFF THE BEATEN PATH', headline:'Always learning. Always building.', details:'Experiments, milestones, certificates, and everything in between.' }
  ],
  projects: [
    { id:'furnivision-ai', name:'FurniVision AI', tag:'COMPUTER VISION', genre:'AI / Computer Vision', year:'2026', image:'furnivision.svg', subtitle:'See more than meets the eye.', description:'A furniture detection and segmentation app using YOLO, OpenCV and Segment Anything Model. It annotates objects, produces segmentation masks, and links relevant products on Amazon.', stack:['Python','YOLO','OpenCV','SAM','Hugging Face'], github:'https://github.com/guptavansh/Furnvision-ai', live:'https://huggingface.co/spaces/guptavansh/Furnvision-ai', points:['YOLO-powered furniture detection','Segmentation masks and bounding boxes','Product discovery links','Deployed to Hugging Face Spaces'] },
    { id:'aura-ai-chatbot', name:'Aura AI Chatbot', tag:'NATURAL LANGUAGE', genre:'AI / NLP', year:'2026', image:'aura.svg', subtitle:'A conversation worth having.', description:'A conversational AI project designed to understand user questions and provide useful context-aware responses through external API integration.', stack:['Python','NLP','API Integration','React'], github:'https://github.com/guptavansh/Aura-AI', live:'https://ai-chatbot-nu-dun-46.vercel.app/', points:['Context-aware conversation flows','Natural-language interaction','External API integration','Interactive web experience'] },
    { id:'healthguard-ai', name:'HealthGuard AI', tag:'MACHINE LEARNING', genre:'AI / Healthcare', year:'2026', image:'healthguard.svg', subtitle:'Smarter insights for better awareness.', description:'An ML-powered diabetes risk prediction application supporting individual inputs, CSV batch processing, and feature-importance visualizations.', stack:['Python','Streamlit','Machine Learning','Scikit-learn','NumPy'], github:'https://github.com/guptavansh/HealthGuard-AI', live:'https://healthguard-ai-bu8lhwue93ko5ajalr6cft.streamlit.app/', points:['Individual risk prediction','Batch CSV processing','Feature-importance visualizations','Interactive Streamlit interface'] },
    { id:'handwritten-digit-classifier', name:'Digit Classifier', tag:'DEEP LEARNING', genre:'Machine Learning', year:'2025', image:'digit.svg', subtitle:'Teaching machines to read.', description:'A neural-network project for recognizing handwritten digits, with an interactive prediction interface.', stack:['Python','TensorFlow','Scikit-learn','Streamlit','NumPy'], github:'https://github.com/guptavansh/Handwritten-Digit-Classifier', live:'https://handwritten-digit-classifier-kaadh8vwe3lh8aa84cfwby.streamlit.app/', points:['Handwritten digit recognition','MNIST dataset','Interactive predictions','Image preprocessing'] },
    { id:'spam-detector', name:'Spam Email Detector', tag:'TEXT CLASSIFICATION', genre:'Machine Learning / NLP', year:'2025', image:'spam.svg', subtitle:'Separating signal from noise.', description:'A text-classification project that uses NLP preprocessing and traditional machine learning to identify spam emails.', stack:['Python','NLTK','Pandas','Scikit-learn','Streamlit'], github:'https://github.com/guptavansh/Spam-Email-Detector', live:'https://spam-email-detector-qftsm5zpzudnll3vaaw2n3.streamlit.app/', points:['Text preprocessing','TF-IDF vectorization','Spam classification','Interactive message analysis'] },
    { id:'album-finder', name:'Album Finder', tag:'WEB APPLICATION', genre:'Frontend / APIs', year:'2025', image:'album.svg', subtitle:'Find your next favorite sound.', description:'A responsive music-discovery interface to search for albums and explore artist information.', stack:['React','JavaScript','CSS','API Integration'], github:'https://github.com/guptavansh/Album-Finder', live:'https://v0-album-finder-app-ten.vercel.app/', points:['Album and artist search','Music discovery interface','External API integration','Responsive design'] }
  ],
  experience: [
    { id:'digitalk', role:'Software Developer', company:'Digitalk Infotech', dates:'Sep 2026 — Present', location:'New Delhi', description:'Working on application development, feature implementation, debugging and software engineering tasks.', technologies:['Software Development','Debugging','Feature Implementation'] },
    { id:'officebanao', role:'Software Development Engineer Intern', company:'OfficeBanao', dates:'May 2026 — Jul 2026', location:'Gurugram, Haryana', description:'Contributed to NEBULA, an enterprise facility-management platform across Visitor Management, Facility Booking and Asset Management. Built UI enhancements, QR workflows, feature integrations and fixes.', technologies:['React','TypeScript','Node.js','Express','MongoDB','Git'] },
    { id:'godims', role:'Full Stack Engineer Intern', company:'Godims', dates:'Nov 2025 — Apr 2026', location:'Rohini, New Delhi', description:'Developed and maintained MERN applications, responsive interfaces and REST API integrations.', technologies:['React','JavaScript','TypeScript','Node.js','Express','MongoDB'] },
    { id:'mercer', role:'Centre Supervisor · Contract', company:'Mercer Mettl & SABERTECH', dates:'Jun 2024 — Sep 2025', location:'New Delhi', description:'Managed assessment-centre logistics, candidate flow and technical readiness in coordination with operations and technical teams.', technologies:['Operations','Technical Coordination','Logistics'] }
  ],
  skills: [
    { category:'Languages', values:['Python','PHP','JavaScript','TypeScript','HTML','CSS','C++','SQL'] },
    { category:'Frontend', values:['React','Next.js','Tailwind CSS','Responsive Design'] },
    { category:'Backend', values:['Node.js','Express','REST APIs','Flask'] },
    { category:'AI & Machine Learning', values:['Machine Learning','Scikit-learn','Pandas','NumPy','TensorFlow','PyTorch','NLP'] },
    { category:'Computer Vision', values:['OpenCV','YOLO','Segment Anything Model','Object Detection','Image Processing'] },
    { category:'Data & Storage', values:['MongoDB','MySQL','PostgreSQL','SQLite'] },
    { category:'Tools & Deployment', values:['Git','GitHub','VS Code','Postman','Vercel','Streamlit Cloud','Hugging Face Spaces','Docker'] }
  ],
  certifications: [
    { name:'Oracle Cloud Infrastructure 2025 · AI Foundations Associate', issuer:'Oracle', image:null, group:'AI / Cloud' },
    { name:'AI in Action Job Simulation', issuer:'Deloitte via Forage', image:'deloitte-simulation.png', group:'AI' },
    { name:'Data Analytics Job Simulation', issuer:'Deloitte via Forage', image:'deloitte.png', group:'Data Analytics' },
    { name:'Data Visualisation: Empowering Business with Effective Insights', issuer:'Tata via Forage', image:null, group:'Analytics' },
    { name:'First Personal Project', issuer:'Boot.dev', image:'bootdev-first-project.png', group:'Development' },
    { name:'Capstone Project', issuer:'Boot.dev', image:'bootdev-capstone.png', group:'Development' },
    { name:'AI And Machine Learning Full Course', issuer:'IBM SkillsBuild / Simplilearn', image:'simplilearn-aiml.png', group:'AI / ML' },
    { name:'Energy Literacy Training', issuer:'Energy Swaraj Foundation', image:'energy-swaraj.png', group:'Learning' },
    { name:'Database Programming with SQL', issuer:'Oracle Academy', image:'oracle-sql.png', group:'Databases' }
  ]
};
