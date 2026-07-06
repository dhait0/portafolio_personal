"use client";

import { motion } from "framer-motion";

type TechMarqueeProps = {
  items: string[];
};

export function TechMarquee({ items }: TechMarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-slate-800/80 bg-slate-950/70 py-4">
      <motion.div
        className="flex w-max items-center gap-3 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-slate-300"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
