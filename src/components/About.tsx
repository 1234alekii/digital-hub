import { motion } from "motion/react";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/high-end-camera/800/800" 
                alt="Professional Cinema Camera" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-syndicate-blue/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-syndicate-blue via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 p-8 glass rounded-3xl max-w-[240px]"
            >
              <ShieldCheck className="text-syndicate-gold mb-4" size={32} />
              <p className="text-2xl font-display font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Proprietary Infrastructure</p>
            </motion.div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">
                OUR <span className="text-syndicate-gold">VISION</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                To establish Syndicate Hub as the leading ICT-powered digital ecosystem across educational 
                institutions, controlling how content, communication, and culture are created, distributed, and experienced.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Target className="text-syndicate-gold" />
                OUR MISSION
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Empower Media", desc: "Revolutionizing entertainment through technology." },
                  { title: "Optimize Engagement", desc: "Data-driven audience interaction strategies." },
                  { title: "Centralize Influence", desc: "Building a unified platform for digital authority." },
                  { title: "Scalable Growth", desc: "Enabling seamless expansion across institutions." }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <h4 className="font-bold text-syndicate-gold mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
