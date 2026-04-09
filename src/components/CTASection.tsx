import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding emerald-bg text-center" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 uppercase tracking-wider">
          Perfekte Nägel für dich
        </h2>
        <p className="font-serif text-xl md:text-2xl text-gold italic mb-12">
          Dein Moment der Entspannung
        </p>
        <a href="https://wa.me/015203389999" className="btn-outline-gold">
          Jetzt Termin per WhatsApp anfragen
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;