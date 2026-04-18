import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QuoteSection from "../components/QuoteSection";
import BookingSection from "../components/BookingSection";
import StorySection from "../components/StorySection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import InstagramFeed from "../components/InstagramFeed";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main 
      className="min-h-screen text-black"
      style={{ 
        backgroundColor: "#F7F7F9", /* Ein extrem edles, weiches Hellgrau */
        backgroundImage: "url('https://www.transparenttextures.com/patterns/white-marble.png')" /* Ein dezenter Marmor-Effekt */
      }}
    >
      <SEO 
        title="Nagelstudio Singen | Chip's Nails & Beauty" 
        description="Dein exklusives Nagelstudio in Singen (Hohentwiel). Wir bieten professionelles Nageldesign, Gelnägel, Wimpernverlängerung & Pediküre. Jetzt Termin vereinbaren!" 
      />
      
      <Navbar />
      
      {/* 1. Der große Einstiegsbanner */}
      <HeroSection />
      
      {/* 2. Dein persönlicher Spruch */}
      <QuoteSection />

      {/* --- NEU: SEO INTRO SECTION (Platz 1 Optimierung) --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-md border border-white/60 p-8 md:p-16 rounded-[2.5rem] shadow-sm text-center"
        >
          {/* Die für SEO zwingend erforderliche H1-Überschrift */}
          <h1 
            className="text-3xl md:text-5xl text-black leading-[1.3] mb-6" 
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Dein exklusives Nagelstudio in Singen
          </h1>
          
          {/* H2 für die Inhalts-Hierarchie */}
          <h2 
            className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/40 mb-10 font-semibold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Chip's Nails & Beauty – Premium Nageldesign, Lashes & Spa
          </h2>

          {/* Der Text mit > 100 Wörtern für das Google-Ranking */}
          <div 
            className="text-black/70 text-sm md:text-base leading-[1.9] font-light space-y-6 max-w-3xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <p>
              Herzlich willkommen bei Chip's Nails & Beauty, deinem professionellen <strong>Nagelstudio in Singen</strong> (Hohentwiel). Seit 2017 stehen wir für höchste Qualität, absolute Präzision und ästhetisches Design. Egal, ob du auf der Suche nach einer perfekten UV-Gel-Modellage, zeitlosen French Nails, elegantem Babyboomer oder aufwendiger, handgemalter Nail-Art bist – wir verwandeln deine Nägel in echte Meisterwerke.
            </p>
            <p>
              Als führendes <strong>Nagelstudio in Singen</strong> legen wir ganz besonderen Wert auf die Gesundheit deiner Naturnägel und eine extrem lange Haltbarkeit ohne lästige Liftings. Doch unsere Leidenschaft reicht noch weiter: Neben exklusivem Nageldesign bieten wir dir zudem professionelle Wimpernverlängerungen, Wimpernlifting sowie entspannende Spa-Pediküre an. 
            </p>
            <p>
              Gönne dir eine wohlverdiente Auszeit vom Alltag in unserem modern renovierten Studio. Wir freuen uns darauf, dich bald persönlich bei uns begrüßen zu dürfen und gemeinsam deinen perfekten Look zu kreieren.
            </p>
          </div>
        </motion.div>
      </section>
      {/* --- ENDE SEO SECTION --- */}
      
      {/* 3. Preise & Leistungen */}
      <BookingSection />
      
      <InstagramFeed />

      {/* 6. Was die Kunden sagen */}
      <TestimonialsSection />
      
      {/* 4. Deine Geschichte & Expertise */}
      <StorySection />
      
      {/* 5. Fokus auf die Hände & Bilder */}
      <AboutSection />
      
      {/* 7. Die häufigsten Fragen */}
      <FAQSection />
      
      <Footer />
    </main>
  );
};

export default Index;