import { motion } from 'motion/react';

export default function Process() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-brand-navy" id="process">
      {/* Video Background Layer rotated into landscape */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <video 
          src="https://bxmgsjtsxygxfgvpnnjh.supabase.co/storage/v1/object/public/PoolWebsite%20Template/gentle-rippling-of-the-pool-water-swimmers-subtly-.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute min-w-[max(200vw,200vh)] min-h-[max(200vw,200vh)] object-cover rotate-90 opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,74,113,0.7)_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-[720px] mx-auto mb-10 md:mb-0">
          <motion.span 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="eyebrow"
          >
            The Onboarding Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-[clamp(36px,4.5vw,58px)] text-white my-4"
          >
            A flowing, <span className="serif-italic">measured</span> handover
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-brand-grey text-[16px] font-light leading-relaxed max-w-[500px] mx-auto"
          >
            From audit to activation — four steps to bring your portfolio onto the AquaVantage maintenance platform.
          </motion.p>
        </div>

        {/* Desktop timeline mapping */}
        <div className="relative mt-[60px] md:h-[420px] grid grid-cols-1 gap-8 md:block">
          
          <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 1200 420" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a9dceb" />
                <stop offset="100%" stopColor="#c9a96a" />
              </linearGradient>
            </defs>
            <path id="flowPath" d="M 120 280 C 260 80, 460 40, 600 130 S 940 280, 1080 280"
                  fill="none" stroke="url(#flow)" strokeWidth="2" strokeDasharray="4 6" />
            <circle r="5" fill="#c9a96a" opacity="0.8">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath href="#flowPath" />
              </animateMotion>
            </circle>
          </svg>

          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
            className="md:absolute text-center w-full md:w-[200px] md:-translate-x-1/2 md:top-[50%] md:left-[10%] group"
          >
            <div className="w-[52px] h-[52px] rounded-full bg-brand-deep border-2 border-brand-aqua flex items-center justify-center mx-auto mb-3.5 font-serif text-[22px] text-brand-aqua italic shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-400 group-hover:bg-brand-aqua group-hover:text-brand-navy group-hover:scale-110">
              i
            </div>
            <h4 className="text-[20px] text-brand-ink mb-1.5">Portfolio Audit</h4>
            <p className="text-[12.5px] text-brand-grey font-light">We assess every pool, equipment set and risk factor on your current book.</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
            className="md:absolute text-center w-full md:w-[200px] md:-translate-x-1/2 md:top-[15%] md:left-[33%] group"
          >
            <div className="w-[52px] h-[52px] rounded-full bg-brand-deep border-2 border-brand-aqua flex items-center justify-center mx-auto mb-3.5 font-serif text-[22px] text-brand-aqua italic shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-400 group-hover:bg-brand-aqua group-hover:text-brand-navy group-hover:scale-110">
              ii
            </div>
            <h4 className="text-[20px] text-brand-ink mb-1.5">Plan & Route</h4>
            <p className="text-[12.5px] text-brand-grey font-light">A tailored route map, service cadence and pricing structure is drafted.</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.68, 0, 1.2] }}
            className="md:absolute text-center w-full md:w-[200px] md:-translate-x-1/2 md:top-[15%] md:left-[66%] group"
          >
            <div className="w-[52px] h-[52px] rounded-full bg-brand-deep border-2 border-brand-aqua flex items-center justify-center mx-auto mb-3.5 font-serif text-[22px] text-brand-aqua italic shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-400 group-hover:bg-brand-aqua group-hover:text-brand-navy group-hover:scale-110">
              iii
            </div>
            <h4 className="text-[20px] text-brand-ink mb-1.5">Technician Deploy</h4>
            <p className="text-[12.5px] text-brand-grey font-light">Certified techs are assigned per territory with digital job sheets.</p>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 0.68, 0, 1.2] }}
            className="md:absolute text-center w-full md:w-[200px] md:-translate-x-1/2 md:top-[50%] md:left-[90%] group"
          >
            <div className="w-[52px] h-[52px] rounded-full bg-brand-deep border-2 border-brand-aqua flex items-center justify-center mx-auto mb-3.5 font-serif text-[22px] text-brand-aqua italic shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-400 group-hover:bg-brand-aqua group-hover:text-brand-navy group-hover:scale-110">
              iv
            </div>
            <h4 className="text-[20px] text-brand-ink mb-1.5">Ongoing Growth</h4>
            <p className="text-[12.5px] text-brand-grey font-light">Monthly reports, KPI reviews and client-retention strategy calls.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
