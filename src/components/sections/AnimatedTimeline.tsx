"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

type TimelineItem = {
  title: string;
  description: string;
};

type AnimatedTimelineProps = {
  items: TimelineItem[];
};

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef(1);
  const pausedUntilRef = useRef(0);
  const userControlledRef = useRef(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!scroller || prefersReducedMotion) {
      return;
    }

    let frameId = 0;
    let lastTime = performance.now();
    const pixelsPerSecond = 34;

    function animateScroll(time: number) {
      const currentScroller = scrollerRef.current;

      if (!currentScroller) {
        return;
      }

      const delta = Math.min(time - lastTime, 32);
      lastTime = time;

      if (!userControlledRef.current && time > pausedUntilRef.current) {
        const maxScroll = currentScroller.scrollWidth - currentScroller.clientWidth;

        if (maxScroll > 0) {
          if (currentScroller.scrollLeft >= maxScroll - 2) {
            directionRef.current = -1;
          } else if (currentScroller.scrollLeft <= 2) {
            directionRef.current = 1;
          }

          currentScroller.scrollLeft += directionRef.current * pixelsPerSecond * (delta / 1000);
        }
      }

      frameId = requestAnimationFrame(animateScroll);
    }

    frameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [items.length]);

  function pauseAutoScroll(duration = 2800, stopAutoScroll = false) {
    if (stopAutoScroll) {
      userControlledRef.current = true;
    }

    pausedUntilRef.current = performance.now() + duration;
  }

  return (
    <div className="relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-0 z-10 rounded-full border border-white/10 bg-[rgba(11,27,43,0.82)] p-2 text-[var(--color-orange-strong)] shadow-[0_12px_32px_rgba(4,12,20,0.22)] backdrop-blur-md"
        animate={{ x: [0, 8, 0], opacity: [0.62, 1, 0.62] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <MoveRight className="h-4 w-4" />
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[var(--color-page-deep)] to-transparent" />
      <div
        ref={scrollerRef}
        onMouseEnter={() => pauseAutoScroll(120000)}
        onMouseLeave={() => pauseAutoScroll(1200)}
        onPointerDown={() => pauseAutoScroll(0, true)}
        onTouchStart={() => pauseAutoScroll(0, true)}
        onWheel={() => pauseAutoScroll(0, true)}
        onFocus={() => pauseAutoScroll(120000)}
        onBlur={() => pauseAutoScroll(1200)}
        className="overflow-x-auto pb-4"
      >
        <div className="relative flex min-w-max gap-4 px-1 pt-10">
          <div className="absolute left-1 right-1 top-4 h-px bg-gradient-to-r from-[rgba(95,180,217,0.1)] via-[rgba(231,161,91,0.72)] to-[rgba(95,180,217,0.1)]" />
          <motion.div
            aria-hidden="true"
            className="absolute left-1 top-4 h-px w-28 bg-gradient-to-r from-transparent via-[rgba(240,179,111,0.95)] to-transparent"
            animate={{ x: [0, 180, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="relative w-[78vw] max-w-[360px] shrink-0 sm:w-[320px] lg:w-[340px]"
            >
              <div className="absolute left-5 top-[-31px] h-3 w-3 rounded-full border border-[var(--color-orange-strong)] bg-[var(--color-page-deep)] shadow-[0_0_0_6px_rgba(231,161,91,0.12)]" />
              <div className="surface h-full rounded-2xl p-5">
                <p className="text-sm font-semibold text-[var(--color-orange-strong)]">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-main">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
