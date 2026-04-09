import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const headerBg = "/assets/gallery/Kontaktbanner.jpg";

const FussBehandlung = () => {
  return (
    <main className="bg-white min-h-screen text-black font-body">
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
            Wellness von Grund auf
          </motion.p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl uppercase tracking-widest mb-6 font-light">Kosmetische Fußpflege</h2>
            <p className="text-black/70 leading-relaxed font-light mb-6">
              Unsere Füße tragen uns durch das Leben. Wir schenken ihnen die Aufmerksamkeit, die du verdienst. Von der klassischen Hornhautentfernung bis hin zum perfekten Farbauftrag mit Shellac – für seidig glatte Füße und ästhetische Nägel.
            </p>
            <ul className="space-y-3 text-sm text-black/50 uppercase tracking-tighter mb-8">
              <li>• Wohltuende Pediküre</li>
              <li>• Präzises Kürzen & Formen</li>
              <li>• Nagelmodellage mit brillanter Haltbarkeit</li>
            </ul>
            <Link to="/pedikuere" className="text-[10px] uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-black/50 transition-colors">
              Zur Preisliste für Pediküre
            </Link>
          </motion.div>
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-2 aspect-square">
            <img src="/assets/gallery/Spa.jpg" alt="Pediküre" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl -rotate-2 order-2 md:order-1 aspect-[4/5]">
            <img src="/assets/gallery/Spa2.jpg" alt="Spa Atmosphäre" className="w-full h-full object-cover" />
          </div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
            <h2 className="text-2xl uppercase tracking-widest mb-6 font-light">Ultimate Chip's Spa</h2>
            <p className="text-black/70 leading-relaxed font-light mb-6">
              Gönne dir das Maximum an Entspannung. Unser exklusives Spa-Programm kombiniert Reinigung, tiefenwirksame Peelings, feuchtigkeitsspendende Masken und eine ausgiebige Bedampfung mit einer revitalisierenden Massage.
            </p>
            <Link to="/pedikuere" className="text-[10px] uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-black/50 transition-colors">
              Spa-Pakete & Preise entdecken
            </Link>
          </motion.div>
        </div>

        {/* --- DER BUTTON IM GLEICHEN STIL WIE NAGELBEHANDLUNG --- */}
        <div className="mt-20 text-center">
          <a 
            href="/kontakt" 
            className="inline-block px-10 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500"
          >
            Termin buchen
          </a>
        </div>
        
      </section>
      <Footer />
    </main>
  );
};

export default FussBehandlung;