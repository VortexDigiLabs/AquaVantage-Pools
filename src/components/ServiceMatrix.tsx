import { motion } from 'motion/react';
import { Droplets, Settings, Wrench, Wind, Search, Beaker, ShieldCheck } from 'lucide-react';

export default function ServiceMatrix() {
  const cards = [
    {
      id: "01",
      icon: <Droplets className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "Weekly Route Cleaning",
      desc: "Scheduled skimming, brushing, vacuuming and surface maintenance across recurring contractor routes."
    },
    {
      id: "02",
      icon: <Settings className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "Pump & Motor Service",
      desc: "Bearing replacements, seal changes and full pump diagnostics with SABS-compliant componentry."
    },
    {
      id: "03",
      icon: <Wrench className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "Green Pool Recovery",
      desc: "48–72 hour recovery protocols for neglected or algae-bound pools — ready for immediate handover."
    },
    {
      id: "04",
      icon: <Wind className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "Filtration & Sand Service",
      desc: "Media replacements, lateral inspections and filter deep-cleans to ensure optimal flow and clarity."
    },
    {
      id: "05",
      icon: <Search className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "Leak Detection & Repair",
      desc: "Pressure testing and ultrasonic detection to isolate losses in suction or return lines with precision."
    },
    {
      id: "06",
      icon: <Beaker className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "Water Chemistry Control",
      desc: "Precision balancing of pH, Alkalinity and Calcium Hardness for commercial safety and equipment longevity."
    },
    {
      id: "07",
      icon: <ShieldCheck className="text-brand-navy" size={20} strokeWidth={1.5} />,
      title: "SANS 10134 Compliance",
      desc: "Full-circle auditing and technical reporting to meet South African national standards for public pools."
    }
  ];

  return (
    <section className="bg-brand-navy py-20 lg:py-32 relative overflow-hidden" id="services">
      {/* Top Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-brand-deep/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="eyebrow"
          >
            The Contractor Service Matrix
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(32px,4vw,54px)] text-white mt-4 mb-6 leading-[1.1]"
          >
            A full-circle maintenance <span className="serif-italic">programme</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-[16px] font-light leading-relaxed max-w-[640px] mx-auto"
          >
            Seven integrated disciplines engineered for commercial contractors managing high-frequency routes and technical portfolios.
          </motion.p>
        </div>

        {/* Commercial Routes Interactive Map */}
        <div className="relative max-w-[1100px] mx-auto w-full group">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-[30px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
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
            <div className="absolute top-8 left-8 flex items-center gap-3 opacity-40">
              <div className="w-1 h-1 rounded-full bg-brand-aqua" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">Premium Commercial Pool</span>
            </div>

            {/* Title Section */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-20">
              <h3 className="font-display text-[22px] md:text-[28px] text-white tracking-[0.3em] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Commercial Routes
              </h3>
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-[1px] bg-gradient-to-b from-brand-aqua to-transparent mx-auto mt-4" 
              />
            </div>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-brand-navy/30 backdrop-blur-2xl border border-white/20 w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full flex flex-col justify-center items-center text-center shadow-[0_0_50px_rgba(0,229,255,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
              >
                <span className="font-display text-[48px] md:text-[54px] text-brand-aqua-light leading-none mb-1">07</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-white/90 leading-tight">
                  Service<br/>Pillars
                </span>
              </motion.div>
            </div>

            {/* Staggered Service Items - Left Side */}
            <div className="absolute inset-0 z-20 hidden md:block">
              {/* Item 1: Weekly Cleaning */}
              <div className="absolute top-[55%] left-[12%] flex items-center gap-5 group/item cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Weekly Cleaning</span>
              </div>
              
              {/* Item 2: Pump Maintenance */}
              <div className="absolute top-[68%] left-[16%] flex items-center gap-5 group/item cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Pump Maintenance</span>
              </div>

              {/* Item 3: Green Pool Recovery */}
              <div className="absolute top-[81%] left-[20%] flex items-center gap-5 group/item cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Green Pool Recovery</span>
              </div>
            </div>

            {/* Staggered Service Items - Right Side */}
            <div className="absolute inset-0 z-20 hidden md:block">
              {/* Item 4: Filtration Service */}
              <div className="absolute top-[55%] right-[12%] flex items-center flex-row-reverse gap-5 group/item cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Filtration Service</span>
              </div>
              
              {/* Item 5: Leak Detection */}
              <div className="absolute top-[68%] right-[16%] flex items-center flex-row-reverse gap-5 group/item cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Leak Detection</span>
              </div>

              {/* Item 6: Water Balancing */}
              <div className="absolute top-[81%] right-[20%] flex items-center flex-row-reverse gap-5 group/item cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-brand-aqua shadow-[0_0_15px_#00E5FF] transition-transform duration-300 group-hover/item:scale-150" />
                <span className="text-[13px] tracking-[0.18em] font-bold uppercase text-white drop-shadow-md group-hover/item:text-brand-aqua transition-colors">Water Balancing</span>
              </div>
            </div>

            {/* Mobile View Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-aqua/40 shadow-[0_0_8px_#00E5FF]" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Detailed Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {cards.map((card, idx) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-white/[0.03] border border-white/10 p-8 rounded-[24px] hover:bg-white/[0.06] hover:border-brand-aqua/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-[32px] group-hover:opacity-20 transition-opacity">
                {card.id}
              </div>
              
              <div className="w-12 h-12 rounded-2xl bg-brand-aqua flex items-center justify-center mb-6 shadow-[0_10px_20px_rgba(0,229,255,0.2)]">
                {card.icon}
              </div>
              
              <h4 className="text-[22px] text-white mb-3 tracking-tight group-hover:text-brand-aqua transition-colors">
                {card.title}
              </h4>
              <p className="text-white/50 text-[14px] font-light leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
