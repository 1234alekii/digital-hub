import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-syndicate-blue"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative w-32 h-32 mb-8"
        >
          <div className="absolute inset-0 rounded-full border-4 border-syndicate-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
          <div className="absolute inset-2 rounded-full bg-[#051124] border border-syndicate-gold/30 overflow-hidden">
             {/* Starry background effect */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40" />
          </div>
          <div className="flex items-center justify-center h-full w-full relative z-10">
            <div className="relative">
               {/* Speech bubble shape simplified */}
               <div className="w-14 h-14 border-2 border-syndicate-gold rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-white">S</span>
               </div>
               <div className="absolute -bottom-1 right-2 w-3 h-3 bg-[#051124] border-r-2 border-b-2 border-syndicate-gold rotate-45" />
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-syndicate-gold rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-full w-full bg-white/50"
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-syndicate-gold font-display tracking-[0.2em] text-xs uppercase"
        >
          Initializing Ecosystem
        </motion.p>
      </div>
    </motion.div>
  );
}
