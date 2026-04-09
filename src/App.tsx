import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap } from "lucide-react";
import NotFound from "./pages/NotFound";

// 1. Standard-Seiten
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum"; 
import Kontakt from "./pages/Kontakt";
import Angebot from "./pages/Angebot"; 

// Journal & Geheime Admin-Seite
import Journal from "./pages/Journal.tsx";
import AdminJournal from "./pages/AdminJournal";

// 2. Behandlungs-Seiten
import Nagelbehandlung from "./pages/Nagelbehandlung"; 
import Wimpernbehandlung from "./pages/Wimpernbehandlung";
import Fussbehandlung from "./pages/Fussbehandlung";

// 3. Preislisten-Seiten
import Nageldesign from "./pages/Nageldesign"; 
import Pedikuere from "./pages/Pedikuere";     
import Wimpern from "./pages/Wimpern";  

import { HelmetProvider } from 'react-helmet-async';

// --- NEU: IMPORT DES COOKIE BANNERS ---
// (Passe den Pfad an, falls die Datei woanders liegt!)
import CookieBanner from "./components/CookieBanner";

// --- DAS DEZENTE SCHÜLERRABATT POPUP (GLASS OPTIK) ---
const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ZUM TESTEN: Erscheint jetzt IMMER nach 3 Sekunden (Speicher-Check deaktiviert)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-80 z-[9999]"
        >
          {/* GLASS OPTIK CONTAINER */}
          <div className="bg-white/30 backdrop-blur-2xl border border-white/50 p-5 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] relative">
            <button 
              onClick={closePopup} 
              className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
            >
              <X size={16} />
            </button>
            
            <div className="flex items-center gap-4">
              {/* Icon Container im Frost-Look */}
              <div className="w-10 h-10 rounded-full bg-white/50 border border-white/60 flex items-center justify-center text-black shrink-0 shadow-sm">
                <GraduationCap size={20} />
              </div>
             
              <div className="pr-4">
                <h4 className="text-[11px] font-black text-black uppercase tracking-widest drop-shadow-sm">
                  5€ Schüler- & Azubi-Rabatt
                </h4>
                <p className="text-[10px] text-black/70 mt-1 leading-relaxed font-medium">
                  Bis 20 Jahre. Gilt nur für Neumodellage & Auffüllen gegen Vorlage eines Ausweises.
                </p>
              </div>
            </div>
            
            <button 
              onClick={closePopup}
              className="mt-5 w-full py-2.5 bg-white/60 backdrop-blur-md border border-white/50 text-black text-[9px] font-black uppercase tracking-widest rounded-xl transition-all hover:bg-white/90 shadow-sm"
            >
              Okay, danke!
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ScrollToAnchor = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" 
        });
      });
    }
  }, [pathname, hash]);

  return null;
};

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    document.title = "Chip's Nails & Beauty | Singen";
  }, []);
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToAnchor />
            
            {/* Popups und Banner, die auf JEDER Seite sichtbar sein sollen */}
            <DiscountPopup /> 
            <CookieBanner /> {/* <--- HIER IST DEIN COOKIE BANNER! */}

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/adminjournal" element={<AdminJournal />} />
              <Route path="/angebot" element={<Angebot />} />
              <Route path="/behandlung-nagel" element={<Nagelbehandlung />} />
              <Route path="/behandlung-wimpern" element={<Wimpernbehandlung />} />
              <Route path="/behandlung-fuss" element={<Fussbehandlung />} />
              <Route path="/nageldesign" element={<Nageldesign />} />
              <Route path="/pedikuere" element={<Pedikuere />} />
              <Route path="/wimpern" element={<Wimpern />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;