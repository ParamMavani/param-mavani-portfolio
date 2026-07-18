import {
  BrainCircuit,
  CodeXml,
  Compass,
  Cpu,
  GraduationCap,
  Rocket,
  Terminal,
} from 'lucide-react'

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    side: "left",
    description:
      "Completed 10th grade and began exploring different career paths. Through extensive research into engineering disciplines, I discovered a strong interest in Information Technology and Computer Science.",
    icon: Compass,
  },
  {
    subtitle: "Before 11th Grade",
    title: "First Steps into Development",
    side: "right",
    description:
      "Started learning Web Development before entering 11th grade. Learned HTML5, CSS3, and JavaScript, building a strong foundation in frontend development.",
    icon: CodeXml,
  },
  {
    year: "2024",
    title: "Engineering Begins",
    side: "left",
    description:
      "After securing 80 percentile in MHT-CET, I joined JSPM's Bhivarabai Sawant Institute of Research & Technology, Wagholi, Pune, to pursue my Bachelor's degree in Information Technology.",
    icon: GraduationCap,
  },
  {
    year: '2024',
    title: 'Programming Foundations',
    side: 'right',
    description:
      'During my first year of engineering, I built strong programming fundamentals by learning C and Python. These languages helped me develop logical thinking and problem-solving skills.',
    icon: Terminal,
  },
  {
    year: '2025',
    title: 'Expanding Technical Skills',
    side: 'left',
    description:
      'In my second year, I explored C++, Java, Data Structures, Computer Networks, DBMS, Computer Graphics, and Project Management. These subjects strengthened my understanding of software engineering and system design.',
    icon: Cpu,
  },
  {
    year: '2025–2026',
    title: 'Building Real-World Projects',
    side: 'right',
    description:
      'Started applying classroom knowledge by building real projects including BookMart (E-commerce), Fix My Area (Civic Issue Reporting Platform), AirWatch Global (Air Quality Monitoring), and Project Sentinel (AI Animal Detection System).',
    icon: Rocket,
  },
  {
    year: 'Present',
    title: 'Always Learning',
    side: 'left',
    description:
      'Currently pursuing B.Tech in Information Technology while continuously learning Full Stack Development, Artificial Intelligence, Machine Learning, and modern software engineering practices. Passionate about building technology that solves real-world problems.',
    icon: BrainCircuit,
  },
];

const TimelineCard = ({
  year,
  subtitle,
  title,
  description,
  side,
  icon: Icon,
}) => {
  const isLeft = side === "left";
  const cardAlignment = isLeft ? 'md:col-start-1 md:col-end-2' : 'md:col-start-3 md:col-end-4';

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-x-6 items-center group">
      {/* Card */}
      <div className={`md:row-start-1 ${cardAlignment}`}>
        <div
          className="relative p-8 bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/30 group-hover:shadow-2xl"
        >
          <div className="mb-5">
            {(year || subtitle) && (
              <>
                <p className="text-sm font-semibold text-cyan-400">
                  {year || subtitle}
                </p>
                <div className={`w-12 h-px bg-cyan-400/30 mt-2 ${isLeft ? 'ml-auto' : ''}`}></div>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {Icon && <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />}
            <h4 className="text-xl font-bold text-text-primary">
              {title}
            </h4>
          </div>

          <p className="mt-4 text-sm text-slate-300 leading-7 text-left">
            {description}
          </p>

          {/* Connector for desktop */}
          <div
            className={`hidden md:block absolute top-1/2 h-px w-6 bg-cyan-400/30 transition-colors duration-300 group-hover:bg-cyan-400/80 ${
              isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
            }`}
          ></div>
        </div>
      </div>

      {/* Node - always centered */}
      <div className="hidden md:block md:row-start-1 md:col-start-2 md:col-end-3">
        <div className="h-5 w-5 rounded-full border-2 border-cyan-400 bg-slate-900 shadow-[0_0_10px_2px_var(--accent-primary)] transition-all duration-300 group-hover:shadow-[0_0_18px_4px_var(--accent-primary)] group-hover:scale-110 z-10"></div>
      </div>
    </div>
  );
};

function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mx-auto mb-12 max-w-3xl">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="font-mono text-[var(--accent-primary)]">04 /</span>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary">
              MY JOURNEY
            </h2>
          </div>
          <h3 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            From Curiosity to Creation.
          </h3>
          <p className="mx-auto max-w-2xl text-lg md:text-xl">
            Every project, every technology, and every challenge has been a step
            in my journey of becoming a software engineer.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* The vertical line */}
          <div
            className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-400/20"
            style={{
              boxShadow: '0 0 8px 0px var(--accent-primary)',
            }}
          ></div>

          {/* Milestones mapped here */}
          <div className="space-y-16 md:space-y-0">
            {milestones.map((milestone, index) => (
              <TimelineCard key={index} {...milestone} />
            ))}
          </div>
        </div>

        {/* Ending Quote */}
        <div className="text-center mt-24">
          <div className="inline-block w-32 h-px bg-cyan-400/30 mb-8"></div>
          <p className="text-xl md:text-2xl text-text-secondary italic leading-relaxed">
            Still learning.
            <br />
            Still building.
            <br />
            Still curious.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Journey
