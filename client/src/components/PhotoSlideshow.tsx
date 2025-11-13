import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import photo1 from "@assets/generated_images/Couple_sunset_beach_silhouette_484ac8d3.png";
import photo2 from "@assets/generated_images/Couple_in_rose_garden_a3db8ff2.png";
import photo3 from "@assets/generated_images/Couple_under_cherry_blossoms_3f0374a0.png";
import photo4 from "@assets/generated_images/Couple_dancing_romantically_3ae4772a.png";
import photo5 from "@assets/generated_images/Couple_stargazing_together_9a0d7f32.png";

export default function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const photos = [
    { src: photo1, caption: "Our sunset moments together" },
    { src: photo2, caption: "Walking through life's garden" },
    { src: photo3, caption: "Under the cherry blossoms" },
    { src: photo4, caption: "Dancing through life with you" },
    { src: photo5, caption: "Dreaming under the stars" },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50/50">
      {/* Decorative floating hearts in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-current" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header with decorative elements */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-current" />
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary">
                Our Beautiful Memories
              </h2>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-current" />
              </motion.div>
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            />
          </motion.div>
        </div>

        {/* Main slideshow container */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-6 lg:gap-8 items-start">
          {/* Main photo display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="overflow-hidden shadow-2xl border-4 border-primary/10 bg-white/90 backdrop-blur-sm p-3 sm:p-4 lg:p-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].caption}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    data-testid={`img-photo-${currentIndex}`}
                  />
                </AnimatePresence>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-primary backdrop-blur-md shadow-lg rounded-full"
                    onClick={goToPrevious}
                    data-testid="button-prev-photo"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white text-primary backdrop-blur-md shadow-lg rounded-full"
                    onClick={goToNext}
                    data-testid="button-next-photo"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>

                {/* Photo caption */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
                >
                  <p className="font-script text-lg sm:text-xl lg:text-2xl text-white drop-shadow-lg text-center">
                    {photos[currentIndex].caption}
                  </p>
                </motion.div>
              </div>

              {/* Controls bar */}
              <div className="flex items-center justify-between mt-4 sm:mt-6 gap-4">
                {/* Progress dots */}
                <div className="flex gap-2 flex-1">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-primary flex-1 max-w-12"
                          : "bg-primary/30 hover:bg-primary/50 w-2"
                      }`}
                      data-testid={`button-dot-${index}`}
                    />
                  ))}
                </div>

                {/* Play/Pause button */}
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={toggleAutoPlay}
                  className="shrink-0 w-8 h-8 text-primary hover:bg-primary/10"
                  data-testid="button-autoplay-toggle"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" fill="currentColor" />
                  ) : (
                    <Play className="w-4 h-4" fill="currentColor" />
                  )}
                </Button>

                {/* Photo counter */}
                <div className="text-sm font-sans text-muted-foreground shrink-0">
                  {currentIndex + 1} / {photos.length}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Thumbnail sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="space-y-3">
              {photos.map((photo, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-4 ring-primary shadow-xl scale-105"
                      : "ring-2 ring-primary/20 hover:ring-primary/50 opacity-70 hover:opacity-100"
                  }`}
                  whileHover={{ scale: index === currentIndex ? 1.05 : 1.03 }}
                  data-testid={`button-thumbnail-${index}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeThumbnail"
                      className="absolute inset-0 bg-primary/10 border-2 border-primary/50"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Mobile thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:hidden overflow-x-auto"
          >
            <div className="flex gap-3 pb-2">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-3 ring-primary shadow-lg scale-110"
                      : "ring-2 ring-primary/20 hover:ring-primary/50 opacity-60"
                  }`}
                  data-testid={`button-thumbnail-mobile-${index}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
