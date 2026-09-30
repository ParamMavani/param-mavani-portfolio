import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { Mail, FileText, MoveUpRight, Send, CheckCircle2, Copy, Check } from 'lucide-react'

// Custom reliable SVG icons for brand links
const GithubIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    value: 'parammavani16@gmail.com',
    helperText: 'Click to send an email',
    url: 'mailto:parammavani16@gmail.com',
  },
  {
    icon: GithubIcon,
    title: 'GitHub',
    value: 'ParamMavani',
    helperText: 'Explore my repositories & code',
    url: 'https://github.com/ParamMavani',
  },
  {
    icon: LinkedinIcon,
    title: 'LinkedIn',
    value: 'Param Mavani',
    helperText: "Let's connect professionally",
    url: 'https://www.linkedin.com/in/param-mavani-89b7b6310/',
  },
  {
    icon: FileText,
    title: 'Resume',
    value: 'View Resume',
    helperText: 'Download or view credentials',
    url: '/resume.pdf',
  },
]

const ContactCard = memo(({ icon: Icon, title, value, helperText, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex cursor-pointer flex-col justify-between p-6 bg-slate-800/40 hover:bg-slate-800/70 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_var(--accent-primary)]"
  >
    <div>
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-6 h-6 text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300" />
        <h4 className="text-lg font-semibold text-text-primary">{title}</h4>
      </div>
      <p className="text-base font-bold text-text-primary truncate">{value}</p>
    </div>
    <div className="flex items-center justify-between mt-6">
      <span className="text-xs text-text-secondary">{helperText}</span>
      <MoveUpRight className="w-4 h-4 text-text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </div>
  </a>
))

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('parammavani16@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open user's email client directly with prefilled parameters
    const mailtoUri = `mailto:parammavani16@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    window.open(mailtoUri, '_blank')
    setSubmitted(true)
  }

  return (
    <>
      <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32 relative">
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[var(--accent-primary)] font-mono">06 /</span>
              <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-text-primary">
                GET IN TOUCH
              </h2>
            </div>
            <h3 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
              Let's Build Something Meaningful Together.
            </h3>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-text-secondary">
              I'm always excited to connect with developers, recruiters, and mentors. Whether it's an internship opportunity, collaboration, or a chat about AI & software engineering, I'd love to hear from you.
            </p>
          </div>

          {/* Availability Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for Internships &amp; Technical Projects
            </div>
          </div>

          {/* Two-Column Grid: Contact Form + Direct Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Interactive Contact Form (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-text-primary">Send a Message</h4>
                  <p className="text-sm text-text-secondary mt-1">
                    Fill out the form below to connect directly with me.
                  </p>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-cyan-950/30 border border-cyan-500/30 rounded-2xl">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <h5 className="text-xl font-bold text-white mb-2">Message Prepared!</h5>
                  <p className="text-sm text-slate-300 mb-6">
                    Your email client has been opened with your message. If it didn't open automatically, you can email me directly at{' '}
                    <span className="text-cyan-400 font-mono">parammavani16@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-slate-800/70 border border-white/10 rounded-xl text-text-primary text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full px-4 py-3 bg-slate-800/70 border border-white/10 rounded-xl text-text-primary text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship / Collaboration / Hello"
                      className="w-full px-4 py-3 bg-slate-800/70 border border-white/10 rounded-xl text-text-primary text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Param, I'd like to discuss..."
                      className="w-full px-4 py-3 bg-slate-800/70 border border-white/10 rounded-xl text-text-primary text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Direct Contact Cards (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactLinks.map((link) => (
                <ContactCard key={link.title} {...link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-12 border-t border-white/5 pt-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <div className="text-sm text-text-secondary">
              <p className="font-medium text-slate-300">Designed &amp; Developed by Param Mavani</p>
              <p className="text-xs text-slate-400">Built with React 19 • Vite • Tailwind CSS • Framer Motion</p>
            </div>
            <p className="text-xs text-text-secondary">
              © {new Date().getFullYear()} Param Mavani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact