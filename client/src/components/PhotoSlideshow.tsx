import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import photo1 from "@assets/generated_images/Couple_sunset_beach_silhouette_484ac8d3.png";
import photo2 from "@assets/generated_images/Couple_in_rose_garden_a3db8ff2.png";
import photo3 from "@assets/generated_images/Couple_under_cherry_blossoms_3f0374a0.png";
import photo4 from "@assets/generated_images/Couple_dancing_romantically_3ae4772a.png";
import photo5 from "@assets/generated_images/Couple_stargazing_together_9a0d7f32.png";

export default function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const photos = [photo1, photo2, photo3, photo4, photo5];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-cream">
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-center text-primary mb-12 sm:mb-16"
        >
          Our Beautiful Memories
        </motion.h2>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={photos[currentIndex]}
                alt={`Memory ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                data-testid={`img-photo-${currentIndex}`}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/95 text-primary backdrop-blur-sm"
              onClick={goToPrevious}
              data-testid="button-prev-photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/95 text-primary backdrop-blur-sm"
              onClick={goToNext}
              data-testid="button-next-photo"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                data-testid={`button-dot-${index}`}
              />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground mt-8 sm:mt-12 text-sm sm:text-base max-w-2xl mx-auto"
        >
          Replace these placeholder images with your favorite photos together
        </motion.p>
      </div>
    </section>
  );
}
