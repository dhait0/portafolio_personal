"use client";

import { motion } from "framer-motion";

type TechStackCloudProps = {
  items: string[];
};

export function TechStackCloud({ items }: TechStackCloudProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03, duration: 0.35 }}
          whileHover={{ y: -3 }}
          className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
