import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <FloatingHearts count={15} size="md" speed="slow" />
      <Sparkles count={20} />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          className="font-elegant text-5xl sm:text-7xl lg:text-8xl text-primary mb-4 sm:mb-6"
          style={{
            textShadow: "0 0 30px rgba(244, 63, 94, 0.3), 0 0 60px rgba(244, 63, 94, 0.2)",
          }}
          animate={{
            textShadow: [
              "0 0 30px rgba(244, 63, 94, 0.3), 0 0 60px rgba(244, 63, 94, 0.2)",
              "0 0 40px rgba(244, 63, 94, 0.5), 0 0 80px rgba(244, 63, 94, 0.3)",
              "0 0 30px rgba(244, 63, 94, 0.3), 0 0 60px rgba(244, 63, 94, 0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Happy Birthday,
        </motion.h1>
        
        <motion.h2
          className="font-elegant text-6xl sm:text-8xl lg:text-9xl text-primary mb-8 sm:mb-12"
          style={{
            textShadow: "0 0 30px rgba(244, 63, 94, 0.3), 0 0 60px rgba(244, 63, 94, 0.2)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My Love ❤️
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary/60"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
