import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileBehandlungenOpen, setMobileBehandlungenOpen] = useState(false);
  const [mobilePreiseOpen, setMobilePreiseOpen] = useState(false);
  const [mobileKontaktOpen, setMobileKontaktOpen] = useState(false);
  const [mobilePhoneOpen, setMobilePhoneOpen] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileBehandlungenOpen(false);
    setMobilePreiseOpen(false);
    setMobileKontaktOpen(false);
    setMobilePhoneOpen(false);
  }, [location]);

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || menuOpen
          ? "bg-white py-4 shadow-sm border-b border-black/5" 
          : "bg-white/60 backdrop-blur-md py-6 border-transparent" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO BEREICH */}
        <Link 
          to="/" 
          onClick={scrollToTop} 
          className="z-50 relative hover:opacity-70 transition-opacity flex items-center gap-4"
        >
          <img 
            src="/assets/gallery/Logo.Chips.png" 
            alt="Logo" 
            className="w-12 h-11 md:w-16 md:h-16 object-contain" 
          />
          <div className="text-black flex flex-col items-start border-l border-black/20 pl-4 tracking-[0.2em] font-serif">
            <span className="text-lg md:text-xl font-medium leading-tight">Chip's</span>
            <span className="uppercase text-[9px] md:text-[11px] text-black/60 tracking-[0.3em] font-sans">Nails & Beauty</span>
          </div>
        </Link>

        {/* --- DESKTOP MENÜ --- */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center font-montserrat">
          <Link to="/" onClick={scrollToTop} className="text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">
            Home
          </Link>

          {/* Behandlungen Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors py-2">
              Behandlungen <ChevronDown size={14} className="opacity-50" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-white border border-gray-100 shadow-xl py-6 px-8 flex flex-col gap-5 min-w-[240px] text-center rounded-xl">
                <Link to="/behandlung-nagel" className="text-[10px] uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Nagelästhetik</Link>
                <Link to="/behandlung-fuss" className="text-[10px] uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Pediküre & Spa</Link>
                <Link to="/behandlung-wimpern" className="text-[10px] uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Lashes & Brows</Link>
              </div>
            </div>
          </div>

          {/* Preisliste Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors py-2">
              Preisliste <ChevronDown size={14} className="opacity-50" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-white border border-gray-100 shadow-xl py-6 px-8 flex flex-col gap-5 min-w-[240px] text-center rounded-xl">
                <Link to="/nageldesign" className="text-[10px] uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Hände & Extras</Link>
                <Link to="/pedikuere" className="text-[10px] uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Füße & Pflege</Link>
                <Link to="/wimpern" className="text-[10px] uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Wimpern & Brows</Link>
              </div>
            </div>
          </div>

          <Link to="/gallery" className="text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Galerie</Link>
          
          <Link to="/kontakt" className="text-[10px] lg:text-xs font-semibold uppercase tracking-[0.2em] text-black/70 hover:text-black transition-colors">Kontakt</Link>
        </div>

        {/* --- SOCIALS & PHONE DROPDOWN (DESKTOP) --- */}
        <div className="hidden md:flex items-center gap-6">
          {/* Telefon Dropdown */}
          <div className="relative group">
            <button className="text-black/50 hover:text-black transition-colors p-2">
              <Phone className="w-5 h-5" />
            </button>
            <div className="absolute top-full right-0 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              <div className="bg-white border border-gray-100 shadow-2xl py-4 px-6 flex flex-col gap-4 min-w-[200px] rounded-2xl">
                <a href="tel:+4977318383250" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-black/70 hover:text-black transition-colors group/link">
                  <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-white transition-colors">
                    <Phone size={14} />
                  </div>
                  Festnetz
                </a>
                <a href="https://wa.me/4915203389999" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-black/70 hover:text-black transition-colors group/link">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover/link:bg-[#25D366] group-hover/link:text-white transition-colors">
                    <MessageCircle size={14} />
                  </div>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <a href="https://www.tiktok.com/@chipsnailssingen" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/chipsnailssingen" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/chipsnails" target="_blank" rel="noreferrer" className="text-black/50 hover:text-black transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center z-50 relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black p-2 -mr-2">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENÜ --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-2xl flex flex-col items-center py-10 md:hidden z-40 overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6 pb-12 font-montserrat tracking-[0.2em] text-sm text-black/80">
              <Link to="/" onClick={scrollToTop}>Home</Link>
              
              <div className="flex flex-col items-center w-full">
                <button onClick={() => setMobileBehandlungenOpen(!mobileBehandlungenOpen)} className="flex items-center gap-2">
                  Behandlungen <ChevronDown size={16} className={mobileBehandlungenOpen ? "rotate-180" : ""} />
                </button>
                {mobileBehandlungenOpen && (
                  <div className="flex flex-col items-center gap-6 mt-6 w-full bg-black/5 py-6 rounded-lg text-xs tracking-[0.2em] text-black/60">
                    <Link to="/behandlung-nagel">Nagelästhetik</Link>
                    <Link to="/behandlung-fuss">Pediküre & Spa</Link>
                    <Link to="/behandlung-wimpern">Lashes & Brows</Link>
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center w-full">
                <button onClick={() => setMobilePreiseOpen(!mobilePreiseOpen)} className="flex items-center gap-2">
                  Preisliste <ChevronDown size={16} className={mobilePreiseOpen ? "rotate-180" : ""} />
                </button>
                {mobilePreiseOpen && (
                  <div className="flex flex-col items-center gap-6 mt-6 w-full bg-black/5 py-6 rounded-lg text-[10px] tracking-[0.2em] text-black/60 text-center px-4">
                    <Link to="/nageldesign">Hände & Extras</Link>
                    <Link to="/pedikuere">Füße & Pflege</Link>
                    <Link to="/wimpern">Wimpern & Brows</Link>
                  </div>
                )}
              </div>

              <Link to="/gallery">Galerie</Link>
              <Link to="/kontakt">Kontakt</Link>

              {/* Mobile Phone Choice */}
              <div className="flex flex-col items-center w-full">
                <button onClick={() => setMobilePhoneOpen(!mobilePhoneOpen)} className="flex items-center gap-2 font-bold text-black">
                  <Phone size={16} /> Termin buchen <ChevronDown size={16} className={mobilePhoneOpen ? "rotate-180" : ""} />
                </button>
                {mobilePhoneOpen && (
                  <div className="flex flex-col items-center gap-6 mt-6 w-full bg-black/5 py-6 rounded-lg text-[10px] tracking-[0.2em] text-black/60 text-center">
                    <a href="tel:+4977318383250" className="flex items-center gap-2"><Phone size={14} /> Festnetz anrufen</a>
                    <a href="https://wa.me/4915203389999" className="flex items-center gap-2 text-[#25D366] font-bold"><MessageCircle size={14} /> WhatsApp schreiben</a>
                  </div>
                )}
              </div>

              {/* Mobile Social Icons Bar */}
              <div className="flex gap-8 mt-4 text-black/50 items-center">
                <a href="https://www.tiktok.com/@chipsnailssingen" target="_blank" rel="noreferrer">
                  <TikTokIcon className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/chipsnailssingen" target="_blank" rel="noreferrer">
                  <Instagram size={24} />
                </a>
                <a href="https://www.facebook.com/chipsnails" target="_blank" rel="noreferrer">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;