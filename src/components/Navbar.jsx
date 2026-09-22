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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0c0c0e] border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center w-full">
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          className="text-[1.2rem] sm:text-[1.35rem] font-extrabold tracking-tight text-white relative z-50"
        >
          Somesh<span className="text-brandYellow font-marcellus">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
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

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block border border-white/[0.07] px-5 py-2 rounded-full text-[0.88rem] font-semibold text-white hover:bg-brandYellow hover:text-[#0c0c0e] hover:border-brandYellow hover:shadow-glow-yellow transition-all duration-300"
        >
          Let's Talk
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.08] text-white bg-[#141417]"
        >
          <i className={open ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </div>

      {/* Mobile menu panel with solid dark background */}
      <div
        style={{ backgroundColor: "#0c0c0e" }}
        className={`md:hidden fixed inset-x-0 top-[65px] h-[calc(100dvh-65px)] z-40 flex flex-col justify-between px-6 py-8 border-t border-white/[0.07] transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2 list-none p-0 m-0">
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

        <div className="pt-6 pb-6">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-brandYellow text-[#0c0c0e] font-bold px-5 py-3.5 rounded-full text-[0.95rem] transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}