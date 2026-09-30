import { useState, useMemo, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Sparkles, Layers, ShieldCheck } from 'lucide-react'
import BookmartPreviewModal from './BookmartPreviewModal.jsx'

// Custom GitHub SVG
const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const categories = ['All', 'AI & Machine Learning', 'Full-Stack Development', 'Civic Tech & Data']

const projectsData = [
  {
    title: 'AI Animal Detection System (Project Sentinel)',
    isFeatured: true,
    status: 'In Progress',
    statusIcon: '🚧',
    category: 'AI & Machine Learning',
    gradient: 'from-emerald-500/20 via-cyan-500/20 to-blue-500/20',
    accentBorder: 'border-cyan-400/40',
    description:
      'A real-time edge system that utilizes deep learning computer vision to detect, classify, and track wildlife species in high-throughput video streams for habitat preservation.',
    problem:
      'Manual wildlife tracking is labor-intensive, error-prone, and slow. This pipeline automates identification with low latency and high detection confidence.',
    features: [
      'Real-time object detection using YOLOv8 & OpenCV',
      'High-confidence multi-species animal classification',
      'Web-based live telemetry monitoring dashboard',
      'Automated event logging and activity pattern telemetry',
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Node.js'],
    githubUrl: 'https://github.com/ParamMavani/Project-Sentinel',
    liveUrl: null,
  },
  {
    title: 'MedCare – Smart Hospital Management System',
    isFeatured: true,
    status: 'Live Demo',
    statusIcon: '🌐',
    category: 'Full-Stack Development',
    gradient: 'from-rose-500/20 via-fuchsia-500/20 to-indigo-500/20',
    accentBorder: 'border-violet-400/40',
    description:
      'A production-style hospital operations platform for electronic medical records, appointment scheduling, billing, pharmacy workflows, and AI-assisted clinical decision support.',
    problem:
      'Healthcare teams need a secure and connected system to manage patient registrations, consultations, diagnostics, reimbursements, and care follow-ups without fragmented manual processes.',
    features: [
      'Role-based patient and clinical workflow management',
      'EMR, prescription, billing, and pharmacy tracking',
      'AI-driven clinical summaries and safety checks via Gemini',
      'Multi-department scheduling and operational analytics',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Google Gemini', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ParamMavani/medcare-hospital-management-system',
    liveUrl: 'https://medcare-hospital-management-system-369010196112.asia-southeast1.run.app',
  },
  {
    title: 'BookMart – Full-Stack E-Commerce',
    isFeatured: false,
    status: 'Completed',
    statusIcon: '🟢',
    category: 'Full-Stack Development',
    gradient: 'from-amber-600/20 via-orange-600/20 to-indigo-600/20',
    accentBorder: 'border-amber-400/40',
    description:
      'A full-fledged commercial bookstore platform built with Node.js, Express, and MySQL, featuring session authentication, wishlist management, cart operations, PayPal sandbox integration, and automated PDF invoice generation.',
    problem:
      'Online book retailers require seamless catalog querying and secure transactions. BookMart implements parameterized MySQL relational tables, rate limiting, and automated receipt issuance.',
    features: [
      'Relational MySQL schema with product and category indexing',
      'Session authentication with bcrypt hashing & input validation',
      'Interactive shopping bag, wishlist, and real-time total calculation',
      'Automated PDF invoice generation and download via PDFKit',
    ],
    techStack: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'PayPal / Stripe', 'PDFKit'],
    githubUrl: 'https://github.com/ParamMavani/BookMart_Ecommerce.git',
    liveUrl: 'https://bookmart-ecommerce.ai.studio',
  },
  {
    title: 'Fix My Area – Civic Issue Reporting',
    isFeatured: false,
    status: 'Completed',
    statusIcon: '🟢',
    category: 'Civic Tech & Data',
    gradient: 'from-amber-500/20 via-orange-500/20 to-cyan-500/20',
    accentBorder: 'border-amber-400/40',
    description:
      'A community empowerment portal enabling citizens to pinpoint municipal issues like road potholes or broken streetlights, tracking resolution in real-time.',
    problem:
      'Citizens lack a transparent, accountable pipeline to alert municipal authorities, leading to unaddressed infrastructure failures.',
    features: [
      'Interactive geolocation-based issue reporting',
      'Photo documentation and proof upload',
      'Public community status dashboard with filters',
      'Live status lifecycle tracking (Reported → In Progress → Resolved)',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Leaflet.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ParamMavani',
    liveUrl: 'https://fixmyareaa.netlify.app',
  },
  {
    title: 'AirWatch Global – Air Quality Dashboard',
    isFeatured: false,
    status: 'Completed',
    statusIcon: '🟢',
    category: 'Civic Tech & Data',
    gradient: 'from-cyan-500/20 via-teal-500/20 to-emerald-500/20',
    accentBorder: 'border-teal-400/40',
    description:
      'An interactive atmospheric data visualizer streaming real-time Air Quality Index (AQI) metrics across major global metropolises with comparative environmental trends.',
    problem:
      'Pollution readings are typically scattered across raw academic data tables. AirWatch translates complex environmental telemetry into actionable public visuals.',
    features: [
      'Interactive world map with color-coded AQI grades',
      'Instant geographic search across international cities',
      'Historical environmental trend visualizations',
      'Ultra-responsive mobile-first dashboard architecture',
    ],
    techStack: ['React', 'D3.js', 'REST APIs', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ParamMavani',
    liveUrl: null,
  },
]

const ProjectCard = memo(({ project, index, onOpenBookmart }) => {
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 p-6 sm:p-8 bg-slate-900/40 border border-white/10 hover:${project.accentBorder} rounded-3xl backdrop-blur-xl transition-all duration-300 shadow-xl`}
    >
      {/* Visual Mockup Column */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 bg-gradient-to-br ${project.gradient} flex flex-col justify-between min-h-[260px] sm:min-h-[300px] ${
          isReversed ? 'md:order-2' : ''
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
          </div>
          <span className="text-xs font-mono text-cyan-300 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            {project.status}
          </span>
        </div>

        <div className="py-4 my-auto">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-white/10 mb-3 backdrop-blur-md">
            <div className="text-xs font-mono text-cyan-400 mb-1">$ system --status</div>
            <div className="text-xs font-mono text-slate-300 truncate">
              {project.category} • {project.techStack.slice(0, 3).join(', ')}
            </div>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h4>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
          {project.features.slice(0, 2).map((feat, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-1 rounded-full bg-black/40 text-slate-200 border border-white/5 flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              {feat}
            </span>
          ))}
        </div>
      </div>

      {/* Description & Action Column */}
      <div className={isReversed ? 'md:order-1' : ''}>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              Featured Project
            </span>
          )}
          <span className="inline-block bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 px-3 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-text-secondary">
            {project.statusIcon} {project.status}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="bg-slate-800/60 p-4 rounded-xl mb-5 border border-white/5">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            Problem Addressed
          </h4>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-slate-700/40 text-text-secondary text-xs font-medium px-3 py-1 rounded-full border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-text-primary bg-slate-800/80 hover:bg-slate-700 border border-white/10 rounded-full transition-all duration-300"
            >
              <GithubIcon />
              <span>Source Code</span>
            </a>
          )}
          {project.hasInteractivePreview ? (
            <button
              onClick={onOpenBookmart}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/25 transition-all duration-300 hover:scale-102 active:scale-95 cursor-pointer"
            >
              <span>Live Interactive Preview</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-lg shadow-cyan-400/20 transition-all duration-300"
            >
              <span>Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-400 bg-slate-800/40 border border-slate-700/50 rounded-full cursor-default">
              Live Preview Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
})

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [isBookmartOpen, setIsBookmartOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData
    return projectsData.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="projects" aria-labelledby="projects-heading" className="pt-24 pb-12 sm:pt-32 sm:pb-16 relative">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[var(--accent-primary)] font-mono">03 /</span>
            <h2 id="projects-heading" className="text-2xl font-semibold tracking-tight text-text-primary">
              FEATURED PROJECTS
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-text-primary mb-4">
            Projects that solve real-world problems.
          </h3>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
            A curated showcase of engineering projects spanning Computer Vision, Full-Stack applications, Healthcare systems, and Civic Tech platforms.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                    : 'text-text-secondary bg-slate-800/40 border border-white/5 hover:text-text-primary hover:bg-slate-800/80'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects List */}
        <div>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onOpenBookmart={() => setIsBookmartOpen(true)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <BookmartPreviewModal
        isOpen={isBookmartOpen}
        onClose={() => setIsBookmartOpen(false)}
      />
    </section>
  )
}