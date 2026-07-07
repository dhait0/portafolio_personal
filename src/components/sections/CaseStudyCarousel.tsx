"use client";

import { useEffect, useMemo, useRef, type WheelEvent as ReactWheelEvent } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";

type CaseStudyCarouselProps = {
  studies: CaseStudy[];
};

export function CaseStudyCarousel({ studies }: CaseStudyCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isAdjustingRef = useRef(false);
  const pausedUntilRef = useRef(0);
  const track = useMemo(() => [...studies, ...studies, ...studies], [studies]);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || studies.length === 0) {
      return;
    }

    const loopWidth = scroller.scrollWidth / 3;
    scroller.scrollLeft = loopWidth;
  }, [studies]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!scroller || studies.length === 0 || prefersReducedMotion) {
      return;
    }

    let frameId = 0;
    let lastTime = performance.now();
    const pixelsPerSecond = 28;

    function animateScroll(time: number) {
      const currentScroller = scrollerRef.current;

      if (!currentScroller) {
        return;
      }

      const delta = Math.min(time - lastTime, 32);
      lastTime = time;

      if (time > pausedUntilRef.current) {
        currentScroller.scrollLeft += pixelsPerSecond * (delta / 1000);
        recenterScroll();
      }

      frameId = requestAnimationFrame(animateScroll);
    }

    frameId = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [studies.length]);

  function pauseAutoScroll(duration = 2800) {
    pausedUntilRef.current = performance.now() + duration;
  }

  function recenterScroll() {
    const scroller = scrollerRef.current;

    if (!scroller || studies.length === 0 || isAdjustingRef.current) {
      return;
    }

    const loopWidth = scroller.scrollWidth / 3;

    if (scroller.scrollLeft <= loopWidth * 0.5) {
      isAdjustingRef.current = true;
      scroller.scrollLeft += loopWidth;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    } else if (scroller.scrollLeft >= loopWidth * 1.5) {
      isAdjustingRef.current = true;
      scroller.scrollLeft -= loopWidth;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    }
  }

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const canScrollHorizontally = scroller.scrollWidth > scroller.clientWidth;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (!canScrollHorizontally || delta === 0) {
      return;
    }

    event.preventDefault();
    pauseAutoScroll();
    scroller.scrollLeft += delta;
    recenterScroll();
  }

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-3 z-10 rounded-full border border-white/10 bg-[rgba(11,27,43,0.82)] p-2 text-[var(--color-orange-strong)] shadow-[0_12px_32px_rgba(4,12,20,0.22)] backdrop-blur-md"
        animate={{ x: [0, 8, 0], opacity: [0.62, 1, 0.62] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <MoveRight className="h-4 w-4" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-[1] h-full w-24 bg-gradient-to-l from-[rgba(11,23,36,0.72)] to-transparent"
        animate={{ opacity: [0.55, 0.92, 0.55] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        ref={scrollerRef}
        onWheel={handleWheel}
        onScroll={recenterScroll}
        onMouseEnter={() => pauseAutoScroll(120000)}
        onMouseLeave={() => pauseAutoScroll(900)}
        onTouchStart={() => pauseAutoScroll()}
        onFocus={() => pauseAutoScroll(120000)}
        onBlur={() => pauseAutoScroll(900)}
        className="case-carousel-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden py-2"
      >
        {track.map((study, index) => (
          <div
            key={`${study.slug}-${index}`}
            className="w-[min(86vw,440px)] shrink-0 snap-start sm:w-[420px] lg:w-[440px]"
          >
            <CaseStudyCard caseStudy={study} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
