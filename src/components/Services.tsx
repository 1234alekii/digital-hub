import { motion } from "motion/react";
import { CheckCircle2, Monitor, Video, Radio, Layout, BarChart3 } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

const services = [
  {
    title: "Digital Platforms",
    icon: Monitor,
    items: ["Central Syndicate Website", "Internal Operational Dashboards", "Content Distribution Systems"]
  },
  {
    title: "Media Production",
    icon: Video,
    items: ["Event Coverage", "Promotional Videos", "Branding & Design Services"]
  },
  {
    title: "Live Streaming Systems",
    icon: Radio,
    items: ["Multi-platform Broadcasting", "Event Digitization", "Remote Audience Engagement"]
  },
  {
    title: "Event Technology",
    icon: Layout,
    items: ["Digital Event Management", "Interactive Audience Systems", "Streaming Integration"]
  },
  {
    title: "Marketing Solutions",
    icon: BarChart3,
    items: ["Campaign Development", "Digital Promotion", "Growth Optimization"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <BackgroundParticles count={12} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">
            ECOSYSTEM <span className="text-syndicate-gold">SERVICES</span>
          </h2>
          <p className="text-slate-400">
            We offer a comprehensive suite of digital solutions designed for control, scalability, and maximum influence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-syndicate-gold/10 flex items-center justify-center text-syndicate-gold mb-6 group-hover:scale-110 transition-transform">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-syndicate-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-syndicate-gold to-syndicate-gold/80 flex flex-col items-center justify-center text-center text-syndicate-blue"
          >
            <h3 className="text-2xl font-display font-black mb-4">READY TO SCALE?</h3>
            <p className="text-sm font-medium mb-8 opacity-80">
              Join the leading ICT-powered digital ecosystem today.
            </p>
            <button className="px-8 py-3 bg-syndicate-blue text-white font-bold rounded-full hover:bg-white hover:text-syndicate-blue transition-all">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
