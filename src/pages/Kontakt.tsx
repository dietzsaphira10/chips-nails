import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, MapPin, Mail, ArrowRight, MessageCircle, X, GraduationCap } from "lucide-react";
import SEO from "@/components/SEO";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const faqs = [
  {
    q: "Wie vereinbare ich am besten einen Termin?",
    a: "Du erreichst uns am besten telefonisch unter +49 7731 8383250 oder ganz unkompliziert per WhatsApp. Lass uns gerne direkt wissen, welche Behandlung du dir wünschst, und wir finden den perfekten Moment für deine Auszeit."
  },
  {
    q: "Gibt es spezielle Angebote für Schüler und Auszubildende?",
    a: "Ja, wir unterstützen euch! ✨ Schüler und Auszubildende erhalten bei uns bis 20 Jahre auf jede Neumodellage sowie Auffüllen einen Rabatt von 5€. Bring einfach deinen gültigen Ausweis mit zum Termin, und wir ziehen den Betrag direkt ab."
  },
  {
    q: "Wie lange hält eine Modellage bei euch?",
    a: "Unsere Kundinnen schätzen besonders die extrem lange Haltbarkeit ohne Liftings. Eine professionelle UV-Gel-Modellage aus unserem Studio hält in der Regel 3 bis 4 Wochen, abhängig vom natürlichen Wachstum deiner Nägel und deiner Beanspruchung im Alltag."
  },
  {
    q: "Setzt ihr auch aufwendige Nail-Art-Wünsche um?",
    a: "Sehr gerne! Von minimalistischer Eleganz bis hin zu detailreicher, handgemalter Nail-Art kreieren wir deinen individuellen Look. Bring am besten ein Foto deiner Inspiration mit, dann zaubern wir das perfekt auf deine Nägel!"
  },
  {
    q: "Füllt ihr auch Fremdarbeiten aus anderen Studios auf?",
    a: "Ja! Wir schauen uns den Zustand deiner aktuellen Modellage vor Ort an und entscheiden dann gemeinsam, ob ein einfaches Auffüllen möglich ist oder ob eine Neumodellage für ein gesundes, perfektes Ergebnis sinnvoller ist."
  },
  {
    q: "Was passiert, wenn ich meinen Termin absagen muss?",
    a: "Wir wissen, dass immer mal etwas dazwischenkommen kann. Bitte gib uns einfach rechtzeitig (idealerweise 24 Stunden vorher) telefonisch oder per WhatsApp unter +49 7731 8383250 Bescheid, damit wir den Termin an jemand anderen vergeben können."
  }
];

const slideImages = [
  "/assets/gallery/Kontakt2.jpg",
  "/assets/gallery/Kontakt3.jpg",
  "/assets/gallery/Kontakt4.jpg",
  "/assets/gallery/Kontakt5.jpg",
  "/assets/gallery/Kontakt.jpg"
];

const Kontakt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- NEU: DSGVO STATE & LOGIK ---
  const [hasFullConsent, setHasFullConsent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // --- NEU: COOKIE CHECKER LÄDT SOFORT BEIM START ---
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setHasFullConsent(consent === "all");

    const handleConsentChange = () => {
      setHasFullConsent(localStorage.getItem("cookieConsent") === "all");
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange);
    return () => window.removeEventListener("cookieConsentChanged", handleConsentChange);
  }, []);

  const acceptAllAndLoad = () => {
    localStorage.setItem("cookieConsent", "all");
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const marqueeText = " · KONTAKT & STUDIO · FAQ · CHIP'S NAILS & BEAUTY · SINGEN ";
  const repeatedText = Array(12).fill(marqueeText).join("");

  return (
    <main className="bg-[#F7F7F9] min-h-screen text-black relative">
      <SEO 
  title="Kontakt & Termin | Nagelstudio Singen" 
  description="Vereinbare deinen Termin bei Chip's Nails & Beauty in Singen. Finde unsere Adresse, Öffnungszeiten und buche bequem online über Fresha." 
/>
      <Navbar />

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
              className="relative bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl text-center"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 text-black/20 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-xl uppercase tracking-widest mb-2 font-semibold font-montserrat">
                Termin buchen
              </h3>
              <p className="text-[11px] text-black/50 mb-8 tracking-widest uppercase font-montserrat">
                Wähle deinen Kontaktweg
              </p>

              <div className="flex flex-col gap-4 font-montserrat">
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

              <p className="mt-8 text-[9px] uppercase text-black/40 tracking-[0.3em] leading-loose font-montserrat">
                Mo-Fr: 10:00 - 19:00 <br/> Sa: 10:00 - 17:00
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="w-full bg-[#F7F7F9] border-y border-black/5 py-3 overflow-hidden mt-[120px]">
        <div className="marquee-track flex text-black/60 text-[10px] md:text-xs uppercase tracking-[0.3em] font-body">
          {repeatedText}
        </div>
      </div>

      <section className="relative w-full h-[25vh] min-h-[200px] max-h-[250px] overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
        <img
          src="/assets/gallery/Kontaktbanner.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40" 
          alt="Chip's Nails Banner"
        />
        <div className="relative z-10 text-center px-4 flex flex-col items-center w-full mt-8 font-montserrat">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-4 drop-shadow-md uppercase text-center"
            style={{ fontWeight: 100, letterSpacing: "0.2em", fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1.2 }}
          >
            KONTAKT <br className="md:hidden" />
            <span style={{ fontWeight: 100, opacity: 0.9 }}>& STUDIO</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 mb-10 drop-shadow-sm uppercase text-center"
            style={{ fontWeight: 200, letterSpacing: "0.4em", fontSize: "clamp(0.8rem, 2vw, 1.2rem)" }}
          >
            Wie du uns erreichst
          </motion.p>
        </div>
      </section>

      <section className="pt-16 md:pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] bg-black/5"
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentSlide}
                  src={slideImages[currentSlide]}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt="Studio Details"
                />
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-center lg:text-left"
            >
              <Link 
                to="/gallery" 
                className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/50 hover:text-black transition-colors font-body border-b border-black/20 hover:border-black pb-1"
              >
                Mehr Inspiration in unserer Galerie <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-8 uppercase tracking-[0.1em] font-body">
                Wir freuen uns auf dich
              </h3>

              <div className="mb-10 flex items-center gap-4 p-4 bg-white border border-black/5 rounded-2xl shadow-sm italic">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black">
                   <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-black">5€ Schüler- und Azubirabatt bis 20 Jahre </p>
                  <p className="text-[10px] text-black/40 uppercase tracking-tighter">Auf alle Neumodellagen sowie Auffüllen mit Ausweis</p>
                </div>
              </div>

              <ul className="flex flex-col gap-8 text-sm md:text-base text-black/70 font-body font-light">
                <li className="flex items-start gap-5">
                  <MapPin className="w-5 h-5 text-black/40 mt-1" />
                  <div>
                    <strong className="text-black font-medium block mb-1">Adresse</strong>
                    August-Ruf Straße 12A<br/>
                    78224 Singen, Germany
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <Phone className="w-5 h-5 text-black/40 mt-1" />
                  <div>
                    <strong className="text-black font-medium block mb-1">Telefon</strong>
                    <a href="tel:+4977318383250" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">07731 8383250</a>
                  </div>
                </li>

                <li className="flex items-start gap-5">
                  <MessageCircle className="w-5 h-5 text-[#25D366] mt-1" />
                  <div>
                    <strong className="text-black font-medium block mb-1">WhatsApp</strong>
                    <a href="https://wa.me/4915203389999" target="_blank" rel="noreferrer" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">01520 3389999</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-5">
                  <Mail className="w-5 h-5 text-black/40 mt-1" />
                  <div>
                    <strong className="text-black font-medium block mb-1">E-Mail</strong>
                    <a href="mailto:info.chipsnailsandbeauty@gmail.com" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4 break-all">info.chipsnailsandbeauty@gmail.com</a>
                  </div>
                </li>
              </ul>

              <div className="mt-14">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block px-10 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 rounded-full"
                > 
                  Termin buchen
                </button>
              </div>
            </div>

            {/* --- GOOGLE MAPS BEREICH MIT DSGVO SCHUTZ --- */}
            <div>
              <h4 className="text-black text-xs uppercase tracking-[0.2em] mb-6 border-b border-black/10 pb-3 font-body font-medium">
                Anfahrt
              </h4>
              <div className="w-full h-[250px] md:h-[250px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-black/5 bg-black/5 relative group">
                {!hasFullConsent ? (
                  <div className="w-full h-full bg-[#F7F7F9] flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-xs text-black/60 mb-4 uppercase tracking-widest leading-relaxed">
                      Google Maps wurde durch deine Cookie-Einstellungen blockiert.
                    </p>
                    <button 
                      onClick={acceptAllAndLoad}
                      className="px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest rounded-full hover:bg-black/80 transition-colors"
                    >
                      Cookies akzeptieren & laden
                    </button>
                  </div>
                ) : (
                  <iframe 
                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=de&amp;q=August-Ruf%20Stra%C3%9Fe%2012A,%2078224%20Singen&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  ></iframe>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-black text-xs uppercase tracking-[0.2em] mb-6 border-b border-black/10 pb-3 font-body font-medium">
                Folge uns
              </h4>
              <div className="flex items-center gap-6">
                <a href="https://www.instagram.com/chipsnailssingen" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors hover:-translate-y-1 transform duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@chipsnailssingen" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors hover:-translate-y-1 transform duration-300">
                  <TikTokIcon className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/chipsnails" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors hover:-translate-y-1 transform duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto pt-8 border-t border-black/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-12 flex flex-col items-center"
          >
            <h2 className="font-serif italic text-3xl md:text-4xl text-black leading-tight mb-6">
              Häufig gestellte Fragen
            </h2>
            <div className="w-8 h-[1px] bg-black/10 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="border-b border-black/10 last:border-0"
                >
                  <button onClick={() => toggleFaq(idx)} className="w-full py-5 md:py-6 flex items-center justify-between text-left group">
                    <h3 className={`font-body text-sm md:text-base tracking-[0.05em] transition-colors duration-300 pr-8 ${isOpen ? "text-black font-medium" : "text-black/70 font-normal group-hover:text-black"}`}>
                      {faq.q}
                    </h3>
                    <div className={`flex-shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-black" : "text-black/40"}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        {isOpen ? <path d="M5 12h14"/> : <path d="M12 5v14M5 12h14"/>}
                      </svg>
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }} className="overflow-hidden"
                      >
                        <div className="pb-6 pt-1">
                          <p className="font-body text-black/60 text-sm md:text-base leading-relaxed font-light">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Kontakt;