import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen — full-screen animated intro shown for ~1.8 seconds.
 * @param {{ onComplete: () => void }} props
 */
export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 2600;
    let rafId;
    let timeoutId;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        timeoutId = setTimeout(() => setVisible(false), 260);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              'radial-gradient(circle at top center, rgba(34,211,238,0.10), transparent 28%), linear-gradient(180deg, var(--bg-primary) 0%, #0c1220 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/10 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="mb-7 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--accent-primary)]/40 bg-slate-950/70 shadow-[0_0_18px_rgba(34,211,238,0.18)] backdrop-blur-sm"
              >
                <span className="font-mono text-lg font-black tracking-tight text-[var(--accent-primary)]">&lt;/&gt;</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.48em] text-[var(--text-secondary)]">Portfolio</p>
                <h1 className="text-2xl font-black tracking-tight text-white">Param Mavani</h1>
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--text-secondary)]">Initializing</span>
            </div>

            <div className="w-72 sm:w-80">
              <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                <span>Loading</span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear', duration: 0.12 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
