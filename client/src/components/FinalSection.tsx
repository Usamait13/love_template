import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function FinalSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-200 to-red-100">
      <FloatingHearts count={25} size="lg" speed="medium" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h2 className="font-elegant text-6xl sm:text-8xl lg:text-9xl text-primary mb-6 sm:mb-8" 
              style={{
                textShadow: "0 0 40px rgba(244, 63, 94, 0.4), 0 0 80px rgba(244, 63, 94, 0.2)",
              }}>
            Forever Yours,
          </h2>
          
          <p className="font-elegant text-5xl sm:text-7xl lg:text-8xl text-primary"
             style={{
               textShadow: "0 0 40px rgba(244, 63, 94, 0.4), 0 0 80px rgba(244, 63, 94, 0.2)",
             }}>
            Umar 💖
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 sm:mt-16"
        >
          <p className="font-serif text-xl sm:text-2xl text-primary/80 italic">
            With all my love, today and always
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
