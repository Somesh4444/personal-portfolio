export default function Hero() {
  return (
    <section className="relative bg-brandDark1 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden" id="hero">

      {/* Modern gradient background — base wash + two glows, tuned for visible contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a22] via-[#0c0c0e] to-[#050506]"></div>
        <div className="absolute top-[-5%] right-[5%] w-[600px] h-[600px] rounded-full blur-[120px] bg-[radial-gradient(circle,rgba(229,241,52,0.16)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[500px] h-[500px] rounded-full blur-[120px] bg-[radial-gradient(circle,rgba(124,156,255,0.10)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-10">

        {/* BENTO GRID — asymmetric mosaic of purposeful cells, not a symmetric column split */}
        <div className="bento-grid">

          {/* Statement cell — no card chrome, this is where the boldness lives */}
          <div className="bento-hero flex flex-col justify-center py-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brandYellow"></span>
              <span className="text-xs font-mono text-brandYellow tracking-widest uppercase">01 // Available For Work</span>
            </div>

            <h1
              className="speakable-title font-extrabold tracking-[-0.02em] leading-[1.05] mb-3"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.5rem)' }}
            >
              <span className="text-white">Hi, I'm Somesh Behera</span>
            </h1>

            <span className="speakable-title font-marcellus text-brandYellow text-2xl sm:text-3xl lg:text-[2.2rem] font-normal block leading-tight mb-4">
              Full Stack Web Developer
            </span>

            <p className="speakable-intro text-brandMuted text-[15px] sm:text-base leading-[1.75] max-w-[440px] mb-8">
              I build fast, reliable websites and web applications with modern frontend & backend technologies — from custom WordPress solutions to full-stack applications & AI-powered features.
            </p>

           <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
  <a
    href="#agent"
    className="flex-1 sm:flex-initial justify-center bg-brandYellow text-[#0c0c0e] px-4 py-2.5 sm:px-7 sm:py-3 rounded-full font-bold inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base whitespace-nowrap shadow-glow-btn hover:-translate-y-0.5 hover:shadow-glow-btn-hover transition-all duration-300"
  >
    <span>Try My AI Assistant</span>
    <i className="ri-arrow-right-up-line text-sm sm:text-base"></i>
  </a>

  <a
    href="#projects"
    className="flex-1 sm:flex-initial justify-center bg-white/[0.04] border border-white/[0.08] text-white px-4 py-2.5 sm:px-7 sm:py-3 rounded-full font-semibold inline-flex items-center text-xs sm:text-base whitespace-nowrap hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
  >
    View my work
  </a>
</div>
          </div>

          {/* Portrait cell — tall, spans both rows, clean bordered card */}
          <div className="bento-portrait overflow-hidden flex flex-col">
            <img
              src="/avatar.png"
              alt="Somesh Behera"
              className="w-full flex-1 object-cover object-top min-h-[220px]"
            />
          </div>

          {/* Stats cell */}
          <div className="bento-stats rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 flex items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xl sm:text-2xl font-bold text-white block leading-none mb-1">02</span>
              <span className="text-[11px] text-brandMuted">Years exp.</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div>
              <span className="font-mono text-xl sm:text-2xl font-bold text-white block leading-none mb-1">20+</span>
              <span className="text-[11px] text-brandMuted">Real Projects</span>
            </div>
            <div className="w-px h-8 bg-white/10"></div>
            <div>
              <span className="font-mono text-xl sm:text-2xl font-bold text-white block leading-none mb-1">10+</span>
              <span className="text-[11px] text-brandMuted">Technologies</span>
            </div>
          </div>

          {/* Focus cell — adds personality without duplicating the stats or the site's existing tech marquee */}
         <div className="bento-focus rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-5 flex flex-col justify-center">
          <span className="font-mono text-[11px] text-brandYellow mb-2 block">
            Currently
          </span>

          <p className="text-white/90 text-sm leading-snug">
             <span className="text-white font-medium">Full Stack Developer at <br></br> SEOFIED INDIA</span>
          </p>
        </div>

        </div>
      </div>

      <style>{`
        .bento-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        @media (min-width: 1024px) {
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: auto auto;
            grid-template-areas:
              "hero hero hero hero hero hero hero portrait portrait portrait portrait portrait"
              "stats stats stats stats focus focus focus portrait portrait portrait portrait portrait";
            gap: 1.25rem;
          }
          .bento-hero { grid-area: hero; }
          .bento-portrait { grid-area: portrait; }
          .bento-stats { grid-area: stats; }
          .bento-focus { grid-area: focus; }
        }
      `}</style>
    </section>
  );
}