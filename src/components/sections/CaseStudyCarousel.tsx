"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";

type CaseStudyCarouselProps = {
  studies: CaseStudy[];
};

export function CaseStudyCarousel({ studies }: CaseStudyCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndexRef = useRef(0);
  const activeVirtualIndexRef = useRef(0);
  const isRecenteringRef = useRef(false);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const track = [...studies, ...studies, ...studies];
  const middleOffset = studies.length;

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, track.length);
  }, [track.length]);

  useEffect(() => {
    if (studies.length === 0) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      scrollToVirtualIndex(middleOffset, "auto");
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [middleOffset, studies.length]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (studies.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      scrollToVirtualIndex(activeVirtualIndexRef.current + 1);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [studies.length]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  function setPaused(paused: boolean, delay = 0) {
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }

    if (paused || delay === 0) {
      isPausedRef.current = paused;
      return;
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      resumeTimeoutRef.current = null;
    }, delay);
  }

  function getLogicalIndex(index: number) {
    const total = studies.length;

    if (total === 0) {
      return 0;
    }

    return ((index % total) + total) % total;
  }

  function scrollToVirtualIndex(index: number, behavior: ScrollBehavior = "smooth") {
    const total = studies.length;

    if (total === 0) {
      return;
    }

    const card = cardRefs.current[index];

    if (!card) {
      return;
    }

    card.scrollIntoView({
      behavior,
      inline: "start",
      block: "nearest",
    });

    const logicalIndex = getLogicalIndex(index);
    activeVirtualIndexRef.current = index;
    setActiveIndex(logicalIndex);
  }

  function handleScroll() {
    const scroller = scrollerRef.current;

    if (!scroller || studies.length === 0) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const distance = Math.abs(card.offsetLeft - scroller.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const logicalIndex = getLogicalIndex(closestIndex);

    activeVirtualIndexRef.current = closestIndex;

    if (logicalIndex !== activeIndexRef.current) {
      setActiveIndex(logicalIndex);
    }

    if (!isRecenteringRef.current && (closestIndex < studies.length || closestIndex >= studies.length * 2)) {
      const centeredIndex = middleOffset + logicalIndex;

      isRecenteringRef.current = true;
      activeVirtualIndexRef.current = centeredIndex;

      window.requestAnimationFrame(() => {
        scrollToVirtualIndex(centeredIndex, "auto");
        isRecenteringRef.current = false;
      });
    }
  }

  function handleManualStep(index: number) {
    setPaused(true);
    scrollToVirtualIndex(index);
    setPaused(false, 3500);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false, 1200)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false, 1200)}
    >
      <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-2 sm:grid-cols-[3rem_minmax(0,1fr)_3rem] sm:gap-4">
        <button
          type="button"
          onClick={() => handleManualStep(activeVirtualIndexRef.current - 1)}
          aria-label="Previous case study"
          className="surface-soft inline-flex h-11 w-11 items-center justify-center rounded-full text-main transition hover:border-orange-200/40 hover:bg-white/10 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false, 3500)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false, 3500)}
          className="case-carousel-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden py-2 sm:gap-5"
        >
          {track.map((study, index) => (
            <div
              key={`${study.slug}-${index}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="flex min-w-0 shrink-0 basis-full snap-start sm:basis-[calc((100%_-_1.25rem)/2)] lg:basis-[calc((100%_-_2.5rem)/3)]"
            >
              <CaseStudyCard caseStudy={study} compact />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleManualStep(activeVirtualIndexRef.current + 1)}
          aria-label="Next case study"
          className="surface-soft inline-flex h-11 w-11 items-center justify-center rounded-full text-main transition hover:border-orange-200/40 hover:bg-white/10 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {studies.map((study, index) => (
          <button
            key={study.slug}
            type="button"
            onClick={() => handleManualStep(middleOffset + index)}
            aria-label={`Go to ${study.title}`}
            className={`h-2.5 rounded-full transition ${
              index === activeIndex
                ? "w-8 bg-[var(--color-orange-strong)]"
                : "w-2.5 bg-white/20 hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
