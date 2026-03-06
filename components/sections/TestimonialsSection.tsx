"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

// Phase mapping:
// 0: nothing visible
// odd n: typing indicator for bubble floor(n/2)
// even n≥2: bubbles 0..(n/2 - 1) fully shown
// 9: typing for Spotless reply
// 10: Spotless reply visible

const SEQUENCE = [
  300,  // phase 1: typing for bubble 0
  1000, // phase 2: bubble 0
  280,  // phase 3: typing for bubble 1
  1000, // phase 4: bubble 1
  280,  // phase 5: typing for bubble 2
  950,  // phase 6: bubble 2
  280,  // phase 7: typing for bubble 3
  1000, // phase 8: bubble 3
  400,  // phase 9: Spotless typing
  1100, // phase 10: Spotless reply
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [phase, setPhase] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);

    let total = 0;
    SEQUENCE.forEach((delay, i) => {
      total += delay;
      const p = i + 1;
      setTimeout(() => setPhase(p), total);
    });
  }, [inView, started]);

  const bubbleVisible = (i: number) => phase >= (i + 1) * 2;
  const typingVisible = (i: number) => phase === i * 2 + 1;
  const spotlessTypingVisible = phase === 9;
  const spotlessReplyVisible = phase >= 10;

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="px-5 py-14 sm:px-6 lg:py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              color: "var(--text-primary)",
            }}
          >
            What our customers say.
          </h2>
        </motion.div>

        {/* Phone frame */}
        <motion.div
          className="mx-auto max-w-sm rounded-3xl px-4 py-5 shadow-xl"
          style={{
            background: "#f5f5f5",
            border: "8px solid #1a1a1a",
          }}
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Status bar */}
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-xs font-semibold" style={{ color: "#1a1a1a" }}>
              Spotless Nottingham
            </span>
            <span className="text-xs" style={{ color: "#6b7b78" }}>
              iMessage
            </span>
          </div>

          <div className="min-h-[320px] space-y-2">
            {testimonials.map((t, i) => (
              <div key={t.author}>
                <AnimatePresence>
                  {typingVisible(i) && <TypingBubble key={`typing-${i}`} />}
                </AnimatePresence>

                <AnimatePresence>
                  {bubbleVisible(i) && (
                    <motion.div
                      key={`bubble-${i}`}
                      className="flex items-end gap-2"
                      initial={{ opacity: 0, y: 10, scale: 0.93 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: "var(--accent)" }}
                      >
                        {t.initials}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div
                          className="max-w-[220px] rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm leading-relaxed"
                          style={{
                            background: "var(--chat-bubble, #e8f5e9)",
                            color: "var(--text-primary)",
                          }}
                        >
                          &ldquo;{t.text}&rdquo;
                        </div>
                        <span
                          className="pl-2 text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          — {t.author}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Spotless typing */}
            <AnimatePresence>
              {spotlessTypingVisible && (
                <div className="flex justify-end">
                  <TypingBubble key="spotless-typing" right />
                </div>
              )}
            </AnimatePresence>

            {/* Spotless reply */}
            <AnimatePresence>
              {spotlessReplyVisible && (
                <motion.div
                  key="spotless-reply"
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 10, scale: 0.93 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="flex flex-col items-end gap-0.5">
                    <div
                      className="max-w-[220px] rounded-2xl rounded-br-sm px-4 py-2.5 text-sm font-medium leading-relaxed text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      Thanks for the kind words! Book your first clean today 💚
                      <br />
                      <a
                        href="#contact"
                        className="mt-1 block text-xs underline opacity-90"
                      >
                        Book now →
                      </a>
                    </div>
                    <span
                      className="pr-2 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Spotless Nottingham
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          className="mt-6 text-center text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Rated{" "}
          <span style={{ color: "var(--text-primary)" }} className="font-bold">
            4.9/5
          </span>{" "}
          from 200+ reviews
        </motion.p>
      </div>
    </section>
  );
}

function TypingBubble({ right = false }: { right?: boolean }) {
  return (
    <motion.div
      className={`flex items-end gap-2 ${right ? "justify-end" : ""}`}
      initial={{ opacity: 0, scale: 0.88, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {!right && (
        <div
          className="h-8 w-8 flex-shrink-0 rounded-full"
          style={{ background: "var(--accent-soft)" }}
        />
      )}
      <div
        className="flex items-center gap-1 rounded-2xl px-4 py-3"
        style={{
          background: right ? "var(--accent)" : "var(--chat-bubble, #e8f5e9)",
        }}
      >
        {[0, 1, 2].map((n) => (
          <span
            key={n}
            className="typing-dot h-2 w-2 rounded-full"
            style={{
              background: right ? "rgba(255,255,255,0.75)" : "var(--text-secondary)",
              display: "inline-block",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
