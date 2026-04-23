import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Packages', href: '#packages' },
    { name: 'Results', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-navy/90 backdrop-blur-md py-4 shadow-[0_2px_40px_rgba(0,0,0,0.3)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <a href="#" className="font-serif text-[26px] font-semibold text-white tracking-widest flex items-center gap-2.5 no-underline group hover:opacity-90 transition-opacity">
            <span className="w-8 h-8 rounded-full bg-brand-aqua relative shrink-0 transition-transform duration-400 group-hover:rotate-90 before:content-[''] before:absolute before:inset-[7px] before:rounded-full before:border-[1.5px] before:border-[#1a1a1a]" />
            AquaVantage
          </a>

          <nav className="hidden lg:block">
            <ul className="flex gap-10 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/90 text-[13px] font-normal tracking-[0.04em] relative pb-[3px] transition-colors hover:text-brand-aqua-light group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 right-full h-[1px] bg-brand-aqua-light transition-all duration-300 group-hover:right-0"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex border border-white/40 text-white bg-transparent px-[26px] py-3 rounded-full text-[13px] font-medium tracking-[0.06em] transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-[2px]"
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              className="hidden lg:inline-flex bg-brand-aqua text-black px-[26px] py-3 rounded-full text-[13px] font-bold uppercase tracking-[0.08em] border border-brand-aqua transition-all duration-300 hover:bg-brand-aqua-light hover:border-brand-aqua-light hover:-translate-y-[2px]"
            >
              Request Demo
            </a>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer group"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[2px] bg-white rounded-sm transition-all duration-300 origin-center ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`block w-6 h-[2px] bg-white rounded-sm transition-all duration-300 origin-center ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-[2px] bg-white rounded-sm transition-all duration-300 origin-center ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#051422]/95 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <ul className="text-center list-none p-0 m-0 w-full px-8">
              {navLinks.map((link) => (
                <li key={link.name} className="py-4 border-b border-white/5">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white font-serif text-4xl tracking-wide hover:text-brand-aqua-light transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-10 justify-center flex-wrap px-8">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-brand-aqua text-black px-[26px] py-3 rounded-full text-[13px] font-bold uppercase tracking-[0.08em]"
              >
                Request Demo
              </a>
              <a
                 href="#contact"
                 onClick={() => setMenuOpen(false)}
                 className="border border-white/40 text-white bg-transparent px-[26px] py-3 rounded-full text-[13px] font-medium tracking-[0.06em]"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
