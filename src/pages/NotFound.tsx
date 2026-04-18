import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-[#FDFCFB] min-h-screen text-black font-body flex flex-col">
      <SEO 
        title="404 - Seite nicht gefunden | Chip's Nails & Beauty" 
        description="Die gesuchte Seite konnte leider nicht gefunden werden. Kehre zurück zur Startseite von Chip's Nails & Beauty in Singen."
      />
      
      <Navbar />
      
      {/* flex-grow sorgt dafür, dass der Footer immer unten bleibt, auch wenn der Inhalt kurz ist */}
      <section className="flex-grow flex items-center justify-center pt-40 pb-24 px-6">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-black/50 text-xs tracking-[0.3em] uppercase mb-6 block" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
          >
            Fehler 404
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl text-black leading-[1.3] mb-6" 
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Oops!
          </motion.h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "48px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-black/10 mx-auto mb-8"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/70 text-sm md:text-base leading-[1.8] font-light mb-12" 
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Die gesuchte Seite existiert leider nicht oder wurde verschoben.<br className="hidden md:block" />
            Lass uns dich wieder auf den richtigen Weg bringen.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/" 
              className="inline-block px-10 py-4 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-[#FDFCFB] transition-all duration-500"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Zurück zur Startseite
            </Link>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;