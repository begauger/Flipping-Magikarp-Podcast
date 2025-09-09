import { useEffect, useRef, useState } from "react";

export default function FishDivider() {
  const [progress, setProgress] = useState(0);
  const dividerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (!dividerRef.current) return;
      const rect = dividerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Calculate how much of the divider is visible in the viewport
      let visible = 1 - Math.max(0, Math.min(1, rect.top / windowHeight));
      visible = Math.max(0, Math.min(1, visible));
      setProgress(visible);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fish position: from 0% (left) to 100% (right) as user scrolls
  const fishPosition = `calc(${progress * 100}% - 32px)`;

  return (
    <div ref={dividerRef} className="relative w-full my-20 h-16 flex items-center">
      {/* Horizontal line */}
      <div className="absolute left-0 right-0 top-1/2 border-t-4 border-blue-300 z-0" />
      {/* Fish on hook SVG */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-300"
        style={{ left: fishPosition }}
      >
        <svg width="64" height="48" viewBox="0 0 64 48" fill="none">
          {/* Hook line */}
          <line x1="32" y1="0" x2="32" y2="18" stroke="#2563eb" strokeWidth="3" />
          {/* Hook */}
          <path d="M32 18 Q34 22 32 26 Q30 22 32 18" stroke="#facc15" strokeWidth="3" fill="none" />
          {/* Fish body */}
          <ellipse cx="32" cy="34" rx="12" ry="8" fill="#fb923c" stroke="#ea580c" strokeWidth="2" />
          {/* Fish tail */}
          <polygon points="44,34 56,28 56,40" fill="#fbbf24" stroke="#ea580c" strokeWidth="2" />
          {/* Fish eye */}
          <circle cx="36" cy="32" r="2" fill="#1e293b" />
        </svg>
      </div>
    </div>
  );
}