import { motion } from "motion/react";

export default function BackgroundParticles({ count = 15 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-syndicate-gold/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 2,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: [null, (Math.random() - 0.5) * 200 + "px"],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Animated Gradients */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-syndicate-gold/5 rounded-full blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-syndicate-accent/5 rounded-full blur-[100px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
