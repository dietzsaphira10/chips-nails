import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ZUM TESTEN: Wenn der Banner nicht kommt, entkommentiere die nächste Zeile kurz!
    // localStorage.removeItem("cookieConsent");

    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    window.dispatchEvent(new Event("cookieConsentChanged")); 
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    window.dispatchEvent(new Event("cookieConsentChanged")); 
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    window.dispatchEvent(new Event("cookieConsentChanged")); 
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Animation: Kommt jetzt sanft von UNTEN und skaliert leicht hoch (Plopp-Effekt)
          initial={{ y: 40, opacity: 0, scale: 0.95 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          // POSITION: Unten Links (bottom-4 left-4), schmale Karte (w-[360px])
          className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-[99999] bg-white/85 backdrop-blur-2xl border border-black/5 p-5 md:p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col gap-5 w-[calc(100%-2rem)] md:w-[360px]"
        >
          {/* Text-Bereich: Jetzt linksbündig für die kompakte Karte */}
          <div className="text-left">
            <h3 className="text-black uppercase text-[11px] md:text-xs tracking-[0.2em] mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
              Privatsphäre & Cookies
            </h3>
            <p className="text-black/60 text-[10px] md:text-[11px] leading-[1.7]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Wir nutzen Cookies sowie Dienste wie Google Maps und TikTok, um dir das bestmögliche Erlebnis zu bieten. Details in unserer <Link to="/datenschutz" className="text-black font-medium underline decoration-black/20 underline-offset-4 hover:decoration-black transition-all">Datenschutzerklärung</Link>.
            </p>
          </div>
          
          {/* Button-Bereich: Untereinander gestapelt für perfekte Mobile- & Desktop-Nutzung */}
          <div className="flex flex-col gap-2 w-full mt-1">
            
            <button
              onClick={acceptAll}
              className="w-full py-3 bg-black text-white text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-black/80 transition-all shadow-md rounded-xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Alle annehmen
            </button>

            <button
              onClick={acceptEssential}
              className="w-full py-3 border border-black/10 bg-white/50 text-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] hover:bg-black/5 transition-all rounded-xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Nur Essenzielle
            </button>

            <button
              onClick={rejectAll}
              className="w-full pt-2 pb-1 text-black/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] hover:text-black transition-colors rounded-xl mt-1"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
            >
              Alle ablehnen
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;