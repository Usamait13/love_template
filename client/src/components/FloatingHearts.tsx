import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FloatingHeartsProps {
  count?: number;
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "medium" | "fast";
}

export default function FloatingHearts({ count = 15, size = "md", speed = "medium" }: FloatingHeartsProps) {
  const sizeMap = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-10 h-10",
  };

  const speedMap = {
    slow: { duration: [15, 20, 25], delay: [0, 5, 10] },
    medium: { duration: [10, 15, 18], delay: [0, 3, 6] },
    fast: { duration: [6, 8, 10], delay: [0, 2, 4] },
  };

  const hearts = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: speedMap[speed].duration[Math.floor(Math.random() * 3)],
    delay: Math.random() * speedMap[speed].delay[2],
    opacity: 0.2 + Math.random() * 0.6,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${sizeMap[size]} text-primary`}
          style={{
            left: heart.left,
            bottom: "-10%",
            opacity: heart.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, Math.sin(heart.id) * 50, Math.cos(heart.id) * -50],
            rotate: [0, heart.rotate],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Heart fill="currentColor" className="drop-shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
}
