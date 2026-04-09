import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const faqs = [
  {
    q: "Wie vereinbare ich am besten einen Termin?",
    a: "Du erreichst uns am besten und rund um die Uhr über unser neues Buchungssytem (Termin buchen), alternativ telefonisch unter unserer Nummer: +49 7731 8383250 oder ganz unkompliziert per Instagram. Lass uns gerne direkt wissen, welche Behandlung du dir wünschst, und wir finden den perfekten Moment für deine Auszeit."
  },
  {
    q: "Gibt es spezielle Angebote für Schüler und Auszubildende?",
    a: "Ja, absolut! 💶 Schüler und Auszubildende bis 20 Jahre erhalten bei uns dauerhaft 5€ Rabatt auf ihre Behandlung. Bitte bring einfach einen entsprechenden Ausweis zu deinem Termin mit."
  },
  {
    q: "Wie lange hält eine Modellage bei euch?",
    a: "Unsere Kundinnen schätzen besonders die extrem lange Haltbarkeit ohne Liftings. Eine professionelle UV-Gel-Modellage aus unserem Studio hält in der Regel 3 bis 4 Wochen, abhängig vom natürlichen Wachstum deiner Nägel und deiner Beanspruchung im Alltag."
  },
  {
    q: "Setzt ihr auch aufwendige Nail-Art-Wünsche um?",
    a: "Sehr gerne! Von minimalistischer Eleganz bis hin zu detailreicher, handgemalter Nail-Art kreieren wir deinen individuellen Look. Bring am besten ein Foto deiner Inspiration mit, dann zaubern wir das perfekt auf deine Nägel!"
  },
  {
    q: "Füllt ihr auch Fremdarbeiten aus anderen Studios auf?",
    a: "Ja! Wir schauen uns den Zustand deiner aktuellen Modellage vor Ort an und entscheiden dann gemeinsam, ob ein einfaches Auffüllen möglich ist oder ob eine Neumodellage für ein gesundes, perfektes Ergebnis sinnvoller ist."
  },
  {
    q: "Was passiert, wenn ich meinen Termin absagen muss?",
    a: "Wir wissen, dass immer mal etwas dazwischenkommen kann. Bitte gib uns einfach rechtzeitig (idealerweise 24 Stunden vorher) telefonisch oder per Instagran unter +49 7731 8383250 Bescheid, damit wir den Termin an jemand anderen vergeben können."
  }
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 // GEÄNDERT: null statt 0, damit beim Laden alles zu ist
const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-12 md:py-16 px-6 bg-[#FDFCFB]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12 flex flex-col items-center"
        >
          <span className="text-black/50 text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>Gut zu wissen</span>
          <h2 className="text-3xl md:text-5xl text-black leading-[1.3]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Fragen & Antworten</h2>
          <div className="w-12 h-[1px] bg-black/10 mt-6"></div>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-black/10 last:border-0">
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full py-6 flex items-center justify-between text-left group">
                <h3 className={`text-sm md:text-base tracking-[0.05em] transition-colors ${openIndex === idx ? "text-black font-medium" : "text-black/70 group-hover:text-black"}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {faq.q}
                </h3>
                <div className={`transition-transform duration-500 ${openIndex === idx ? "rotate-180" : ""}`}>
                  {openIndex === idx ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14"/></svg> : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14"/></svg>}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden">
                    <div className="pb-6 pt-1">
                      <p className="text-black/60 text-sm md:text-base leading-relaxed font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;