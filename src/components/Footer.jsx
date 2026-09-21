export default function Footer() {
  return (
    <footer className="bg-brandDark2 border-t border-white/[0.07] pt-16 pb-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="text-[1.35rem] font-extrabold tracking-tight text-white mb-3">
              Somesh<span className="text-brandYellow font-marcellus">.dev</span>
            </div>
            <p className="text-brandMuted text-sm max-w-[320px] leading-relaxed">
              Full Stack Developer passionate about crafting solid, clean, and interactive digital experiences.
            </p>
          </div>

          <div>
            <h5 className="font-marcellus text-brandYellow text-[1.05rem] mb-4">Navigation</h5>
            <ul className="space-y-2.5">
              <li><a href="#hero" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#stack" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#projects" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Showcase</a></li>
              <li><a href="#contact" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-marcellus text-brandYellow text-[1.05rem] mb-4">Connect</h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">GitHub</a></li>
              <li><a href="#" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center text-[#717482] text-[0.85rem] gap-3">
          <span>© 2026 Somesh Behera. All rights reserved.</span>
          <span>Typography: Satoshi & Marcellus</span>
        </div>

      </div>
    </footer>
  );
}