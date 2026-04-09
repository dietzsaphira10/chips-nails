import { Instagram, Facebook, MessageCircle } from "lucide-react"; // MessageCircle für WhatsApp importiert
import { Link } from "react-router-dom";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 py-16 px-6 md:px-12 text-black mt-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Spalte 1: LOGO & Name */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/assets/gallery/Logo.Chips.jpg" 
            alt="Logo" 
            className="w-17 h-16 object-contain mb-4"
            style={{ 
              filter: "drop-shadow(0.5px 0.5px 0px black) contrast(1.1)" 
            }} 
          />
          
          <p className="uppercase text-xs tracking-[0.2em] font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Chip's Nails & Beauty
          </p>
          <p className="uppercase text-[10px] tracking-[0.1em] text-black/50 mt-2" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, lineHeight: 1.6 }}>
            Dein exklusives Studio<br />in Singen (Hohentwiel)
          </p>
        </div>

        {/* Spalte 2: Kontakt & Business */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="uppercase text-xs tracking-[0.2em] mb-5 font-semibold text-black/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>Business & Kontakt</h3>
          
          <a href="mailto:info.chipsnailsandbeauty@gmail.com" className="uppercase text-[10px] tracking-[0.1em] text-black/60 hover:text-black mb-3 transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
            info.chipsnailsandbeauty@gmail.com
          </a>
          
          <Link 
            to="/kontakt" 
            onClick={() => window.scrollTo(0, 0)}
            className="uppercase text-[10px] tracking-[0.1em] text-black/60 hover:text-black mb-3 transition-colors" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
          >
            Nachricht senden
          </Link>
        </div>

        {/* Spalte 3: Socials & Rechtliches */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="uppercase text-xs tracking-[0.2em] mb-5 font-semibold text-black/80" style={{ fontFamily: "'Montserrat', sans-serif" }}>Socials & Info</h3>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/chipsnailssingen" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@chipsnailssingen" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/chipsnails" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              {/* WhatsApp Icon hinzugefügt */}
              <a href="https://wa.me/4915203389999" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to="/impressum" onClick={() => window.scrollTo(0, 0)} className="uppercase text-[9px] tracking-[0.1em] text-black/40 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>Impressum</Link>
            <Link to="/datenschutz" onClick={() => window.scrollTo(0, 0)} className="uppercase text-[9px] tracking-[0.1em] text-black/40 hover:text-black transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>Datenschutz</Link>
          </div>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-black/5 text-center">
        <p className="uppercase text-[9px] tracking-[0.2em] text-black/30" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          © {new Date().getFullYear()} Chip's Nails & Beauty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;