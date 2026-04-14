import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Divisions", href: "#divisions" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Founder", href: "#founder" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-syndicate-blue/80 backdrop-blur-md border-b border-white/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-full border-2 border-syndicate-gold bg-[#051124] flex items-center justify-center relative group-hover:scale-110 transition-transform overflow-hidden shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="relative w-6 h-6 border border-syndicate-gold rounded-md flex items-center justify-center">
               <span className="text-xs font-display font-bold text-white">S</span>
               <div className="absolute -bottom-0.5 right-0.5 w-1 h-1 bg-[#051124] border-r border-b border-syndicate-gold rotate-45" />
            </div>
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white">
            SYNDICATE<span className="text-syndicate-gold">HUB</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-syndicate-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-syndicate-gold transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-syndicate-gold text-syndicate-blue font-bold rounded-full hover:bg-white transition-colors text-sm"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-syndicate-blue border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-syndicate-gold"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-3 bg-syndicate-gold text-syndicate-blue font-bold rounded-xl">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
