import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    const speed = 0.2; // Fluid smoothing factor (lerp)

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId;
    const render = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"], label')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"], label')) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Precise Central Core Dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 bg-brandYellow rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Fluid Smooth Lagging Ring */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border border-brandYellow/70 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-200 ease-out ${
          isHovered 
            ? 'w-12 h-12 bg-brandYellow/15 border-brandYellow scale-105' 
            : 'w-8 h-8'
        }`}
      />
    </div>
  );
}