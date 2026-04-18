import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "@/components/SEO";

const headerBg = "/assets/gallery/Kontaktbanner.jpg";

const Pedikuere = () => {
  return (
    <main className="bg-white min-h-screen text-black font-body">
      <SEO 
  title="Preise für Pediküre & Spa | Singen" 
  description="Preisliste für kosmetische Fußpflege, Spa-Pediküre und Shellac für die Füße bei Chip's Nails & Beauty in Singen." 
/>
      <Navbar />
      
      <section className="relative h-[45vh] min-h-[350px] mt-[80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#141414]">
          <div className="absolute inset-0 opacity-40 blur-2xl" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 flex flex-col items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-white mb-4 drop-shadow-md text-center uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100, letterSpacing: "0.2em", fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.2 }}
          >
            Pediküre & Spa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 drop-shadow-sm text-center uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200, letterSpacing: "0.4em", fontSize: "clamp(0.7rem, 1.5vw, 1rem)" }}
          >
            Preisliste
          </motion.p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        
        {/* --- NEU: ZEHENMODELLAGE --- */}
        <h2 className="text-center uppercase tracking-[0.2em] mb-16 text-black font-light text-2xl">Zehenmodellage</h2>
        <div className="space-y-10 mb-24">
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest">Zehenmodellage Natur</span>
            <span className="text-right font-medium text-lg">45 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest">Zehenmodellage mit Farbe</span>
            <span className="text-right font-medium text-lg">50 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest">Zehenmodellage mit French</span>
            <span className="text-right font-medium text-lg">55 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end text-black/50">
            <span className="uppercase text-sm tracking-widest">Inkl. Pediküre</span>
            <span className="text-right font-medium text-lg">+ 10 €</span>
          </div>
        </div>

        {/* KLASSISCHE FUSSPFLEGE */}
        <h2 className="text-center uppercase tracking-[0.2em] mb-16 text-black font-light text-2xl">Fußpflege </h2>
        <div className="space-y-10">
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest">Kosmetische Pediküre</span>
            <span className="text-right font-medium text-lg">35 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest">Shellac Farbe Füße</span>
            <span className="text-right font-medium text-lg">35 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest">Shellac French Füße</span>
            <span className="text-right font-medium text-lg">40 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest leading-relaxed">Pediküre mit Shellac inkl. Massage</span>
            <span className="text-right font-medium text-lg">48 €</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black/10 pb-4 items-end">
            <span className="uppercase text-sm tracking-widest leading-relaxed">Pediküre mit Shellac French inkl. Massage</span>
            <span className="text-right font-medium text-lg">53 €</span>
          </div>
          
          <div className="bg-[#F7F7F9] p-8 rounded-xl mt-12 border border-black/5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="uppercase text-sm tracking-[0.3em] font-bold">Ultimate Chip's Spa</h3>
              <span className="font-bold text-lg">+ 20 €</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-black/60 leading-loose">
              Reinigung — Peeling — Maske — Massage mit Dampfbehandlung
            </p>
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
export default Pedikuere;