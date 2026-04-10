import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Nutzt das Bild Chips.jpg aus deinem Assets-Ordner
import heroImg from "@/assets/Chips.jpg"; 

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setLoaded(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* --- BACKGROUND IMAGE CONTAINER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Chips Nails & Beauty" 
          /* scale-125 am Handy ermöglicht das Schieben nach oben */
          className={`w-full h-full object-cover grayscale-[15% text-white] transition-all duration-1000 ${
            isMobile ? 'scale-125' : 'scale-100'
          }`}
          style={{ 
            /* Handy: Bild extrem nach Rechts (50vw) und nach Oben (-15%) 
               Desktop: Leicht nach Rechts (25vw) und Zentriert
            */
            objectPosition: isMobile ? 'calc(50% + 50vw) -15%' : 'calc(50% + 25vw) center' 
          }} 
        />
        
        {/* --- DYNAMISCHER ÜBERGANG (GRADIENT) --- */}
        <div 
          className="absolute inset-y-0 left-0 bg-black z-10 transition-all duration-500" 
          style={{ width: isMobile ? '15%' : '40%' }}
        />
        
        <div 
          className="absolute inset-y-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10 transition-all duration-500" 
          style={{ 
            left: isMobile ? '15%' : '40%',
            width: isMobile ? '60%' : '40%' 
          }}
        />
        
        {/* Subtile Abdunklung für Kontrast am Handy */}
        {isMobile && <div className="absolute inset-0 bg-black/30 z-10" />}
      </div>

      {/* --- CONTENT AREA --- */}
      <div 
        className={`relative container mx-auto px-6 lg:px-8 z-20 transition-all duration-700 ${
          isMobile ? 'pt-54' : 'pt-24'
        }`}
      >
        <div className="max-w-2xl text-left">
          <div className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 font-medium mb-4 md:mb-6">
              Singen · Premium Nail Design
            </span>
          </div>

          {/* Headline: MASSIV am Handy (text-5xl) */}
          <h1 className={`font-serif text-5xl md:text-8xl font-light leading-[1.1] md:leading-[0.8] mb-8 text-white transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="tracking-tight drop-shadow-2xl">CHIP'S </span>
            <br />
            <span className="text-white/80 text-4xl md:text-6xl italic font-light">NAILS & BEAUTY</span>
          </h1>

          {/* Text: Größer am Handy (text-[15px]) */}
          <p className={`text-white/60 text-[14px] md:text-lg max-w-[160px] md:max-w-md leading-relaxed mb-5 transition-all duration-1000 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Exklusive Ästhetik trifft auf höchste Präzision. <br/>Dein Atelier in Singen.
          </p>

          {/* BUTTON CONTAINER: mt-20 schiebt die kleinen Buttons weit nach unten am Handy */}
          <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 transition-all duration-1000 delay-[600ms] ${isMobile ? 'mt-20' : 'mt-0'} ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Link
              to="/kontakt"
              className="px-5 py-2.5 md:px-8 md:py-4 bg-white text-black font-bold text-[8px] md:text-xs uppercase tracking-widest rounded-full hover:bg-neutral-200 text-center transition-all shadow-xl w-fit"
            >
              Termin buchen
            </Link>
            <Link
              to="/gallery"
              className="px-5 py-2.5 md:px-8 md:py-4 border border-white/20 text-white text-[8px] md:text-xs uppercase tracking-widest rounded-full hover:bg-white/5 hover:border-white/50 text-center transition-all w-fit"
            >
              Galerie entdecken
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee am Boden */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-3 md:py-4 bg-black/80 backdrop-blur-md overflow-hidden z-30">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/30 mx-8">
              CHIP'S NAILS & BEAUTY · NAILS · LASHES · SINGEN · PREMIUM DESIGN · ARTISTIC LOOKS ·
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}