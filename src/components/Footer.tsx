import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="pt-24 pb-12 bg-syndicate-blue border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-syndicate-gold bg-[#051124] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                <div className="relative w-5 h-5 border border-syndicate-gold rounded flex items-center justify-center">
                   <span className="text-[10px] font-display font-bold text-white">S</span>
                   <div className="absolute -bottom-0.5 right-0.5 w-1 h-1 bg-[#051124] border-r border-b border-syndicate-gold rotate-45" />
                </div>
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">
                SYNDICATE<span className="text-syndicate-gold">HUB</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              The leading ICT-powered digital ecosystem across educational institutions. 
              Built for control, scalability, and influence.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Divisions", "Services", "Testimonials", "FAQ", "Founder"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-500 hover:text-syndicate-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail size={16} className="text-syndicate-gold" />
                syndicatehubb@gmail.com
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone size={16} className="text-syndicate-gold" />
                +254 114975008
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <MapPin size={16} className="text-syndicate-gold" />
                JNNP.AC.KE, Kenya
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-xs text-slate-500 mb-4">Stay updated with our latest ecosystem developments.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-syndicate-gold w-full"
              />
              <button className="bg-syndicate-gold text-syndicate-blue px-4 py-2 rounded-lg font-bold text-xs">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} SYNDICATE HUB. All rights reserved. Founded by Alex Raymond Maina.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-syndicate-gold hover:text-syndicate-blue transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
