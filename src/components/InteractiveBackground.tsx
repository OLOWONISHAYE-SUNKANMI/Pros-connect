import { useEffect, useRef } from 'react';

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const innerWidth = window.innerWidth;
      const innerHeight = window.innerHeight;
      
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      // Calculate 3D rotation (max 15 degrees tilt)
      const rotateY = ((clientX - innerWidth / 2) / (innerWidth / 2)) * 15;
      const rotateX = ((clientY - innerHeight / 2) / (innerHeight / 2)) * -15;
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      containerRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
      containerRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none transition-colors duration-500" style={{ perspective: '1200px' }}>
      {/* Base Background Overlay - adapts slightly to theme but adds richness */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      
      {/* 3D Parallax Wrapper */}
      <div 
        className="absolute inset-0 w-full h-full transition-transform duration-200 ease-out"
        style={{ 
          transform: 'rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale(1.1)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Interactive Radial Gradient following mouse */}
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-20 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15) 0%, transparent 60%)',
            transform: 'translateZ(-50px)'
          }}
        />
        
        {/* Interactive Secondary Radial Gradient following mouse */}
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-10 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at calc(100% - var(--mouse-x, 50%)) calc(100% - var(--mouse-y, 50%)), hsl(var(--accent) / 0.15) 0%, transparent 60%)',
            transform: 'translateZ(-100px)'
          }}
        />
        
        {/* Subtle Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzMCwgMjEwLCAxNDAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)] opacity-30 dark:opacity-10 transition-opacity"
          style={{ transform: 'translateZ(50px)' }}
        ></div>
        
        {/* Enhanced Glowing Ambient Orbs with brand colors */}
        {/* Top Left Orb */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[140px] mix-blend-multiply dark:mix-blend-lighten animate-blob" 
          style={{ transform: 'translateZ(100px)' }}
        />
        
        {/* Bottom Right Orb */}
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[130px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000" 
          style={{ transform: 'translateZ(-80px)' }}
        />
        
        {/* Center Floating Orb */}
        <div 
          className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000" 
          style={{ transform: 'translateZ(150px)' }}
        />
        
        {/* Mouse following highlight */}
        <div className="absolute w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-normal dark:mix-blend-screen bg-primary/10 transition-transform duration-700 ease-out" 
             style={{
               transform: 'translate(-50%, -50%) translateZ(200px)',
               left: 'var(--mouse-x, 50%)',
               top: 'var(--mouse-y, 50%)'
             }} 
        />
      </div>

      {/* Gradient overlay at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
}
