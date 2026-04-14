import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Samuel Gikandi",
    role: "CEO, Africa's Talking",
    content: "Syndicate Hub's tech-first approach to digital ecosystems is exactly what the next generation of African innovators needs. Their infrastructure is robust, scalable, and built with a clear vision for the future.",
    avatar: "https://picsum.photos/seed/ceo-at/100/100"
  },
  {
    name: "Israel Adebayo",
    role: "Student at USIU International",
    content: "As a student, seeing a platform like Syndicate Hub thrive is incredibly inspiring. Their focus on empowering media and entertainment through technology has completely changed how we engage with digital content on campus.",
    avatar: "https://picsum.photos/seed/student-usiu/100/100"
  },
  {
    name: "Catherine Muraga",
    role: "Managing Director, Microsoft ADC",
    content: "The level of technical sophistication in Syndicate Hub's digital systems is impressive. They are setting a high standard for how ICT can be used to centralize influence and optimize audience engagement across institutions.",
    avatar: "https://picsum.photos/seed/md-microsoft/100/100"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-syndicate-gold/10 text-syndicate-gold text-xs font-bold mb-4 uppercase tracking-widest"
          >
            <Star size={14} fill="currentColor" />
            Client Success
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            TRUSTED BY <span className="text-syndicate-gold">LEADERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-syndicate-gold/20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-syndicate-gold" fill="currentColor" />
                ))}
              </div>

              <p className="text-slate-300 italic mb-8 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-syndicate-gold/30">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
