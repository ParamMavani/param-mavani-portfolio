import { motion } from 'framer-motion'

const stats = [
  {
    number: '4+',
    label: 'Real-World Projects',
    subtext: 'Built across Web & AI',
  },
  {
    number: '15+',
    label: 'Tools & Technologies',
    subtext: 'Languages, Frameworks & DBs',
  },
  {
    number: '2+',
    label: 'Years of Engineering',
    subtext: 'Continuous learning & build',
  },
  {
    number: '100%',
    label: 'Commitment to Growth',
    subtext: 'Problem solving mindset',
  },
]

export default function Stats() {
  return (
    <section className="py-12 px-4 relative z-10">
      <div className="max-w-screen-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-cyan-400"></div>

          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl hover:bg-white/5 transition-all"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                {stat.number}
              </span>
              <span className="text-sm font-semibold text-text-primary mb-0.5">
                {stat.label}
              </span>
              <span className="text-xs text-text-secondary hidden sm:inline">
                {stat.subtext}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
