import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const thinFontStack = "system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, sans-serif";

const Angebot = () => {
  const [newClientsPerMonth, setNewClientsPerMonth] = useState(4);
  const [avgRevenuePerClient, setAvgRevenuePerClient] = useState(70);
  const [isBaseOpen, setIsBaseOpen] = useState(false);

  const monthlyExtraRevenue = newClientsPerMonth * avgRevenuePerClient;
  const yearlyExtraRevenue = monthlyExtraRevenue * 11; 
  const totalInvestment = 1610; 
  const amortizationMonths = (1250 / monthlyExtraRevenue).toFixed(1);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const [isRoiOpen, setIsRoiOpen] = useState(false);
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white font-body relative overflow-hidden">
      <Navbar />
      
      {/* GLOBAL LIGHTEFFECTS */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#FFC0CB]/5 rounded-full blur-[150px] z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[180px] z-0 pointer-events-none"
      />

      {/* 1. HERO SECTION - GEKÜRZT */}
      <section ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black z-10" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }} 
            animate={{ scale: 1, opacity: 0.35 }} 
            transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: heroBgY }}
            src="/assets/gallery/Studio1.jpg" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl pt-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-white/40 text-[10px] uppercase tracking-[0.6em] mb-4 block"
            style={{ fontFamily: thinFontStack, fontWeight: 200 }}
          >
            Digitaler Expansions-Plan 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-8xl uppercase mb-6"
            style={{ fontFamily: thinFontStack, fontWeight: 100, letterSpacing: "0.1em", lineHeight: 1 }}
          >
            CHIP'S NAILS <br/><span className="italic font-light">Website</span>
          </motion.h1>
          <motion.div initial={{ width: 0 }} animate={{ width: "100px" }} transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }} className="h-[1px] bg-white/30 mx-auto mb-8" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Wir bauen nicht nur eine Website. Wir erschließen für euch den digitalen Markt in Singen. Exklusivität, die man fühlen kann.
          </motion.p>
        </div>
      </section>
      {/* 2. PHASEN SECTION */}
     <section className="pt-14 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {[{ phase: "Phase 01", title: "Sichtbarkeit", desc: "Wer nach 'Nägel Singen' sucht, muss euch nicht nur finden – er muss euch wollen. Wir dominieren die Suchergebnisse durch High-End SEO." },
            { phase: "Phase 02", title: "Vertrauen", desc: "Wir nutzen Psychologie & Design, um den Kundenwert zu steigern. Viel mehr Aufmerksamkeit und Sichtbarkeit - auch für Neukunden" },
            { phase: "Phase 03", title: "Skalierung", desc: "Durch den Live-Kalender und automatisierte Prozesse gewinnt ihr Zeit zurück. Mehr Fokus auf Design, weniger Fokus auf Telefonate." }
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: idx * 0.2, duration: 0.8 }} className="space-y-6 relative group">
              <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ delay: (idx * 0.2) + 0.5, duration: 1 }} className="absolute top-0 left-0 w-[1px] bg-white/20 origin-top group-hover:bg-white transition-colors duration-500" />
              <div className="pl-8 space-y-6">
                <span className="text-white/30 text-xs uppercase tracking-widest">{item.phase}</span>
                <h3 className="text-2xl font-extralight uppercase tracking-widest">{item.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     {/* 3. ROI RECHNER: LUXURY EDITION - JETZT AUSKLAPPBAR */}
  <section className="relative z-10 px-5">
    <div className="max-w-6xl mx-auto">
      {/* DER TOGGLE BUTTON */}
      <motion.button
        onClick={() => setIsRoiOpen(!isRoiOpen)}
        className="w-full mb-8 py-6 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-between px-8 group hover:bg-white/[0.05] transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-[#D4AF37] text-xl font-light">€</span>
          </div>
          <div className="text-left">
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40">Profitabilitäts-Check</span>
            <span className="text-lg font-extralight uppercase tracking-widest">Das Investment Modell {isRoiOpen ? 'schließen' : 'öffnen'}</span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isRoiOpen ? 180 : 0 }}
          className="text-white/30 text-2xl font-thin"
        >
          ↓
        </motion.div>
      </motion.button>

      {/* DER AUSKLAPPBARE INHALT */}
      <AnimatePresence>
        {isRoiOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.section 
              className="pt-8 pb-32 bg-[#FAFAFA] text-black rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden border border-black/5"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[100px] bg-gradient-to-b from-white to-transparent z-0" />

              <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mt-4 mb-12 flex flex-col items-center space-y-4">
                  <p className="text-black/40 uppercase tracking-[0.4em] text-[10px] font-bold">Return on Investment</p>
                  <h2 className="text-5xl md:text-7xl uppercase font-extralight tracking-tighter mb-2">
                    Das <span className="italic text-black/30">Investment</span><br/>Modell.
                  </h2>
                  <motion.div initial={{ height: 0 }} whileInView={{ height: "20px" }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 1 }} className="w-[1px] bg-black/20" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  {/* ELEGANT SLIDERS */}
                  <div className="space-y-16 pl-2 md:pl-8">
                    <div className="space-y-4 group">
                      <div className="flex justify-between items-end mb-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold">Neukunden pro Monat</label>
                        <span className="text-6xl font-extralight tracking-tighter">{newClientsPerMonth}</span>
                      </div>
                      <div className="relative pt-2">
                        <input type="range" min="1" max="25" value={newClientsPerMonth} onChange={(e)=>setNewClientsPerMonth(parseInt(e.target.value))} className="w-full h-[1px] bg-black/20 appearance-none accent-black cursor-pointer relative z-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-4 group">
                      <div className="flex justify-between items-end mb-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-bold">Umsatz pro Kopf</label>
                        <span className="text-6xl font-extralight tracking-tighter">{avgRevenuePerClient} <span className="text-2xl text-black/30 ml-1">€</span></span>
                      </div>
                      <div className="relative pt-2">
                        <input type="range" min="40" max="150" step="5" value={avgRevenuePerClient} onChange={(e)=>setAvgRevenuePerClient(parseInt(e.target.value))} className="w-full h-[1px] bg-black/20 appearance-none accent-black cursor-pointer relative z-10" />
                      </div>
                    </div>
                  </div>

                  {/* MAGIC ROI BOX - LUXURY INVERT */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="group relative p-12 md:p-16 rounded-[2.5rem] bg-[#050505] text-white transition-all duration-[800ms] cursor-default shadow-2xl overflow-hidden
                               hover:bg-white hover:text-black hover:border-black/5 hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-white/10"
                  >
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px] z-0 group-hover:opacity-0 transition-opacity duration-700" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FFC0CB]/10 rounded-full blur-[80px] z-0 group-hover:bg-black/5 transition-colors duration-700" />
                    
                    <div className="space-y-8 relative z-10">
                      <div className="flex items-center gap-4">
                          <div className="h-[1px] w-8 bg-white/30 group-hover:bg-black/20 transition-colors duration-700" />
                          <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 group-hover:text-black/40 font-bold transition-colors duration-700">Zusatz-Umsatz p.a.</span>
                      </div>
                      
                      <div className="text-7xl md:text-8xl font-extralight tracking-tighter flex items-start gap-3">
                        {yearlyExtraRevenue.toLocaleString('de-DE')} 
                        <span className="text-4xl text-[#D4AF37] group-hover:text-black/20 mt-2 font-light transition-colors duration-700">€</span>
                      </div>
                    </div>
                    
                    <div className="pt-12 mt-12 border-t border-white/10 group-hover:border-black/10 relative z-10 transition-colors duration-700 flex items-start gap-5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0 group-hover:bg-black transition-colors duration-700" />
                      <div className="text-sm font-light text-white/50 group-hover:text-black/60 leading-relaxed italic pr-4 transition-colors duration-700">
                        "Bei diesem Modell hat sich die Website nach nur <span className="font-medium text-white group-hover:text-black transition-colors duration-700">{amortizationMonths} Monaten</span> komplett selbst bezahlt."
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
      {/* 4. ROADMAP & PREISE SECTION (HELLER HINTERGRUND) */}
      <section className="py-32 px-6 bg-white text-black w-full relative z-10" style={{ fontFamily: thinFontStack }}>
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 flex flex-col items-center space-y-6">
            <h2 className="text-3xl uppercase tracking-[0.2em] font-extralight italic">Kosten der Investition</h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: "100px" }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }} className="h-[1px] bg-black/20" />
          </div>
          
          <div className="space-y-6 mb-24">
            {/* ACCORDION BASIS (1250€) */}
            <div className="border border-black/10 bg-black/[0.02] rounded-3xl overflow-hidden hover:border-black/30 transition-colors">
              <button onClick={() => setIsBaseOpen(!isBaseOpen)} className="w-full p-8 flex justify-between items-center text-left">
                <div className="space-y-1">
                  <span className="text-lg uppercase tracking-widest font-light">Website Basis-System</span>
                  <p className="text-[10px] text-black/40 uppercase tracking-widest italic">Klicke für Details ↓</p>
                </div>
                <span className="text-3xl font-extralight tracking-tighter">1.250 €</span>
              </button>
              <AnimatePresence>
                {isBaseOpen && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="px-8 pb-8 space-y-4 border-t border-black/5 pt-6 text-sm font-light text-black/60 overflow-hidden">
                     <div className="flex justify-between"><span>• High-End React Framework Setup - schnelle und Funktionelle Website </span><span className="italic">700€</span></div>
                     <div className="flex justify-between"><span>• Individuelles UI/UX Premium Design</span><span className="italic">200€</span></div>
                     <div className="flex justify-between"><span>• Alle zusätzlichen Behandlungsseiten & Galerie</span><span className="italic">350€</span></div>
                     <div className="flex justify-between"><span>• DSGVO-Sicherheit & SEO-Basis</span><span className="italic">Inklusive</span></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 5. HOSTING DEAL (NEBENEINANDER, GLEICH BERECHTIGT) */}
          <div className="text-center mb-12">
              <h3 className="text-3xl uppercase tracking-[0.1em] font-extralight italic mb-5">Wir kümmern uns um euer Website-Hosting & Support bei kleinen Anpassungen</h3>
              <p className="text-black/50 text-s font-light max-w-md mx-auto">Infrastruktur, Serverkosten, SSL & technischer Support. Unsere Modelle:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-32">
              {/* Monatlich */}
              <div className="border border-black/10 bg-white p-10 rounded-[2.5rem] flex flex-col justify-between shadow-lg">
                  <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-black/50 block mb-4 italic">Standard</span>
                      <h4 className="text-1g uppercase tracking-widest font-light">Monatlich</h4>
                      <p className="text-black/70 text-[15px] leading-relaxed font-light">
                        Volle Flexibilität. Service für maximale Unabhängigkeit.
                      </p>
                  </div>
                  <div className="text-left border-t border-black/10 pt-6 mt-8">
                      <div className="flex items-end gap-2">
                          <span className="text-4xl font-extralight tracking-tighter">35 €</span>
                          <span className="text-black/40 text-[11px] uppercase tracking-widest pb-1">/ Monat</span>
                      </div>
                      <div className="text-[12px] uppercase tracking-widest mt-3 text-black/50">Gesamt p.a.: 420 €</div>
                  </div>
              </div>

              {/* Jährlich (DER GEWINNER - Leicht hervorgehoben) */}
              <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  className="border border-black/10 bg-white p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden shadow-2xl"
              >
                  <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-black/50 block mb-4 italic">Meine persönliche Empfehlung</span>
                      <h4 className="text-lg uppercase tracking-widest font-light">Jährlich (Prepaid)</h4>
                      <p className="text-black/70 text-[15px] leading-relaxed font-light">
                          Einmalige Zahlung für das gesamte Jahr. Ich übernehme circa 4 Monate der Kosten für euch.
                      </p>
                  </div>
                  <div className="text-left border-t border-black/10 pt-6 mt-8">
                      <div className="flex items-end gap-2">
                          <span className="text-4xl font-extralight tracking-tighter">300 €</span>
                          <span className="text-black/40 text-[11px] uppercase tracking-widest pb-1">/ Jahr</span>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                          <span className="text-[12px] text-black/50 font-light uppercase tracking-widest">Effektiv 25 € / Monat</span>
                          <span className="text-[#D4AF37] text-[11px] font-bold uppercase tracking-widest italic bg-[#D4AF37]/10 px-2 py-1 rounded">Ersparnis: 120 €</span>
                      </div>
                  </div>
              </motion.div>
          </div>

        

          {/* NEUER TEXTABSCHNITT UNTER DEN OPTIONEN */}
          <div className="bg-black/[0.03] p-10 rounded-[2.5rem] border border-black/5">
            <h4 className="text-lg uppercase tracking-widest font-light mb-4 italic text-center">Warum diese Upgrades den Unterschied machen</h4>
            <p className="text-[14px] text-black/70 leading-relaxed font-light text-center max-w-2xl mx-auto">
              Während das Basis-System euer digitales Fundament legt, sorgen die Upgrades für den entscheidenden Marktvorteil. 
              <strong> Content-Marketing</strong> verwandelt Besucher in Kunden durch professionelle Psychologie, während das 
              <strong> Buchungssystem</strong> eure Effizienz steigert – weniger Telefonate bedeuten mehr Zeit für eure Handwerkskunst und ein reibungsloses Erlebnis für eure Kunden.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Angebot;