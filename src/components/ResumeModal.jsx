import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react'

const ResumeModal = memo(({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">Param Mavani — Resume</h3>
                <p className="text-xs text-text-secondary">B.Tech IT • Developer &amp; AI Explorer</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Summary Preview */}
          <div className="py-6 overflow-y-auto space-y-6 flex-1 pr-2">
            <div className="p-4 rounded-2xl bg-slate-800/40 border border-white/5 space-y-2">
              <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
                Professional Profile
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aspiring software engineer and second-year B.Tech Information Technology student at JSPM Pune. Skilled in full-stack web development (React, Node.js, Express, MySQL) and Applied AI/ML (Python, TensorFlow, Scikit-Learn). Passionate about turning complex problems into scalable real-world digital tools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-white/5">
                <h5 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Key Strengths
                </h5>
                <ul className="text-xs space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Full-Stack Web Engineering
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Computer Vision &amp; AI (YOLO, OpenCV)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Data Structures &amp; Algorithms (C++, Java)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Database Architecture &amp; REST APIs
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/40 border border-white/5">
                <h5 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                  Featured Highlights
                </h5>
                <ul className="text-xs space-y-1.5 text-slate-300">
                  <li>• <strong>Project Sentinel:</strong> Real-time AI wildlife tracking</li>
                  <li>• <strong>BookMart:</strong> MERN E-commerce platform</li>
                  <li>• <strong>Fix My Area:</strong> Civic reporting platform</li>
                  <li>• <strong>AirWatch Global:</strong> Real-time air quality metrics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-white/10 bg-slate-800 hover:bg-slate-700 text-text-primary transition-colors"
            >
              Open in New Tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="/resume.pdf"
              download="Param_Mavani_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-black transition-colors shadow-lg shadow-cyan-400/20"
            >
              Download PDF
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
})

export default ResumeModal
