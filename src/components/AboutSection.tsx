import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart, ShieldCheck } from "lucide-react"; // Neue Icons

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const img1 = "/assets/gallery/27.jpg";
  const img2 = "/assets/gallery/9.jpg";

  const glowStyle = "shadow-[0_0_15px_rgba(255,160,80,0.15)] hover:shadow-[0_0_20px_rgba(255,160,80,0.3)] transition-shadow duration-700";

  return (
    <section id="geschichte" className="py-24 md:py-32 px-6 bg-[#F7F7F9] relative overflow-hidden" ref={ref}>
      
      {/* Hintergrund-Deko Element (Zahl oder Wort im Hintergrund) */}
      <div className="absolute right-0 top-0 text-[20rem] font-serif italic text-black/[0.02] pointer-events-none select-none">
        Est.
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* LINK SEITE: MOODBOARD */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute top-0 left-0 w-[80%] h-[80%] rounded-xl overflow-hidden ${glowStyle}`}
          >
            <Link to="/gallery" className="block w-full h-full cursor-pointer">
              <img src={img1} alt="Nail Art Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className={`absolute bottom-0 right-0 w-[60%] h-[55%] rounded-xl overflow-hidden z-10 ${glowStyle}`}
          >
            <Link to="/gallery" className="block w-full h-full cursor-pointer">
              <img src={img2} alt="Studio Impression" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.03 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-8xl font-serif italic text-black whitespace-nowrap -z-10 pointer-events-none"
          >
            Since 2011
          </motion.div>
        </div>

        {/* RECHTE SEITE: TEXT & INFOS */}
        <div className="flex flex-col text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-black/50 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 block">
              Die Philosophie
            </span>
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-8">
              Die Ästhetik der <br className="hidden lg:block" />
              ganzen Hand
            </h2>
            <div className="w-12 h-[1px] bg-black/10 mx-auto lg:mx-0 mb-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <p className="font-body text-sm md:text-base text-black/60 font-light leading-relaxed italic">
              "Seit 2017 habe ich diesen Raum mit unglaublich viel Liebe und Leidenschaft gefüllt. Nach unserem großen Umbau atmet das Studio nun eine völlig neue Energie."
            </p>
            
            <p className="font-body text-sm md:text-base text-black/60 font-light leading-relaxed">
              Wir arbeiten ausschließlich mit hochwertigem Gel und präziser Technik, weshalb Liftings bei unserer Nagelkunst so gut wie unbekannt sind. Doch unsere Leidenschaft reicht noch weiter: Mit formvollendeten Brows, traumhaften Lashes und verwöhnenden Pediküren runden wir deinen perfekten Look ab.
            </p>

            {/* NEU: Kleine Feature-Liste für optische Auflockerung */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 py-6 border-y border-black/5">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <ShieldCheck size={18} strokeWidth={1} className="text-black/40" />
                <span className="text-[9px] uppercase tracking-widest text-black/60 font-medium">Haltbarkeit</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <Sparkles size={18} strokeWidth={1} className="text-black/40" />
                <span className="text-[9px] uppercase tracking-widest text-black/60 font-medium">Präzision</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <Heart size={18} strokeWidth={1} className="text-black/40" />
                <span className="text-[9px] uppercase tracking-widest text-black/60 font-medium">Wohlbefinden</span>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <span className="font-serif italic text-xl md:text-2xl text-black">
                 Chip's Nails & Beauty 
                </span>
                <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-black/40 mt-2">
                 Singen (Hohentwiel)
                </span>
              </div>
              
              <Link to="/gallery" className="text-[10px] uppercase tracking-[0.2em] text-black border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors">
                Journal ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;