import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, X, Scan, Plus } from "lucide-react";

// Bilder-Imports
import bgNails from "../assets/Hintergrund.jpg";
import bgLashes from "../assets/Hintergrund2.jpg";
import bgFeet from "../assets/Hintergrund3.jpg";
import Chips2 from "../assets/Chips2.png"; // Dein neues Bild

// Fallback-Farbe für den Glow
const SISIX_GLOW = "rgba(255, 255, 255, 0.15)";

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Nageldesign",
      subtitle: "UV-Gel · Acryl · Shellac",
      price: "35 €",
      priceLink: "/nageldesign",
      bgImage: bgNails,
    },
    {
      title: "Wimpern & Augenbrauen",
      subtitle: "Extensions · Lifting",
      price: "45 €",
      priceLink: "/wimpern",
      bgImage: bgLashes,
    },
    {
      title: "Pediküre & Maniküre",
      subtitle: "Spa · Shellac",
      price: "35 €",
      priceLink: "/pedikuere",
      bgImage: bgFeet,
    }
  ];

  return (
    <section className="border-b border-black/5 bg-white overflow-hidden relative" ref={ref}>
      
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl text-center font-montserrat"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-black/20 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-xl uppercase tracking-widest mb-2 font-semibold text-black">
                Termin buchen
              </h3>
              <p className="text-[11px] text-black/50 mb-8 tracking-widest uppercase">
                Wähle deinen Kontaktweg
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/4915203389999" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl hover:bg-[#1ebd59] transition-all font-bold tracking-widest text-xs"
                >
                  <MessageCircle size={18} />
                  WHATSAPP
                </a>

                <a 
                  href="tel:015203389999" 
                  className="flex items-center justify-center gap-3 w-full py-4 bg-black text-white rounded-2xl hover:bg-black/80 transition-all font-bold tracking-widest text-xs"
                >
                  <Phone size={18} />
                  ANRUFEN
                </a>
              </div>

              <p className="mt-8 text-[9px] uppercase text-black/40 tracking-[0.3em] leading-loose">
                Mo-Fr: 10:00 - 19:00 <br/> Sa: 10:00 - 17:00
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- HYBRID CINEMATIC BRAND BANNER --- */}
      {/* HÖHE VERKLEINERT von h-[350px] lg:h-[600px] auf h-[280px] lg:h-[480px] */}
      <div className="relative w-full h-[1n80px] lg:h-[480px] bg-black overflow-hidden group mb-12 md:mb-20">
        <div className="absolute inset-0 z-0 opacity-40" style={{ background: `radial-gradient(circle at center, ${SISIX_GLOW} 0%, #000 70%)` }} />

        <Link to="/galerie" className="relative h-full w-full flex items-center justify-center">
            <div className="absolute inset-0 flex justify-between pointer-events-none opacity-40">
                <div className="w-1/3 h-full blur-[40px] lg:blur-[80px] scale-110 origin-left">
                    <img src={Chips2} className="w-full h-full object-cover" alt="Background detail" />
                </div>
                <div className="w-1/3 h-full blur-[40px] lg:blur-[80px] scale-110 origin-right">
                    <img src={Chips2} className="w-full h-full object-cover" alt="Background detail" />
                </div>
            </div>

            <div className="absolute inset-0 w-full flex items-center overflow-hidden opacity-10 pointer-events-none z-0">
              <div className="marquee-track w-max">
                {Array(40).fill("✦ SIGNATURE NAIL ART ✦ BEYOND NAILS ✦ ").map((text, idx) => (
                  <span key={idx} className="text-xs md:text-sm tracking-[0.4em] uppercase mx-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 w-[90%] lg:w-3/4 h-[70%] lg:h-[85%] overflow-hidden rounded-[20px] lg:rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out">
                {/* BILDAUSSCHNITT GEÄNDERT: object-bottom hinzugefügt (zeigt den unteren Teil des Bildes) */}
                <img src={Chips2} alt="Signature Work" className="w-full h-full object-cover object-bottom transition-transform duration-[5s] group-hover:scale-110" />
                
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-16">
                    
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <Scan size={18} className="text-white opacity-50" />
                            <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.8em] text-white opacity-50 font-black">Signature Art</span>
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                            <Plus size={20} />
                        </div>
                    </div>

                    <div>
                        <p 
                            className="text-white uppercase tracking-[0.3em] mb-3 lg:mb-4 text-2xl md:text-4xl lg:text-[2.75rem] leading-none"
                            style={{ 
                                fontFamily: "'Montserrat', sans-serif", 
                                fontWeight: 200,
                                textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 50px rgba(255, 255, 255, 0.2)"
                            }}
                        >
                            Chip&apos;s Nails & Beauty
                        </p>
                        <p className="text-[9px] lg:text-xs uppercase tracking-[0.4em] text-white/60 font-black">Hand-crafted perfection in every detail.</p>
                    </div>
                </div>
            </div>
        </Link>
      </div>

      <div id="termine" style={{ scrollMarginTop: "30px" }} className="max-w-6xl mx-auto px-6 pb-24 md:pb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-black/20"></div>
            <span className="text-black/50 text-sm tracking-[0.4em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Service & Booking
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-black/20"></div>
          </div>

          <h2 className="text-black uppercase leading-[1.2]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Wähle dein <br />
            <span style={{ fontWeight: 400 }}>Treatment</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative flex flex-col items-center text-center p-10 border border-black/10 transition-colors duration-700 overflow-hidden group min-h-[420px] cursor-pointer"
            >
              <div 
                className="absolute inset-0 z-0 opacity-100 blur-[2px] transition-all duration-700 group-hover:scale-105 group-hover:blur-0"
                style={{ backgroundImage: `url(${service.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>

              <div className="absolute inset-0 bg-white/20 z-0 transition-colors duration-700 group-hover:bg-black/50"></div>
              <div className="absolute inset-0 bg-white/60 z-0 transition-colors duration-700 group-hover:bg-black/40"></div>

              <div className="relative z-10 flex flex-col items-center w-full h-full">
                <h3 className="uppercase text-lg md:text-xl tracking-[0.2em] mb-2 text-black group-hover:text-white transition-colors duration-700 font-medium">
                  {service.title}
                </h3>
                <p className="uppercase text-[10px] md:text-xs tracking-[0.2em] mb-6 text-black/60 group-hover:text-white/90">
                  {service.subtitle}
                </p>
                
                <div className="w-12 h-px mb-6 bg-black/20 group-hover:bg-white/40 transition-colors duration-700"></div>
                
                <p className="uppercase text-xs md:text-sm tracking-[0.2em] mb-12 text-black/80 group-hover:text-white transition-colors duration-700">
                  ab {service.price}
                </p>

                <div className="flex flex-col gap-4 w-full mt-auto">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-4 uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-500 shadow-lg shadow-black/10 bg-black text-white group-hover:bg-white group-hover:text-black font-semibold" 
                  >
                    Termin buchen
                  </button>
                  
                  <Link 
                    to={service.priceLink}
                    className="w-full py-4 backdrop-blur-md border uppercase tracking-[0.2em] text-[10px] md:text-xs transition-all duration-500 bg-white/60 border-black/20 text-black group-hover:bg-black/20 group-hover:border-white/50 group-hover:text-white" 
                  >
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;