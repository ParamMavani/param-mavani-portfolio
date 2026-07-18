function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Two-column layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Main Content */}
          <div className="flex flex-col gap-8">
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent-primary)] font-mono">01 /</span>
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                ABOUT
              </h2>
            </div>

            {/* Main Heading */}
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-text-primary">
              A little about the person behind the code.
            </h3>

            {/* Paragraphs */}
            <div className="space-y-6 text-base md:text-lg">
              <p>
                I'm Param Mavani, a B.Tech engineering student driven by curiosity and
                a genuine interest in understanding how technology can turn
                ideas into something real.
              </p>
              <p>
                My journey has taken me across full-stack web development,
                databases, and AI/ML, where I've learned by building hands-on
                projects—from e-commerce applications and civic-tech platforms
                to intelligent detection systems.
              </p>
              <p>
                I enjoy exploring new technologies, solving challenging
                problems, and continuously improving the way I think, build,
                and create. For me, every project is an opportunity to learn
                something new and make something meaningful.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Info Panel */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 space-y-6">
              <InfoItem label="Currently" value="B.Tech Engineering Student" />
              <div className="w-full h-px bg-white/10"></div>
              <InfoItem label="Exploring" value="Software Development · AI · ML" />
              <div className="w-full h-px bg-white/10"></div>
              <InfoItem label="Based In" value="India" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// A small helper component to keep the info panel items consistent
const InfoItem = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-xs text-[var(--accent-primary)] tracking-widest uppercase">
      {label}
    </span>
    <span className="text-lg font-medium text-text-primary">{value}</span>
  </div>
)

export default About