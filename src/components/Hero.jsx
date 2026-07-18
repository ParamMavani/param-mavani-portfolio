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
    className="ml-2 transition-transform group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
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
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
)

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-center px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Availability Badge */}
        <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 rounded-full px-3 py-1 text-xs font-medium tracking-wider text-text-secondary mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-text-secondary mb-2">
          Hi, I'm Param Mavani.
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-tight mb-6">
          Curious mind. Creative code.
          <br />
          <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
            Meaningful impact.
          </span>
        </h1>

        {/* Role Line */}
        <p className="text-base md:text-lg text-text-secondary mb-8">
          B.Tech Engineering Student · Developer · AI Explorer
        </p>

        {/* Supporting Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-text-secondary mb-12">
          Exploring the intersection of software development and AI to create
          practical, thoughtful, and meaningful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            aria-label="Explore My Work"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-accent-primary text-bg-primary font-semibold rounded-full transition-transform hover:scale-105"
          >
            Explore My Work
            <ArrowRightIcon />
          </a>
          <a
            href="#contact"
            aria-label="Let's Connect"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-slate-800/50 border border-slate-700 text-text-primary font-medium rounded-full transition-colors hover:bg-slate-800"
          >
            Let's Connect
            <ArrowRightIcon />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-text-secondary">
        <span className="text-xs tracking-widest">Scroll to explore</span>
        <ChevronDownIcon />
      </div>
    </section>
  )
}

export default Hero