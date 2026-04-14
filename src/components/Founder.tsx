import { motion } from "motion/react";
import { Linkedin, Twitter, Mail, GraduationCap } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-syndicate-gold rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-syndicate-blue border-4 border-syndicate-blue shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/tech-workstation/600/750" 
                  alt="Advanced ICT Workstation" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-syndicate-gold/10 text-syndicate-gold text-xs font-bold mb-6">
                <GraduationCap size={14} />
                Founder & Visionary
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
                ALEX RAYMOND <span className="text-syndicate-gold">MAINA</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-2xl md:text-3xl font-display font-medium text-white leading-tight">
                  "We aren't just building platforms; we are architecting the digital future of academic culture. If you have the vision, we have the engine."
                </p>
                <p className="text-lg text-slate-400 max-w-2xl">
                  Join us in redefining the boundaries of media and technology. Let's build something that outlasts the present.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto px-10 py-4 bg-syndicate-gold text-syndicate-blue font-black rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-sm">
                  Partner With Us
                </button>
                <div className="flex items-center gap-4">
                  <a href="https://wa.me/254114975008" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-syndicate-gold hover:text-syndicate-blue transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="mailto:syndicatehubb@gmail.com" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-syndicate-gold hover:text-syndicate-blue transition-all">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
