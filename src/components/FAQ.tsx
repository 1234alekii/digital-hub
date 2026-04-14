import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import BackgroundParticles from "./BackgroundParticles";

const faqs = [
  {
    question: "What exactly is Syndicate Hub?",
    answer: "Syndicate Hub is a technology-centered organization that builds and operates digital systems powering media, entertainment, and influence within academic institutions. We function as a centralized platform provider, enabling content creation and distribution through our proprietary ICT infrastructure."
  },
  {
    question: "What does the 'Tech-First Model' mean for my project?",
    answer: "It means ICT is our foundation. Every service we offer—whether it's a media production or an event—is powered by custom-built digital systems. This ensures your content is data-driven, your events are digitally enhanced, and your marketing is system-optimized."
  },
  {
    question: "How do your Live Streaming Systems work?",
    answer: "We provide multi-platform broadcasting and event digitization. Our systems allow for remote audience engagement, ensuring that your event reaches people far beyond the physical venue with high-quality, stable streams."
  },
  {
    question: "What kind of digital platforms can you build?",
    answer: "Our ICT Core Division specializes in platform development, including central content hubs, internal operational dashboards, and custom applications tailored to the specific needs of academic and corporate clients."
  },
  {
    question: "How can I partner with Syndicate Hub?",
    answer: "You can reach out directly via our contact section. Whether you're looking for media production, event technology solutions, or a full digital ecosystem setup, our team is ready to architect a solution for you."
  },
  {
    question: "Is Syndicate Hub limited to academic institutions?",
    answer: "While we are student-founded and have a strong focus on the academic ecosystem, our scalable ICT framework and professional media services are designed to serve a wide range of industries looking for digital control and growth."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-syndicate-blue relative overflow-hidden">
      <BackgroundParticles count={8} />
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-syndicate-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-syndicate-gold/10 text-syndicate-gold text-xs font-bold mb-4 uppercase tracking-widest">
            <HelpCircle size={14} />
            Got Questions?
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            FREQUENTLY ASKED <span className="text-syndicate-gold">QUESTIONS</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 ${
                activeIndex === i 
                ? "bg-white/10 border-syndicate-gold/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]" 
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className={`font-bold transition-colors ${activeIndex === i ? "text-syndicate-gold" : "text-white"}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${activeIndex === i ? "rotate-180" : ""}`}>
                  {activeIndex === i ? <Minus size={20} className="text-syndicate-gold" /> : <Plus size={20} className="text-slate-500" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
