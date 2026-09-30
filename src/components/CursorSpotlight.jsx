import { useEffect, useRef } from 'react';

/**
 * CursorSpotlight — subtle radial-gradient that follows the mouse cursor.
 * Uses a ref + direct DOM manipulation to avoid re-renders on every mousemove.
 */
export default function CursorSpotlight() {
  const divRef = useRef(null);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,0.04) 0%, transparent 80%)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'background 0.1s ease',
      }}
    />
  );
}
