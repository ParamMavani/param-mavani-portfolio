import PythonIcon from '../assets/icons/python.svg'
import JavaScriptIcon from '../assets/icons/javascript.svg'
import CppIcon from '../assets/icons/cplusplus.svg'
import MySQLIcon from '../assets/icons/mysql.svg'
import Html5Icon from '../assets/icons/html5.svg'
import CssIcon from '../assets/icons/css3.svg'
import ReactIcon from '../assets/icons/react.svg'
import TailwindCssIcon from '../assets/icons/tailwindcss.svg'
import NodejsIcon from '../assets/icons/nodejs.svg'
import ExpressIcon from '../assets/icons/express.svg'
import PandasIcon from '../assets/icons/pandas.svg'
import NumpyIcon from '../assets/icons/numpy.svg'
import ScikitlearnIcon from '../assets/icons/scikitlearn.svg'
import TensorflowIcon from '../assets/icons/tensorflow.svg'
import GitIcon from '../assets/icons/git.svg'
import GithubIcon from '../assets/icons/github.svg'
import VisualstudiocodeIcon from '../assets/icons/vscode.svg'
import JupyterIcon from '../assets/icons/jupyter.svg'
import PostmanIcon from '../assets/icons/postman.svg'

// Lightweight inline SVG for the external link indicator
const ExternalLinkIndicator = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--accent-primary)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
)

const skillsData = [
  {
    category: 'Languages',
    technologies: [
      { name: 'Python', icon: PythonIcon, url: 'https://www.python.org' },
      { name: 'JavaScript', icon: JavaScriptIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'C++', icon: CppIcon, url: 'https://isocpp.org' },
      { name: 'SQL', icon: MySQLIcon, url: 'https://www.mysql.com' },
    ],
  },
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML5', icon: Html5Icon, url: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: CssIcon, url: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'React', icon: ReactIcon, url: 'https://react.dev' },
      { name: 'Tailwind CSS', icon: TailwindCssIcon, url: 'https://tailwindcss.com' },
    ],
  },
  {
    category: 'Backend & Database',
    technologies: [
      { name: 'Node.js', icon: NodejsIcon, url: 'https://nodejs.org' },
      { name: 'Express.js', icon: ExpressIcon, url: 'https://expressjs.com' },
      { name: 'MySQL', icon: MySQLIcon, url: 'https://www.mysql.com' },
    ],
  },
  {
    category: 'AI / ML & Data',
    technologies: [
      { name: 'Pandas', icon: PandasIcon, url: 'https://pandas.pydata.org' },
      { name: 'NumPy', icon: NumpyIcon, url: 'https://numpy.org' },
      { name: 'Scikit-learn', icon: ScikitlearnIcon, url: 'https://scikit-learn.org' },
      { name: 'TensorFlow', icon: TensorflowIcon, url: 'https://www.tensorflow.org' },
    ],
  },
  {
    category: 'Tools & Platforms',
    technologies: [
      { name: 'Git', icon: GitIcon, url: 'https://git-scm.com' },
      { name: 'GitHub', icon: GithubIcon, url: 'https://github.com' },
      { name: 'VS Code', icon: VisualstudiocodeIcon, url: 'https://code.visualstudio.com' },
      { name: 'Jupyter', icon: JupyterIcon, url: 'https://jupyter.org' },
      { name: 'Postman', icon: PostmanIcon, url: 'https://www.postman.com' },
    ],
  },
]

const SkillChip = ({ name, icon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Visit Official Website"
      className="group flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-slate-800/50 px-3 py-2 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-700/50"
    >
      <img
        src={icon}
        alt={name}
        className="h-5 w-5 flex-shrink-0 object-contain transition-transform duration-300 group-hover:rotate-6"
      />
      <span className="font-medium text-text-primary">{name}</span>
      <div className="ml-auto pl-1">
        <ExternalLinkIndicator />
      </div>
    </a>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[var(--accent-primary)] font-mono">02 /</span>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>
          <h3 className="mb-4 text-3xl font-bold tracking-tighter text-text-primary md:text-4xl">
            Building with the right tools.
          </h3>
          <p className="text-base md:text-lg">
            Every project has helped me build a toolkit of technologies I enjoy
            learning and working with.
          </p>
        </div>

        {/* Vertically Stacked Categories */}
        <div className="flex flex-col gap-12">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--accent-primary)]">
                {category.category}
              </h4>
              <div className="flex flex-wrap gap-4">
                {category.technologies.map((tech) => (
                  <SkillChip key={tech.name} {...tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills