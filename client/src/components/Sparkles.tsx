import { motion } from "framer-motion";
import { Sparkles as SparklesIcon } from "lucide-react";

interface SparklesProps {
  count?: number;
}

export default function Sparkles({ count = 20 }: SparklesProps) {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 1 + Math.random() * 2,
    delay: Math.random() * 3,
    size: 12 + Math.random() * 12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-yellow-300"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <SparklesIcon fill="currentColor" className="w-full h-full drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
}
