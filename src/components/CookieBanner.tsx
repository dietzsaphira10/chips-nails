import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Funktion zum Prüfen des Consent-Status
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent");
      // Wenn noch nichts gesetzt wurde, zeigen wir es an
      if (!consent) {
        setIsVisible(true);
      }
    };

    // Beim Laden prüfen
    checkConsent();

    // Event-Listener hinzufügen, um das Banner von überall aus zu öffnen
    const handleOpenSettings = () => setIsVisible(true);
    window.addEventListener("open-cookie-settings", handleOpenSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
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
          initial={{ y: 40, opacity: 0, scale: 0.95 }} 
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 40, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 md:bottom-6 left-4 md:left-6 z-[99999] bg-white/85 backdrop-blur-2xl border border-black/5 p-5 md:p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col gap-5 w-[calc(100%-2rem)] md:w-[360px]"
        >
          <div className="text-left">
            <h3 className="text-black uppercase text-[11px] md:text-xs tracking-[0.2em] mb-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
              Privatsphäre & Cookies
            </h3>
            <p className="text-black/60 text-[10px] md:text-[11px] leading-[1.7]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
              Wir nutzen Cookies sowie Dienste wie Google Maps und TikTok, um dir das bestmögliche Erlebnis zu bieten. Details in unserer <Link to="/datenschutz" className="text-black font-medium underline decoration-black/20 underline-offset-4 hover:decoration-black transition-all">Datenschutzerklärung</Link>.
            </p>
          </div>
          
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