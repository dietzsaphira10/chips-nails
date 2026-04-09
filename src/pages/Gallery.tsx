import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const randomDates = [
  "27. Feb 2026", "01. März 2026", "03. März 2026", "05. März 2026",
  "07. März 2026", "10. März 2026", "14. März 2026", "22. Feb 2026",
  "18. Feb 2026", "28. Jan 2026", "13. Jan 2026", "24. Dez 2025",
  "10. Dez 2025", "09. Dez 2025", "03. Dez 2025", "19. Nov 2025",
  "16. Nov 2025", "09. Nov 2025", "28. Okt 2025", "22. Okt 2025"
];

const headerBg = "/assets/gallery/Kontaktbanner.jpg";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Lookbook | Chip's Nails & Beauty";
  }, []);

  const galleryImages = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    src: `/assets/gallery/${i + 1}.jpg`,
    date: randomDates[i],
    isPlaceholder: false
  }));

  const finalItems = [...galleryImages, { id: 'soon', src: '', date: '', isPlaceholder: true }];
  const totalPages = Math.ceil(finalItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = finalItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 400, behavior: "smooth" }); 
    setTimeout(() => setCurrentPage(page), 100);
  };

  return (
    <main className="bg-white min-h-screen text-black font-body relative">
      <Navbar />

      {/* --- LIGHTBOX POP-UP --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg} 
              alt="Meisterwerk Großansicht"
              className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <section className="relative h-[45vh] min-h-[350px] mt-[80px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#141414]">
          <div className="absolute inset-0 opacity-40 blur-2xl" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center px-4 flex flex-col items-center w-full font-montserrat">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white mb-4 drop-shadow-md text-center uppercase tracking-[0.2em] text-[clamp(2rem,5vw,4rem)] font-thin">
            Lookbook
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/80 drop-shadow-sm text-center uppercase tracking-[0.4em] text-[clamp(0.7rem,1.5vw,1rem)] font-light">
            Inspiration & unsere Meisterwerke
          </motion.p>
        </div>
      </section>

      {/* --- GALERIE GRID --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item, idx) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, scale: 0.95 }} 
                transition={{ duration: 0.5, delay: idx * 0.05 }} 
                className="flex flex-col group cursor-pointer"
                onClick={() => !item.isPlaceholder && setSelectedImg(item.src)}
              >
                {item.isPlaceholder ? (
                  <div className="w-full aspect-[3/4] bg-[#F7F7F9] border border-black/5 flex items-center justify-center p-8 text-center transition-colors duration-500 hover:bg-black/5">
                    <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-black/30">Coming<br/>Soon</span>
                  </div>
                ) : (
                  <>
                    <div className="w-full aspect-[3/4] overflow-hidden bg-black/5 relative shadow-sm">
                      {/* Zoom-Effekt beim Hover über die "group" */}
                      <img 
                        src={item.src} 
                        alt={`Look ${item.id}`} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                      />
                      {/* Overlay beim Hover für mehr Fokus */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                    <div className="mt-5 flex justify-between items-end border-b border-black/5 pb-3">
                      <span className="font-body text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/50">{item.date}</span>
                      <span className="font-body text-[10px] md:text-xs text-black/30 tracking-widest uppercase">No. {typeof item.id === 'number' && item.id < 10 ? `0${item.id}` : item.id}</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- PAGINIERUNG --- */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center items-center gap-4">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button 
                  key={pageNum} 
                  onClick={() => handlePageChange(pageNum)} 
                  className={`w-12 h-12 flex items-center justify-center text-[10px] tracking-widest transition-all duration-300 ${currentPage === pageNum ? "bg-black text-white" : "bg-transparent text-black/40 border border-black/10 hover:border-black hover:text-black"}`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
        )}
      </section>
      
      <Footer />
    </main>
  );
};

export default Gallery;