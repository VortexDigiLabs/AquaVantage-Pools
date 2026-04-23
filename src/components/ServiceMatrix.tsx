import { motion } from 'motion/react';
import { Droplets, Settings, Wrench, Wind, Search, Beaker, ShieldCheck } from 'lucide-react';

export default function ServiceMatrix() {
  return (
    <section className="bg-brand-navy py-12 lg:py-16 relative overflow-hidden" id="services">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-brand-deep/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Commercial Routes Interactive Map */}
        <div className="relative max-w-[1100px] mx-auto w-full group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/5] md:aspect-[2.4/1] rounded-[30px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
          >
            {/* Background Asset */}
            <img 
              src="/commercial-routes-bg.png" 
              alt="Premium Commercial Pool"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110"
            />
            
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/40" />
            
            {/* Top-Left Label */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 opacity-40">
              <div className="w-1 h-1 rounded-full bg-brand-aqua" />
              <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold text-white">Premium Commercial Pool</span>
            </div>

            {/* Title Section */}
            <div className="absolute top-10 md:top-12 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4">
              <h3 className="font-display text-[20px] md:text-[28px] text-white tracking-[0.3em] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                COMMERCIAL ROUTES
              </h3>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[1px] bg-gradient-to-b from-brand-aqua to-transparent mx-auto mt-3 md:mt-4" 
              />
            </div>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-brand-navy/40 backdrop-blur-2xl border border-white/20 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full flex flex-col justify-center items-center text-center shadow-[0_0_50px_rgba(0,229,255,0.2),inset_0_0_20px_rgba(255,255,255,0.05)]"
              >
                <span className="font-display text-[42px] md:text-[54px] text-brand-aqua-light leading-none mb-1">07</span>
                <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/90 leading-tight">
                  Service<br/>Pillars
                </span>
              </motion.div>
            </div>

            {/* Staggered Service Items - Left Side */}
            <div className="absolute inset-0 z-20">
              {/* Item 1: Weekly Cleaning */}
              <div className="absolute top-[58%] left-[8%] md:top-[55%] md:left-[12%] flex items-center gap-3 md:gap-5 group/item cursor-pointer">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[10px] md:text-[13px] tracking-[0.15em] md:tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Weekly Cleaning</span>
              </div>
              
              {/* Item 2: Pump Maintenance */}
              <div className="absolute top-[68%] left-[12%] md:top-[68%] md:left-[16%] flex items-center gap-3 md:gap-5 group/item cursor-pointer">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[10px] md:text-[13px] tracking-[0.15em] md:tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Pump Maintenance</span>
              </div>

              {/* Item 3: Green Pool Recovery */}
              <div className="absolute top-[78%] left-[16%] md:top-[81%] md:left-[20%] flex items-center gap-3 md:gap-5 group/item cursor-pointer">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[10px] md:text-[13px] tracking-[0.15em] md:tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Green Pool Recovery</span>
              </div>
            </div>

            {/* Staggered Service Items - Right Side */}
            <div className="absolute inset-0 z-20">
              {/* Item 4: Filtration Service */}
              <div className="absolute top-[58%] right-[8%] md:top-[55%] md:right-[12%] flex items-center flex-row-reverse gap-3 md:gap-5 group/item cursor-pointer">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[10px] md:text-[13px] tracking-[0.15em] md:tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors text-right">Filtration Service</span>
              </div>
              
              {/* Item 5: Leak Detection */}
              <div className="absolute top-[68%] right-[12%] md:top-[68%] md:right-[16%] flex items-center flex-row-reverse gap-3 md:gap-5 group/item cursor-pointer">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[10px] md:text-[13px] tracking-[0.15em] md:tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors text-right">Leak Detection</span>
              </div>

              {/* Item 6: Water Balancing */}
              <div className="absolute top-[78%] right-[16%] md:top-[81%] md:right-[20%] flex items-center flex-row-reverse gap-3 md:gap-5 group/item cursor-pointer">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[10px] md:text-[13px] tracking-[0.15em] md:tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors text-right">Water Balancing</span>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua shadow-[0_0_8px_#00E5FF]" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-aqua/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
