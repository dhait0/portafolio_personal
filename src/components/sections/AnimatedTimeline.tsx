"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  description: string;
};

type AnimatedTimelineProps = {
  items: TimelineItem[];
};

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-slate-500/50 via-slate-500/15 to-transparent md:left-1/2" />
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="relative grid gap-4 md:grid-cols-2"
          >
            <div className={index % 2 === 0 ? "md:col-span-1" : "md:col-span-1 md:col-start-2"}>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5">
                <p className="text-sm font-semibold text-slate-400">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            </div>
            <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:block md:col-start-1 md:row-start-1"} />
            <div className="absolute left-4 top-6 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950 md:left-1/2 md:-translate-x-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
