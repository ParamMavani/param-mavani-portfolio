import { useState, useEffect, useRef } from 'react'

// Lightweight inline SVG for the external link icon
const ExternalLinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
)

// Lightweight inline SVG for the hamburger/close icons
const MenuIcon = ({ isOpen }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    )}
  </svg>
)

const navLinks = [
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#projects', text: 'Projects' },
  { href: '#certifications', text: 'Academics' },
  { href: '#journey', text: 'Journey' },
  { href: '#contact', text: 'Contact' },
]

function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const sectionsRef = useRef([])

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle active section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    sectionsRef.current = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el) => el)

    const homeSection = document.querySelector('#home')
    if (homeSection) sectionsRef.current.unshift(homeSection)

    sectionsRef.current.forEach((section) => observer.observe(section))

    return () => sectionsRef.current.forEach((section) => observer.unobserve(section))
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleResumeClick = (e) => {
    if (onOpenResume) {
      e.preventDefault()
      onOpenResume()
      closeMenu()
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 p-4 sm:p-5 transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
      }`}
    >
      <nav className="relative max-w-screen-lg mx-auto flex items-center justify-between px-6 py-2.5 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-mono font-bold tracking-tighter text-text-primary transition-all duration-300 hover:text-cyan-400"
        >
          &lt;PM /&gt;
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-cyan-300 font-semibold'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.text}
              {activeSection === link.href.substring(1) && (
                <span className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/20 rounded-full -z-10 shadow-[0_0_8px_rgba(34,211,238,0.2)]"></span>
              )}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <button
          onClick={handleResumeClick}
          type="button"
          className="group hidden md:flex items-center justify-center text-xs font-semibold px-4 py-2 bg-transparent border border-cyan-400/60 text-cyan-300 rounded-full transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-300 hover:shadow-[0_0_15px_-4px_rgba(34,211,238,0.4)] active:scale-98"
        >
          Resume{' '}
          <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5">
            <ExternalLinkIcon />
          </span>
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="text-text-primary p-1 focus:outline-none"
          >
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-3 p-6 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl animate-slide-down">
            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base text-text-secondary hover:text-cyan-300 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <button
                onClick={handleResumeClick}
                className="flex items-center justify-center gap-1.5 w-full text-sm py-2.5 bg-cyan-400 text-black rounded-full font-semibold active:scale-98 transition-colors hover:bg-cyan-300"
              >
                Resume <ExternalLinkIcon />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar