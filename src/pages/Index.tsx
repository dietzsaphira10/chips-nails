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
      title="Chip's Nails & Beauty | Dein Nagelstudio in Singen" 
      description="Exklusives Nageldesign, professionelle Wimpernverlängerung und Spa-Pediküre in Singen (Hohentwiel). Jetzt Termin bei Chip's Nails buchen!" 
    />
      <Navbar />
      
      {/* 1. Der große Einstiegsbanner */}
      <HeroSection />
      
      {/* 2. Dein persönlicher Spruch */}
      <QuoteSection />
      
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