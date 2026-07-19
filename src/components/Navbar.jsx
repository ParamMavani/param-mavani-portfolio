import { useState } from 'react'

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
    className="ml-1.5"
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
  { href: '#journey', text: 'Journey' },
  { href: '#contact', text: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 sm:p-6">
      <nav className="relative max-w-screen-lg mx-auto flex items-center justify-between px-6 py-3 bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-full">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-xl font-mono font-bold tracking-tighter text-text-primary hover:text-accent-primary transition-colors"
        >
          &lt;PM /&gt;
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent-primary transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Desktop Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center text-sm px-4 py-2 bg-transparent border border-accent-primary text-accent-primary rounded-full hover:bg-accent-primary/10 transition-colors"
        >
          Resume <ExternalLinkIcon />
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="text-text-primary"
          >
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-3 p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="text-lg text-text-secondary hover:text-accent-primary transition-colors">
                  {link.text}
                </a>
              ))}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full text-lg px-4 py-3 bg-accent-primary/90 text-bg-primary rounded-full font-semibold">
                Resume <ExternalLinkIcon />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar