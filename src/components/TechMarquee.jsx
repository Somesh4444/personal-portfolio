export default function TechMarquee() {
  const stack = [
  { name: "HTML", icon: "ri-html5-line", color: "text-orange-500" },
  { name: "CSS", icon: "ri-css3-line", color: "text-blue-500" },
  { name: "JavaScript", icon: "ri-javascript-line", color: "text-yellow-400" },
  { name: "Bootstrap", icon: "ri-bootstrap-line", color: "text-purple-500" },
  { name: "Tailwind CSS", icon: "ri-windy-line", color: "text-cyan-400" },
  { name: "PHP", icon: "ri-code-s-slash-line", color: "text-indigo-400" },
  { name: "CodeIgniter", icon: "ri-code-box-line", color: "text-orange-400" },
  { name: "Laravel", icon: "ri-fire-line", color: "text-red-500" },
  { name: "React", icon: "ri-reactjs-line", color: "text-cyan-400" },
  { name: "WordPress", icon: "ri-wordpress-line", color: "text-blue-400" },
  { name: "GitHub", icon: "ri-github-line", color: "text-white" },
  { name: "REST APIs", icon: "ri-terminal-window-line", color: "text-brandYellow" },
];

  return (
    <section className="bg-brandDark1 border-t border-white/[0.07] py-15 relative overflow-hidden" id="stack">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brandYellow/[0.025] blur-[120px] pointer-events-none rounded-full"></div>

      {/* Top Heading */}
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 mb-10 text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
           <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-brandYellow"></span>
              <span className="text-xs font-mono text-brandYellow tracking-widest uppercase">02 // Technologies & Tools</span>
            </div>
        </div>
      </div>

      <div className="marquee-container relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max">
          
          {/* Track 1 */}
          <div className="flex gap-4 pr-4 shrink-0 animate-infinite-scroll">
            {stack.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-brandDark2 border border-white/[0.07] hover:border-brandYellow/40 transition-colors duration-200">
                <i className={`${item.icon} text-xl ${item.color}`}></i>
                <span className="text-sm font-semibold text-white tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for smooth infinite scroll) */}
          <div className="flex gap-4 pr-4 shrink-0 animate-infinite-scroll" aria-hidden="true">
            {stack.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-brandDark2 border border-white/[0.07] hover:border-brandYellow/40 transition-colors duration-200">
                <i className={`${item.icon} text-xl ${item.color}`}></i>
                <span className="text-sm font-semibold text-white tracking-wide">{item.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}