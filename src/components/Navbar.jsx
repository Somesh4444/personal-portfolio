import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#stack", label: "Specialization" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0c0c0e]/80 border-b border-white/[0.07]">
      <nav className="max-w-310 mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="text-[1.2rem] sm:text-[1.35rem] font-extrabold tracking-tight text-white relative z-10"
        >
          Somesh<span className="text-brandYellow font-marcellus">.dev</span>
        </a>

        {/* Desktop links — unchanged */}
        <ul className="hidden md:flex items-center gap-9 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brandMuted text-sm font-medium hover:text-brandYellow transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — unchanged */}
        <a
          href="#contact"
          className="hidden md:inline-block border border-white/[0.07] px-5 py-2 rounded-full text-[0.88rem] font-semibold text-white hover:bg-brandYellow hover:text-[#0c0c0e] hover:border-brandYellow hover:shadow-glow-yellow transition-all duration-300"
        >
          Let's Talk
        </a>

        {/* Mobile menu toggle — hidden on md and up */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] text-white"
        >
          <i className={open ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0c0c0e]/98 backdrop-blur-xl border-t border-white/[0.07] transition-all duration-300 ease-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pt-8 list-none">
          {links.map((link) => (
            <li key={link.href} className="border-b border-white/[0.06]">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-white text-lg font-medium hover:text-brandYellow transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6 mt-8">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center border border-white/[0.08] px-5 py-3.5 rounded-full text-[0.95rem] font-semibold text-white bg-brandYellow/0 hover:bg-brandYellow hover:text-[#0c0c0e] hover:border-brandYellow transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}