import React, { useState, useEffect } from 'react';
import { Github,Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Palette, Award, BookOpen, User, Briefcase, FolderOpen, MessageCircle, ChevronRight, Star, Calendar, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll listener for active section tracking
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: '.NET Framework', level: 90, icon: Code, color: 'bg-purple-500' },
    { name: 'ReactJS', level: 85, icon: Code, color: 'bg-blue-500' },
    { name: 'SQL Server', level: 88, icon: Database, color: 'bg-green-500' },
    { name: 'JavaScript', level: 82, icon: Code, color: 'bg-yellow-500' },
    { name: 'AWS', level: 75, icon: Cloud, color: 'bg-orange-500' },
    { name: 'WordPress', level: 80, icon: Palette, color: 'bg-indigo-500' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Sorting Visualizer',
      description: 'Interactive web app demonstrating classic sorting algorithms with real-time visualizations.',
      tech: ['ReactJS', 'CSS Modules', 'React Spring'],
      features: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Selection Sort', 'Real-time Generation'],
      status: 'Live',
      demoLink: 'https://sorting-visualizer-neon-doa4l24o2-abhishek-kusalkars-projects.vercel.app/', // Update with your actual link
      githubLink: 'https://github.com/AbhishekKusalkar/sorting-visualizer-neon', // Update with your actual link
      image: 'https://i.postimg.cc/yYbRn1t9/Screenshot-2025-09-03-154704.png'
    },
    {
      id: 2,
      title: 'Pathfinding Visualizer',
      description: 'Visual demonstration of pathfinding algorithms including Dijkstra\'s Algorithm.',
      tech: ['ReactJS', 'CSS', 'Animation Libraries'],
      features: ['Dijkstra Algorithm', 'Interactive Grid', 'Real-time Visualization'],
      status: 'Live',
      demoLink: 'https://vercel.com/abhishek-kusalkars-projects/path-finding-algorithms',
      githubLink: 'https://github.com/AbhishekKusalkar/path-finding-algorithms', 
      image: 'https://i.postimg.cc/fLDSkJS4/Screenshot-2025-09-08-143614.png'
    },
    {
      id: 3,
      title: 'Chat-app',
      description: 'Created dynamic chat app',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL'],
      features: ['Secure Authentication', 'Real-time Results', 'Admin Dashboard'],
      status: 'Completed',
      demoLink: 'https://i.postimg.cc/L6pPbQ84/Screenshot-2025-09-10-111117.png', 
      githubLink: 'https://github.com/omansayyad29/chat-app', 
      image: 'https://i.postimg.cc/L6pPbQ84/Screenshot-2025-09-10-111117.png'
    },
    {
      id: 4,
      title: 'PDF Viewer & Renamer',
      description: 'Custom PDF viewing application with image-like navigation and file management.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      features: ['Image-style Viewing', 'Navigation Controls', 'File Renaming'],
      status: 'Completed',
      demoLink: 'https://pdf-batch-renamer-tool.vercel.app/', 
      githubLink: 'https://images.unsplash.com/photo-1494952200529-3ceb822a75e2?w=400&h=250&fit=crop', 
      image: 'https://i.postimg.cc/SxKJBBF4/Screenshot-2025-09-10-111132.png'
    }
  ];

  const experience = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'iWebtechno',
      type: 'Current Position',
      location: 'Onsite',
      duration: 'Present',
      description: 'Working on university-based projects for Punjabrao Deshmukh Krishi Vidyapeeth, Akola.',
      projects: ['IUMS (Institute User Management System)', 'ORMS (Online Recruitment Management System)'],
      tech: ['.NET', 'React', 'SQL Server']
    },
    {
      id: 2,
      title: 'Business Development Manager',
      company: 'Advait Yoga',
      type: 'Previous Experience',
      location: 'Goa',
      duration: '6 months',
      description: 'Created websites, managed social media, and handled digital marketing operations.',
      projects: ['Advait Yoga Website', 'The School of Bliss (theschoolofbliss.com)'],
      tech: ['WordPress', 'Divi', 'Elementor', 'SEO', 'Meta Ads']
    }
  ];

  const education = [
    {
      degree: 'BSc Computer Science',
      institution: 'Aki\'s Poona College of Science Commerce and Arts',
      year: '2023',
      location: 'Pune, India',
      percentage: '83%'
    },
    {
      degree: '12th HSC',
      institution: 'Rajiv Gandhi Academy of E-Learning',
      year: '2020',
      location: 'Pune, India',
      percentage: '76%'
    },
    {
      degree: '10th SSC',
      institution: 'Dr. Vasantadada Patil Madhyamik Vidyaniketan',
      year: '2018',
      location: 'Pune, India',
      percentage: '91.60%'
    }
  ];

  const certifications = [
    { name: 'AWS Certification', provider: 'Tech Concept Hub', icon: Cloud },
    { name: 'Bootstrap Certification', provider: 'Professional Course', icon: Code },
    { name: 'Python and Deep Learning', provider: 'DevTown', icon: Code },
    { name: 'Hotstar Clone Development', provider: 'Microsoft Learn Student Ambassador', icon: Globe }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhishek Kusalkar
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-colors duration-300 ${
                    activeSection === section 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => {
                  const nav = document.getElementById('mobile-nav');
                  nav.classList.toggle('hidden');
                }}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Move mobile nav OUTSIDE nav and flex container */}
      <div
  id="mobile-nav"
  className="hidden md:hidden fixed top-16 left-0 w-full bg-white border-t z-[100] shadow-lg"
>
  <div className="px-2 pt-2 pb-3 space-y-1">
    {['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'].map((section) => (
      <button
        key={section}
        onClick={() => {
          scrollToSection(section);
          document.getElementById('mobile-nav').classList.add('hidden');
        }}
        className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize ${
          activeSection === section
            ? 'text-blue-600 bg-blue-50'
            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
        }`}
      >
        {section}
      </button>
    ))}
  </div>
</div>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Abhishek Kusalkar
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Full Stack Developer & Cloud Enthusiast
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
              Passionate about building scalable web applications and cloud solutions with expertise in .NET, ReactJS, and AWS
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:abhishekkusalkar1234@gmail.com" className="flex items-center gap-2 bg-white shadow-lg rounded-full px-6 py-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/abhishek-kusalkar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1">
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/AbhishekKusalkar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white rounded-full px-6 py-3 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/abhii_kusalkar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-pink-800 text-white rounded-full px-6 py-3 hover:bg-pink-900 transition-all duration-300 hover:-translate-y-1">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Code className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Full Stack Development</h3>
              <p className="text-gray-600 text-sm">.NET, ReactJS, SQL Server</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Cloud className="w-8 h-8 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600 text-sm">AWS, EC2, S3, RDS</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <Palette className="w-8 h-8 text-green-600 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">WordPress, SEO, Meta Ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <User className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
                <p className="text-gray-600 leading-relaxed">
                  Aspiring Full Stack Developer with expertise in .NET, ReactJS, SQL, and AWS, passionate about building scalable web applications and cloud solutions. Seeking to contribute technical expertise, problem-solving skills, and innovative thinking to a growth-focused IT organization.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <MapPin className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> 8530162433</p>
                  <p className="flex items-center gap-3"><Mail className="w-4 h-4" /> abhishekkusalkar1234@gmail.com</p>
                  <p className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Katraj, Pune, Maharashtra</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Star className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Interests</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">🧩 Solving Rubik's Cubes</p>
                  <p className="text-gray-600">✈️ Traveling</p>
                  <p className="text-gray-600">🧘‍♂️ Yoga and Meditation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    </div>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${exp.type === 'Current Position' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {exp.type}
                    </span>
                    <p className="text-gray-500 mt-2">{exp.location} • {exp.duration}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Projects:</h4>
                    <ul className="space-y-2">
                      {exp.projects.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.demoLink}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                      <div className="text-right">
                        <span className="text-blue-600 font-semibold">{edu.percentage}</span>
                        <p className="text-sm text-gray-500">{edu.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-purple-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <cert.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                        <p className="text-gray-600 text-sm">{cert.provider}</p>
                      </div>
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can collaborate on your next project.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Mail className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:abhishekkusalkar1234@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                abhishekkusalkar1234@gmail.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <Phone className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="https://wa.me/+918530162433" className="text-blue-100 hover:text-white transition-colors">
                +91 8530162433
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <MapPin className="w-8 h-8 mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Katraj, Pune, Maharashtra</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:abhishekkusalkar1234@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Send Message
            </a>
            <a 
              href="https://linkedin.com/in/abhishek-kusalkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 border border-white/30"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Abhishek Kusalkar. Built with React and passion for great user experiences.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/AbhishekKusalkar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/abhishek-kusalkar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/abhii_kusalkar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:abhishekkusalkar1234@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;