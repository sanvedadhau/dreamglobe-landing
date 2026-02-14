import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingFlags = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const autoCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAutoClose = useCallback(() => {
    if (autoCloseTimer.current) {
      clearTimeout(autoCloseTimer.current);
      autoCloseTimer.current = null;
    }
  }, []);

  // Auto-close after 5 seconds on mobile (touch devices)
  const startAutoClose = useCallback(() => {
    clearAutoClose();
    autoCloseTimer.current = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);
  }, [clearAutoClose]);

  const goTo = (path: string) => {
    navigate(path);
    setIsExpanded(false);
    clearAutoClose();
  };

  // Desktop: close when mouse leaves the container
  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  // Desktop: open on hover
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  // Mobile: tap to toggle, auto-close after 5s
  const handleTap = () => {
    if (isExpanded) {
      goTo('/destinations/germany');
    } else {
      setIsExpanded(true);
      startAutoClose();
    }
  };

  useEffect(() => {
    return () => clearAutoClose();
  }, [clearAutoClose]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Canada flag - top left */}
      <button
        onClick={() => goTo('/destinations/canada')}
        aria-label="Explore Canada"
        className={`absolute transition-all duration-300 ease-out w-11 h-11 rounded-full shadow-lg hover:scale-110 overflow-hidden border-2 border-white ${
          isExpanded ? 'opacity-100 -translate-y-16 -translate-x-1' : 'opacity-0 translate-y-0 translate-x-0 pointer-events-none'
        }`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="0" y="0" width="25" height="100" fill="#FF0000" />
          <rect x="25" y="0" width="50" height="100" fill="#FFFFFF" />
          <rect x="75" y="0" width="25" height="100" fill="#FF0000" />
          <path d="M50 20 L53 35 L65 30 L58 40 L68 45 L55 47 L57 60 L50 52 L43 60 L45 47 L32 45 L42 40 L35 30 L47 35 Z" fill="#FF0000" />
        </svg>
      </button>

      {/* Australia flag - top right */}
      <button
        onClick={() => goTo('/destinations/australia')}
        aria-label="Explore Australia"
        className={`absolute transition-all duration-300 ease-out w-11 h-11 rounded-full shadow-lg hover:scale-110 overflow-hidden border-2 border-white ${
          isExpanded ? 'opacity-100 -translate-y-10 translate-x-14' : 'opacity-0 translate-y-0 translate-x-0 pointer-events-none'
        }`}
        style={{ transitionDelay: isExpanded ? '50ms' : '0ms' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect width="100" height="100" fill="#00008B" />
          <rect x="0" y="0" width="40" height="30" fill="#00008B" />
          <line x1="0" y1="0" x2="40" y2="30" stroke="white" strokeWidth="4" />
          <line x1="40" y1="0" x2="0" y2="30" stroke="white" strokeWidth="4" />
          <line x1="20" y1="0" x2="20" y2="30" stroke="white" strokeWidth="5" />
          <line x1="0" y1="15" x2="40" y2="15" stroke="white" strokeWidth="5" />
          <line x1="20" y1="0" x2="20" y2="30" stroke="#FF0000" strokeWidth="3" />
          <line x1="0" y1="15" x2="40" y2="15" stroke="#FF0000" strokeWidth="3" />
          <circle cx="20" cy="70" r="5" fill="white" />
          <circle cx="70" cy="30" r="3" fill="white" />
          <circle cx="80" cy="55" r="3" fill="white" />
          <circle cx="65" cy="70" r="3" fill="white" />
          <circle cx="75" cy="80" r="3" fill="white" />
          <circle cx="55" cy="85" r="2" fill="white" />
        </svg>
      </button>

      {/* Germany main flag button - largest, center of triangle */}
      <button
        onClick={handleTap}
        aria-label="Explore Germany"
        className="relative w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-white animate-fade-in"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="0" y="0" width="100" height="33.33" fill="#000000" />
          <rect x="0" y="33.33" width="100" height="33.33" fill="#DD0000" />
          <rect x="0" y="66.66" width="100" height="33.34" fill="#FFCC00" />
        </svg>
      </button>


      {/* Backdrop to close on mobile tap outside */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[-1] lg:hidden"
          onClick={() => { setIsExpanded(false); clearAutoClose(); }}
        />
      )}
    </div>
  );
};

export default FloatingFlags;
