import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Deine Texte, Bilder und der Preview-Text
const pillars = [
  { 
    number: "01", 
    title: "Premium Qualität", 
    preview: "Exzellente Haltbarkeit", 
    text: "Exklusive Materialien und UV-Gel-Modellagen ohne Kompromisse bei der Haltbarkeit – Schluss mit Liftings.", 
    images: ["/assets/gallery/Quotesection4.jpg", "/assets/gallery/Quotesection3.jpg"] 
  },
  { 
    number: "02", 
    title: "Signature Nail Art", 
    preview: "Individuelle Designs", 
    text: "Von minimalistischer Eleganz bis hin zu aufwendiger, handgemalter Nail-Art – wir kreieren deinen individuellen Look.", 
    images: ["/assets/gallery/Quotesection2.jpg", "/assets/gallery/Quotesection.jpg"] 
  },
  { 
    number: "03", 
    title: "Lashes, Spa & Care", 
    preview: "Rundum-Verwöhnprogramm", 
    text: "Perfektion von Kopf bis Fuß: Entdecke neben Nageldesign auch unser exklusives Brow- & Lash-Styling sowie Spa-Pediküre.", 
    images: ["/assets/gallery/Quotesection5.jpg"] 
  }
];

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [tick, setTick] = useState(0);
  
  // GEÄNDERT: -1 bedeutet, alle Punkte sind am Anfang zu
  const [openIndex, setOpenIndex] = useState<number>(-1); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 3500); 
    return () => clearInterval(timer);
  }, []);

  // Berechnet das Bild für die große rechte Seite am PC
  // Wenn alles zugeklappt ist (openIndex === -1), zeigen wir einfach das Bild vom ersten Element
  const activeDesktopIndex = openIndex === -1 ? 0 : openIndex;
  const desktopImg = pillars[activeDesktopIndex].images[tick % pillars[activeDesktopIndex].images.length];

  return (
    <section className="relative pt-8 pb-24 md:pt-12 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#FDFCFB] to-[#F5F5F0]" ref={ref}>
      <style>
    
      </style>
      
      <div className="max-w-6xl mx-auto">

        {/* --- DIE ÜBERSCHRIFT --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-20 flex flex-col items-center"
        >
          <span 
            className="text-black/50 text-xs tracking-[0.3em] uppercase mb-4" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
          >
            Unsere Philosophie 🌸
          </span>
          <h2 
            className="text-2xl md:text-4xl text-black uppercase tracking-[0.1em] leading-[1.3]" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Die Chip's Nails Signature
          </h2>
          <div className="w-12 h-[1px] bg-black/10 mt-6 md:mt-8"></div>
        </motion.div>
        
        {/* ========================================= */}
        {/* CONTENT SPLIT: Links das Menü, rechts das Bild */}
        {/* ========================================= */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 lg:gap-20 items-start">

          {/* --- LINKE SEITE (oder Handy komplett): DAS ACCORDION MENÜ --- */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const currentMobileImg = pillar.images[tick % pillar.images.length];
              const isOpen = openIndex === idx; 

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  // Die aktive Card wird etwas hervorgehoben (stärkerer Schatten, weißerer Hintergrund)
                  className={`backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen ? "bg-white/90 border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] scale-[1.01]" : "bg-white/60 border-black/5 shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:bg-white/80"
                  }`}
                >
                  
                  {/* KLICKBARER HEADER */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full py-5 md:py-6 px-5 md:px-6 flex items-center justify-between text-left"
                  >
                    <div className="flex items-start gap-4 md:gap-5">
                      <span 
                        className={`text-2xl md:text-3xl mt-1 transition-colors duration-500 ${isOpen ? "text-black" : "text-black/40"}`} 
                        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                      >
                        {pillar.number}
                      </span>
                      
                      <div className="flex flex-col">
                        <h3 className={`uppercase text-[11px] sm:text-xs tracking-[0.2em] transition-colors duration-500 ${isOpen ? "text-[#2D2422]" : "text-[#2D2422]/60"}`} style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                          {pillar.title}
                        </h3>
                        <p className={`text-[10px] mt-1 tracking-[0.1em] uppercase transition-colors duration-500 ${isOpen ? "text-black/60" : "text-black/30"}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          {pillar.preview}
                        </p>
                      </div>
                    </div>
                    
                    {/* Plus / Minus Symbol */}
                    <div className="text-[#2D2422]/50 flex-shrink-0">
                      {isOpen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/></svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>
                      )}
                    </div>
                  </button>

                  {/* AUFKLAPPBARER INHALT (Bild + Text) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 md:pb-8 pt-2 px-5 md:px-6 flex flex-col">
                          
                          {/* BILD NUR FÜRS HANDY SICHTBAR (Am PC ist es ja rechts groß!) */}
                          <div className="md:hidden relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 shadow-lg bg-black/5">
                            <AnimatePresence mode="popLayout">
                              <motion.img
                                key={currentMobileImg}
                                src={currentMobileImg}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt={pillar.title}
                              />
                            </AnimatePresence>
                          </div>
                          
                          {/* TEXT FÜR BEIDE (Handy & PC) */}
                          <p className="text-[#4A3C39]/80 text-xs sm:text-sm md:text-base leading-[1.8] md:leading-[1.9]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                            {pillar.text}
                          </p>
                          
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </motion.div>
              );
            })}
          </div>

          {/* --- RECHTE SEITE (NUR PC): DAS GROSSE WANDELBARE BILD --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block w-full md:w-1/2 lg:w-5/12 aspect-[4/5] sticky top-32 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-black/5"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={desktopImg}
                src={desktopImg}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Chip's Nails"
              />
            </AnimatePresence>
            
            {/* Zarter Luxus-Schleier über dem Bild */}
            <div className="absolute inset-0 bg-black/5"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default QuoteSection;