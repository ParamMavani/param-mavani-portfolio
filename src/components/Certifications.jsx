import { memo } from 'react'
import { motion } from 'framer-motion'
import { Award, CheckCircle2, ExternalLink } from 'lucide-react'

const certificationsData = [
  {
    title: 'Full Stack Web Development & Modern JavaScript',
    issuer: 'Self-Directed & Project Mastery',
    date: '2024 – Present',
    badge: 'Specialization',
    description:
      'Engineered responsive web applications using React, Tailwind CSS, Node.js, and modern RESTful APIs with state management and authentication.',
    skills: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'REST APIs'],
    link: 'https://github.com/ParamMavani',
  },
  {
    title: 'Python for Data Science, AI & Machine Learning',
    issuer: 'Coursework & Practical Implementation',
    date: '2024 – 2025',
    badge: 'Core Focus',
    description:
      'Hands-on experience with NumPy, Pandas, Scikit-Learn, and TensorFlow, implementing real-world predictive modeling and computer vision pipelines.',
    skills: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pandas', 'NumPy'],
    link: 'https://github.com/ParamMavani/Project-Sentinel',
  },
  {
    title: 'Data Structures, Algorithms & Object-Oriented Design',
    issuer: 'SPPU University Curriculum (B.Tech IT)',
    date: '2024 – 2025',
    badge: 'Academic Rigor',
    description:
      'Gained deep foundational knowledge in algorithmic efficiency, complexity analysis (Big-O), memory management, and OOP in C++ and Java.',
    skills: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'DBMS'],
    link: null,
  },
  {
    title: 'MHT-CET Engineering Entrance Distinction',
    issuer: 'State Common Entrance Test Cell, Maharashtra',
    date: '2024',
    badge: '80th Percentile',
    description:
      'Qualified with top 80th percentile standing, securing admission into JSPM Bhivarabai Sawant Institute of Technology & Research, Pune for Information Technology.',
    skills: ['Analytical Aptitude', 'Mathematics', 'Physics', 'Problem Solving'],
    link: null,
  },
]

const CertCard = memo(({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col justify-between p-6 sm:p-8 bg-slate-800/40 hover:bg-slate-800/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 rounded-3xl transition-all duration-300 shadow-xl hover:-translate-y-1.5"
  >
    <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all pointer-events-none"></div>

    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          {cert.badge}
        </span>
        <span className="text-xs text-text-secondary font-mono">{cert.date}</span>
      </div>

      <h4 className="text-xl font-bold text-text-primary mb-2 group-hover:text-cyan-300 transition-colors">
        {cert.title}
      </h4>

      <p className="text-sm font-medium text-indigo-300 mb-3 flex items-center gap-1.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
        {cert.issuer}
      </p>

      <p className="text-sm text-text-secondary leading-relaxed mb-6">
        {cert.description}
      </p>
    </div>

    <div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-md bg-slate-700/50 text-slate-300 border border-white/5"
          >
            {skill}
          </span>
        ))}
      </div>

      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Verification / Project Repo
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  </motion.div>
))

export default function Certifications() {
  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="py-24 sm:py-32 relative">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[var(--accent-primary)] font-mono">05 /</span>
            <h2 id="certifications-heading" className="text-2xl font-semibold tracking-tight text-text-primary">
              CERTIFICATIONS &amp; ACADEMICS
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-text-primary mb-4">
            Continuous validation of my skills.
          </h3>
          <p className="text-base md:text-lg text-text-secondary">
            Structured coursework, technical qualifications, and continuous learning achievements that back my hands-on project work.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <CertCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
