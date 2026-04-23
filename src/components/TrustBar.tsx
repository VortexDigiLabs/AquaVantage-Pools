import { useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function AnimatedCounter({ target, duration = 1800, decimal = 0, suffix = "", italicSuffix = false }: { target: number, duration?: number, decimal?: number, suffix?: string, italicSuffix?: boolean }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    
    const node = nodeRef.current;
    const start = performance.now();
    const targetValue = target;
    
    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * targetValue;
      
      const formatted = decimal > 0 ? val.toFixed(decimal) : Math.round(val).toString();
      
      if (italicSuffix) {
        node.innerHTML = `${formatted}<em class="text-brand-aqua italic font-normal">${suffix}</em>`;
      } else {
        node.innerHTML = `${formatted}${suffix}`;
      }
      
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }, [inView, target, duration, decimal, suffix, italicSuffix]);

  return <div ref={nodeRef} className="font-serif text-[52px] text-brand-ink leading-none mt-1" />;
}

export default function TrustBar() {
  return (
    <section className="py-[60px] bg-brand-navy border-y border-brand-line">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[40px] text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 0.68, 0, 1.2] }}
          className="relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:bottom-[20%] after:w-[1px] md:after:bg-brand-line last:after:hidden"
        >
          <AnimatedCounter target={17} suffix="+" italicSuffix />
          <div className="text-[11px] tracking-[0.25em] uppercase text-brand-grey mt-2.5">Years in SA</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 0.68, 0, 1.2] }}
          className="relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:bottom-[20%] after:w-[1px] md:after:bg-brand-line last:after:hidden"
        >
          <AnimatedCounter target={14.2} decimal={1} suffix="k" italicSuffix />
          <div className="text-[11px] tracking-[0.25em] uppercase text-brand-grey mt-2.5">Pools Serviced</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 0.68, 0, 1.2] }}
          className="relative after:content-[''] after:absolute after:right-0 after:top-[20%] after:bottom-[20%] after:w-[1px] md:after:bg-brand-line last:after:hidden"
        >
          <AnimatedCounter target={48} suffix="h" italicSuffix />
          <div className="text-[11px] tracking-[0.25em] uppercase text-brand-grey mt-2.5">Response SLA</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 0.68, 0, 1.2] }}
          className="relative"
        >
          <AnimatedCounter target={98} suffix="%" italicSuffix />
          <div className="text-[11px] tracking-[0.25em] uppercase text-brand-grey mt-2.5">Retention Rate</div>
        </motion.div>

      </div>
    </section>
  );
}
