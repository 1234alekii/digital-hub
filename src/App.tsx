import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divisions from "./components/Divisions";
import About from "./components/About";
import Founder from "./components/Founder";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-syndicate-blue text-slate-200 selection:bg-syndicate-gold/30 selection:text-syndicate-gold">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" />
        ) : (
          <main key="content" className="relative">
            <Navbar />
            <Hero />
            <About />
            <Divisions />
            <Services />
            <Testimonials />
            <FAQ />
            <Founder />
            <Footer />

            {/* Floating Back to Top */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full bg-syndicate-gold text-syndicate-blue flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <ArrowUp size={24} />
                </motion.button>
              )}
            </AnimatePresence>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
