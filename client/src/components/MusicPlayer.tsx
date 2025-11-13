import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50"
      >
        <div className="relative">
          <AnimatePresence>
            {showTooltip && !isPlaying && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-sans"
              >
                Click for romantic music
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-primary" />
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            size="icon"
            onClick={togglePlay}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90"
            data-testid="button-music-toggle"
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="paused"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <VolumeX className="w-6 h-6 sm:w-7 sm:h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(244, 63, 94, 0.4)",
                  "0 0 0 20px rgba(244, 63, 94, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}

          {isPlaying && (
            <div className="absolute -inset-1">
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Music className="w-3 h-3 text-primary absolute top-1 left-1/2 -translate-x-1/2" />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>

      <audio ref={audioRef} loop>
        <source src="/path/to/your/romantic-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
