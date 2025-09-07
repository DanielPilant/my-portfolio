"use client";
// CHANGELOG:
// - Updated typewriter styles to new palette with sharp corners.
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  lines: string[];
  className?: string;
  typingMin?: number;   
  typingMax?: number;   
  deletingMin?: number; 
  deletingMax?: number; 
  pauseMs?: number;     
};

export default function Typewriter({
  lines,
  className = "",
  typingMin = 30,
  typingMax = 90,
  deletingMin = 20,
  deletingMax = 60,
  pauseMs = 1200,
}: Props) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState<"typing"|"pausing"|"deleting">("typing");
  const current = lines[lineIdx] ?? "";
  const text = useMemo(() => current.slice(0, charIdx), [current, charIdx]);
  const timerRef = useRef<number | null>(null);

  // Random function for speed ranges
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
  // Clear previous timer
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (phase === "typing") {
      if (charIdx < current.length) {
        timerRef.current = window.setTimeout(() => {
          setCharIdx((c) => c + 1);
        }, rand(typingMin, typingMax));
      } else {
        timerRef.current = window.setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timerRef.current = window.setTimeout(() => setPhase("deleting"), pauseMs);
    } else if (phase === "deleting") {
      if (charIdx > 0) {
        timerRef.current = window.setTimeout(() => {
          setCharIdx((c) => c - 1);
        }, rand(deletingMin, deletingMax));
      } else {
        setPhase("typing");
        setLineIdx((i) => (i + 1) % lines.length);
      }
    }

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [charIdx, phase, current, typingMin, typingMax, deletingMin, deletingMax, pauseMs, lines.length]);

  return (
    <div
      className={`inline-flex items-center border border-white/10 bg-white/[0.02] px-3 py-2 shadow-md ${className}`}
      aria-live="polite"
    >
      <code className="font-mono text-base md:text-lg leading-6 text-foreground">
        {text}
      </code>
  {/* The caret ("|") with blink animation. Note the arbitrary value for animation */}
      <span className='ml-1 inline-block w-[0.6ch] translate-y-[1px] [animation:blink_1s_steps(1)_infinite]'>
        |
      </span>
    </div>
  );
}
