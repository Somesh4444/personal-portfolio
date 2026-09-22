export default function About() {
  return (
    <section className="relative bg-brandDark2 py-24 sm:py-28 lg:py-32 border-t border-white/[0.06]" id="about">
      {/* ISOLATED GLOW CONTAINER: Handles overflow clipping without breaking position:sticky on the section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] rounded-full blur-[120px] sm:blur-[160px] bg-[radial-gradient(circle,rgba(229,241,52,0.04)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        {/* Grid container with items-start allows sticky element to scroll with the grid track */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start relative">
          
          {/* LEFT: STICKY MANIFESTO */}
          <div className="lg:sticky lg:top-28 z-20 self-start flex flex-col items-start pb-6 lg:pb-12 w-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brandYellow"></span>
              <span className="text-xs font-mono text-brandYellow tracking-widest uppercase">03 // How I Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-extrabold text-white tracking-tight leading-[1.18] mb-8">
              I build practical web solutions that are fast, reliable, and made to solve real problems.
            </h2>

            <p className="text-brandMuted text-base sm:text-lg leading-[1.8] mb-10 max-w-[480px]">
              I focus on building clean and useful experiences across the frontend and backend. From custom websites and APIs to performance improvements and AI-powered features, I care about how everything works together.
            </p>

            <div className="w-full max-w-[440px] pt-8 border-t border-white/[0.08] space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-brandMuted">CORE DOMAIN</span>
                <span className="text-white font-bold">Full Stack Development</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-brandMuted">LOCATION</span>
                <span className="text-white font-bold">India (Open Worldwide)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-brandMuted">CURRENT STATUS</span>
                <span className="inline-flex items-center gap-2 text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for Hire
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: SCROLLABLE PILLARS */}
          <div className="flex flex-col w-full border-t border-white/[0.08]">

            {/* ROW 1 */}
            <div className="group py-10 sm:py-12 border-b border-white/[0.08] transition-all duration-300 md:hover:pl-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brandMuted group-hover:text-brandYellow transition-colors">
                  / 01 — BACKEND
                </span>
                <span className="text-xs font-mono text-gray-500">
                  APIs & SERVER LOGIC
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brandYellow transition-colors">
                Reliable Backend Development
              </h3>

              <p className="text-brandMuted text-sm sm:text-base leading-relaxed max-w-[580px] mb-6">
                Building backend features, REST APIs, and database-driven applications with PHP and modern frameworks. Focused on clean logic, reliable data handling, and maintainable code.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-gray-300">PHP</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">Laravel</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">CodeIgniter</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">MySQL</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">REST APIs</span>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="group py-10 sm:py-12 border-b border-white/[0.08] transition-all duration-300 md:hover:pl-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brandMuted group-hover:text-brandYellow transition-colors">
                  / 02 — FRONTEND
                </span>
                <span className="text-xs font-mono text-gray-500">
                  RESPONSIVE EXPERIENCES
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brandYellow transition-colors">
                Responsive Frontend Development
              </h3>

              <p className="text-brandMuted text-sm sm:text-base leading-relaxed max-w-[580px] mb-6">
                Creating responsive and interactive interfaces with clean layouts, reusable components, and smooth user interactions across desktop, tablet, and mobile devices.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-gray-300">HTML</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">CSS</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">JavaScript</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">React</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="group py-10 sm:py-12 border-b border-white/[0.08] transition-all duration-300 md:hover:pl-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brandMuted group-hover:text-brandYellow transition-colors">
                  / 03 — WORDPRESS
                </span>
                <span className="text-xs font-mono text-gray-500">
                  CUSTOM DEVELOPMENT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brandYellow transition-colors">
                Custom WordPress Solutions
              </h3>

              <p className="text-brandMuted text-sm sm:text-base leading-relaxed max-w-[580px] mb-6">
                Developing custom WordPress websites, features, and integrations with PHP and ACF. Focused on flexible content management, performance, SEO, and business requirements.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-gray-300">WordPress</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">PHP</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">ACF</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">JavaScript</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">REST API</span>
              </div>
            </div>

            {/* ROW 4 */}
            <div className="group py-10 sm:py-12 border-b border-white/[0.08] transition-all duration-300 md:hover:pl-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brandMuted group-hover:text-brandYellow transition-colors">
                  / 04 — AI & PERFORMANCE
                </span>
                <span className="text-xs font-mono text-gray-500">
                  SMARTER & FASTER WEB
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-brandYellow transition-colors">
                AI Integration & Web Performance
              </h3>

              <p className="text-brandMuted text-sm sm:text-base leading-relaxed max-w-[580px] mb-6">
                Integrating LLM APIs into web applications while improving loading speed, Core Web Vitals, and overall website performance through practical optimization.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="text-gray-300">LLM APIs</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">Gemini</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">Grok API</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">Core Web Vitals</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-300">Lighthouse</span>
              </div>
            </div>

            {/* ROW 5: CTA */}
            <div className="pt-10 sm:pt-12 flex flex-col sm:flex-row justify-between sm:items-center gap-6">
              <div>
                <span className="text-xs font-mono text-brandYellow block mb-1">
                  HAVE A PROJECT IN MIND?
                </span>

                <span className="text-white text-lg font-bold">
                  Let's build something useful together.
                </span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-sm font-mono font-bold text-[#0c0c0e] bg-brandYellow px-6 py-3 rounded-full hover:bg-yellow-300 transition-colors shrink-0 shadow-glow-btn"
              >
                <span>GET IN TOUCH</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}