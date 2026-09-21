import { useEffect } from 'react';

export default function CursorParticles() {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = 40; // +30% volume boost

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      moving: false,
      radius: 50, // STRICTLY 120px cursor swarm radius as requested
      idleTimer: null
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      mouse.moving = true;

      clearTimeout(mouse.idleTimer);
      mouse.idleTimer = setTimeout(() => {
        mouse.moving = false;
      }, 130);

      if (particles.length < maxParticles) {
        spawnCursorParticles(mouse.x, mouse.y, 4);
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.moving = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    class CursorParticle {
      constructor(originX, originY) {
        this.reset(originX, originY);
      }

      reset(originX, originY) {
        const offsetAngle = Math.random() * Math.PI * 2;
        const offsetDist = Math.random() * (mouse.radius * 0.35);
        
        this.x = originX + Math.cos(offsetAngle) * offsetDist;
        this.y = originY + Math.sin(offsetAngle) * offsetDist;
        
        this.radius = Math.random() * 2.4 + 1.4; // Sleek micro-dots
        
        const speed = Math.random() * 2.2 + 0.8;
        this.vx = Math.cos(offsetAngle) * speed + (Math.random() - 0.5) * 1.0;
        this.vy = Math.sin(offsetAngle) * speed - (Math.random() * 1.0 + 0.3);
        
        this.life = 1.0;
        this.decay = Math.random() * 0.022 + 0.015; // Smooth dissipation
        
        // Customized with your brandYellow (#e5f134), crisp white sparks, and matching warm tones
        const colors = [
          '229, 241, 52',  // #e5f134 (brandYellow)
          '255, 255, 255', // Pure white spark
          '245, 252, 140', // Soft lighter yellow tint
          '205, 217, 30'   // Deeper yellow-lime accent
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        this.vx *= 0.93;
        this.vy *= 0.93;
        
        this.life -= this.decay;
        if (this.life < 0) this.life = 0;
        
        // High-contrast opacity matching your futuristic requirements
        this.currentAlpha = this.life * 0.9; 
      }

      draw() {
        if (this.currentAlpha <= 0.01) return;

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.currentAlpha})`;
        ctx.shadowBlur = 14; // Intense radial glow
        ctx.shadowColor = `rgba(${this.color}, 0.85)`;
        ctx.fill();
        ctx.restore();
      }
    }

    function spawnCursorParticles(cx, cy, count) {
      for (let i = 0; i < count; i++) {
        if (particles.length < maxParticles) {
          particles.push(new CursorParticle(cx, cy));
        } else {
          const deadParticle = particles.find(p => p.life <= 0);
          if (deadParticle) {
            deadParticle.reset(cx, cy);
          }
        }
      }
    }

    let animationFrameId;
    function render() {
      ctx.clearRect(0, 0, width, height);

      if (mouse.active && mouse.moving && Math.random() < 0.75) {
        spawnCursorParticles(mouse.x, mouse.y, 3);
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        
        if (!mouse.active) {
          p.life -= 0.05;
        }
        
        p.draw();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(mouse.idleTimer);
    };
  }, []);

  return (
    <canvas
      id="particle-canvas"
      className="fixed inset-0 pointer-events-none z-50 bg-transparent"
    />
  );
}