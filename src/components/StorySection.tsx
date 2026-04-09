import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// --- MEDIEN IMPORTS (AUS DEM SRC/ASSETS ORDNER) ---
import renovierungVideoUrl from "../assets/ChipsNailsVideo.mp4";

import bild1 from "../assets/ChipsNailsStudio8.JPG.webp";
import bild2 from "../assets/ChipsNailsStudio5.JPG.webp"; 
import bild3 from "../assets/ChipsNailsStudio9.JPG.webp"; 
import bild4 from "../assets/ChipsNailsStudio10.JPG.webp"; 
import bild5 from "../assets/ChipsNailsStudio7.JPG.webp"; 
import bild6 from "../assets/ChipsNailsStudio3.JPG.webp"; 

// --- KLEINER HELFER FÜR DIE BILDER-SLIDER ---
const ImageSlider = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Slidet alle 3 Sekunden
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`relative group ${className}`}>
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img 
  key={index}
  src={src} 
  alt={`Studio Detail ${index + 1}`} 
  /* HIER IST DER MAGISCHE TRICK: Das erste Bild lädt sofort (eager), alle anderen verzögert (lazy) */
  loading={index === 0 ? "eager" : "lazy"}
  decoding="async" 
  className="w-full h-full object-cover shrink-0 [image-orientation:from-image]" 
/>
        ))}
      </div>
      {/* Instagram-Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-1.5 z-10">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`h-1.5 rounded-full transition-all duration-500 shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${
              currentIndex === index ? "w-4 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // --- DSGVO STATE & LOGIK ---
  const [hasFullConsent, setHasFullConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setHasFullConsent(consent === "all");

    const handleConsentChange = () => {
      setHasFullConsent(localStorage.getItem("cookieConsent") === "all");
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange);
    return () => window.removeEventListener("cookieConsentChanged", handleConsentChange);
  }, []);

  useEffect(() => {
    if (hasFullConsent) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [hasFullConsent]);

  const acceptAllAndLoad = () => {
    localStorage.setItem("cookieConsent", "all");
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  // --- ZUWEISUNG DER IMPORTIERTEN BILDER IN DIE SLIDER ---
  const slider1Images = [bild1, bild2, bild3]; // Linke Box
  const slider2Images = [bild4, bild5, bild6]; // Rechte Box (versetzt)

  return (
    <section id="studio" className="py-24 md:py-32 px-6 border-b border-black/5 bg-[#FDFCFB]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* --- DIE ÜBERSCHRIFT --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="text-black/50 text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Chip's Nails & Beauty
          </span>
          <h2 className="text-3xl md:text-5xl text-black leading-[1.3]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            Unser neues Studio
          </h2>
          <div className="w-12 h-[1px] bg-black/10 mt-8"></div>
        </motion.div>

        {/* Das Grid OHNE items-start, damit beide Spalten gleich hoch werden */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* --- LINKE SEITE --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-xl text-black mb-4 uppercase tracking-[0.1em]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
                Willkommen in deiner Auszeit
              </h3>
              <p className="text-black/70 text-sm md:text-base leading-[1.8] font-light mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Wir haben unser Studio vor Kurzem komplett frisch für dich renoviert! Es erwartet dich eine moderne, exklusive und entspannende Atmosphäre, in der du den Alltag hinter dir lassen kannst. Schau dir gerne unser Roomtour-Video an oder komm direkt persönlich bei uns in Singen vorbei.
              </p>

              {/* SCHÜLERRABATT INFOBOX */}
              <div className="bg-black/[0.03] border-l-2 border-black p-6 rounded-r-2xl">
                <span className="text-[10px] uppercase tracking-widest text-black/40 block mb-1">Special Offer</span>
                <p className="text-sm font-medium text-black uppercase tracking-tight">
                  5€ Rabatt für Schüler & Azubis bis 20 J.
                </p>
                <p className="text-[10px] text-black/40 mt-1 italic">
                  *Gilt nur für Neumodellage & Auffüllen gegen Vorlage eines gültigen Ausweises.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {/* Block 1: Kontakt & Adresse */}
              <div>
                <h4 className="text-black text-xs uppercase tracking-[0.2em] mb-6 border-b border-black/10 pb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                  Location & Kontakt
                </h4>
                <ul className="flex flex-col gap-5 text-sm text-black/70 font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <li>
                    <strong className="text-black font-medium">Adresse:</strong><br/>
                    August-Ruf Straße 12A<br/>
                    78224 Singen, Germany
                  </li>
                  <li>
                    <strong className="text-black font-medium">Telefon (Festnetz):</strong><br/>
                    <a href="tel:+4977318383250" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">07731 8383250</a>
                  </li>
                  <li>
                    <strong className="text-black font-medium">WhatsApp:</strong><br/>
                    <a href="https://wa.me/4915203389999" target="_blank" rel="noreferrer" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">01520 3389999</a>
                  </li>
                  <li>
                    <strong className="text-black font-medium">E-Mail:</strong><br/>
                    <a href="mailto:info.chipsnailsandbeauty@gmail.com" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4 break-all">info.chipsnailsandbeauty@gmail.com</a>
                  </li>
                  <li>
                    <strong className="text-black font-medium">Website:</strong><br/>
                    <span className="text-black/50">chipsnailssingen.de</span>
                  </li>
                </ul>
              </div>

              {/* Block 2: Öffnungszeiten */}
              <div>
                <h4 className="text-black text-xs uppercase tracking-[0.2em] mb-6 border-b border-black/10 pb-3" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
                  Öffnungszeiten
                </h4>
                <ul className="flex flex-col gap-3 text-sm text-black/70 font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  <li className="flex justify-between items-center"><span className="text-black font-medium">Mo - Fr</span> <span>10:00 - 19:00</span></li>
                  <li className="flex justify-between items-center"><span className="text-black font-medium">Samstag</span> <span>10:00 - 17:00</span></li>
                  <li className="flex justify-between items-center text-black/30 mt-2"><span>Sonntag</span> <span>Geschlossen</span></li>
                </ul>
              </div>
            </div>

            {/* --- MEDIEN COLLAGE: FOKUS RENOVIERUNG --- */}
            <div className="flex flex-col gap-4 md:gap-8 pt-8 border-t border-black/5 mt-4">
              
              {/* 1. Highlight: Roomtour Video */}
              <div className="w-[90%] md:w-full mx-auto rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group flex items-center justify-center bg-transparent">
                <video 
                  src={renovierungVideoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover blur-[20px] opacity-100 scale-110"
                />
                <video 
                  src={renovierungVideoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_35px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 2. Zwei Boxen, versetzt, jede Box ein 3er Slider */}
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <ImageSlider 
                  images={slider1Images} 
                  className="w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-black/5"
                />
                <ImageSlider 
                  images={slider2Images} 
                  className="w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-black/5 mt-8 md:mt-12"
                />
              </div>

            </div>
          </motion.div>

          {/* --- RECHTE SEITE: MAPS & TIKTOK --- */}
          {/* Die äußere Box streckt sich auf die volle Höhe. Das innere Div mit 'sticky' slidet darin hin und her. */}
          <div className="w-full h-full">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-8"
              >
                {/* TIKTOK BEREICH */}
                <div className="w-full bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 p-6 flex flex-col items-center justify-center min-h-[400px]">
                  <p className="text-black/50 text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Entdecke das Studio auf TikTok
                  </p>
                  
                  {!hasFullConsent ? (
                    <div className="bg-[#F7F7F9] w-full h-[300px] rounded-xl flex flex-col items-center justify-center p-6 text-center border border-black/5">
                      <p className="text-xs text-black/60 mb-4 uppercase tracking-widest leading-relaxed">
                        Dieser Inhalt ist blockiert, da du externe Cookies abgelehnt hast.
                      </p>
                      <button 
                        onClick={acceptAllAndLoad}
                        className="px-6 py-3 bg-black text-white text-[10px] uppercase tracking-widest rounded-full hover:bg-black/80 transition-colors"
                      >
                        Cookies akzeptieren & laden
                      </button>
                    </div>
                  ) : (
                    <blockquote 
                      className="tiktok-embed" 
                      cite="https://www.tiktok.com/@chipsnailssingen/video/7576031901450882326" 
                      data-video-id="7576031901450882326" 
                      style={{ maxWidth: "605px", minWidth: "325px" }} 
                    > 
                      <section> 
                        <a target="_blank" title="@chipsnailssingen" href="https://www.tiktok.com/@chipsnailssingen?refer=embed">@chipsnailssingen</a> 
                      </section> 
                    </blockquote>
                  )}
                </div>

                {/* GOOGLE MAPS BEREICH */}
                <div className="w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 bg-black/5 relative group">
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
                      src="https://maps.google.com/maps?width=100%&height=600&hl=de&q=August-Ruf%20Stra%C3%9Fe%2012A,%2078224%20Singen&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
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

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;