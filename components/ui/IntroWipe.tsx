"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useId } from "react";

type IntroWipeProps = {
  className?: string;
};

export default function IntroWipe({ className = "" }: IntroWipeProps) {
  const overlayControls = useAnimation();
  const grainId = useId().replace(/:/g, "");

  useEffect(() => {
    const timer = setTimeout(() => {
      overlayControls.start({
        clipPath: "inset(0 0 0 100%)",
        transition: {
          duration: 2,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [overlayControls]);

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background:
            "linear-gradient(135deg, #f0efec 0%, #e8e7e4 40%, #ededea 100%)",
          clipPath: "inset(0 0 0 0)",
        }}
        animate={overlayControls}
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id={grainId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter={`url(#${grainId})`}
            opacity="0.4"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-y-0 left-0 z-30 flex items-center"
        initial={{ x: "0vw", opacity: 0 }}
        animate={{ x: "100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          x: { delay: 0.3, duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: {
            delay: 0.3,
            duration: 2,
            times: [0, 0.05, 0.9, 1],
          },
        }}
      >
        <div className="relative -translate-x-1/2">
          {[
            { dx: 0, dy: -20, size: 14, delay: 0 },
            { dx: 6, dy: 2, size: 18, delay: 0.15 },
            { dx: -4, dy: 22, size: 11, delay: 0.3 },
          ].map((star, i) => (
            <motion.svg
              key={i}
              width={star.size}
              height={star.size}
              viewBox="0 0 24 24"
              className="absolute"
              style={{
                left: star.dx,
                top: star.dy - star.size / 2,
              }}
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 0.9, 0],
                rotate: [0, 45, 90],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                delay: 0.5 + star.delay,
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            >
              <path
                d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74z"
                fill="#2DB89A"
              />
            </motion.svg>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
