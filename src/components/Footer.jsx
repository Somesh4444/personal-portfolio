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
              Have an idea, project, or performance bottleneck to fix? Let’s engineer clean, dependable code and bring your digital vision to life.
            </p>
          </div>

          <div>
            <h5 className="font-marcellus text-brandYellow text-[1.05rem] mb-4">Navigation</h5>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#agent" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">AI Assistance</a></li>
              <li><a href="#stack" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Technologies</a></li>
              <li><a href="#projects" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Showcase</a></li>
              <li><a href="#contact" className="text-brandMuted text-sm hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

         <div>
          <h5 className="font-marcellus text-brandYellow text-[1.05rem] mb-4">Connect</h5>
          <ul className="space-y-3 list-none p-0 m-0">
            <li>
              <a
                href="https://github.com/somesh4444"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-brandMuted text-sm hover:text-white transition-colors duration-200"
              >
                <i className="ri-github-fill text-base group-hover:text-brandYellow transition-colors"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://in.linkedin.com/in/somesh-behera-b07aa3250"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-brandMuted text-sm hover:text-white transition-colors duration-200"
              >
                <i className="ri-linkedin-box-fill text-base group-hover:text-brandYellow transition-colors"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ofc_lipu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-brandMuted text-sm hover:text-white transition-colors duration-200"
              >
                <i className="ri-twitter-x-fill text-base group-hover:text-brandYellow transition-colors"></i>
                <span>Twitter / X</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/somesh.behera.96"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-brandMuted text-sm hover:text-white transition-colors duration-200"
              >
                <i className="ri-facebook-circle-fill text-base group-hover:text-brandYellow transition-colors"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@ofcsomu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-brandMuted text-sm hover:text-white transition-colors duration-200"
              >
                <i className="ri-medium-fill text-base group-hover:text-brandYellow transition-colors"></i>
                <span>Medium</span>
              </a>
            </li>
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