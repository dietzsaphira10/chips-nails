import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Heart, MessageCircle } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const InstagramFeed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 6 deiner Bilder für den perfekten Grid-Look
  const igImages = [
    "/assets/gallery/1.jpg",
    "/assets/gallery/2.jpg",
    "/assets/gallery/3.jpg",
    "/assets/gallery/4.jpg",
    "/assets/gallery/5.jpg",
    "/assets/gallery/6.jpg",
  ];

      return (
    <section className="bg-[#FDFCFB] overflow-hidden" ref={ref}>
      
      {/* --- DER NEUE EDITORIAL BREAK (Kompakter, cleane Schrift, Pastellrosa) --- */}
      <div className="relative w-full bg-[#FDF1F4] py-16 md:py-20 mb-16 md:mb-24 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Sanfter, diffuser Licht-Glow im Hintergrund */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-[80px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          {/* Die sanfte, edle Scroll-Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span 
              className="block text-[#4A3C39]/60 text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Meet Chip&apos;s Nails
            </span>
            
            {/* Das Zitat - Jetzt in sauberer, moderner Schrift und mit feinem Glow */}
            <h2 
              className="text-[#2D2422] text-lg md:text-xl lg:text-2xl leading-[1.8] md:leading-[3]"
              style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontWeight: 300,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 255, 255, 0.6)" /* Der magische, zarte Leuchteffekt */
              }}
            >
              Mehr als nur Nägel: Seit 2017 verbinden wir in unserem Studio echtes Handwerk mit modernem Design. Wir legen Wert auf höchste Qualität und kreieren individuelle Nageldesigns, die nicht nur schön anzusehen sind, sondern auch schonend hochwertig.
            </h2>
          </motion.div>
          
        </div>
      </div>

     <div className="max-w-4xl mx-auto px-6 pb-8 md:pb-12">
        
        {/* --- DIE ÜBERSCHRIFT (Im cleanen Design der Booking-Sektion) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-black/20"></div>
            <span 
              className="text-black/50 text-sm tracking-[0.4em] uppercase" 
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              Socials & Daily Inspiration
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-black/20"></div>
          </div>

          <h2 
            className="text-black uppercase leading-[1.2]" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100, fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Follow us on <br />
            <span style={{ fontWeight: 400 }}>Instagram</span>
          </h2>

          <div className="w-20 md:w-32 h-[1px] bg-black/20 mt-8"></div>
        </motion.div>

       {/* --- DAS EINGEBETTETE "INSTAGRAM"-FENSTER IN EDLEM BEIGE --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#F7F5F0] rounded-[2rem] p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#EBE6DD] relative overflow-hidden"
        >
          {/* Header des Fake-Profils */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-10 border-b border-[#EBE6DD] pb-8">
            
            {/* Profilbild */}
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-[#EBE6DD] p-1 bg-white">
              <img src="/assets/gallery/Profilbild.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-xl md:text-2xl text-[#3A302B]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
                  chipsnailssingen
                </h3>
                <a 
                  href="https://www.instagram.com/chipsnailssingen" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#3A302B] text-white px-6 py-2 rounded-full text-xs uppercase tracking-[0.1em] hover:bg-black transition-colors inline-flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <Instagram className="w-3 h-3" /> Folgen
                </a>
              </div>
              
              <p className="text-[#6A5A52] text-sm md:text-base italic mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                CHIP'S NAILS & BEAUTY 
              </p>
              <p className="text-[#8A7A72] text-xs uppercase tracking-[0.1em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Nail Art • Lashes • Pedicure | Singen
              </p>
            </div>
          </div>

          {/* Der Grid-Feed - JETZT OHNE FALSCHE LIKES! */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {igImages.map((src, idx) => (
              <a
                href="https://www.instagram.com/chipsnailssingen"
                target="_blank"
                rel="noreferrer"
                key={idx}
                className="group relative aspect-square overflow-hidden bg-white rounded-xl"
              >
                {/* Hover-Effekt (Zeigt jetzt nur noch edel das Instagram-Logo) */}
                <div className="absolute inset-0 bg-[#3A302B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <Instagram className="w-8 h-8 md:w-10 md:h-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <img src={src} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </a>
            ))}
          </div>
          
        </motion.div>

           {/* --- TIKTOK & FACEBOOK LINKS UNTER DEM WIDGET --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 pb-12 md:pb-16"
        >
          <span className="text-black/40 text-[10px] md:text-xs tracking-[0.2em] uppercase">Also find us on:</span>
          <div className="flex gap-8 md:gap-12">
            <a href="https://www.tiktok.com/@chipsnailssingen" target="_blank" rel="noreferrer" className="flex items-center gap-2 md:gap-3 group">
              <TikTokIcon className="w-4 h-4 md:w-5 md:h-5 text-black/40 group-hover:text-black transition-colors" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-black/50 group-hover:text-black transition-colors">TikTok</span>
            </a>
            <a href="https://www.facebook.com/chipsnails" target="_blank" rel="noreferrer" className="flex items-center gap-2 md:gap-3 group">
              <Facebook className="w-4 h-4 md:w-5 md:h-5 text-black/40 group-hover:text-black transition-colors" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.1em] text-black/50 group-hover:text-black transition-colors">Facebook</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InstagramFeed;