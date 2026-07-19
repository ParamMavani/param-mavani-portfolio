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
    className="mt-1 animate-bounce"
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
        pt-28
        pb-16
        sm:pt-32
        sm:pb-20
        px-4
        text-center
      "
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Availability Badge */}
        <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-full px-3 py-1 text-xs font-medium tracking-wider text-text-secondary mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Introduction */}
        <p className="text-base sm:text-lg md:text-xl text-text-secondary mb-3">
          Hi, I'm Param Mavani.
        </p>

        {/* Main Heading */}
        <h1 className="font-bold tracking-tight leading-tight mb-8 text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl">
          Curious mind. Creative code.
          <br />
          <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
            Meaningful impact.
          </span>
        </h1>

        {/* Role Line */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm sm:text-base md:text-lg text-text-secondary mb-12">
          <span>B.Tech Engineering Student</span>

          <span className="hidden sm:inline text-cyan-400/40">•</span>

          <span>Developer</span>

          <span className="hidden sm:inline text-cyan-400/40">•</span>

          <span>AI Explorer</span>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-base md:text-lg text-text-secondary leading-8 md:leading-relaxed mb-14">
          Exploring the intersection of software development and AI to create
          practical, thoughtful, and meaningful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">

          <a
            href="#projects"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full bg-[var(--accent-primary)] text-black font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore My Work
            <ArrowRightIcon />
          </a>

          <a
            href="#contact"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full border border-slate-700 bg-slate-800/50 text-text-primary transition-all duration-300 hover:bg-slate-800"
          >
            Let's Connect
            <ArrowRightIcon />
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:flex mt-16 flex-col items-center text-text-secondary">
          <span className="text-xs tracking-[0.25em] uppercase">
            Scroll to explore
          </span>
          <ChevronDownIcon />
        </div>

      </div>
    </section>
  )
}

export default Hero