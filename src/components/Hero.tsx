import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles count={20} />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-syndicate-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-syndicate-accent/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-syndicate-gold text-xs font-bold tracking-widest uppercase mb-8"
          >
            <Zap size={14} />
            The Future of Digital Ecosystems
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8"
          >
            POWERING <br />
            <span className="text-gradient">INFLUENCE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            Syndicate Hub is a technology-centered organization that builds and operates digital systems 
            powering media, entertainment, and influence within academic institutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button className="group relative px-8 py-4 bg-syndicate-gold text-syndicate-blue font-bold rounded-full overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Explore Ecosystem</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
            </button>
            <button className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-all text-white font-medium">
              View Our Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-syndicate-gold to-transparent" />
      </motion.div>
    </section>
  );
}
