import { Mail, Github, Linkedin, FileText, MoveUpRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    value: 'parammavani16@gmail.com',
    helperText: 'Click to send an email',
    url: 'mailto:parammavani16@gmail.com',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'ParamMavani',
    helperText: 'Explore my repositories',
    url: 'https://github.com/ParamMavani',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'Param Mavani',
    helperText: "Let's connect professionally",
    url: 'https://www.linkedin.com/in/param-mavani-89b7b6310/',
  },
  {
    icon: FileText,
    title: 'Resume',
    value: 'Download Resume',
    helperText: 'Latest version',
    url: '#', // Placeholder for resume file
  },
]

const ContactCard = ({ icon: Icon, title, value, helperText, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col justify-between p-6 bg-slate-800/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_20px_0_var(--accent-primary)]"
  >
    <div>
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-7 h-7 text-cyan-400" />
        <h4 className="text-lg font-semibold text-text-primary">{title}</h4>
      </div>
      <p className="text-xl font-bold text-text-primary truncate">{value}</p>
    </div>
    <div className="flex items-center justify-between mt-6">
      <span className="text-sm text-text-secondary">{helperText}</span>
      <MoveUpRight className="w-5 h-5 text-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </a>
)

function Contact() {
  return (
    <>
      <section id="contact" className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[var(--accent-primary)] font-mono">
                05 /
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary">
                CONTACT
              </h2>
            </div>
            <h3 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Let's Build Something Meaningful Together.
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              I'm always excited to connect with developers, recruiters, and
              innovators. Whether it's an internship opportunity, collaboration,
              or simply a conversation about technology, I'd love to hear from
              you.
            </p>
          </div>

          {/* Availability Badge */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for Internship Opportunities
            </div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactLinks.map((link) => (
              <ContactCard key={link.title} {...link} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-full h-px bg-white/10 mb-8"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <div className="text-sm text-text-secondary">
              <p>Designed & Developed by Param Mavani</p>
              <p>Built with React • Vite • Tailwind CSS</p>
            </div>
            <p className="text-sm text-text-secondary">
              © 2026 Param Mavani
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact