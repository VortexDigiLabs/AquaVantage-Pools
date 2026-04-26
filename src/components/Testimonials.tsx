import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-brand-navy" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-[720px] mx-auto mb-[60px]">
          <motion.span 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="eyebrow inline-block"
          >
            Contractor Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
            className="text-[32px] sm:text-[36px] md:text-[clamp(36px,4.5vw,58px)] text-[#F5F5F0] my-4 break-words hyphens-auto"
          >
            Trusted by <span className="serif-italic">route operators</span> across South Africa
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[28px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
            className="bg-brand-deep border border-brand-line p-[40px_34px] rounded-[22px] relative transition-all duration-400 overflow-hidden hover:-translate-y-1.5 hover:border-brand-aqua group"
          >
            <div className="text-brand-aqua text-[14px] mb-4 tracking-[2px] relative z-10">★★★★★</div>
            <div className="font-serif text-[48px] text-brand-aqua leading-none absolute top-[30px] right-[30px]">"</div>
            <p className="font-serif italic text-[19px] text-[#F5F5F0] mb-[26px] leading-relaxed relative z-10">
              "We moved our 120-pool book onto AquaVantage and cut our weekly fuel bill by a third. Client retention is the highest it's ever been."
            </p>
            <div className="flex items-center gap-[14px] pt-5 border-t border-brand-line relative z-10">
              <div className="w-[46px] h-[46px] rounded-full bg-brand-navy text-brand-aqua border border-brand-aqua/30 flex items-center justify-center font-serif text-[18px] shrink-0 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6">
                TM
              </div>
              <div>
                <div className="text-[14px] text-[#F5F5F0] font-medium">Thabo Mokoena</div>
                <div className="text-[12px] text-brand-grey">Owner · Crystal Blue Routes, Johannesburg</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
            className="bg-brand-deep border border-brand-line p-[40px_34px] rounded-[22px] relative transition-all duration-400 overflow-hidden hover:-translate-y-1.5 hover:border-brand-aqua group"
          >
            <div className="text-brand-aqua text-[14px] mb-4 tracking-[2px] relative z-10">★★★★★</div>
            <div className="font-serif text-[48px] text-brand-aqua leading-none absolute top-[30px] right-[30px]">"</div>
            <p className="font-serif italic text-[19px] text-[#F5F5F0] mb-[26px] leading-relaxed relative z-10">
              "Their green-pool recovery protocol saved three commercial handovers for us last summer. The compliance reports alone justify the contract."
            </p>
            <div className="flex items-center gap-[14px] pt-5 border-t border-brand-line relative z-10">
              <div className="w-[46px] h-[46px] rounded-full bg-brand-navy text-brand-aqua border border-brand-aqua/30 flex items-center justify-center font-serif text-[18px] shrink-0 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6">
                LV
              </div>
              <div>
                <div className="text-[14px] text-[#F5F5F0] font-medium">Lindi van Zyl</div>
                <div className="text-[12px] text-brand-grey">Operations Lead · Cape Pool Services, CPT</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.68, 0, 1.2] }}
            className="bg-brand-deep border border-brand-line p-[40px_34px] rounded-[22px] relative transition-all duration-400 overflow-hidden hover:-translate-y-1.5 hover:border-brand-aqua group"
          >
            <div className="text-brand-aqua text-[14px] mb-4 tracking-[2px] relative z-10">★★★★★</div>
            <div className="font-serif text-[48px] text-brand-aqua leading-none absolute top-[30px] right-[30px]">"</div>
            <p className="font-serif italic text-[19px] text-[#F5F5F0] mb-[26px] leading-relaxed relative z-10">
              "The route-optimisation tech is on another level. My four technicians now handle what used to take six — without sacrificing service quality."
            </p>
            <div className="flex items-center gap-[14px] pt-5 border-t border-brand-line relative z-10">
              <div className="w-[46px] h-[46px] rounded-full bg-brand-navy text-brand-aqua border border-brand-aqua/30 flex items-center justify-center font-serif text-[18px] shrink-0 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6">
                NP
              </div>
              <div>
                <div className="text-[14px] text-[#F5F5F0] font-medium">Nadeem Patel</div>
                <div className="text-[12px] text-brand-grey">Director · Umhlanga Aquatic Co., KZN</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
