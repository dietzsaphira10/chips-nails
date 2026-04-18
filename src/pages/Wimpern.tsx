import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, MessageCircle, X } from "lucide-react";
import SEO from "@/components/SEO";

const headerBg = "/assets/gallery/Kontaktbanner.jpg";

const Wimpern = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-white min-h-screen text-black font-body relative">
      <SEO 
  title="Preise für Wimpernverlängerung & Brows | Singen" 
  description="Unsere Preise für Wimpernverlängerung, Wimpernlifting und Brow Lifting in Singen. Hochwertige Beauty-Behandlungen zu fairen Preisen." 
/>
      <Navbar />
      
      {/* --- TERMIN POP-UP (MODAL) --- */}
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

      {/* DER EINHEITLICHE HERO BANNER */}
      <section className="relative h-[45vh] min-h-[350px] mt-[80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#141414]">
          <div className="absolute inset-0 opacity-40 blur-2xl" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 flex flex-col items-center w-full font-montserrat">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-white mb-4 drop-shadow-md text-center uppercase tracking-[0.2em] text-[clamp(2rem,5vw,4rem)] font-thin"
          >
            Wimpern & Brows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 drop-shadow-sm text-center uppercase tracking-[0.4em] text-[clamp(0.7rem,1.5vw,1rem)] font-light"
          >
            Preisliste
          </motion.p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 font-body">
        
        {/* LASHES */}
        <h2 className="uppercase tracking-[0.2em] mb-10 text-black/40 font-light text-xl border-b border-black/5 pb-2">Lashes</h2>
        <div className="space-y-6 mb-20 text-sm uppercase tracking-widest">
          {/* Classic */}
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Classic 1:1 Neuset</span>
            <span>80 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2 pl-4 text-black/40 text-xs italic normal-case tracking-normal">
            <span>Auffüllen (Pauschal bis zu 4 Wochen)</span>
            <span>60 €</span>
          </div>
          
          {/* Light Volume */}
          <div className="flex justify-between border-b border-black/5 pb-2 mt-6">
            <span>Light Volume Neuset</span>
            <span>105 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2 pl-4 text-black/40 text-xs italic normal-case tracking-normal">
            <span>Auffüllen (Pauschal bis zu 4 Wochen)</span>
            <span>80 €</span>
          </div>

          {/* Mega Volume */}
          <div className="flex justify-between border-b border-black/5 pb-2 mt-6">
            <span>Mega Volume Neuset</span>
            <span>130 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2 pl-4 text-black/40 text-xs italic normal-case tracking-normal">
            <span>Auffüllen (Pauschal bis zu 4 Wochen)</span>
            <span>100 €</span>
          </div>

          <div className="pt-4 text-center text-black/40 text-[11px] normal-case tracking-normal italic">
            Für den Auffüllen-Preis müssen mindestens 50 % der Extensions noch vorhanden sein. Andernfalls gilt der Neupreis.
          </div>
        </div>

        {/* BROWS & LASHES */}
        <h2 className="uppercase tracking-[0.2em] mb-10 text-black/40 font-light text-xl border-b border-black/5 pb-2">Brow & Lashes</h2>
        <div className="space-y-6 text-sm uppercase tracking-widest">
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Wimpernlifting</span>
            <span>65 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Brow Lifting</span>
            <span>65 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2 font-semibold">
            <span>Wimpernlifting + Brow Lifting</span>
            <span>110 €</span>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="/kontakt" className="inline-block px-10 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500"> Termin buchen</a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Wimpern;