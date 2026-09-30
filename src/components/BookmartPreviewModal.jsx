import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ShoppingCart,
  Search,
  Star,
  Plus,
  Trash2,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Heart,
} from 'lucide-react'

// Accurate data sourced directly from your BookMart MySQL database seeds
const sampleBooks = [
  {
    id: 1,
    title: 'The Pragmatic Programmer',
    author: 'David Thomas',
    price: 39.99,
    category: 'Science & Tech',
    rating: 4.8,
    reviews: 1420,
    coverColor: 'from-amber-600 to-amber-950',
    tag: 'Must Read',
    description: 'A masterclass in software engineering and professional craftsmanship.',
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 45.0,
    category: 'Science & Tech',
    rating: 4.9,
    reviews: 2890,
    coverColor: 'from-blue-600 to-indigo-950',
    tag: 'Classic',
    description: 'A Handbook of Agile Software Craftsmanship.',
  },
  {
    id: 3,
    title: 'Dune',
    author: 'Frank Herbert',
    price: 15.99,
    category: 'Fiction',
    rating: 4.7,
    reviews: 3500,
    coverColor: 'from-orange-600 to-amber-950',
    tag: 'Sci-Fi Hit',
    description: 'A science fiction masterpiece set on the desert planet Arrakis.',
  },
  {
    id: 4,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 20.0,
    category: 'Self-Help',
    rating: 4.9,
    reviews: 4200,
    coverColor: 'from-emerald-600 to-teal-950',
    tag: 'Bestseller',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones.',
  },
  {
    id: 5,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    price: 24.99,
    category: 'History',
    rating: 4.8,
    reviews: 2950,
    coverColor: 'from-purple-600 to-indigo-950',
    tag: 'Top Pick',
    description: 'A groundbreaking exploration of human evolution, society, and thought.',
  },
  {
    id: 6,
    title: '1984',
    author: 'George Orwell',
    price: 12.99,
    category: 'Fiction',
    rating: 4.6,
    reviews: 3100,
    coverColor: 'from-slate-700 to-zinc-950',
    tag: 'Timeless',
    description: 'Dystopian social science fiction novel and cautionary tale.',
  },
]

const categories = ['All', 'Science & Tech', 'Fiction', 'Self-Help', 'History']

export default memo(function BookmartPreviewModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  if (!isOpen) return null

  const filteredBooks = sampleBooks.filter((book) => {
    const matchesCat = activeCategory === 'All' || book.category === activeCategory
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id)
      if (existing) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...book, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0)
  const cartItemCount = cart.reduce((acc, item) => acc + item.qty, 0)

  const handleCheckout = () => {
    setCheckoutComplete(true)
    setTimeout(() => {
      setCart([])
      setCheckoutComplete(false)
      setIsCartOpen(false)
    }, 2400)
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Main Storefront Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar / App Navigation */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-slate-950/80 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Book<em className="text-amber-400 not-italic font-extrabold">Mart</em>
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Demo Simulator
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Your Literary Universe • MySQL · Express · Node.js · PayPal / Stripe · PDFKit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Wishlist Indicator */}
              <div className="flex items-center gap-1 text-xs text-slate-400 px-2 py-1 rounded-full bg-slate-800/60 border border-white/5">
                <Heart className={`w-3.5 h-3.5 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-400'}`} />
                <span>{wishlist.length}</span>
              </div>

              {/* Cart Trigger */}
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors text-xs font-semibold cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Bag</span>
                <span className="px-1.5 py-0.5 rounded-full bg-cyan-400 text-black font-bold text-[10px]">
                  {cartItemCount}
                </span>
                {cartItemCount > 0 && (
                  <span className="font-mono text-cyan-300 hidden sm:inline">
                    ${cartTotal.toFixed(2)}
                  </span>
                )}
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader: Search + Filters */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search books, authors…"
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-800/80 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-amber-400 text-black font-semibold shadow-sm'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Books Grid Content */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-950/40 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative flex flex-col justify-between p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  {/* Book Mock Cover */}
                  <div
                    className={`h-36 rounded-xl bg-gradient-to-br ${book.coverColor} p-4 flex flex-col justify-between relative overflow-hidden mb-3 border border-white/10 shadow-inner`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/50 text-white backdrop-blur-sm">
                        {book.tag}
                      </span>
                      <button
                        onClick={() => toggleWishlist(book.id)}
                        className="p-1 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                        title="Add to Wishlist"
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-colors ${
                            wishlist.includes(book.id)
                              ? 'fill-rose-500 text-rose-500'
                              : 'text-white/70 hover:text-white'
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug line-clamp-2">
                        {book.title}
                      </h4>
                      <p className="text-[11px] text-white/80 mt-0.5">{book.author}</p>
                    </div>
                  </div>

                  {/* Details & Cart Action */}
                  <div className="space-y-2">
                    <p className="text-[11px] text-slate-400 line-clamp-1">{book.description}</p>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base font-bold text-white font-mono">
                          ${book.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-300">
                          <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                          {book.rating}
                        </div>
                      </div>

                      <button
                        onClick={() => addToCart(book)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold transition-transform active:scale-95 shadow-md shadow-amber-400/10 cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBooks.length === 0 && (
              <div className="py-16 text-center text-slate-400">
                <p className="text-sm">No books found matching your query.</p>
              </div>
            )}
          </div>

          {/* Cart Flyout Sidebar / Drawer */}
          <AnimatePresence>
            {isCartOpen && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute top-16 right-0 bottom-0 w-full sm:w-80 bg-slate-900 border-l border-white/10 shadow-2xl p-4 flex flex-col z-20 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <h4 className="font-bold text-white text-sm flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-amber-400" />
                    Shopping Bag ({cartItemCount})
                  </h4>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {checkoutComplete ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-2 animate-bounce" />
                    <h5 className="text-white font-bold text-base mb-1">Order Confirmed!</h5>
                    <p className="text-xs text-slate-300">
                      PayPal / Stripe simulated checkout passed. PDF invoice generated!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto space-y-2 pr-1">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-white/5"
                        >
                          <div className="flex-1 pr-2">
                            <h5 className="text-xs font-semibold text-white truncate">
                              {item.title}
                            </h5>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                              <span>Qty: {item.qty}</span>
                              <span>•</span>
                              <span className="font-mono text-amber-300">
                                ${(item.price * item.qty).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}

                      {cart.length === 0 && (
                        <div className="py-12 text-center text-slate-500 text-xs">
                          Your bag is empty. Add a book from the catalog!
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-white/10 mt-2 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>Subtotal</span>
                        <span className="font-mono font-bold text-white text-sm">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-emerald-400">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> PayPal / Stripe Sandbox
                        </span>
                        <span>Free Shipping</span>
                      </div>
                      <button
                        disabled={cart.length === 0}
                        onClick={handleCheckout}
                        className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          cart.length > 0
                            ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-lg shadow-amber-400/20 active:scale-98'
                            : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <span>Checkout (Demo Simulation)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Bar */}
          <div className="px-5 py-3 bg-slate-950 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full-Stack Architecture: Node.js • Express • MySQL • PDFKit
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ParamMavani/bookmart-ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
              >
                GitHub Repository
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
})
