import { memo } from 'react'
import { motion } from 'framer-motion'

// A small helper component to keep the info panel items consistent
const InfoItem = memo(({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs text-[var(--accent-primary)] tracking-widest uppercase font-semibold">
      {label}
    </span>
    <span className="text-base sm:text-lg font-medium text-text-primary mt-0.5">{value}</span>
  </div>
))

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-24 relative">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Two-column layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent-primary)] font-mono">01 /</span>
              <h2 id="about-heading" className="text-2xl font-semibold tracking-tight text-text-primary">
                ABOUT
              </h2>
            </div>

            {/* Main Heading */}
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
              A little about the person behind the code.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-5 text-base md:text-lg text-text-secondary leading-relaxed">
              <p>
                I'm Param Mavani, an Information Technology engineering student driven by curiosity and a genuine passion for understanding how robust software architectures turn concepts into reality.
              </p>
              <p>
                My journey spans full-stack web engineering, relational &amp; NoSQL databases, and Applied AI/ML. I believe in hands-on building: from e-commerce platforms and civic-tech tools to real-time computer vision detection systems.
              </p>
              <p>
                I actively seek opportunities to solve challenging engineering problems, write clean and maintainable code, and continuously level up my skills across software engineering, AI, and systems design.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Quick Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-36"
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <InfoItem label="Currently" value="B.Tech IT Student (JSPM, Pune)" />
              <div className="w-full h-px bg-white/10"></div>
              <InfoItem label="Exploring & Building" value="Software Systems · Deep Learning · Computer Vision" />
              <div className="w-full h-px bg-white/10"></div>
              <InfoItem label="Based In" value="Pune / Gujarat, India" />
              <div className="w-full h-px bg-white/10"></div>
              <InfoItem label="Education Credential" value="80th Percentile MHT-CET" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About