import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll-Logik für die Pfeile
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Hier sind deine 10 Bewertungen. Du kannst die Texte bei "text" und die Namen bei "author" einfach austauschen!
  const testimonials = [
    {
      text: "Erstklassigen Service, professionelle Nagelpflege und eine freundliche Atmosphäre. Die Nägel sind immer perfekt gearbeitet und halten lange. Chip ist auch super nette Chefin. Komme gerne wieder 😊 Absolut empfehlenswert!",
      author: "Kundin über Google",
      treatment: "Pedicure, Manicure, Acrylic nails, Nail designs"
    },
    {
      text: "Perfekte Nägel ganz nach Wunsch in einer Stunde. Leckeren Kaffee gab es ☕ auch. Der gestrige Besuch war wieder richtig prima.Meine Nägel - wie gewünscht - schlicht. Dankeschön ❣️ Nach Monaten immer noch begeistert und freue mich stets über die schönen Nägel.",
      author: "Kundin über Google",
      treatment: "Nail design"
    },
    {
      text: "Gehe immer mal wieder schon sehr lange zu Chip, bin immer sehr zufrieden und ich gehe mit wunderschönen Nägel aus dem Salon. Kurzfristige Termine werden so gut wie immer ermöglicht, was mir als Mutter natürlich sehr gelegen kommt. Vielen Dank, dass ich schon jahrelange Kundin sein darf :)",
      author: "Kundin über Google",
      treatment: "Sculpted nails, Acrylic nails, Nail designs, Pedicure, Gel manicures"
    },
    {
      text: "Ich bin immer wieder zufrieden wenn ich da bin . Das ist das erste Studio der wirklich meine nägel so macht wie ich sie gerne hätte. Egal ob Matt. Glitzer oder schlichte Nägel . Man wird immer toll empfangen. Einfach genau so weiter machen .... ein tolles Studio <3",
      author: "Kundin über Google",
      treatment: "Nail design"
    },
    {
      text: "Seit gut 2 Jahren Kundin bei Chip & ihrem Team. Ich bin jedes mal zufrieden. Reichliche Auswahl an Farben, wenn ich mit einem 'Wunsch/einer Vorstellung' komme wie ich die Nägel gerne hätte wird das zur vollen zufriedenheit umgesetzt. Nägel halten, sonst hatte ich immer das Problem, dass sie sich lösen oder brechen, bei Chip gar nicht. Schnelle Terminfindung.",
      author: "Kundin über Google",
      treatment: "Nail design"
    },
    {
      text: "Schönes Nagelstudio sehr professionell gearbeitet freundlich und spontane Termine chip arbeitet  sehr gut bin mit ihr sehr zufrieden kann sie nur weiter empfehlen.",
      author: "Kundin über Facebook",
      treatment: "Nail design"
    },
    {
      text: "Die schönsten Nägel bekommt man bei Chip‘s. Ich gehe seit fast zwei Jahren hier her und bin immer glücklich und zufrieden! 🧡",
      author: "Kundin über Facebook",
      treatment: "Nail design"
    },
    {
      text: "Super Freundliches Team, schnelle Termine oder man kann auch kurzfristig kommen. Ich bin sehr zufrieden 🥰 Sie gehen auf jeden Wunsch ein und erfüllen ihn auch. Geben super Tipps 😁",
      author: "Kundin über Facebook",
      treatment: "Nail design"
    },
    {
      text: "Sehr liebes Personal es wird immer ordentlich gearbeitet und ich war bis jetzt immer zufrieden sie gehen total auf die Wünsche der Kunden ein. Kann ich wirklich nur weiterempfehlen",
      author: "Kundin über Google",
      treatment: "Manicure"
    },
    {
      text: "Einfach die 'Beste' Nagelkünstlerin! Ich bin immer super zufrieden! Bekomme auch kurzfristig einen Termin.",
      author: "Kundin über Google",
      treatment: "Acrylic nails"
    }
  ];

  return (
    // Hier haben wir das 'py-24' (riesiger Abstand) zu 'pt-8 pb-24' geändert!
      <section id="bewertungen" className="pt-8 pb-24 md:pb-32 px-6 bg-gradient-to-b from-[#FDFCFB] via-[#FCF7F4] to-[#F2EAE4]" ref={ref}>
      <style>
        {`
         
          /* Versteckt den hässlichen Scrollbalken, behält aber die Funktion */
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto">
        
        {/* --- DIE ÜBERSCHRIFT (Der nahtlose Übergang von Insta zu Bewertungen) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-black/20"></div>
            <span 
              className="text-black/50 text-sm tracking-[0.4em] uppercase" 
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
            >
              Community & Love
            </span>
            <div className="w-8 md:w-12 h-[1px] bg-black/20"></div>
          </div>

          <h2 
            className="text-black uppercase leading-[1.2] mb-8" 
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 100, fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Was unsere Community <br />
            <span style={{ fontWeight: 400 }}>teilt</span>
          </h2>
          <div className="w-20 md:w-32 h-[1px] bg-black/20"></div>
        </motion.div>

        {/* --- DER SLIDER-BEREICH --- */}
        {/* --- DER SLIDER-BEREICH --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          
          {/* Linker Pfeil (Desktop) */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-black/5 flex items-center justify-center text-black/40 hover:text-black hover:scale-110 transition-all duration-300 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Der Scroll-Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth py-8 px-4"
          >
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="flex-none w-[85%] md:w-[calc(33.333%-1rem)] lg:w-[calc(33.333%-1rem)] snap-center"
              >
                <div className="h-full bg-white p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col transition-transform duration-500 hover:-translate-y-2">
                  
                  {/* Edle Gold-Sterne */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Zitat-Text */}
                  <p 
                    className="text-black/70 text-sm md:text-base leading-[1.8] flex-grow mb-8"
                    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Autor & Treatment */}
                  <div className="pt-6 border-t border-black/5 mt-auto">
                    <p 
                      className="text-black text-xs md:text-sm uppercase tracking-[0.1em] mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}
                    >
                      {testimonial.author}
                    </p>
                    <p 
                      className="text-black/40 text-[10px] md:text-xs uppercase tracking-[0.2em]"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
                    >
                      {testimonial.treatment}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Rechter Pfeil (Desktop) */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-black/5 flex items-center justify-center text-black/40 hover:text-black hover:scale-110 transition-all duration-300 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </motion.div>

        {/* Info für Mobile (Wischen) */}
        <p className="text-center text-black/30 text-[10px] uppercase tracking-[0.2em] mt-8 md:hidden">
          Wischen für mehr
        </p>

       {/* --- GOOGLE BEWERTUNG BUTTON --- */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-16 md:mt-20 flex justify-center"
>
  <a
    // Dieser Link führt jetzt direkt zum Schreib-Modus auf Google
    href="https://search.google.com/local/writereview?placeid=ChIJTSQiptpimkcRFrnfQWc7Il8"
    target="_blank"
    rel="noopener noreferrer"
    className="group px-8 md:px-10 py-4 md:py-5 bg-black text-white text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-black/80 transition-all duration-500 shadow-xl flex items-center gap-4"
    style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
  >
    Auf Google bewerten
    <svg 
      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
</motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;