import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function LoveLetterSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-cream to-pink-50">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-center text-primary mb-12 sm:mb-16"
        >
          A Letter to My Love
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 sm:p-12 lg:p-16 shadow-2xl bg-white/80 backdrop-blur-sm border-primary/10">
            <div className="space-y-6 text-foreground font-serif text-base sm:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="first-letter:text-6xl first-letter:font-elegant first-letter:text-primary first-letter:float-left first-letter:mr-2"
              >
                My Dearest Mano,
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                On this special day, I want you to know how much you mean to me. Every moment with you is a precious gift, and I am grateful for every smile, every laugh, and every memory we've created together.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                You are the light that brightens my darkest days, the warmth that comforts my soul, and the love that makes my heart whole. Your kindness, your strength, and your beautiful spirit inspire me every single day.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                As you celebrate another year of your wonderful life, I promise to continue loving you with all my heart, supporting your dreams, and cherishing every moment we share together. You deserve all the happiness in the world, and I'm honored to be the one by your side.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                Happy Birthday, my love. Here's to many more years of laughter, love, and beautiful memories together.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="text-right font-script text-2xl sm:text-3xl text-primary pt-6"
              >
                Forever yours,
                <br />
                Umar 💖
              </motion.p>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
