import { motion } from 'motion/react';

export default function Packages() {
  return (
    <section className="py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden" id="packages">
      {/* Background glow effects */}
      <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,75,0,0.2),transparent_70%)] bg-glow-pulse pointer-events-none" />
      <div className="absolute -bottom-[200px] -left-[100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,122,64,0.1),transparent_70%)] bg-glow-pulse-rev pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-[720px] mx-auto mb-[60px]">
          <motion.span 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="eyebrow inline-block"
          >
            Contractor Enrolment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-[clamp(36px,4.5vw,58px)] text-[#F5F5F0] my-4"
          >
            Plans built for <span className="serif-italic">route operators</span> & service teams
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-white/70 text-[16px] font-light leading-relaxed mx-auto max-w-[600px]"
          >
            Whether you run a two-van operation in Centurion or a provincial commercial contract, there's a tier engineered for your growth stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px] mt-[30px] items-stretch">
          
          {/* Package 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="bg-white/5 border border-white/10 rounded-[22px] p-[40px_34px] backdrop-blur-md transition-all duration-400 relative z-10 hover:-translate-y-2 hover:border-brand-aqua hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col"
          >
            <span className="text-[11px] tracking-[0.25em] uppercase text-brand-aqua">Tier I</span>
            <h3 className="text-[clamp(26px,2.5vw,32px)] mt-2.5 mb-2 leading-[1.1] font-medium text-white break-words hyphens-auto">Route Starter</h3>
            <div className="font-serif text-[44px] my-[18px] leading-none text-white">
              R 2,450<small className="font-sans text-[14px] opacity-60"> / mo</small>
            </div>
            <ul className="list-none flex-grow my-[22px] mb-[28px]">
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Up to 40 domestic pool routes
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Digital job-sheet app
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Weekly water-quality logging
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Standard chemistry supply rates
              </li>
              <li className="py-2.5 text-[14px] text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Email & WhatsApp support
              </li>
            </ul>
            <a href="#contact" className="block text-center p-3.5 rounded-full text-[13px] tracking-[0.08em] transition-all bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white hover:-translate-y-[2px]">
              Enrol Now
            </a>
          </motion.div>

          {/* Package 2 - Featured */}
          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
            className="bg-brand-deep border border-brand-aqua rounded-[22px] p-[40px_34px] backdrop-blur-md transition-all duration-400 relative z-10 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <span className="absolute top-[22px] right-[22px] bg-brand-aqua text-[#F5F5F0] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">Most Selected</span>
            <span className="text-[11px] tracking-[0.25em] uppercase text-brand-aqua">Tier II</span>
            <h3 className="text-[clamp(26px,2.5vw,32px)] mt-2.5 mb-2 leading-[1.1] font-medium text-white break-words hyphens-auto pr-2">Professional Route</h3>
            <div className="font-serif text-[44px] my-[18px] leading-none text-white">
              R 5,900<small className="font-sans text-[14px] opacity-60"> / mo</small>
            </div>
            <ul className="list-none flex-grow my-[22px] mb-[28px]">
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Up to 150 routes · multi-tech
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Route optimisation engine
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Client portal & auto-reports
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Preferred chemistry pricing
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Priority parts fulfilment
              </li>
              <li className="py-2.5 text-[14px] text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Dedicated account manager
              </li>
            </ul>
            <a href="#contact" className="block text-center p-3.5 rounded-full text-[13px] tracking-[0.08em] uppercase font-bold transition-all bg-brand-aqua text-black hover:bg-brand-aqua-light hover:-translate-y-[2px]">
              Request a Demo
            </a>
          </motion.div>

          {/* Package 3 */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.68, 0, 1.2] }}
            className="bg-white/5 border border-white/10 rounded-[22px] p-[40px_34px] backdrop-blur-md transition-all duration-400 relative z-10 hover:-translate-y-2 hover:border-brand-aqua hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex flex-col"
          >
            <span className="text-[11px] tracking-[0.25em] uppercase text-brand-aqua">Tier III</span>
            <h3 className="text-[clamp(26px,2.5vw,32px)] mt-2.5 mb-2 leading-[1.1] font-medium text-white break-words hyphens-auto">Commercial Fleet</h3>
            <div className="font-serif text-[44px] my-[18px] leading-none text-white">
              Custom
            </div>
            <ul className="list-none flex-grow my-[22px] mb-[28px]">
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Unlimited commercial contracts
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>SANS 10134 compliance reporting
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>On-site training & certification
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>White-label client portal
              </li>
              <li className="py-2.5 text-[14px] border-b border-white/10 text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>24/7 escalation line
              </li>
              <li className="py-2.5 text-[14px] text-white/85 font-light flex items-center gap-2.5">
                <span className="text-brand-aqua shrink-0">–</span>Quarterly performance reviews
              </li>
            </ul>
            <a href="#contact" className="block text-center p-3.5 rounded-full text-[13px] tracking-[0.08em] transition-all bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white hover:-translate-y-[2px]">
              Speak to Sales
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
