// Reusable icon for project links
const ExternalLinkIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

const projectsData = [
  {
    title: 'AI Animal Detection System',
    isFeatured: true,
    status: 'In Progress',
    statusIcon: '🚧',
    category: 'AI / Machine Learning',
    description:
      'A real-time system that uses computer vision to detect and classify animals in video streams, designed for wildlife monitoring and conservation efforts.',
    problem:
      'Manual wildlife tracking is inefficient and costly. This project automates the process, providing accurate, real-time data for researchers.',
    features: [
      'Real-time object detection using YOLOv8',
      'High-accuracy classification of multiple animal species',
      'Web-based dashboard for live monitoring and alerts',
      'Data logging and analysis of animal activity patterns',
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js'],
    githubUrl: 'https://github.com/ParamMavani/Project-Sentinel',
    liveUrl: null, // No live demo yet
    imageUrl: 'https://via.placeholder.com/800x600/1E293B/FFFFFF?text=AI+Animal+Detection',
  },
  {
    title: 'BookMart – Premium E-commerce',
    isFeatured: false,
    status: 'Completed',
    statusIcon: '🟢',
    category: 'Full-Stack Development',
    description:
      'A feature-rich e-commerce platform for selling books, built with a modern MERN stack and focused on a seamless user experience.',
    problem:
      'Many e-commerce sites suffer from poor performance and clunky interfaces. BookMart provides a fast, intuitive, and secure shopping experience.',
    features: [
      'Full-featured shopping cart and checkout process',
      'Stripe integration for secure payment processing',
      'User authentication and personalized profiles',
      'Admin panel for product and order management',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ParamMavani/bookmart-ecommerce',
    liveUrl: null, // Placeholder for future deployment
    imageUrl: 'https://via.placeholder.com/800x600/1E293B/FFFFFF?text=BookMart+E-commerce',
  },
  {
    title: 'Fix My Area – Civic Issue Reporting',
    isFeatured: false,
    status: 'Completed',
    statusIcon: '🟢',
    category: 'Civic Tech / Full-Stack',
    description:
      'A web platform that empowers citizens to report local issues like potholes or broken streetlights, and tracks the status of their resolution.',
    problem:
      'Citizens often lack a direct and transparent channel to report local infrastructure problems to municipal authorities, leading to delays and frustration.',
    features: [
      'Geolocation-based issue reporting',
      'Image uploads to document issues',
      'Public dashboard to view all reported issues',
      'Status tracking (Reported, In Progress, Resolved)',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Leaflet.js', 'Tailwind CSS'],
    githubUrl: null, // Placeholder for future repository
    liveUrl: 'https://fixmyareaa.netlify.app',
    imageUrl: 'https://via.placeholder.com/800x600/1E293B/FFFFFF?text=Fix+My+Area',
  },

  {
    title: 'AirWatch Global – Air Quality Dashboard',
    isFeatured: false,
    status: 'Completed',
    statusIcon: '🟢',
    category: 'Data Visualization / Frontend',
    description:
      'An interactive dashboard that visualizes real-time air quality data from around the world, providing users with clear and actionable insights.',
    problem:
      'Raw air quality data is often complex and difficult for the general public to understand. This dashboard makes it accessible and intuitive.',
    features: [
      'Interactive map with color-coded AQI levels',
      'Search for specific cities or locations',
      'Detailed charts for historical data trends',
      'Responsive design for access on any device',
    ],
    techStack: ['React', 'D3.js', 'REST APIs', 'Tailwind CSS'],
    githubUrl: null, // Placeholder
    liveUrl: null, // Placeholder
  },
]

const ProjectShowcase = ({ project, index }) => {
  const isReversed = index % 2 !== 0

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-24`}>
      {/* Image Column */}
      <div className={`overflow-hidden rounded-2xl ${isReversed ? 'md:order-2' : ''}`}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content Column */}
      <div className={`${isReversed ? 'md:order-1' : ''}`}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {project.isFeatured && (
            <span className="inline-block bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full text-xs font-semibold">
              Featured Project
            </span>
          )}
          <span className="inline-block bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary">
            {project.statusIcon} {project.status}
          </span>
        </div>

        <h3 className="text-3xl font-bold text-text-primary mb-4">{project.title}</h3>
        <p className="text-text-secondary mb-6">{project.description}</p>
        
        <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-text-primary mb-2">Problem Solved</h4>
          <p className="text-sm text-text-secondary">{project.problem}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-slate-700/50 text-text-secondary text-xs font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-primary bg-slate-800/50 border border-white/10 rounded-full transition-colors hover:bg-slate-800">
              GitHub <ExternalLinkIcon />
            </a>
          )}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300">
              Live Demo <ExternalLinkIcon />
            </a>
          ) : (
            <button disabled className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-text-secondary bg-slate-800/30 border border-slate-700/50 rounded-full cursor-not-allowed">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[var(--accent-primary)] font-mono">03 /</span>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              FEATURED PROJECTS
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-text-primary mb-4">
            Projects that solve real-world problems.
          </h3>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my journey across AI, full-stack
            development, and modern web technologies.
          </p>
        </div>

        {/* Projects List */}
        <div>
          {projectsData.map((project, index) => (
            <ProjectShowcase key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects