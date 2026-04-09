import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Impressum | Chip's Nails & Beauty";
  }, []);

  return (
    <main className="bg-[#FDFCFB] min-h-screen text-black">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto font-body">
        <div className="text-center mb-16">
          <span className="text-black/50 text-xs tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>
            Rechtliches
          </span>
          <h1 className="text-3xl md:text-5xl text-black leading-[1.3] mb-8" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            Impressum
          </h1>
          <div className="w-12 h-[1px] bg-black/10 mx-auto"></div>
        </div>

        <div className="space-y-10 text-black/70 text-sm md:text-base leading-[1.8] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          
          <div>
            <h2 className="text-black text-lg uppercase tracking-[0.1em] mb-4 font-medium">Angaben gemäß § 5 TMG</h2>
            <p>
              Anh Tu Vu<br />
              Chip's Nails & Beauty<br />
              August-Ruf-Straße 12A<br />
              78224 Singen
            </p>
          </div>

          <div>
            <h2 className="text-black text-lg uppercase tracking-[0.1em] mb-4 font-medium mt-8">Kontakt</h2>
            <p>
              Telefon: 07731 8383250<br />
              E-Mail: <a href="mailto:info.chipsnailsandbeauty@gmail.com" className="hover:text-black transition-colors underline decoration-black/20 underline-offset-4">info.chipsnailsandbeauty@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-black text-lg uppercase tracking-[0.1em] mb-4 font-medium mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>Berufsbezeichnung: Nageldesignerin / Kosmetikerin</p>
          </div>

          <div>
            <h2 className="text-black text-lg uppercase tracking-[0.1em] mb-4 font-medium mt-8">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <br/>
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors decoration-black/20 underline-offset-4">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-black text-lg uppercase tracking-[0.1em] mb-4 font-medium mt-8">Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="pt-10 border-t border-black/10 text-xs text-black/50">
            Quelle: <a href="https://www.e-recht24.de/impressum-generator.html" target="_blank" rel="noreferrer" className="underline hover:text-black transition-colors decoration-black/20 underline-offset-4">eRecht24 Impressum-Generator</a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impressum;