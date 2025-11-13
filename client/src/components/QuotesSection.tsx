import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuotesSection() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
      author: "Maya Angelou",
    },
    {
      text: "You are my today and all of my tomorrows.",
      author: "Leo Christopher",
    },
    {
      text: "I love you not only for what you are, but for what I am when I am with you.",
      author: "Elizabeth Barrett Browning",
    },
    {
      text: "Whatever our souls are made of, yours and mine are the same.",
      author: "Emily Brontë",
    },
    {
      text: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
      author: "Leo Christopher",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-center text-primary mb-16 sm:mb-20"
        >
          Words of Love
        </motion.h2>

        <div className="relative min-h-[300px] sm:min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center"
              data-testid={`quote-${currentQuote}`}
            >
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-primary/30 mx-auto mb-6 sm:mb-8" />
              
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6 sm:mb-8 px-4">
                "{quotes[currentQuote].text}"
              </p>
              
              <p className="font-script text-xl sm:text-2xl text-primary">
                — {quotes[currentQuote].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-12 sm:mt-16">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentQuote
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              data-testid={`button-quote-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
