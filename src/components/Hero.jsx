import { motion } from 'framer-motion'

// Lightweight inline SVG for CTA arrows
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

// Lightweight inline SVG for the scroll indicator
const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-1 animate-bounce motion-reduce:animate-none"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        flex-col
        justify-center
        items-center
        min-h-screen
        pt-20
        pb-16
        sm:pt-24
        sm:pb-20
        px-4
        text-center
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col items-center md:-translate-y-4"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center bg-slate-800/60 border border-slate-700/80 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wider text-text-secondary mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary mb-3 font-medium"
        >
          Hi, I'm <span className="text-white font-semibold">Param Mavani</span>.
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-bold tracking-tight leading-tight mb-8 text-[2.7rem] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Curious mind. Creative code.
          <br />
          <span className="bg-gradient-to-r from-[var(--accent-primary)] via-cyan-300 to-[var(--accent-secondary)] bg-clip-text text-transparent">
            Meaningful impact.
          </span>
        </motion.h1>

        {/* Role Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm sm:text-base md:text-lg text-text-secondary mb-8"
        >
          <span className="px-3 py-1 rounded-full bg-slate-800/40 border border-white/5">B.Tech IT Student</span>
          <span className="hidden sm:inline text-cyan-400/40">•</span>
          <span className="px-3 py-1 rounded-full bg-slate-800/40 border border-white/5">Full-Stack Developer</span>
          <span className="hidden sm:inline text-cyan-400/40">•</span>
          <span className="px-3 py-1 rounded-full bg-slate-800/40 border border-white/5">AI Explorer</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-base md:text-lg text-text-secondary leading-8 md:leading-relaxed mb-12"
        >
          Exploring the intersection of modern software development, computer vision, and machine learning to build practical, scalable, and intuitive digital tools.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--accent-primary)] text-black font-semibold transition-all duration-300 hover:scale-102 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-98"
          >
            Explore My Work
            <ArrowRightIcon />
          </a>

          <a
            href="#contact"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full border border-slate-700 bg-slate-800/60 text-text-primary transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-98"
          >
            Let's Connect
            <ArrowRightIcon />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex mt-16 flex-col items-center text-text-secondary">
          <span className="text-xs tracking-[0.25em] uppercase text-slate-400">
            Scroll to explore
          </span>
          <ChevronDownIcon />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero