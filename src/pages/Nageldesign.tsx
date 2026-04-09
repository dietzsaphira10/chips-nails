import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const headerBg = "/assets/gallery/Kontaktbanner.jpg";

const Nageldesign = () => {
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
            Hände & Design
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
        
        {/* --- NEU: NEUMODELLAGE / AUFFÜLLEN --- */}
        <h2 className="uppercase tracking-[0.2em] mb-10 text-black/40 font-light text-xl border-b border-black/5 pb-2">Neumodellage / Auffüllen</h2>
        <div className="space-y-6 mb-20 text-sm uppercase tracking-widest">
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Natur</span>
            <span>40 € / 35 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Makeup, Rosa Natur / Milchweiß</span>
            <span>45 € / 40 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Farbe / Babyboomer</span>
            <span>48 € / 43 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>French / Farbverlauf</span>
            <span>50 € / 47 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2">
            <span>Mit UV-Gel</span>
            <span>ab 45 €</span>
          </div>
          <div className="flex justify-between border-b border-black/5 pb-2 text-black/50">
            <span>Mit Verlängerung</span>
            <span>+ 5 €</span>
          </div>
          <div className="pt-2 text-right text-black/40 text-[10px] normal-case tracking-normal italic">
            *Die Preise verstehen sich als: Neumodellage / Auffüllen
          </div>
        </div>

        {/* MANIKÜRE & SHELLAC */}
        <h2 className="uppercase tracking-[0.2em] mb-10 text-black/40 font-light text-xl border-b border-black/5 pb-2">Maniküre & Shellac</h2>
        <div className="space-y-6 mb-20 text-sm uppercase tracking-widest">
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Maniküre</span><span>15 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Shellac Hände</span><span>28 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Shellac French Hände</span><span>33 €</span></div>
          <div className="flex justify-between text-black/40 text-xs italic"><span>inkl. Maniküre</span><span>+ 5 €</span></div>
        </div>

        {/* EXTRAS */}
        <h2 className="uppercase tracking-[0.2em] mb-10 text-black/40 font-light text-xl border-b border-black/5 pb-2">Extras & Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm uppercase tracking-widest">
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Strassstein</span><span>ab 0,50 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Sticker</span><span>ab 2 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Farbpulver</span><span>3 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Weitere Farben</span><span>ab 2 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>3D Blumen</span><span>ab 5 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Charm</span><span>3 € / Stk.</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Design</span><span>ab 3 € / Nagel</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Mattgel</span><span>3 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Glitzer</span><span>ab 1 € / Nagel</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Chrome / Cat Eye</span><span>10 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Ablösen</span><span>15 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Ablösen f. Neumodellage</span><span>5 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Überlänge</span><span>ab 5 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Nagelreparatur</span><span>ab 5 €</span></div>
          <div className="flex justify-between border-b border-black/5 pb-2"><span>Airbrush</span><span>3 € / Nagel</span></div>
        </div>
        
<div className="mt-6 p-4 bg-black/[0.02] border border-dashed border-black/10 rounded-xl">
  <p className="text-[10px] uppercase tracking-widest text-black/50 text-center italic">
    Schüler & Azubis bis 20 Jahre erhalten 5€ Rabatt auf alle Neumodellagen und Auffüll-Behandlungen (mit Ausweis).
  </p>
</div>
        <div className="mt-20 text-center">
          <a href="/kontakt" className="inline-block px-10 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">Termin buchen</a>
        </div>
        
      </section>
      <Footer />
    </main>
  );
};
export default Nageldesign;