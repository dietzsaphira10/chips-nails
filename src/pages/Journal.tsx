import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Journal = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Laden der Posts aus LocalStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("journal-posts") || "[]");
    setPosts(savedPosts);
  }, []);

  // Paginierung Logik
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <main className="bg-white min-h-screen font-montserrat">
      <Navbar />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-light tracking-[0.3em] uppercase text-center mb-20">Journal</h1>

        {posts.length === 0 ? (
          <p className="text-center text-black/30 uppercase tracking-widest py-20">Noch keine Einträge vorhanden.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {currentPosts.map((post, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex flex-col"
              >
                <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm">
                  <img src={post.image} alt="Journal" className="w-full h-full object-cover" />
                </div>
                <p className="mt-4 text-[10px] tracking-[0.2em] text-black/40 uppercase font-medium">
                  {post.date}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Seitenauswahl */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-16">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className={`w-10 h-10 rounded-full border transition-all ${
                  currentPage === i + 1 
                  ? 'bg-black text-white border-black' 
                  : 'border-black/10 text-black/50 hover:border-black'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Journal;