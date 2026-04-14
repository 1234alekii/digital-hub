import { motion } from "motion/react";
import { Cpu, Camera, Music, TrendingUp } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

const divisions = [
  {
    title: "ICT Core",
    subtitle: "Primary Engine",
    description: "The central authority powering all operations through platform development, automation, and infrastructure.",
    icon: Cpu,
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    features: ["Platform Development", "Systems Automation", "Cybersecurity", "Data Analytics"]
  },
  {
    title: "Media & Production",
    subtitle: "Visual Communication",
    description: "Responsible for high-end content creation, from videography and photography to professional graphic design.",
    icon: Camera,
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
    features: ["Videography", "Photography", "Graphic Design", "Documentaries"]
  },
  {
    title: "Entertainment",
    subtitle: "Experience Design",
    description: "Handling event execution and audience experience through digitized systems and performance management.",
    icon: Music,
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
    features: ["Event Planning", "DJ Management", "Experience Design", "Live Performance"]
  },
  {
    title: "Marketing & Growth",
    subtitle: "Precision Expansion",
    description: "Driving visibility and engagement through data-driven campaign strategies and brand positioning.",
    icon: TrendingUp,
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-400",
    features: ["Campaign Strategy", "Social Media Growth", "Brand Positioning", "Audience Targeting"]
  }
];

export default function Divisions() {
  return (
    <section id="divisions" className="py-24 bg-syndicate-blue relative overflow-hidden">
      <BackgroundParticles count={10} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-6">
              OUR <span className="text-syndicate-gold">DIVISIONS</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Syndicate Hub operates on a Tech-First Model, where ICT is the foundation 
              powering every other division in our ecosystem.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-6xl font-display font-black text-white/5">STRUCTURE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((division, i) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-syndicate-gold/50 transition-all overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${division.accent}`}>
                  <division.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-1">{division.title}</h3>
                <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${division.accent}`}>
                  {division.subtitle}
                </p>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {division.description}
                </p>
                
                <ul className="space-y-2">
                  {division.features.map((feature) => (
                    <li key={feature} className="text-xs text-slate-500 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-syndicate-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
