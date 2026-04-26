import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Play } from 'lucide-react';

// Counter Hook
function useCounter(target: number, duration: number = 1800, decimal: number = 0) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    
    const node = nodeRef.current;
    const start = performance.now();
    
    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      
      const parts = node.innerHTML.split(/<em/i);
      const emPart = parts.length > 1 ? '<em' + parts[1] : '';
      
      node.innerHTML = (decimal > 0 ? val.toFixed(decimal) : Math.round(val)) + (emPart || '');
      
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [inView, target, duration, decimal]);

  return nodeRef;
}

export default function Featured() {
  return (
    <section className="py-12 lg:py-16 bg-brand-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
          className="relative aspect-[4/5] z-10 w-[85%] max-w-[340px] lg:max-w-[420px] mx-auto"
        >
          {/* Main video/canvas container - this part has the overflow hidden */}
          <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-[0_40px_80px_rgba(10,39,64,0.25)] bg-gradient-to-br from-[#5ab7d8] via-[#1a6b95] to-[#0a3a5a]">
            {/* Video Background */}
            <video 
              src="https://bxmgsjtsxygxfgvpnnjh.supabase.co/storage/v1/object/public/PoolWebsite%20Template/Ripple.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover z-0 transform-gpu" 
            />

            {/* Overlay layers */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,59,92,0.1)_0%,rgba(8,59,92,0.5)_100%)] z-10" />
            <div className="absolute inset-0 opacity-20 z-10 bg-[repeating-linear-gradient(115deg,transparent_0_20px,rgba(255,255,255,0.04)_20px_22px)]" />
          </div>

          {/* Animated Overlay Sticker (Moved to top right) */}
          <div className="absolute right-[15px] top-[15px] lg:right-[-25px] lg:top-[25px] z-20 w-[100px] lg:w-[130px] rounded-full overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 pointer-events-none border-2 border-white/20">
            <img 
              src="https://bxmgsjtsxygxfgvpnnjh.supabase.co/storage/v1/object/public/PoolWebsite%20Template/Untitled%20design.gif" 
              alt="Animated Sticker" 
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 0.68, 0, 1.2] }}
        >
          <span className="eyebrow">Featured Programme</span>
          <h2 className="text-[clamp(34px,4vw,52px)] text-brand-navy my-4 break-words hyphens-auto">
            The Commercial <span className="serif-italic">Maintenance Contract</span> — built for scale.
          </h2>
          <p className="text-brand-grey text-[16px] mb-[18px] font-light leading-relaxed">
            Our flagship contractor package is engineered for estate managers, lodges, guesthouses, body corporates and commercial facilities. Predictable servicing. Documented water chemistry. Technician-verified compliance every visit.
          </p>

          <ul className="list-none my-8">
            <li className="py-3.5 border-t border-brand-line flex items-start gap-4 transition-colors hover:bg-brand-aqua/5 hover:-mx-2 hover:px-2 hover:rounded-lg group">
              <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-brand-aqua flex items-center justify-center text-white text-[12px] mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-gold">✓</span>
              <div>
                <strong className="block text-brand-navy font-medium text-[15px]">Route-optimised technician scheduling</strong>
                <span className="text-brand-grey text-[13.5px] font-light">Geographically sequenced visits reduce travel cost by up to 34%.</span>
              </div>
            </li>
            <li className="py-3.5 border-t border-brand-line flex items-start gap-4 transition-colors hover:bg-brand-aqua/5 hover:-mx-2 hover:px-2 hover:rounded-lg group">
              <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-brand-aqua flex items-center justify-center text-white text-[12px] mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-gold">✓</span>
              <div>
                <strong className="block text-brand-navy font-medium text-[15px]">Digital water-quality logs</strong>
                <span className="text-brand-grey text-[13.5px] font-light">Every test logged, timestamped and shared with the property manager.</span>
              </div>
            </li>
             <li className="py-3.5 border-t border-brand-line flex items-start gap-4 transition-colors hover:bg-brand-aqua/5 hover:-mx-2 hover:px-2 hover:rounded-lg group">
              <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-brand-aqua flex items-center justify-center text-white text-[12px] mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-gold">✓</span>
              <div>
                <strong className="block text-brand-navy font-medium text-[15px]">48-hour escalation response</strong>
                <span className="text-brand-grey text-[13.5px] font-light">Priority dispatch for leak, pump or chemistry emergencies.</span>
              </div>
            </li>
             <li className="py-3.5 border-t border-brand-line border-b flex items-start gap-4 transition-colors hover:bg-brand-aqua/5 hover:-mx-2 hover:px-2 hover:rounded-lg group">
              <span className="shrink-0 w-[22px] h-[22px] rounded-full bg-brand-aqua flex items-center justify-center text-white text-[12px] mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:bg-brand-gold">✓</span>
              <div>
                <strong className="block text-brand-navy font-medium text-[15px]">Compliance-ready documentation</strong>
                <span className="text-brand-grey text-[13.5px] font-light">SANS 10134 aligned reporting for commercial and public pools.</span>
              </div>
            </li>
          </ul>

          <a href="#contact" className="inline-block bg-brand-navy text-white px-8 py-3.5 rounded-full text-[13px] tracking-[0.08em] relative overflow-hidden transition-all duration-300 hover:bg-brand-deep hover:-translate-y-[2px] hover:shadow-[0_12px_30px_rgba(10,39,64,0.25)] group">
             Book a Contractor Consultation
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-500 group-hover:translate-x-full" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
